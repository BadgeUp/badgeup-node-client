import { IResourceContext } from '../utils/ResourceContext';
export declare class MetricQueryBuilder {
    context: IResourceContext;
    private _params;
    constructor(context: IResourceContext);
    /**
     * Query by key
     * @param {string} key
     */
    key(key: string): this;
    /**
     * Query by subject
     * @param {string} subject
     */
    subject(subject: string): this;
    /**
     * Deletes all queried metrics
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves to an object stating the number of deleted metrics
     */
    remove(userOpts?: any): Promise<any>;
}
/**
 * Metrics module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export declare class MetricsResource {
    private common;
    private context;
    constructor(context: IResourceContext);
    getAll(userOpts?: any): Promise<any[]>;
    getIterator(userOpts?: any): IterableIterator<Promise<any>>;
    create(object: any, userOpts?: any): Promise<any>;
    /**
     * Retrives metrics for a subject, returned as an array
     * @param {string} subject subject to retrieve the metrics for
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object[]>} Promise that resolves to a list of metrics
     */
    getAllSubjectMetrics(subject: string, userOpts?: any): any;
    /**
     * Retrives metrics for a subject, returned as an iterator
     * @param {string} subject subject to retrieve the metrics for
     * @param userOpts option overrides for this request
     * @return An iterator that returns promises that resolve with the next object
     */
    getSubjectMetricsIterator(subject: string, userOpts?: any): IterableIterator<Promise<{}>>;
    /**
     * Retrieves a single metric for a subject by key
     * @param {string} subject subject to retrieve the metric for
     * @param {string} key metric key to retrive the metric for
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves to a single metric
     */
    getIndividualSubjectMetric(subject: string, key: string, userOpts?: any): Promise<any>;
    /**
     * Sets up a delete/get request targeting metrics using query filters
     * @returns Returns an instance of the EventQueryBuilder class
     */
    query(): MetricQueryBuilder;
}
