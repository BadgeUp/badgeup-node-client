import { IResourceContext } from '../utils/ResourceContext';
import { IAchievementResponse } from './Achievement.class';
/**
 * Achievements resource
 */
export declare class AchievementsResource {
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
    get(id: string, userOpts?: any): Promise<IAchievementResponse>;
    /**
     * Retrieve all achievements, returned as an iterator
     * @param userOpts option overrides for this request
     * @return An iterator that returns promises that resolve with the next achievement
     */
    getIterator(userOpts?: any): IterableIterator<Promise<IAchievementResponse>>;
    /**
     * Retrieve all achievements, returned as an array
     * @param userOpts option overrides for this request
     * @returns Promise that resolves to an array of objects
     */
    getAll(userOpts?: any): Promise<IAchievementResponse[]>;
    /**
     * Updates an achievement by ID
     * @param id ID of the achievement to be updated
     * @param updates JSON patch updates
     * @param userOpts option overrides for this request
     * @returns A promise that resolves to the updated object
     */
    update(id: string, updates: any[], userOpts?: any): Promise<IAchievementResponse>;
    /**
     * Create an achievement
     * @param achievement Sub-resource to achievement to create
     * @param userOpts option overrides for this request
     * @returns A promise that resolves to the provided achievement
     */
    create(achievement: any, userOpts?: any): Promise<IAchievementResponse>;
    /**
     * Delete an achievement by ID
     * @param id ID of the achievement to delete
     * @param userOpts option overrides for this request
     * @returns A promise that resolves to the deleted achievement
     */
    remove(id: string, userOpts?: any): Promise<IAchievementResponse>;
    /**
     * Retrieves a list of criteria
     * @param id ID of the achievement to retrieve criteria for
     * @param userOpts option overrides for this request
     * @returns Promise that resolves with the list of criteria
     */
    getAchievementCriteria(id: string, userOpts?: any): Promise<any>;
    /**
     * Retrieves a list of awards
     * @param id ID of the achievement to retrieve criteria for
     * @param userOpts option overrides for this request
     * @returns Promise that resolves with the list of awards
     */
    getAchievementAwards(id: string, userOpts?: any): Promise<any>;
}
