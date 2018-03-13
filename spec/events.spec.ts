'use strict';
import { expect } from 'chai';
import 'co-mocha';
import { BadgeUp } from './../src';
import { Event } from './../src/events/Event.class';

const bup = new BadgeUp({
    apiKey: 'eyJhY2NvdW50SWQiOiJ0aGViZXN0IiwiYXBwbGljYXRpb25JZCI6IjEzMzciLCJrZXkiOiJpY2VjcmVhbWFuZGNvb2tpZXN5dW0ifQ=='
});

function generateFakeEvent(): Event {
    const e = new Event('kram', 'event:key');
    e.id = Math.floor(Math.random() * 1e6) + '';
    e.modifier = { '@inc': 5 };
    e.timestamp = new Date();
    return e;
}

    it('should create an event', function*() {
        const event = generateFakeEvent();
        function _payload() {
            return event;
        }

        function _validate(options) {
            expect(options.url).to.equal('/v1/apps/1337/events');
            expect(options.method).to.equal('POST');
            expect(options.headers).to.be.an('object');
        }

        const result = yield bup.events.create(event, { _payload, _validate });

        expect(result).to.eql(event);
    });

    it('should create an event with the showIncomplete query parameter', function*() {
        const event = generateFakeEvent();
        function _payload() {
            return event;
        }

        function _validate(options) {
            expect(options.url).to.equal('/v1/apps/1337/events?showIncomplete=true');
            expect(options.method).to.equal('POST');
            expect(options.headers).to.be.an('object');
        }

        const query = { showIncomplete: true };
        const result = yield bup.events.create(event, { query, _payload, _validate });

        expect(result).to.eql(event);
    });
});
