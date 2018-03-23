import { IResourceContext } from '../utils/ResourceContext';
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
     * @param object event object
     * @param userOpts option overrides for this request
     * @returns An iterator that returns promises that resolve with the next object
     */
    create(object: any, userOpts?: any): Promise<any>;
    /**
     * Update an application
     * @param id ID of the application to be updated
     * @param {object[]} updates JSON patch updates
     * @param userOpts option overrides for this request
     * @returns Promise that resolves to the updated application
     */
    update(id: string, updates: any, userOpts?: any): Promise<any>;
    /**
     * Delete an application
     * @param id ID of the application to be updated
     * @param userOpts option overrides for this request
     * @returns Returns a promise
     */
    remove(id: string, userOpts?: any): Promise<any>;
    /**
     * Retrieve application by ID
     * @param id ID of the application to retrieve
     * @param userOpts option overrides for this request
     * @returns Promise that resolves with the retrieved application
     */
    get(id: string, userOpts?: any): Promise<any>;
    /**
     * Retrieve all objects, returned as an array
     * @param userOpts option overrides for this request
     * @returns Promise that resolves to an array of objects
     */
    getAll(userOpts?: any): any;
    /**
     * Retrieve all applications
     * @param userOpts option overrides for this request
     * @return An iterator that returns promises that resolve with the next object
     */
    getIterator(userOpts?: any): IterableIterator<Promise<{}>>;
}
