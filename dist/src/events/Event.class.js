"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventRequest {
    constructor(subject, key, modifier = {}, options) {
        /**
         * Uniquely identifies the subject the event is for.
         */
        this.subject = '';
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
        }
        else {
            return false;
        }
    }
}
exports.EventRequest = EventRequest;
class EventResponse extends EventRequest {
    constructor(id, applicationId, subject, key, modifier = {}, options) {
        super(subject, key, modifier, options);
        this.id = id;
        this.applicationId = applicationId;
    }
    static fromSource(source) {
        return new EventResponse(source.id, source.applicationId, source.subject, source.key, source.modifier, source.options);
    }
}
exports.EventResponse = EventResponse;
//# sourceMappingURL=Event.class.js.map