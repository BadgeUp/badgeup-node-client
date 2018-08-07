export interface VirtualMetric {
    /**
     * A string that uniquely identifies this virtual metric.
     */
    id: string;
    /**
     * The application ID that this object belongs to.
     */
    applicationId: string;
    /**
     * States what the virtual metric represents, such as a calculated score.
     */
    key: string;
    /**
     * Describes how the virtual metric is calculated
     */
    evaluation: VirtualMetricEvaluation;
}
export interface VirtualMetricEvaluation {
    /**
     * The virtual metric type. Must be one of "regex", "equation".
     */
    type: VirtualMetricType;
    /**
     * For type="regex", the regex used to match concrete (non-virtual) metrics.
     */
    regex?: string;
    /**
     * For type="equation", the equation used to calculate the virtual metric.
     */
    equation?: string;
}
export declare enum VirtualMetricType {
    regex = "regex",
    equation = "equation",
}
