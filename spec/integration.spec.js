'use strict';

const { BadgeUp } = require('./../dist/src');
const expect = require('chai').expect;
const INTEGRATION_API_KEY = process.env.INTEGRATION_API_KEY;
require('co-mocha');

describe('integration tests', function() {
    before(function() {
        if (!INTEGRATION_API_KEY) {
            this.skip();
        }
    });

    it('should send an event and get progress back', function() {
        const client = new BadgeUp({ apiKey: INTEGRATION_API_KEY });

        const rand = Math.floor(Math.random() * 100000);
        const subject = 'nodejs-ci-' + rand;
        const key = 'test';

        return client.events.create({
            subject,
            key,
            modifier: {
                '@inc': 5
            }
        }).then(function(response) {
            expect(response).to.be.an('object');
            const event = response.event;
            const progress = response.progress;

            expect(event).to.be.an('object');
            expect(event.key).to.be.equal(key);
            expect(event.subject).to.be.equal(subject);

            expect(progress).to.be.an('array');
            expect(progress.length).to.equal(1);
            expect(progress[0].isComplete).to.equal(true);
            expect(progress[0].isNew).to.equal(true);
        });
    });

    it('should get all achievements', function*() {
        const client = new BadgeUp({ apiKey: INTEGRATION_API_KEY });
        for (let summary of client.earnedAchievements.getIterator()) {
            summary = yield summary;
            expect(summary).to.be.an('object');
        }
        return client.achievements.getAll().then(function(response) {
            expect(response).to.be.an('array');
            expect(response).to.have.length.greaterThan(0);
        });
    });
});
