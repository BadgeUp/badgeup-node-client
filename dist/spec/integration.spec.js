'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const src_1 = require("./../src");
const Event_class_1 = require("./../src/events/Event.class");
const INTEGRATION_API_KEY = process.env.INTEGRATION_API_KEY;
describe('integration tests', function () {
    before(function () {
        if (!INTEGRATION_API_KEY) {
            this.skip();
        }
    });
    it('should send an event and get progress back', async function () {
        const client = new src_1.BadgeUp({ apiKey: INTEGRATION_API_KEY });
        const rand = Math.floor(Math.random() * 100000);
        const subject = 'nodejs-ci-' + rand;
        const key = 'test';
        const e = new Event_class_1.EventRequest(subject, key, { '@inc': 5 });
        const response = await client.events.create(e);
        chai_1.expect(response).to.be.an('object');
        const event = response.event;
        const progress = response.progress;
        chai_1.expect(event).to.be.an('object');
        chai_1.expect(event.key).to.be.equal(key);
        chai_1.expect(event.subject).to.be.equal(subject);
        chai_1.expect(progress).to.be.an('array');
        chai_1.expect(progress.length).to.equal(1);
        chai_1.expect(progress[0].isComplete).to.equal(true);
        chai_1.expect(progress[0].isNew).to.equal(true);
        for (const prog of progress) {
            if (prog.isComplete && prog.isNew) {
                // from here you can use prog.achievementId and prog.earnedAchievementId to get the original achievement and awards objects
                const earnedAchievement = await client.earnedAchievements.get(prog.earnedAchievementId);
                chai_1.expect(earnedAchievement).to.be.an('object');
                chai_1.expect(earnedAchievement.id).to.be.a('string');
                chai_1.expect(earnedAchievement.achievementId).to.be.a('string');
                chai_1.expect(earnedAchievement.applicationId).to.be.a('string');
                chai_1.expect(earnedAchievement.subject).to.be.a('string');
                chai_1.expect(earnedAchievement.meta).to.be.an('object');
                chai_1.expect(earnedAchievement.meta.created).to.be.a('Date');
                const achievement = await client.achievements.get(prog.achievementId);
                chai_1.expect(achievement).to.be.an('object');
                chai_1.expect(achievement.id).to.be.a('string');
                chai_1.expect(achievement.applicationId).to.be.a('string');
                chai_1.expect(achievement.awards).to.be.an('array');
                chai_1.expect(achievement.description).to.be.a('string');
                chai_1.expect(achievement.evalTree).to.be.an('object');
                chai_1.expect(achievement.meta).to.be.an('object');
                chai_1.expect(achievement.meta.icon).to.be.a('string');
                chai_1.expect(achievement.meta.created).to.be.a('Date');
                chai_1.expect(achievement.name).to.be.a('string');
                chai_1.expect(achievement.options).to.be.an('object');
                chai_1.expect(achievement.resources).to.be.undefined;
            }
        }
    });
    it('should get all achievements', async function () {
        const client = new src_1.BadgeUp({ apiKey: INTEGRATION_API_KEY });
        return client.achievements.getAll().then(function (response) {
            chai_1.expect(response).to.be.an('array');
            chai_1.expect(response).to.have.length.greaterThan(0);
        });
    });
    it('should iterate achievements via iterator', async function () {
        const client = new src_1.BadgeUp({ apiKey: INTEGRATION_API_KEY });
        const iterator = client.earnedAchievements.getIterator();
        for (const summary of iterator) {
            const tmp = await summary;
            chai_1.expect(tmp).to.be.an('object');
            chai_1.expect(tmp.achievementId).to.be.a('string');
        }
    });
    it('should get all achievement icons', async function () {
        const client = new src_1.BadgeUp({ apiKey: INTEGRATION_API_KEY });
        return client.achievementIcons.getAll().then(function (response) {
            chai_1.expect(response).to.be.an('array');
            chai_1.expect(response).to.have.length.greaterThan(0, 'no icons found, possibly none were uploaded to the account against which integration tests are executed');
        });
    });
    it('should get all achievement icons2', async function () {
        const client = new src_1.BadgeUp({ apiKey: INTEGRATION_API_KEY });
        // const achievement:IAchievementResponse = {};
        // client.achievements.create(achievement);
        return client.criteria.getAll().then(function (response) {
            chai_1.expect(response).to.be.an('array');
            chai_1.expect(response).to.have.length.greaterThan(0, 'no icons found, possibly none were uploaded to the account against which integration tests are executed');
        });
    });
});
//# sourceMappingURL=integration.spec.js.map