import { IProgress } from './Progress.class';

export class Event {
    id?: string;
    applicationId?: string;
    data?: any;
    key: string;
    modifier: IEventModifier;
    options?: IEventOptions;
    subject: string = '';
    timestamp?: Date;

    constructor(subject: string, key: string, modifier: IEventModifier = {}, options?: IEventOptions) {
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
}

export interface IEventModifier {
    [key: string]: number;
}

export interface IEventOptions {
    discard: boolean;
}

export interface IEventResponseV1 {
    event: Event;
    progress: IProgress[];
}

export interface IEventResponseV2Preview {
    results: IEventResponseResultV2Preview[];
}

export interface IEventResponseResultV2Preview {
    event: Event;
    cause: string;
    progress: IProgress[];
}