import { IResourceContext } from '../utils/ResourceContext';
export declare class ProgressQueryBuilder {
    context: IResourceContext;
    private _params;
    constructor(context: IResourceContext);
    /**
     * Query by achievement ID
     * @param {string} achievementId
     */
    achievementId(achievementId: string): this;
    /**
     * Query by subject
     * @param {string} subject
     */
    subject(subject: string): this;
    /**
     * Retrieve all queried progress objects, returned as an array
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object[]>} Promise that resolves to an array of progress objects
     */
    getAll(userOpts?: any): any;
    /**
     * Retrieve all queried progress objects, returned as an iterator
     * @param {object} userOpts option overrides for this request
     * @return An iterator that returns promises that resolve with the next progress object
     */
    getIterator(userOpts?: any): IterableIterator<Promise<{}>>;
}
export declare class ProgressResource {
    context: IResourceContext;
    constructor(context: IResourceContext);
    /**
     * @returns Returns an instance of the ProgressQueryBuilder class
     */
    query(): ProgressQueryBuilder;
}
