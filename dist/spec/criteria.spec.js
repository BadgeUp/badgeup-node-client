"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const src_1 = require("./../src");
const bup = new src_1.BadgeUp({
    apiKey: 'eyJhY2NvdW50SWQiOiJ0aGViZXN0IiwiYXBwbGljYXRpb25JZCI6IjEzMzciLCJrZXkiOiJpY2VjcmVhbWFuZGNvb2tpZXN5dW0ifQ=='
});
function generateFakeCriterion() {
    return {
        id: '' + Math.floor(Math.random() * 1e6),
        name: 'criterion',
        description: 'criterion description',
        key: 'a:crit',
        operator: '@gt',
        threshold: 100
    };
}
describe('criterion', function () {
    it('should get a single criterion', async function () {
        const criterion = generateFakeCriterion();
        function _payload() {
            return criterion;
        }
        function _validate(options) {
            chai_1.expect(options.url).to.equal(`/v1/apps/1337/criteria/${criterion.id}`);
            chai_1.expect(options.method).to.be.oneOf([undefined, 'GET']);
            chai_1.expect(options.headers).to.be.an('object');
        }
        const result = await bup.criteria.get(criterion.id, { _payload, _validate });
        chai_1.expect(result).to.be.an('object');
    });
    xit('should get all criteria', function () {
        // TODO
    });
    it('should create a criterion', async function () {
        const criterion = generateFakeCriterion();
        function _payload() {
            return criterion;
        }
        function _validate(options) {
            chai_1.expect(options.url).to.equal(`/v1/apps/1337/criteria`);
            chai_1.expect(options.method).to.equal('POST');
            chai_1.expect(options.headers).to.be.an('object');
        }
        const result = await bup.criteria.create(criterion, { _payload, _validate });
        chai_1.expect(result).to.eql(criterion);
    });
    it('should remove a criterion', async function () {
        const criterion = generateFakeCriterion();
        function _payload() {
            return criterion;
        }
        function _validate(options) {
            chai_1.expect(options.url).to.equal(`/v1/apps/1337/criteria/${criterion.id}`);
            chai_1.expect(options.method).to.equal('DELETE');
            chai_1.expect(options.headers).to.be.an('object');
        }
        const result = await bup.criteria.remove(criterion.id, { _payload, _validate });
        chai_1.expect(result).to.eql(criterion);
    });
});
//# sourceMappingURL=criteria.spec.js.map