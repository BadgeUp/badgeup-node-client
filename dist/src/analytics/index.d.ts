import { IResourceContext } from '../utils/ResourceContext';
/**
 * Analytics module
 * USE OF THE ANALTYICS MODULE IS NOT RECOMMENDED (AT THIS TIME)
 * THIS MODULE IS NOT SUBJECT TO ANY SLAS AND MAY BE CHANGED AT ANY TIME
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export declare class AnalyticsResource {
    private context;
    constructor(context: IResourceContext);
    /**
     * Retrieve event analytics
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves with the retrieved object
     */
    eventsLastNDays(numDays: number, userOpts?: any): Promise<any>;
    /**
     * Retrieve event analytics for a single subject
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves with the retrieved object
     */
    eventsLastNDaysBySubject(numDays: number, subject: any, userOpts?: any): Promise<any>;
    /**
     * Retrieve subject analytics
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves with the retrieved object
     */
    subjectsLastNDays(numDays: number, userOpts?: any): Promise<any>;
    /**
     * Retrieve new subject analytics
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves with the retrieved object
     */
    newSubjectsLastNDays(numDays: number, userOpts?: any): Promise<any>;
    /**
     * Retrieve earned achievement analytics
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves with the retrieved object
     */
    earnedAchievementsLastNDays(numDays: number, userOpts?: any): Promise<any>;
    /**
     * Retrieve subject summary list
     * @param {object} userOpts option overrides for this request
     * @return An iterator that returns promises that resolve with the next object
     */
    getSubjectsSummaryIterator(userOpts?: any): IterableIterator<Promise<{}>>;
    /**
     * Retrieve a list of unique metric keys
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves with an array of retrieved metric keys
     */
    getAllMetricKeys(userOpts?: any): Promise<any>;
}
