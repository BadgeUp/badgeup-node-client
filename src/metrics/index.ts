import * as check from 'check-types';
import * as querystring from 'querystring';
import { Common } from '../common';
import { collectQueryParams } from '../utils/collectQueryParams';
import { pageToGenerator } from '../utils/pageToGenerator';
import { IQueryParameters } from '../utils/QueryBuilder';
import { IResourceContext } from '../utils/ResourceContext';
import { IMetricRequest, IMetricResponse } from './Metric.class';

const ENDPT = 'metrics';

const DELETE_QUERY_PARAMS = ['key', 'subject'];

export class MetricQueryBuilder {
    context: IResourceContext;

    // container for the query parameters
    private _params: IQueryParameters = {};

    /**
     * Construct the metrics resource
     * @param context The context to make requests as
     */
    constructor(context: IResourceContext) {
        this.context = context;
    }

    /**
     * Query by key
     * @param key
     */
    key(key: string) {
        check.string(key, 'key must be a string');
        this._params.key = key;
        return this;
    }

    /**
     * Query by subject
     * @param subject
     */
    subject(subject: string) {
        check.string(subject, 'subject must be a string');
        this._params.subject = subject;
        return this;
    }

    /**
     * Deletes all queried metrics
     * @param userOpts option overrides for this request
     * @returns Promise that resolves to an object stating the number of deleted metrics
     */
    remove(userOpts?: any) {
        const queryBy = collectQueryParams(this._params, DELETE_QUERY_PARAMS);

        if (Object.keys(queryBy).length === 0) {
            throw new Error('You must specify at least the "subject" or "key"');
        }

        return this.context.http.makeRequest({
            method: 'DELETE',
            url: `/v1/apps/${this.context.applicationId}/${ENDPT}?${querystring.stringify(queryBy)}`
        }, userOpts);
    }
}

/**
 * Metrics module
 * @param {IResourceContext} context The context to make requests as
 */
export class MetricsResource {
    private common: Common<IMetricResponse>;
    private context: IResourceContext;


    constructor(context: IResourceContext) {
        this.common = new Common(context, ENDPT);
        this.context = context;
    }

    // TODO: comments missing for some methods
    public getAll(userOpts?): Promise<IMetricResponse[]> {
        return this.common.getAll(userOpts);
    }
    getIterator(userOpts?): IterableIterator<Promise<IMetricResponse>> {
        return this.common.getIterator(userOpts);
    }
    public create(object: IMetricRequest, userOpts?): Promise<IMetricResponse> {
        return this.common.create(object, userOpts);
    }

    /**
     * Retrives metrics for a subject, returned as an array
     * @param subject subject to retrieve the metrics for
     * @param userOpts option overrides for this request
     * @returns Promise that resolves to a list of metrics
     */
    public getAllSubjectMetrics(subject: string, userOpts?: any): Promise<IMetricResponse[]> {
        check.string(subject, 'subject must be a string');

        let array = [];
        let url = `/v1/apps/${this.context.applicationId}/${ENDPT}/${subject}`;

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
     * Retrives metrics for a subject, returned as an iterator
     * @param subject subject to retrieve the metrics for
     * @param userOpts option overrides for this request
     * @return An iterator that returns promises that resolve with the next object
     */
    public *getSubjectMetricsIterator(subject: string, userOpts?: any): IterableIterator<Promise<IMetricResponse>> {
        check.string(subject, 'subject must be a string');

        const pageFn = () => {
            let url = `/v1/apps/${this.context.applicationId}/${ENDPT}/${subject}`;
            return () => {
                return this.context.http.makeRequest({ url }, userOpts).then(function(body) {
                    url = body.pages.next;
                    return body;
                });
            };
        };

        yield* pageToGenerator<IMetricResponse>(pageFn());
    }

    /**
     * Retrieves a single metric for a subject by key
     * @param subject subject to retrieve the metric for
     * @param key metric key to retrive the metric for
     * @param userOpts option overrides for this request
     * @returns Promise that resolves to a single metric
     */
    public getIndividualSubjectMetric(subject: string, key: string, userOpts?: any): Promise<IMetricResponse> {
        check.string(subject, 'subject must be a string');
        check.string(key, 'key must be a string');

        return this.context.http.makeRequest({
            url: `/v1/apps/${this.context.applicationId}/${ENDPT}/${subject}/${key}`
        }, userOpts);
    }

    /**
     * Sets up a delete/get request targeting metrics using query filters
     * @returns Returns an instance of the EventQueryBuilder class
     */
    public query(): MetricQueryBuilder {
        return new MetricQueryBuilder(this.context);
    }

}
