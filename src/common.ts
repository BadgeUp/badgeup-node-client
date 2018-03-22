'use strict';

import * as check from 'check-types';
import * as qs from 'qs';
import { pageToGenerator } from './utils/pageToGenerator';
import { IResourceContext } from './utils/ResourceContext';

/**
 * Provides a set of common funcitonality that can be used on most endpoints
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 * @param {string} endpoint The endpoint used for this common module
 */
export class Common<T> {
    protected context: IResourceContext;
    private endpoint: string;

    constructor(context: IResourceContext, endpoint: string) {
        this.context = context;
        this.endpoint = endpoint;
    }

    /**
     * Retrieve resource object by ID
     * @param {string} id ID of the object to retrieve
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves with the retrieved object
     */
    get(id: string, userOpts?): Promise<T> {
        check.string(id, 'id must be a string');

        const query = qs.stringify((userOpts || {}).query, { addQueryPrefix: true });

        return this.context.http.makeRequest({
            url: `/v1/apps/${this.context.applicationId}/${this.endpoint}/${id}${query}`
        }, userOpts);
    }

    /**
     * Retrieve all objects, returned as an iterator
     * @param {Object} userOpts option overrides for this request
     * @return An iterator that returns promises that resolve with the next object
     */
    *getIterator(userOpts?): IterableIterator<Promise<T>> {
        const query = qs.stringify((userOpts || {}).query, { addQueryPrefix: true });
        let url = `/v1/apps/${this.context.applicationId}/${this.endpoint}${query}`;
        const pageFn = () => {
            return this.context.http.makeRequest({ url }, userOpts).then(function(body) {
                url = body.pages.next;
                return body;
            });
        };

        yield* pageToGenerator(pageFn);
    }

    /**
     * Retrieve all objects, returned as an array
     * @param {Object} userOpts option overrides for this request
     * @returns {Promise<object[]>} Promise that resolves to an array of objects
     */
    getAll(userOpts?): Promise<T[]> {
        let array = [];
        const query = qs.stringify((userOpts || {}).query, { addQueryPrefix: true });
        let url = `/v1/apps/${this.context.applicationId}/${this.endpoint}${query}`;

        const pageFn = () => {
            return this.context.http.makeRequest({ url }, userOpts).then(function(body) {
                array = array.concat(body.data || []); // concatinate the new data

                url = body.pages.next;
                if (url) {
                    return pageFn();
                } else {
                    return array;
                }
            });
        };

        return pageFn();
    }

    /**
     * Updates a resource by ID
     * @param {string} id ID of the object to be updated
     * @param {Array<object>} updates JSON patch updates
     * @param {Object} userOpts option overrides for this request
     * @returns {Promise<Object>} A promise that resolves to the updated object
     */
    update(id: string, updates: any[], userOpts?): Promise<T> {
        check.string(id, 'id must be a string');
        check.array(updates, 'updates must be an array');

        const query = qs.stringify((userOpts || {}).query, { addQueryPrefix: true });

        return this.context.http.makeRequest({
            method: 'PATCH',
            body: updates,
            url: `/v1/apps/${this.context.applicationId}/${this.endpoint}/${id}${query}`
        }, userOpts);
    }

    /**
     * Create an object
     * @param {Object} object Sub-resource to object to create
     * @param {Object} userOpts option overrides for this request
     * @returns {Promise<Object>} A promise that resolves to the provided object
     */
    create(object: any, userOpts?): Promise<T> {
        check.object(object, 'object must be an object');

        const query = qs.stringify((userOpts || {}).query, { addQueryPrefix: true });

        return this.context.http.makeRequest({
            method: 'POST',
            body: object,
            url: `/v1/apps/${this.context.applicationId}/${this.endpoint}${query}`
        }, userOpts);
    }

    /**
     * Delete an object by ID
     * @param {string} id ID of the object to delete
     * @param {Object} userOpts option overrides for this request
     * @returns {Promise<Object>} A promise that resolves to the deleted object
     */
    remove(id: string, userOpts?): Promise<T> {
        check.string(id, 'id must be a string');

        const query = qs.stringify((userOpts || {}).query, { addQueryPrefix: true });

        return this.context.http.makeRequest({
            method: 'DELETE',
            url: `/v1/apps/${this.context.applicationId}/${this.endpoint}/${id}${query}`
        }, userOpts);
    }
}
