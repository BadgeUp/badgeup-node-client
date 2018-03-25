import { IResourceContext } from '../utils/ResourceContext';
import { IMetric, IMetricRequest } from './Metric.class';
export declare class MetricQueryBuilder {
    context: IResourceContext;
    private _params;
    /**
     * Construct the metrics resource
     * @param context The context to make requests as
     */
    constructor(context: IResourceContext);
    /**
     * Query by key
     * @param key
     */
    key(key: string): this;
    /**
     * Query by subject
     * @param subject
     */
    subject(subject: string): this;
    /**
     * Deletes all queried metrics
     * @param userOpts option overrides for this request
     * @returns Promise that resolves to an object stating the number of deleted metrics
     */
    remove(userOpts?: any): Promise<any>;
}
/**
 * Metrics module
 * @param {IResourceContext} context The context to make requests as
 */
export declare class MetricsResource {
    private common;
    private context;
    constructor(context: IResourceContext);
    getAll(userOpts?: any): Promise<IMetric[]>;
    getIterator(userOpts?: any): IterableIterator<Promise<IMetric>>;
    create(object: IMetricRequest, userOpts?: any): Promise<IMetric>;
    /**
     * Retrives metrics for a subject, returned as an array
     * @param subject subject to retrieve the metrics for
     * @param userOpts option overrides for this request
     * @returns Promise that resolves to a list of metrics
     */
    getAllSubjectMetrics(subject: string, userOpts?: any): Promise<IMetric[]>;
    /**
     * Retrives metrics for a subject, returned as an iterator
     * @param subject subject to retrieve the metrics for
     * @param userOpts option overrides for this request
     * @return An iterator that returns promises that resolve with the next object
     */
    getSubjectMetricsIterator(subject: string, userOpts?: any): IterableIterator<Promise<IMetric>>;
    /**
     * Retrieves a single metric for a subject by key
     * @param subject subject to retrieve the metric for
     * @param key metric key to retrive the metric for
     * @param userOpts option overrides for this request
     * @returns Promise that resolves to a single metric
     */
    getIndividualSubjectMetric(subject: string, key: string, userOpts?: any): Promise<IMetric>;
    /**
     * Sets up a delete/get request targeting metrics using query filters
     * @returns Returns an instance of the EventQueryBuilder class
     */
    query(): MetricQueryBuilder;
}
