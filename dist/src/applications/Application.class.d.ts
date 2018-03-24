import { IMeta } from '../utils/Meta.class';
export interface IBadgeUpApplicationResponse {
    /**
     * A string that uniquely identifies this application.
     */
    id: string;
    /**
     * A string that uniquely identifies this account.
     */
    accountId: string;
    /**
     * A short, human-readable name.
     */
    name: string;
    /**
     * A human-readable description.
     */
    description: string;
    /**
     * Meta information object. Custom fields may be added.
     */
    meta: IBadgeUpApplicationMeta;
}
export interface IBadgeUpApplicationMeta extends IMeta {
    demo: boolean;
}
