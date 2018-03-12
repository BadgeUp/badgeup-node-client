import { pageToGenerator } from './utils/pageToGenerator';
import { ResourceContext } from "./utils/ResourceContext";
import * as check from 'check-types';
import * as qs from 'qs';

/**
 * Provides a set of common funcitonality that can be used on most endpoints
 * @param {ResourceContext} context The context to make requests in. Basically, `this`
 * @param {string} endpoint The endpoint used for this common module
 */
export function common(context: ResourceContext, endpoint: string) {

    /**
     * Retrieve resource object by ID
     * @param {string} id ID of the object to retrieve
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves with the retrieved object
     */
    function get<T>(id: string, userOpts) : Promise<T> {
        check.string(id, 'id must be a string');

        const query = qs.stringify((userOpts || {}).query, { addQueryPrefix: true });

        return context.http.makeRequest({
            url: `/v1/apps/${context.applicationId}/${endpoint}/${id}${query}`
        }, userOpts);
    }

    /**
     * Retrieve all objects, returned as an iterator
     * @param {Object} userOpts option overrides for this request
     * @return An iterator that returns promises that resolve with the next object
     */
    function* getIterator(userOpts) {
        function pageFn() {
            const query = qs.stringify((userOpts || {}).query, { addQueryPrefix: true });
            let url = `/v1/apps/${context.applicationId}/${endpoint}${query}`;
            return function() {
                return context.http.makeRequest({ url }, userOpts).then(function(body) {
                    url = body.pages.next;
                    return body;
                });
            };
        }

        yield* pageToGenerator(pageFn());
    }

    /**
     * Retrieve all objects, returned as an array
     * @param {Object} userOpts option overrides for this request
     * @returns {Promise<object[]>} Promise that resolves to an array of objects
     */
    function getAll<T>(userOpts) : Promise<T[]> {
        let array = [];
        const query = qs.stringify((userOpts || {}).query, { addQueryPrefix: true });
        let url = `/v1/apps/${context.applicationId}/${endpoint}${query}`;

        function pageFn() {
            return context.http.makeRequest({ url }, userOpts).then(function(body) {
                array = array.concat(body.data || []); // concatinate the new data

                url = body.pages.next;
                if (url) {
                    return pageFn();
                } else {
                    return array;
                }
            });
        }

        return pageFn();
    }

    /**
     * Updates a resource by ID
     * @param {string} id ID of the object to be updated
     * @param {Array<object>} updates JSON patch updates
     * @param {Object} userOpts option overrides for this request
     * @returns {Promise<Object>} A promise that resolves to the updated object
     */
    function update(id, updates, userOpts) {
        check.string(id, 'id must be a string');
        check.array(updates, 'updates must be an array');

        const query = qs.stringify((userOpts || {}).query, { addQueryPrefix: true });

        return context.http.makeRequest({
            method: 'PATCH',
            body: updates,
            url: `/v1/apps/${context.applicationId}/${endpoint}/${id}${query}`
        }, userOpts);
    }

    /**
     * Create an object
     * @param {Object} object Sub-resource to object to create
     * @param {Object} userOpts option overrides for this request
     * @returns {Promise<Object>} A promise that resolves to the provided object
     */
    function create<T>(object:T, userOpts) : Promise<T> {
        check.object(object, 'object must be an object');

        const query = qs.stringify((userOpts || {}).query, { addQueryPrefix: true });

        return context.http.makeRequest({
            method: 'POST',
            body: object,
            url: `/v1/apps/${context.applicationId}/${endpoint}${query}`
        }, userOpts);
    }

    /**
     * Delete an object by ID
     * @param {string} id ID of the object to delete
     * @param {Object} userOpts option overrides for this request
     * @returns {Promise<Object>} A promise that resolves to the deleted object
     */
    function remove(id, userOpts) {
        check.string(id, 'id must be a string');

        const query = qs.stringify((userOpts || {}).query, { addQueryPrefix: true });

        return context.http.makeRequest({
            method: 'DELETE',
            url: `/v1/apps/${context.applicationId}/${endpoint}/${id}${query}`
        }, userOpts);
    }

    return {
        get: get,
        getIterator,
        getAll,
        create,
        update,
        remove
    };
}