import { IMeta } from '../utils/Meta.class';

export interface IApiKeyResponse {
    id: string;
    applicationId: string;
    description: string;
    scopes: string[];
    meta: IMeta;
    token: string;
}

export interface IApiKeyScope {
    scope: string;
    description: string;
}
