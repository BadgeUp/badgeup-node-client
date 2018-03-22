import { BadgeUpHttp } from '../http';

export interface IResourceContext {
    applicationId: string | null;
    http: BadgeUpHttp;
}
