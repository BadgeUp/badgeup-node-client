import { IMeta } from '../utils/Meta.class';

export interface IBadgeUpApplicationRequest {
    /**
     * A short, human-readable name.
     */
    name: string;

    /**
     * A human-readable description.
     */
    description: string;

    /**
     * IMeta information object. Custom fields may be added.
     */
    meta?: IMeta;
}

export interface IBadgeUpApplication extends IBadgeUpApplicationRequest {

    /**
     * A string that uniquely identifies this application.
     */
    id: string;

    /**
     * A string that uniquely identifies this account.
     */
    accountId: string;

    /**
     * IMeta information object. Custom fields may be added.
     */
    meta: IBadgeUpApplicationMeta;
}

export interface IBadgeUpApplicationMeta extends IMeta {
    demo?: boolean;
}
