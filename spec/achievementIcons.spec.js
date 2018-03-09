'use strict';

require('co-mocha');

const expect = require('chai').expect;
const { BadgeUp } = require('./../src');
const bup = new BadgeUp({
    apiKey: 'eyJhY2NvdW50SWQiOiJ0aGViZXN0IiwiYXBwbGljYXRpb25JZCI6IjEzMzciLCJrZXkiOiJpY2VjcmVhbWFuZGNvb2tpZXN5dW0ifQ=='
});

describe('achievement icons', function() {
    it('should get all achievement icons', function*() {
        function _payload() {
            return Promise.resolve([{
                url: 'url',
                fileName: 'myIcon.png'
            }]);
        }

        function _validate(options) {
            expect(options.method).to.equal('GET');
            expect(options.url).to.equal('/v1/apps/1337/achievementicons');
        }

        const results = yield bup.achievementIcons.getAll({ _payload, _validate });

        expect(results.length).to.equal(1);
    });

    it('should delete an achievement icon', function*() {
        function _payload() {
            return Promise.resolve({
                url: 'url',
                fileName: 'myIcon.png'
            });
        }

        function _validate(options) {
            expect(options.method).to.equal('DELETE');
            expect(options.url).to.equal('/v1/apps/1337/achievementicons/myIcon.png');
        }

        yield bup.achievementIcons.remove('myIcon.png', { _payload, _validate });
    });
});
