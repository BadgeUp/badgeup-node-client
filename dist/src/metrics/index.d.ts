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
export declare function metricsResource(context: IResourceContext): {
    getAll: <T>(userOpts?: any) => Promise<T[]>;
    getIterator: <T>(userOpts?: any) => IterableIterator<Promise<T[]>>;
    create: <T>(object: any, userOpts?: any) => Promise<T>;
    getAllSubjectMetrics: (subject: string, userOpts?: any) => any;
    getSubjectMetricsIterator: (subject: string, userOpts?: any) => IterableIterator<Promise<{}>>;
    getIndividualSubjectMetric: (subject: string, key: string, userOpts?: any) => Promise<any>;
    query: () => MetricQueryBuilder;
};
