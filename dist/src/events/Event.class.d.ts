import { IProgress } from './Progress.class';
export declare class Event {
    id?: string;
    applicationId?: string;
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
