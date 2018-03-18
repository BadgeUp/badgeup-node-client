import { IResourceContext } from '../utils/ResourceContext';
/**
 * Analytics module
 * USE OF THE ANALTYICS MODULE IS NOT RECOMMENDED (AT THIS TIME)
 * THIS MODULE IS NOT SUBJECT TO ANY SLAS AND MAY BE CHANGED AT ANY TIME
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export declare function analyticsResource(context: IResourceContext): {
    eventsLastNDays: (numDays: number, userOpts?: any) => Promise<any>;
    eventsLastNDaysBySubject: (numDays: number, subject: any, userOpts?: any) => Promise<any>;
    subjectsLastNDays: (numDays: number, userOpts?: any) => Promise<any>;
    newSubjectsLastNDays: (numDays: number, userOpts?: any) => Promise<any>;
    earnedAchievementsLastNDays: (numDays: number, userOpts?: any) => Promise<any>;
    getSubjectsSummaryIterator: (userOpts?: any) => IterableIterator<Promise<{}>>;
    getAllMetricKeys: (userOpts?: any) => Promise<any>;
};
