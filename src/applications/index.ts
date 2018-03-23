import * as check from 'check-types';
import { IResourceContext } from '../utils/ResourceContext';
import { pageToGenerator } from './../utils/pageToGenerator';

const ENDPT = 'apps';

/**
 * Applications resource
 */
export class ApplicationsResource {
    private context: IResourceContext;

    /**
     * Construct the Applications resource
     * @param context The context to make requests as
     */
    constructor(context: IResourceContext) {
        this.context = context;
    }

    /**
     * Create an application
     * @param object event object
     * @param userOpts option overrides for this request
     * @returns An iterator that returns promises that resolve with the next object
     */
    public create(object, userOpts?) {
        check.object(object, 'object must be an object');

        return this.context.http.makeRequest({
            method: 'POST',
            body: object,
            url: `/v1/${ENDPT}`
        }, userOpts);
    }

    /**
     * Update an application
     * @param id ID of the application to be updated
     * @param {object[]} updates JSON patch updates
     * @param userOpts option overrides for this request
     * @returns Promise that resolves to the updated application
     */
    public update(id: string, updates, userOpts?) {
        check.string(id, 'id must be a string');
        check.array(updates, 'updates must be an array');

        return this.context.http.makeRequest({
            method: 'PATCH',
            body: updates,
            url: `/v1/${ENDPT}/${id}`
        }, userOpts);
    }

    /**
     * Delete an application
     * @param id ID of the application to be updated
     * @param userOpts option overrides for this request
     * @returns Returns a promise
     */
    public remove(id: string, userOpts?) {
        check.string(id, 'id must be a string');

        return this.context.http.makeRequest({
            method: 'DELETE',
            url: `/v1/${ENDPT}/${id}`
        }, userOpts);
    }

    /**
     * Retrieve application by ID
     * @param id ID of the application to retrieve
     * @param userOpts option overrides for this request
     * @returns Promise that resolves with the retrieved application
     */
    public get(id: string, userOpts?) {
        check.string(id, 'id must be a string');

        return this.context.http.makeRequest({
            url: `/v1/${ENDPT}/${id}`
        }, userOpts);
    }

    /**
     * Retrieve all objects, returned as an array
     * @param userOpts option overrides for this request
     * @returns Promise that resolves to an array of objects
     */
    public getAll(userOpts?) {
        let array = [];
        let url = `/v1/${ENDPT}`;

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
     * Retrieve all applications
     * @param userOpts option overrides for this request
     * @return An iterator that returns promises that resolve with the next object
     */
    public *getIterator(userOpts?) {
        const pageFn = () => {
            let url = `/v1/${ENDPT}`;
            return () => {
                return this.context.http.makeRequest({ url }, userOpts).then(function(body) {
                    url = body.pages.next;
                    return body;
                });
            };
        };

        yield *pageToGenerator(pageFn());
    }
}
