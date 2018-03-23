import { Common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';
import { Event, IEventResponseV1 } from './Event.class';

const ENDPT = 'events';

/**
 * Events resource
 */
export class EventsResource {
    private common: Common<IEventResponseV1>;

    /**
     * Construct the Events resource
     * @param context The context to make requests as
     */
    constructor(context: IResourceContext) {
        this.common = new Common(context, ENDPT);
    }

    public create(object: Event, userOpts?): Promise<IEventResponseV1> {
        return this.common.create(object, userOpts);
    }

}
