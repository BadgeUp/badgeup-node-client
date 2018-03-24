import { IProgress } from '../progress/Progress.class';

export interface IEventRequest {
    data?: any;
    key: string;
    modifier: IEventModifier;
    options?: IEventOptions;
    subject: string;
    timestamp?: Date;
}

export class EventRequest implements IEventRequest {
    /**
     * Arbitrary data that can be included to assist with achievement criteria evaluation.
     */
    data?: any;

    /**
     * The metric key that will be modified as a result of this event.
     */
    key: string;

    /**
     * Metric modifier key/value pair. Key may be one of @inc, @dec, @mult, @div, @set, @min, @max.
     */
    modifier: IEventModifier;

    /**
     * Options that affect the state and operability of this event.
     */
    options?: IEventOptions;

    /**
     * Uniquely identifies the subject the event is for.
     */
    subject: string = '';

    /**
     * Event creation date/time string, represented in the ISO 8601 format. Timezones may be expressed with UTC offsets.
     */
    timestamp?: Date;

    constructor(subject: string, key: string, modifier: IEventModifier = {}, options?: IEventOptions) {
        this.subject = subject;
        this.key = key;
        this.modifier = modifier;
        this.options = options;
    }

    /**
     * Retrieves the event's modifier key
     */
    get modifierKey() {
        return Object.keys(this.modifier)[0];
    }

    /**
     * Retrieves the event's modifier value
     */
    get modifierValue() {
        return this.modifier[this.modifierKey];
    }

    /**
     * States if this event is set to be discarded (not persisted long-term)
     */
    get discard() {
        if (this.options && this.options.discard === true) {
            return true;
        } else {
            return false;
        }
    }
}

export interface IEventResponse extends IEventRequest {
    /**
     * A string that uniquely identifies this event. May be null if options.discard is set to true.
     */
    id: string;

    /**
     * Unique application ID the event belongs to.
     */
    applicationId: string;
}

export class EventResponse extends EventRequest implements IEventResponse {
    constructor(public id, public applicationId, subject: string, key: string, modifier: IEventModifier = {}, options?: IEventOptions) {
        super(subject, key, modifier, options);
    }
    public static fromSource(source: IEventResponse): EventResponse {
        return new EventResponse(source.id, source.applicationId, source.subject, source.key, source.modifier, source.options);
    }
}

export interface IEventModifier {
    [key: string]: number;
}

/**
 * Options that affect the state and operability of an event.
 */
export interface IEventOptions {
    discard: boolean;
}

/**
 * Event response structure for the source event (API v1)
 */
export interface IEventResponseV1 {
    event: IEventResponse;
    progress: IProgress[];
}

/**
 * Event response structure containing for the source or side-effect events (API v2)
 */
export interface IEventResponseV2Preview {
    results: IEventResponseResultV2Preview[];
}

/**
 * Event response structure (API v2)
 */
export interface IEventResponseResultV2Preview {
    event: IEventResponse;
    cause: string;
    progress: IProgress[];
}
