import { IMeta } from '../utils/Meta.class';

export interface IBadgeUpApplicationResponse {
    id: string;
    accountId: string;
    name: string;
    description: string;
    meta: IBadgeUpApplicationMeta;
}

export interface IBadgeUpApplicationMeta extends IMeta {
    demo: boolean;
}
