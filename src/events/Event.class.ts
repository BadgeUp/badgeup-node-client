export class Event {
    constructor(
        public id: string,
        public subject: string,
        public key: string,
        public options: EventOptions,
        public data: any,
        public modifier: EventModifier,
        public timestamp: Date
    ) { }

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
