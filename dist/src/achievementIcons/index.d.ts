import { ResourceContext } from '../utils/ResourceContext';
import { AchievementIcon } from './AchievementIcon.class';
/**
 * Achievement icons resource
 */
export declare class AchievementIconsResource {
    private common;
    private context;
    /**
     * Construct the achievement icons resource
     * @param context The context to make requests as
     */
    constructor(context: ResourceContext);
    /**
     * Get a list of all preloaded achievement icons
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object[]>} A promise that resolves to an array of achievement icon identifiers
     */
    getAllPreloaded(userOpts?: any): Promise<AchievementIcon[]>;
    /**
     * Get a list of all uploaded achievement icons
     * @param userOpts option overrides for this request
     * @returns A promise that resolves to an array of achievement icon identifiers
     */
    getAll(userOpts?: any): Promise<AchievementIcon[]>;
    /**
     * Delete previously uploaded achievement icon by filename.
     * @param iconFileName icon file name (generated by BadgeUp when the icon was uploaded, not the original file name)
     * @param userOpts option overrides for this request
     * @returns A promise that resolves to the deleted achievement icon
     */
    remove(iconFileName: string, userOpts?: any): Promise<AchievementIcon>;
}
