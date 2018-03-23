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

export interface IEventResponse extends IEventRequest {
    id: string;
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

export interface IEventOptions {
    discard: boolean;
}

export interface IEventResponseV1 {
    event: IEventResponse;
    progress: IProgress[];
}

export interface IEventResponseV2Preview {
    results: IEventResponseResultV2Preview[];
}

export interface IEventResponseResultV2Preview {
    event: IEventResponse;
    cause: string;
    progress: IProgress[];
}
