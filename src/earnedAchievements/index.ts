import * as check from 'check-types';
import * as querystring from 'querystring';
import { Common } from '../common';
import { collectQueryParams } from '../utils/collectQueryParams';
import { pageToGenerator } from '../utils/pageToGenerator';
import { IQueryParameters } from '../utils/QueryBuilder';
import { IResourceContext } from '../utils/ResourceContext';
import { IEarnedAchievementResponse } from './EarnedAchievement.class';

const ENDPT = 'earnedachievements';

const AVAILABLE_QUERY_PARAMS = ['achievementId', 'subject', 'since', 'until'];

export class EarnedAchievementQueryBuilder {

    context: IResourceContext;

    // container for the query parameters
    private _params: IQueryParameters = {};

    constructor(context: IResourceContext) {
        this.context = context;
    }

    /**
     * Query by achievement ID
     * @param {string} achievementId
     */
    achievementId(achievementId: string) {
        check.string(achievementId, 'achievementId must be a string');
        this._params.achievementId = achievementId;
        return this;
    }

    /**
     * Query by subject
     * @param {string} subject
     */
    subject(subject) {
        check.string(subject, 'subject must be a string');
        this._params.subject = subject;
        return this;
    }

    /**
     * Query by starting date (find after)
     * @param {Date} since
     */
    since(since) {
        check.date(since, 'since must be a date');
        this._params.since = since.toISOString();
        return this;
    }

    /**
     * Query by ending date (find before)
     * @param {Date} until
     */
    until(until) {
        check.date(until, 'until must be a date');
        this._params.until = until.toISOString();
        return this;
    }

    /**
     * checks and builds query parameters for use in a URL
     * @returns Returns a string containing URL query paramters
     */
    _buildQuery(queryBy) {
        if (Object.keys(queryBy).length === 0) {
            throw new Error('You must specify at least the "achievementId", "subject", "since", or "until"');
        }

        return querystring.stringify(queryBy);
    }

    /**
     * retrives earned achievements, returned as an array
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object[]>} Promise that resolves to a list of metrics
     */
    getAll(userOpts) {
        let array = [];
        const queryBy = collectQueryParams(this._params, AVAILABLE_QUERY_PARAMS);
        const queryPart = this._buildQuery(queryBy);

        const context = this.context;
        let url = `/v1/apps/${context.applicationId}/${ENDPT}?${queryPart}`;

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
     * retrives earned achievements, returned as an iterator
     * @param {object} userOpts option overrides for this request
     * @return An iterator that returns promises that resolve with the next object
     */
    *getIterator(userOpts) {
        const queryBy = collectQueryParams(this._params, AVAILABLE_QUERY_PARAMS);
        const queryPart = this._buildQuery(queryBy);

        const context = this.context;
        function pageFn() {
            let url = `/v1/apps/${context.applicationId}/${ENDPT}?${queryPart}`;
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
     * delete all queried earned achievements
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves to an object stating the number of deleted metrics
     */
    remove(userOpts) {
        const queryBy = collectQueryParams(this._params, AVAILABLE_QUERY_PARAMS);
        const queryPart = this._buildQuery(queryBy);

        return this.context.http.makeRequest({
            method: 'DELETE',
            url: `/v1/apps/${this.context.applicationId}/${ENDPT}?${queryPart}`
        }, userOpts);
    }
}

/**
 * Earned Achievements module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export class EarnedAchievementsResource extends Common<IEarnedAchievementResponse> {
    constructor(context: IResourceContext) {
        super(context, ENDPT);
    }

    /**
     * Sets up a delete request targeting earned achievements using query filters
     * @param queryBy: filters to query events by
     * @returns Returns an instance of the EarnedAchievementQueryBuilder class
     */
    public query() {
        return new EarnedAchievementQueryBuilder(this.context);
    }
}
