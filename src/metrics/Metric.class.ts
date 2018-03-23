export interface IMetricResponse extends IMetricRequest {
    id: string;
    applicationId: string;

}

export interface IMetricRequest {
    key: string;
    subject: string;
    value: number;
}
