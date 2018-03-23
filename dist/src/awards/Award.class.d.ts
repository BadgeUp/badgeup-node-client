import { IMeta } from '../utils/Meta.class';
export interface IAwardResponse {
    id: string;
    applicationId: string;
    name: string;
    description: string;
    data: any;
    meta: IMeta;
}
