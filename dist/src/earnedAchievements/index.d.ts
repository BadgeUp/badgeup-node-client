import { IResourceContext } from '../utils/ResourceContext';
import { IEarnedAchievementResponse } from './EarnedAchievement.class';
export declare class EarnedAchievementQueryBuilder {
    context: IResourceContext;
    private params;
    constructor(context: IResourceContext);
    /**
     * Query by achievement ID
     * @param achievementId
     */
    achievementId(achievementId: string): this;
    /**
     * Query by subject
     * @param subject
     */
    subject(subject: any): this;
    /**
     * Query by starting date (find after)
     * @param {Date} since
     */
    since(since: any): this;
    /**
     * Query by ending date (find before)
     * @param {Date} until
     */
    until(until: any): this;
    /**
     * Checks and builds query parameters for use in a URL
     * @returns Returns a string containing URL query paramters
     */
    private buildQuery(queryBy);
    /**
     * Retrives earned achievements, returned as an array
     * @param userOpts option overrides for this request
     * @returns Promise that resolves to a list of metrics
     */
    getAll(userOpts: any): any;
    /**
     * Retrives earned achievements, returned as an iterator
     * @param userOpts option overrides for this request
     * @return An iterator that returns promises that resolve with the next object
     */
    getIterator(userOpts: any): IterableIterator<Promise<{}>>;
    /**
     * Delete all queried earned achievements
     * @param userOpts option overrides for this request
     * @returns Promise that resolves to an object stating the number of deleted metrics
     */
    remove(userOpts: any): Promise<any>;
}
/**
 * Earned Achievements resource
 */
export declare class EarnedAchievementsResource {
    private common;
    private context;
    /**
     * Construct the achievements resource
     * @param context The context to make requests as
     */
    constructor(context: IResourceContext);
    /**
     * Retrieve an achievement by ID
     * @param id ID of the achievement to retrieve
     * @param userOpts option overrides for this request
     * @returns Promise that resolves with the retrieved achievement
     */
    get(id: string, userOpts?: any): Promise<IEarnedAchievementResponse>;
    /**
     * Retrieve all earned achievements, returned as an iterator
     * @param userOpts option overrides for this request
     * @return An iterator that returns promises that resolve with the next achievement
     */
    getIterator(userOpts?: any): IterableIterator<Promise<IEarnedAchievementResponse>>;
    /**
     * Retrieve all earned achievements, returned as an array
     * @param userOpts option overrides for this request
     * @returns Promise that resolves to an array of objects
     */
    getAll(userOpts?: any): Promise<IEarnedAchievementResponse[]>;
    /**
     * Delete an earned achievement by ID
     * @param id ID of the achievement to delete
     * @param userOpts option overrides for this request
     * @returns A promise that resolves to the deleted achievement
     */
    remove(id: string, userOpts?: any): Promise<IEarnedAchievementResponse>;
    /**
     * Sets up a delete request targeting earned achievements using query filters
     * @param queryBy filters to query events by
     * @returns Returns an instance of the EarnedAchievementQueryBuilder class
     */
    query(): EarnedAchievementQueryBuilder;
}
