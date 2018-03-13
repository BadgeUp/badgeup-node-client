export class Event {
    id?: string;
    applicationId?: string;
    data?: string;
    key: string;
    modifier: EventModifier;
    options?: EventOptions;
    subject: string = "";
    timestamp?: Date;

    constructor(subject: string, key: string, modifier: EventModifier = {}, options?: EventOptions) {
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
        } else {
            return false;
        }
    }
};

export interface EventModifier {
    [key: string]: number
}

export interface EventOptions {
    discard: boolean;
}
