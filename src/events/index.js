'use strict';

const check = require('check-types');
const common = require('./../common');
const pickBy = require('lodash.pickby');
const querystring = require('querystring');
const pageToGenerator = require('../utils/pageToGenerator');
const ENDPT = 'events';

class EventQueryBuilder {
    constructor(context) {
        this.context = context;
    }

    id(id) {
        check.string(id, 'id must be a string');
        this.id = id;
        return this;
    }

    key(key) {
        check.string(key, 'key must be a string');
        this.key = key;
        return this;
    }

    subject(subject) {
        check.string(subject, 'subject must be a string');
        this.subject = subject;
        return this;
    }

    since(since) {
        check.date(since, 'since must be a date');
        this.since = since.toISOString();
        return this;
    }

    until(until) {
        check.date(until, 'until must be a date');
        this.until = until.toISOString();
        return this;
    }

    all(all) {
        check.boolean(all, 'all must be a date');
        this.all = all;
        return this;
    }

    // retrieve all queried events, returned as an array
    // @param userOpts: option overrides for this request
    // @return A promise that resolves to an array of event objects
    getList(userOpts) {
        const queryBy = pickBy(this, function(value, key) {
            return !!value && ['id', 'key', 'subject', 'since', 'until'].includes(key);
        });

        let array = [];
        let url = `/v1/apps/${this.context.applicationId}/${ENDPT}?${querystring.stringify(queryBy)}`;

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

    // retrieve all queried events, returned as an iterator
    // @param userOpts: option overrides for this request
    // @return An iterator that returns promises that resolve with the next event
    *getAll(userOpts) {
        const queryBy = pickBy(this, function(value, key) {
            return !!value && ['id', 'key', 'subject', 'since', 'until'].includes(key);
        });

        const pageFn = () => {
            let url = `/v1/apps/${this.context.applicationId}/${ENDPT}?${querystring.stringify(queryBy)}`;
            return () => {
                return this.context.http.makeRequest({ url }, userOpts).then(function(body) {
                    url = body.pages.next;
                    return body;
                });
            };
        };

        yield* pageToGenerator(pageFn());
    }

    // delete all queried events
    // @param userOpts: option overrides for this request
    // @returns Returns a promise that resolves to an object stating the number of deleted events
    remove(userOpts) {
        const queryBy = pickBy(this, function(value, key) {
            return !!value && ['id', 'key', 'subject', 'since', 'until', 'all'].includes(key);
        });

        return this.context.http.makeRequest({
            method: 'DELETE',
            url: `/v1/apps/${this.context.applicationId}/${ENDPT}?${querystring.stringify(queryBy)}`
        }, userOpts);
    }
}

// Events module
// @param context: The context to make requests in. Basically, `this`
module.exports = function events(context) {
    const obj = common(context, ENDPT);

    // Sets up a delete/get request targeting events using several filters
    // @param queryBy: filters to query events by
    // @returns Returns an instance of the EventQueryBuilder class
    function query() {
        return new EventQueryBuilder(context);
    }

    return {
        create: obj.create,
        query
    };
};
