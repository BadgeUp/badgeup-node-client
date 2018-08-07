import { Common } from '../common';
import { ResourceContext } from '../utils/ResourceContext';
import { VirtualMetric } from './VirtualMetric.class';

const ENDPT = 'virtualmetrics';

/**
 * Virtual Metrics resource
 * @param {ResourceContext} context The context to make requests as
 */
export class VirtualMetricsResource extends Common<VirtualMetric> {
    constructor(context: ResourceContext) {
        super(context, ENDPT);
    }
}
