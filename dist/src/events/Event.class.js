"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Event {
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
exports.Event = Event;
//# sourceMappingURL=Event.class.js.map