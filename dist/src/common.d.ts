import { IResourceContext } from './utils/ResourceContext';
/**
 * Provides a set of common funcitonality that can be used on most endpoints
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 * @param {string} endpoint The endpoint used for this common module
 */
export declare class Common<T> {
    protected context: IResourceContext;
    private endpoint;
    constructor(context: IResourceContext, endpoint: string);
    /**
     * Retrieve resource object by ID
     * @param {string} id ID of the object to retrieve
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves with the retrieved object
     */
    get(id: string, userOpts?: any): Promise<T>;
    /**
     * Retrieve all objects, returned as an iterator
     * @param {Object} userOpts option overrides for this request
     * @return An iterator that returns promises that resolve with the next object
     */
    getIterator(userOpts?: any): IterableIterator<Promise<T>>;
    /**
     * Retrieve all objects, returned as an array
     * @param {Object} userOpts option overrides for this request
     * @returns {Promise<object[]>} Promise that resolves to an array of objects
     */
    getAll(userOpts?: any): Promise<T[]>;
    /**
     * Updates a resource by ID
     * @param {string} id ID of the object to be updated
     * @param {Array<object>} updates JSON patch updates
     * @param {Object} userOpts option overrides for this request
     * @returns {Promise<Object>} A promise that resolves to the updated object
     */
    update(id: string, updates: any[], userOpts?: any): Promise<T>;
    /**
     * Create an object
     * @param {Object} object Sub-resource to object to create
     * @param {Object} userOpts option overrides for this request
     * @returns {Promise<Object>} A promise that resolves to the provided object
     */
    create(object: any, userOpts?: any): Promise<T>;
    /**
     * Delete an object by ID
     * @param {string} id ID of the object to delete
     * @param {Object} userOpts option overrides for this request
     * @returns {Promise<Object>} A promise that resolves to the deleted object
     */
    remove(id: string, userOpts?: any): Promise<T>;
}
