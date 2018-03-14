export interface IAwardResponse {
    id: string;
    applicationId: string;
    name: string;
    description: string;
    data: any;
    // TODO extend existing meta
    meta: any;
}
