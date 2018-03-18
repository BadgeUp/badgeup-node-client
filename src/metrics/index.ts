import * as check from 'check-types';
import * as querystring from 'querystring';
import { common } from '../common';
import { collectQueryParams } from '../utils/collectQueryParams';
import { pageToGenerator } from '../utils/pageToGenerator';
import { IQueryParameters } from '../utils/QueryBuilder';
import { IResourceContext } from '../utils/ResourceContext';

const ENDPT = 'metrics';

const DELETE_QUERY_PARAMS = ['key', 'subject'];

export class MetricQueryBuilder {
    context: IResourceContext;

    // container for the query parameters
    private _params: IQueryParameters = {};

    constructor(context: IResourceContext) {
        this.context = context;
    }

    /**
     * Query by key
     * @param {string} key
     */
    key(key: string) {
        check.string(key, 'key must be a string');
        this._params.key = key;
        return this;
    }

    /**
     * Query by subject
     * @param {string} subject
     */
    subject(subject: string) {
        check.string(subject, 'subject must be a string');
        this._params.subject = subject;
        return this;
    }

    /**
     * Deletes all queried metrics
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves to an object stating the number of deleted metrics
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
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export function metricsResource(context: IResourceContext) {
    const obj = common(context, ENDPT);

    /**
     * Retrives metrics for a subject, returned as an array
     * @param {string} subject subject to retrieve the metrics for
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object[]>} Promise that resolves to a list of metrics
     */
    function getAllSubjectMetrics(subject: string, userOpts?: any) {
        check.string(subject, 'subject must be a string');

        let array = [];
        let url = `/v1/apps/${context.applicationId}/${ENDPT}/${subject}`;

        function pageFn() {
            return context.http.makeRequest({ url }, userOpts).then(function(body) {
                array = array.concat(body.data || []); // concatinate the new data

                url = body.pages.next;
                if (url) {
                    return pageFn();
                } else {
                    return array;
                }
            });
        }

        return pageFn();
    }

    /**
     * Retrives metrics for a subject, returned as an iterator
     * @param {string} subject subject to retrieve the metrics for
     * @param userOpts option overrides for this request
     * @return An iterator that returns promises that resolve with the next object
     */
    function* getSubjectMetricsIterator(subject: string, userOpts?: any) {
        check.string(subject, 'subject must be a string');

        function pageFn() {
            let url = `/v1/apps/${context.applicationId}/${ENDPT}/${subject}`;
            return function() {
                return context.http.makeRequest({ url }, userOpts).then(function(body) {
                    url = body.pages.next;
                    return body;
                });
            };
        }

        yield* pageToGenerator(pageFn());
    }

    /**
     * Retrieves a single metric for a subject by key
     * @param {string} subject subject to retrieve the metric for
     * @param {string} key metric key to retrive the metric for
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves to a single metric
     */
    function getIndividualSubjectMetric(subject: string, key: string, userOpts?: any) {
        check.string(subject, 'subject must be a string');
        check.string(key, 'key must be a string');

        return context.http.makeRequest({
            url: `/v1/apps/${context.applicationId}/${ENDPT}/${subject}/${key}`
        }, userOpts);
    }

    /**
     * Sets up a delete/get request targeting metrics using query filters
     * @returns Returns an instance of the EventQueryBuilder class
     */
    function query() {
        return new MetricQueryBuilder(context);
    }

    return {
        getAll: obj.getAll,
        getIterator: obj.getIterator,
        create: obj.create,
        getAllSubjectMetrics,
        getSubjectMetricsIterator,
        getIndividualSubjectMetric,  // TODO: consider aliasing to "get"
        query
    };
}