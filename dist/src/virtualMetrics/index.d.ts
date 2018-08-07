import { Common } from '../common';
import { ResourceContext } from '../utils/ResourceContext';
import { VirtualMetric } from './VirtualMetric.class';
/**
 * Virtual Metrics resource
 * @param {ResourceContext} context The context to make requests as
 */
export declare class VirtualMetricsResource extends Common<VirtualMetric> {
    constructor(context: ResourceContext);
}
