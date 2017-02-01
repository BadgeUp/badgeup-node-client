'use strict';

const check = require('check-types');
const common = require('./../common');
const difference = require('lodash.difference');
const querystring = require('querystring');
const pageToGenerator = require('../utils/pageToGenerator');
const ENDPT = 'events';

// Events module
// @param context: The context to make requests in. Basically, `this`
module.exports = function events(context) {
    const obj = common(context, ENDPT);

    // Sets up a delete/get request targeting events using several filters
    // @param queryBy: filters to query events by
    // @returns Returns an object with functions to get or delete queried events
    function query(queryBy = {}) {
        check.object(queryBy, 'queryBy must be an object');

        const allowedKeys = ['id', 'key', 'since', 'until', 'subject', 'all'];
        const unallowedKeys = difference(Object.keys(queryBy), allowedKeys);

        if (unallowedKeys.length > 0) {
            throw new Error('Unallowed keys: ' + unallowedKeys);
        }

        // convert dates
        if (check.date(queryBy.since)) {
            queryBy.since = queryBy.since.toISOString();
        }

        if (check.date(queryBy.until)) {
            queryBy.until = queryBy.until.toISOString();
        }

        return {
            // retrieve all queried events, returned as an array
            // @param userOpts: option overrides for this request
            // @return A promise that resolves to an array of event objects
            getList: function(userOpts) {
                // Doesn't apply for get
                delete queryBy.all;

                let array = [];
                let url = `/v1/apps/${context.applicationId}/${ENDPT}?${querystring.stringify(queryBy)}`;

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
            },
            // retrieve all queried events, returned as an iterator
            // @param userOpts: option overrides for this request
            // @return An iterator that returns promises that resolve with the next event
            getAll: function*(userOpts) {
                // Doesn't apply for get
                delete queryBy.all;

                function pageFn() {
                    let url = `/v1/apps/${context.applicationId}/${ENDPT}?${querystring.stringify(queryBy)}`;
                    return function() {
                        return context.http.makeRequest({ url }, userOpts).then(function(body) {
                            url = body.pages.next;
                            return body;
                        });
                    };
                }

                yield* pageToGenerator(pageFn());
            },
            // delete all queried events
            // @param userOpts: option overrides for this request
            // @returns Returns a promise that resolves to an object stating the number of deleted events
            remove: function(userOpts) {
                return context.http.makeRequest({
                    method: 'DELETE',
                    url: `/v1/apps/${context.applicationId}/${ENDPT}?${querystring.stringify(queryBy)}`
                }, userOpts);
            }
        };
    }

    return {
        create: obj.create,
        query
    };
};
