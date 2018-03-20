'use strict';

import { expect } from 'chai';
import { EarnedAchievement } from '../src/earnedAchievements/EarnedAchievement.class';
import { BadgeUp } from './../src';
import { Event, IEventResponseV1 } from './../src/events/Event.class';
const INTEGRATION_API_KEY = process.env.INTEGRATION_API_KEY;

describe('integration tests', function() {
    before(function() {
        if (!INTEGRATION_API_KEY) {
            this.skip();
        }
    });

    it('should send an event and get progress back', async function() {
        const client = new BadgeUp({ apiKey: INTEGRATION_API_KEY });

        const rand = Math.floor(Math.random() * 100000);
        const subject = 'nodejs-ci-' + rand;
        const key = 'test';

        const e = new Event(subject, key, { '@inc': 5 });

        const response: IEventResponseV1 = await client.events.create(e);
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

    it('should get all achievements', async function() {
        const client = new BadgeUp({ apiKey: INTEGRATION_API_KEY });

        return client.achievements.getAll().then(function(response) {
            expect(response).to.be.an('array');
            expect(response).to.have.length.greaterThan(0);
        });
    });

    it('should iterate achievements via iterator', async function() {
        const client = new BadgeUp({ apiKey: INTEGRATION_API_KEY });

        for (const summary of client.earnedAchievements.getIterator()) {
            const tmp: EarnedAchievement = await summary;
            expect(tmp).to.be.an('object');
            expect(tmp.achievementId).to.be.a('string');
        }
    });
});
