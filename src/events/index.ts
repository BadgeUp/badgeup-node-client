import { Common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';
import { Event, IEventResponseV1 } from './Event.class';

const ENDPT = 'events';

/**
 * Events module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export class EventsResource {
    private common: Common<IEventResponseV1>;

    constructor(context: IResourceContext) {
        this.common = new Common(context, ENDPT);
    }

    public create(object: Event, userOpts?): Promise<IEventResponseV1> {
        return this.common.create(object, userOpts);
    }

}
