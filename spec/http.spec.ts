import { expect, should, use } from 'chai';
import { stub } from 'sinon';
const sinonChai = require('sinon-chai');
import { BadgeUpHttp } from '../src/http';
should();
use(sinonChai);

describe('http', function() {
    it('should retry 3 times on http request errors', async function() {
        const mockFetch = stub();
        mockFetch.onCall(0).returns(Promise.reject(Error('Error msg')));
        mockFetch.onCall(1).returns(Promise.reject(Error('Error msg')));
        mockFetch.returns(Promise.resolve({ ok: true, json: () => Promise.resolve('{id: 1}') }));
        const http = new BadgeUpHttp({});
        await http.makeRequest({}, { mockFetch });
        expect(mockFetch.callCount).to.equal(3);
    });

    it('should retry 3 times on http requests returning 5x errors', async function() {
        const mockFetch = stub();
        mockFetch.onCall(0).returns(Promise.resolve({ ok: false, json: () => Promise.resolve('{id: 1}' ), status: 500 }));
        mockFetch.onCall(1).returns(Promise.resolve({ ok: false, json: () => Promise.resolve('{id: 1}' ), status: 505 }));
        mockFetch.returns(Promise.resolve({ ok: true, json: () => Promise.resolve('{id: 1}') }));
        const http = new BadgeUpHttp({});
        await http.makeRequest({}, { mockFetch });
        expect(mockFetch.callCount).to.equal(3);
    });
});


