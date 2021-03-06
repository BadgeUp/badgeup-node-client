import { expect } from 'chai';
import { BadgeUp } from './../src';
const bup = new BadgeUp({
    apiKey: 'eyJhY2NvdW50SWQiOiJ0aGViZXN0IiwiYXBwbGljYXRpb25JZCI6IjEzMzciLCJrZXkiOiJpY2VjcmVhbWFuZGNvb2tpZXN5dW0ifQ=='
});

function generateFakeMetric() {
    return {
        subject: 'kram',
        key: 'eventkey',
        value: 10
    };
}

describe('metrics', function() {
    it('should get a metric', async function() {
        const metric = generateFakeMetric();
        function _payload() {
            return metric;
        }

        function _validate(options) {
            expect(options.url).to.equal(`/v2/apps/1337/metrics/${metric.subject}/${metric.key}`);
            expect(options.headers).to.be.an('object');
        }

        const result = await bup.metrics.getIndividualSubjectMetric(metric.subject, metric.key, { _payload, _validate });

        expect(result).to.eql(metric);
    });

    it('should get all metrics with an iterator', async function() {
        const fakeMetric = generateFakeMetric();

        function _payload(options) {
            if (options.url.indexOf('PAGE_TWO') > 0) {
                // last page of date
                return Promise.resolve({
                    pages: {
                        previous: null,
                        next: null
                    },
                    data: (new Array(10)).fill(fakeMetric)
                });
            } else {
                // first page of data
                return Promise.resolve({
                    pages: {
                        previous: null,
                        next: '/v2/apps/1337/metrics?after=PAGE_TWO'
                    },
                    data: (new Array(10)).fill(fakeMetric)
                });
            }
        }

        function _validate(options) {
            if (options.url.indexOf('PAGE_TWO') > 0) {
                expect(options.url).to.equal('/v2/apps/1337/metrics?after=PAGE_TWO');
            } else {
                expect(options.url).to.equal('/v2/apps/1337/metrics');
            }
            expect(options.headers).to.be.an('object');
        }

        let count = 0;
        const iterator = bup.metrics.getIterator({ _payload, _validate });
        for (const metric of iterator) {
            count++;
            const tmp = await metric;
            expect(tmp).to.be.an('object');
        }

        // total number of metrics
        expect(count).to.equal(20);
    });

    it('should get all metrics with an array', async function() {
        const metric = generateFakeMetric();

        function _payload(options) {
            if (options.url.indexOf('PAGE_TWO') > 0) {
                // last page of date
                return Promise.resolve({
                    pages: {
                        previous: null,
                        next: null
                    },
                    data: (new Array(10)).fill(metric)
                });
            } else {
                // first page of data
                return Promise.resolve({
                    pages: {
                        previous: null,
                        next: '/v2/apps/1337/metrics?after=PAGE_TWO'
                    },
                    data: (new Array(10)).fill(metric)
                });
            }
        }

        function _validate(options) {
            if (options.url.indexOf('PAGE_TWO') > 0) {
                expect(options.url).to.equal('/v2/apps/1337/metrics?after=PAGE_TWO');
            } else {
                expect(options.url).to.equal('/v2/apps/1337/metrics');
            }
            expect(options.headers).to.be.an('object');
        }

        const metrics = await bup.metrics.getAll({ _payload, _validate });

        // total number of metrics
        expect(metrics.length).to.equal(20);
    });

    it('should create a metric', async function() {
        const metric = generateFakeMetric();
        function _payload() {
            return metric;
        }

        function _validate(options) {
            expect(options.url).to.equal('/v2/apps/1337/metrics');
            expect(options.method).to.equal('POST');
            expect(options.headers).to.be.an('object');
        }

        const result = await bup.metrics.create(metric, { _payload, _validate });

        expect(result).to.eql(metric);
    });

    it('should delete a metric', async function() {
        const metric = generateFakeMetric();
        function _payload() {
            return { count: 1 };
        }

        function _validate(options) {
            expect(options.url).to.equal(`/v2/apps/1337/metrics?subject=${metric.subject}&key=${metric.key}`);
            expect(options.method).to.equal('DELETE');
            expect(options.headers).to.be.an('object');
        }

        const result = await bup.metrics.query().subject(metric.subject).key(metric.key).remove({ _payload, _validate });

        expect(result).to.eql({ count: 1 });
    });

    it('should error when deleting metrics without specifying key or subject', async function() {
        function fn() {
            return bup.metrics.query().remove();
        }
        expect(fn).to.throw('You must specify at least the "subject" or "key"');
    });
});
