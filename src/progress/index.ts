import * as check from 'check-types';
import * as querystring from 'querystring';
import { collectQueryParams } from '../utils/collectQueryParams';
import { IQueryParameters } from '../utils/QueryBuilder';
import { IResourceContext } from '../utils/ResourceContext';
import { pageToGenerator } from './../utils/pageToGenerator';
import { IProgress } from './Progress.class';

const ENDPT = 'progress';
const GET_QUERYPARAMS = ['subject', 'achievementId'];

export class ProgressQueryBuilder {

    context: IResourceContext;

    // container for the query parameters
    private params: IQueryParameters = {};

    constructor(context: IResourceContext) {
        this.context = context;
    }

    /**
     * Query by achievement ID
     * @param achievementId
     */
    achievementId(achievementId: string): ProgressQueryBuilder {
        check.string(achievementId, 'achievementId must be a string');
        this.params.achievementId = achievementId;
        return this;
    }

    /**
     * Query by subject
     * @param subject
     */
    subject(subject: string): ProgressQueryBuilder {
        check.string(subject, 'subject must be a string');
        this.params.subject = subject;
        return this;
    }

    /**
     * Retrieve all queried progress objects, returned as an array
     * @param userOpts option overrides for this request
     * @returns Promise that resolves to an array of progress objects
     */
    getAll(userOpts?): Promise<IProgress> {
        if (!this.params.subject) {
            throw new Error('subject must be provided');
        }

        const queryBy = collectQueryParams(this.params, GET_QUERYPARAMS);

        let array = [];
        let url = `/v1/apps/${this.context.applicationId}/${ENDPT}?${querystring.stringify(queryBy)}`;

        const pageFn = () => {
            return this.context.http.makeRequest({ url }, userOpts).then(function(body) {
                array = array.concat(body.data || []); // concatinate the new data

                url = body.pages.next;
                if (url) {
                    return pageFn();
                } else {
                    return array;
                }
            });
        };

        return pageFn();
    }

    /**
     * Retrieve all queried progress objects, returned as an iterator
     * @param userOpts option overrides for this request
     * @return An iterator that returns promises that resolve with the next progress object
     */
    *getIterator(userOpts?): IterableIterator<Promise<IProgress>> {
        if (!this.params.subject) {
            throw new Error('subject must be provided');
        }

        const queryBy = collectQueryParams(this.params, GET_QUERYPARAMS);

        const pageFn = () => {
            let url = `/v1/apps/${this.context.applicationId}/${ENDPT}?${querystring.stringify(queryBy)}`;
            return () => {
                return this.context.http.makeRequest({ url }, userOpts).then(function(body) {
                    url = body.pages.next;
                    return body;
                });
            };
        };

        yield* pageToGenerator<IProgress>(pageFn());
    }
}

/**
 * Progress resource
 */
export class ProgressResource {
    context: IResourceContext;

    /**
     * Construct the Progress resource
     * @param context The context to make requests as
     */
    constructor(context: IResourceContext) {
        this.context = context;
    }

    /**
     * @returns Returns an instance of the ProgressQueryBuilder class
     */
    query(): ProgressQueryBuilder {
        return new ProgressQueryBuilder(this.context);
    }
}
