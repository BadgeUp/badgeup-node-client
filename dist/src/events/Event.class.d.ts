import { IProgress } from '../progress/Progress.class';
export interface IEventRequest {
    data?: any;
    key: string;
    modifier: IEventModifier;
    options?: IEventOptions;
    subject: string;
    timestamp?: Date;
}
export declare class EventRequest implements IEventRequest {
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
    subject: string;
    /**
     * Event creation date/time string, represented in the ISO 8601 format. Timezones may be expressed with UTC offsets.
     */
    timestamp?: Date;
    constructor(subject: string, key: string, modifier?: IEventModifier, options?: IEventOptions);
    /**
     * Retrieves the event's modifier key
     */
    readonly modifierKey: string;
    /**
     * Retrieves the event's modifier value
     */
    readonly modifierValue: number;
    /**
     * States if this event is set to be discarded (not persisted long-term)
     */
    readonly discard: boolean;
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
export declare class EventResponse extends EventRequest implements IEventResponse {
    id: any;
    applicationId: any;
    constructor(id: any, applicationId: any, subject: string, key: string, modifier?: IEventModifier, options?: IEventOptions);
    static fromSource(source: IEventResponse): EventResponse;
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
 * Event response progress element
 */
export interface IEventProgress extends IProgress {
    /**
     * Set to `true` every time a new earned achievement record is created, even if `earnLimit` allows an achievement to be earned multiple times and the achievement has already been earned before.
     */
    isNew: boolean;
}
/**
 * Event response structure for the source event (API v1)
 */
export interface IEventResponseV1 {
    event: IEventResponse;
    progress: IEventProgress[];
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
    progress: IEventProgress[];
}
