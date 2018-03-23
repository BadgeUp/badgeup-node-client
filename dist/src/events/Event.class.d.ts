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
    data?: any;
    key: string;
    modifier: IEventModifier;
    options?: IEventOptions;
    subject: string;
    timestamp?: Date;
    constructor(subject: string, key: string, modifier?: IEventModifier, options?: IEventOptions);
    readonly modifierKey: string;
    readonly modifierValue: number;
    readonly discard: boolean;
}
export interface IEventResponse extends IEventRequest {
    id: string;
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
