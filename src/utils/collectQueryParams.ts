import { pickBy } from 'lodash';
import { IQueryParameters } from './QueryBuilder';

export function collectQueryParams(source: IQueryParameters, keys: string[]) {
    return pickBy(source, function(value, key) {
        return !!value && keys.includes(key);
    });
}
