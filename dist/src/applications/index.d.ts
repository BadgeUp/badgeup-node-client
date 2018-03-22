import { IResourceContext } from '../utils/ResourceContext';
/**
 * Applications module
 * @param {IResourceContext} this.context The this.context to make requests in. Basically, `this`
 */
export declare class ApplicationsResource {
    private context;
    constructor(context: IResourceContext);
    /**
     * Create an application
     * @param {object} object event object
     * @param {object} userOpts option overrides for this request
     * @returns An iterator that returns promises that resolve with the next object
     */
    create(object: any, userOpts?: any): Promise<any>;
    /**
     * Update an application
     * @param {string} id ID of the application to be updated
     * @param {object[]} updates JSON patch updates
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves to the updated application
     */
    update(id: string, updates: any, userOpts?: any): Promise<any>;
    /**
     * Delete an application
     * @param {string} id ID of the application to be updated
     * @param {object} userOpts option overrides for this request
     * @returns Returns a promise
     */
    remove(id: string, userOpts?: any): Promise<any>;
    /**
     * Retrieve application by ID
     * @param {string} id ID of the application to retrieve
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves with the retrieved application
     */
    get(id: string, userOpts?: any): Promise<any>;
    /**
     * Retrieve all objects, returned as an array
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object[]>} Promise that resolves to an array of objects
     */
    getAll(userOpts?: any): any;
    /**
     * Retrieve all applications
     * @param {object} userOpts option overrides for this request
     * @return An iterator that returns promises that resolve with the next object
     */
    getIterator(userOpts?: any): IterableIterator<Promise<{}>>;
}
