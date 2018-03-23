"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventRequest {
    constructor(subject, key, modifier = {}, options) {
        this.subject = '';
        this.subject = subject;
        this.key = key;
        this.modifier = modifier;
        this.options = options;
    }
    get modifierKey() {
        return Object.keys(this.modifier)[0];
    }
    get modifierValue() {
        return this.modifier[this.modifierKey];
    }
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