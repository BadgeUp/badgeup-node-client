'use strict';

import { expect } from 'chai';
import { IEarnedAchievementResponse } from '../src/earnedAchievements/EarnedAchievement.class';
import { BadgeUp } from './../src';
import {  EventRequest, IEventResponseV1 } from './../src/events/Event.class';
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

        const eventRequest = new EventRequest(subject, key, { '@inc': 5 });

        const eventResponse: IEventResponseV1 = await client.events.create(eventRequest);
        expect(eventResponse).to.be.an('object');
        const event = eventResponse.event;
        const progress = eventResponse.progress;

        expect(event).to.be.an('object');
        expect(event.key).to.be.equal(key);
        expect(event.subject).to.be.equal(subject);

        expect(progress).to.be.an('array');
        expect(progress.length).to.equal(1);
        expect(progress[0].isComplete).to.equal(true);
        expect(progress[0].isNew).to.equal(true);

        for (const prog of progress) {
            if (prog.isComplete && prog.isNew) {
                // from here you can use prog.achievementId and prog.earnedAchievementId to get the original achievement and awards objects
                const earnedAchievement = await client.earnedAchievements.get(prog.earnedAchievementId);
                expect(earnedAchievement).to.be.an('object');
                expect(earnedAchievement.id).to.be.a('string');
                expect(earnedAchievement.achievementId).to.be.a('string');
                expect(earnedAchievement.applicationId).to.be.a('string');
                expect(earnedAchievement.subject).to.be.a('string');
                expect(earnedAchievement.meta).to.be.an('object');
                expect(earnedAchievement.meta.created).to.be.a('Date');

                const achievement = await client.achievements.get(prog.achievementId);
                expect(achievement).to.be.an('object');
                expect(achievement.id).to.be.a('string');
                expect(achievement.applicationId).to.be.a('string');
                expect(achievement.awards).to.be.an('array');
                expect(achievement.description).to.be.a('string');
                expect(achievement.evalTree).to.be.an('object');
                expect(achievement.meta).to.be.an('object');
                expect(achievement.meta.icon).to.be.a('string');
                expect(achievement.meta.created).to.be.a('Date');
                expect(achievement.name).to.be.a('string');
                expect(achievement.options).to.be.an('object');
                expect(achievement.resources).to.be.undefined;

                for (const awardId of achievement.awards) {
                    expect(awardId).to.be.a('string');
                    const award = await client.awards.get(awardId);
                    expect(award).to.be.an('object');
                    expect(award.applicationId).to.be.a('string');
                    expect(award.id).to.be.a('string');
                    expect(award.data).to.be.an('object');
                    expect(award.description).to.be.a('string');
                    expect(award.meta).to.be.an('object');
                    expect(award.meta.created).to.be.a('Date');
                }

                for (const criterionId of Object.keys(prog.progressTree.criteria)) {
                    const criterion = await client.criteria.get(criterionId);
                    expect(criterion).to.be.an('object');
                    expect(criterion.id).to.equal(criterionId);
                }
            }
        }
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

        const iterator = client.earnedAchievements.getIterator();
        for (const summary of iterator) {
            const tmp: IEarnedAchievementResponse = await summary;
            expect(tmp).to.be.an('object');
            expect(tmp.achievementId).to.be.a('string');
        }
    });

    it('should get all achievement icons', async function() {
        const client = new BadgeUp({ apiKey: INTEGRATION_API_KEY });

        return client.achievementIcons.getAll().then(function(response) {
            expect(response).to.be.an('array');
            expect(response).to.have.length.greaterThan(0, 'no icons found, possibly none were uploaded to the account against which integration tests are executed');
        });
    });

    it('should get all achievement icons2', async function() {
        const client = new BadgeUp({ apiKey: INTEGRATION_API_KEY });

        // const achievement:IAchievementResponse = {};
        // client.achievements.create(achievement);
        return client.criteria.getAll().then(function(response) {
            expect(response).to.be.an('array');
            expect(response).to.have.length.greaterThan(0, 'no icons found, possibly none were uploaded to the account against which integration tests are executed');
        });
    });
});
