import { IResourceContext } from '../utils/ResourceContext';
import { IBadgeUpApplication } from './Application.class';
/**
 * Applications resource
 */
export declare class ApplicationsResource {
    private context;
    /**
     * Construct the Applications resource
     * @param context The context to make requests as
     */
    constructor(context: IResourceContext);
    /**
     * Create an application
     * @param object application object
     * @param userOpts option overrides for this request
     * @returns A promise that resolves to the provided application
     */
    create(object: any, userOpts?: any): Promise<IBadgeUpApplication>;
    /**
     * Update an application
     * @param id ID of the application to be updated
     * @param {object[]} updates JSON patch updates
     * @param userOpts option overrides for this request
     * @returns Promise that resolves to the updated application
     */
    update(id: string, updates: any, userOpts?: any): Promise<IBadgeUpApplication>;
    /**
     * Delete an application
     * @param id ID of the application to be updated
     * @param userOpts option overrides for this request
     * @returns A promise that resolves to the deleted application
     */
    remove(id: string, userOpts?: any): Promise<IBadgeUpApplication>;
    /**
     * Retrieve application by ID
     * @param id ID of the application to retrieve
     * @param userOpts option overrides for this request
     * @returns Promise that resolves with the retrieved application
     */
    get(id: string, userOpts?: any): Promise<IBadgeUpApplication>;
    /**
     * Retrieve all objects, returned as an array
     * @param userOpts option overrides for this request
     * @returns Promise that resolves to an array of objects
     */
    getAll(userOpts?: any): Promise<IBadgeUpApplication[]>;
    /**
     * Retrieve all applications
     * @param userOpts option overrides for this request
     * @return An iterator that returns promises that resolve with the next object
     */
    getIterator(userOpts?: any): IterableIterator<Promise<IBadgeUpApplication>>;
}
