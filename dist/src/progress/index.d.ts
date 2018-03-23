import { IResourceContext } from '../utils/ResourceContext';
import { IProgress } from './Progress.class';
export declare class ProgressQueryBuilder {
    context: IResourceContext;
    private params;
    constructor(context: IResourceContext);
    /**
     * Query by achievement ID
     * @param achievementId
     */
    achievementId(achievementId: string): ProgressQueryBuilder;
    /**
     * Query by subject
     * @param subject
     */
    subject(subject: string): ProgressQueryBuilder;
    /**
     * Retrieve all queried progress objects, returned as an array
     * @param userOpts option overrides for this request
     * @returns Promise that resolves to an array of progress objects
     */
    getAll(userOpts?: any): Promise<IProgress>;
    /**
     * Retrieve all queried progress objects, returned as an iterator
     * @param userOpts option overrides for this request
     * @return An iterator that returns promises that resolve with the next progress object
     */
    getIterator(userOpts?: any): IterableIterator<Promise<IProgress>>;
}
/**
 * Progress resource
 */
export declare class ProgressResource {
    context: IResourceContext;
    /**
     * Construct the Progress resource
     * @param context The context to make requests as
     */
    constructor(context: IResourceContext);
    /**
     * @returns Returns an instance of the ProgressQueryBuilder class
     */
    query(): ProgressQueryBuilder;
}
