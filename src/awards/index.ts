import { common } from "../common";
import { ResourceContext } from "../utils/ResourceContext";

const ENDPT = 'awards';

/**
 * Awards module
 * @param {ResourceContext} context The context to make requests in. Basically, `this`
 */
export function awardsResource(context: ResourceContext) {
    return common(context, ENDPT);
};
