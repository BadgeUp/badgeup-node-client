import { Progress } from '../progress/Progress.class';
export interface EventRequest {
    data?: any;
    key: string;
    modifier: EventModifier;
    options?: EventOptions;
    subject: string;
    timestamp?: Date;
}
export declare class EventRequest implements EventRequest {
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
    modifier: EventModifier;
    /**
     * Options that affect the state and operability of this event.
     */
    options?: EventOptions;
    /**
     * Uniquely identifies the subject the event is for.
     */
    subject: string;
    /**
     * Event creation date/time string, represented in the ISO 8601 format. Timezones may be expressed with UTC offsets.
     */
    timestamp?: Date;
    constructor(subject: string, key: string, modifier?: EventModifier, options?: EventOptions);
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
export interface EventBase extends EventRequest {
    /**
     * A string that uniquely identifies this event. May be null if options.discard is set to true.
     */
    id: string;
    /**
     * Unique application ID the event belongs to.
     */
    applicationId: string;
}
export declare class Event extends EventRequest implements EventBase {
    id: any;
    applicationId: any;
    constructor(id: any, applicationId: any, subject: string, key: string, modifier?: EventModifier, options?: EventOptions);
    static fromSource(source: EventBase): Event;
}
export interface EventModifier {
    [key: string]: number;
}
/**
 * Options that affect the state and operability of an event.
 */
export interface EventOptions {
    discard: boolean;
}
/**
 * Event response progress element
 */
export interface EventProgress extends Progress {
    /**
     * Set to `true` every time a new earned achievement record is created, even if `earnLimit` allows an
     * achievement to be earned multiple times and the achievement has already been earned before.
     */
    isNew: boolean;
}
/**
 * Event response structure for the source event (API v1)
 */
export interface EventV1 {
    event: EventBase;
    progress: EventProgress[];
}
/**
 * Event response structure containing for the source or side-effect events (API v2)
 */
export interface EventV2Preview {
    results: EventResultV2Preview[];
}
/**
 * Event response structure (API v2)
 */
export interface EventResultV2Preview {
    event: EventBase;
    cause: string;
    progress: EventProgress[];
}
