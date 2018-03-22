import { Common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';
import { IEarnedAchievementResponse } from './EarnedAchievement.class';
export declare class EarnedAchievementQueryBuilder {
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
     * checks and builds query parameters for use in a URL
     * @returns Returns a string containing URL query paramters
     */
    _buildQuery(queryBy: any): string;
    /**
     * retrives earned achievements, returned as an array
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object[]>} Promise that resolves to a list of metrics
     */
    getAll(userOpts: any): any;
    /**
     * retrives earned achievements, returned as an iterator
     * @param {object} userOpts option overrides for this request
     * @return An iterator that returns promises that resolve with the next object
     */
    getIterator(userOpts: any): IterableIterator<Promise<{}>>;
    /**
     * delete all queried earned achievements
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves to an object stating the number of deleted metrics
     */
    remove(userOpts: any): Promise<any>;
}
/**
 * Earned Achievements module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export declare class EarnedAchievementsResource extends Common<IEarnedAchievementResponse> {
    constructor(context: IResourceContext);
    /**
     * Sets up a delete request targeting earned achievements using query filters
     * @param queryBy: filters to query events by
     * @returns Returns an instance of the EarnedAchievementQueryBuilder class
     */
    query(): EarnedAchievementQueryBuilder;
}
