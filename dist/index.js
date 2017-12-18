!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=6)}([function(t,e){t.exports=require("check-types")},function(t,e,n){"use strict";const r=n(0),s=n(2),i=n(3);t.exports=function(t,e){return{get:function(n,s){r.string(n,"id must be a string");const u=i.stringify((s||{}).query,{addQueryPrefix:!0});return t.http.makeRequest({url:`/v1/apps/${t.applicationId}/${e}/${n}${u}`},s)},getIterator:function*(n){yield*s(function(){const r=i.stringify((n||{}).query,{addQueryPrefix:!0});let s=`/v1/apps/${t.applicationId}/${e}${r}`;return function(){return t.http.makeRequest({url:s},n).then(function(t){return s=t.pages.next,t})}}())},getAll:function(n){function r(){return t.http.makeRequest({url:a},n).then(function(t){return s=s.concat(t.data||[]),(a=t.pages.next)?r():s})}let s=[];const u=i.stringify((n||{}).query,{addQueryPrefix:!0});let a=`/v1/apps/${t.applicationId}/${e}${u}`;return r()},create:function(n,s){r.object(n,"object must be an object");const u=i.stringify((s||{}).query,{addQueryPrefix:!0});return t.http.makeRequest({method:"POST",body:n,url:`/v1/apps/${t.applicationId}/${e}${u}`},s)},update:function(n,s,u){r.string(n,"id must be a string"),r.array(s,"updates must be an array");const a=i.stringify((u||{}).query,{addQueryPrefix:!0});return t.http.makeRequest({method:"PATCH",body:s,url:`/v1/apps/${t.applicationId}/${e}/${n}${a}`},u)},remove:function(n,s){r.string(n,"id must be a string");const u=i.stringify((s||{}).query,{addQueryPrefix:!0});return t.http.makeRequest({method:"DELETE",url:`/v1/apps/${t.applicationId}/${e}/${n}${u}`},s)}}}},function(t,e,n){"use strict";t.exports=function*(t){let e=!0,n=[],r=Promise.resolve();for(;n.length>0||e;)yield r=r.then(function(){return 0===n.length?t().then(function(t){return e=!!t.pages.next,(n=t.data).shift()}):n.shift()})}},function(t,e){t.exports=require("qs")},function(t,e,n){"use strict";const r=n(18),s=n(19);t.exports=function(t,e){return r(t,function(t,n){return!!t&&s(e,n)})}},function(t,e){t.exports=require("lodash.defaultsdeep")},function(t,e,n){"use strict";const r=n(0),s=n(5),i=n(7),u=n(11),a=n(12),o=n(13),c=n(14),p=n(15),l=n(16),h=n(17),d=n(20),f=n(21),m=n(22),g=n(23),b=n(24),y=n(25),$=n(26);t.exports=class{constructor(t){if(r.assert.object(t,"You must provide an options object. Please see the documentation."),!t.apiKey&&!t.token)throw new Error("Either globalOpts.apiKey or globalOpts.token must be an string");if(t.request=s({},t.request),t.request.headers=s({},t.request.headers),t.token)r.assert.string(t.applicationId,"You must provide your applicationId."),this.applicationId=t.applicationId,t.request.headers.authorization="Bearer "+t.token;else if(t.apiKey){let e;try{if(!(e=JSON.parse(y(t.apiKey)).applicationId))throw new Error("applicationId not present");this.applicationId=e}catch(t){throw new Error("Malformed API key")}t.request.headers.authorization="Basic "+$(t.apiKey+":")}this.http=new i(t.request),this.applications=u(this),this.achievements=a(this),this._analytics=o(this),this.apiKeys=c(this),this.awards=p(this),this.criteria=l(this),this.earnedAchievements=h(this),this.metrics=d(this),this.events=f(this),this.progress=m(this),this.jobResults=g(this),this.achievementIcons=b(this)}}},function(t,e,n){"use strict";const r=n(5),s=n(8),i={json:!0,timeout:5e3,baseUrl:"https://api.useast1.badgeup.io",headers:{"User-Agent":"@badgeup/badgeup-node-client/0.8.5 (https://www.badgeup.io/)",Accept:"application/json"}};t.exports=class{constructor(t){this.globalReqOpts=t||{}}makeRequest(t,e){const n=r({},e,t,this.globalReqOpts,i);return n._validate&&n._validate(n),n._payload?Promise.resolve(n._payload(n)):s(n).then(function(t){return t.json()})}}},function(t,e,n){"use strict";const r=n(9);t.exports=function(t){if(!t||"object"!=typeof t)throw new Error("options object must be provided and must be an object");if(!t.baseUrl&&!t.url)throw new Error("options.baseUrl or options.url must be provided and must be a string");!0===t.json&&t.body&&("object"==typeof t.body||Array.isArray(t.body))&&(t.headers=t.headers||{},t.headers["Content-Type"]="application/json",t.body=JSON.stringify(t.body));let e=t.url||"";return e=t.baseUrl?t.baseUrl+e:e,delete t.baseUrl,delete t.url,r(e,t).then(function(t){return t.ok?t:Promise.reject(t)})}},function(t,e,n){"use strict";const r=n(10);t.exports=function(){return r.apply(this,arguments)}},function(t,e){t.exports=require("node-fetch")},function(t,e,n){"use strict";const r=n(0),s=n(2),i="apps";t.exports=function(t){return{get:function(e,n){return r.string(e,"id must be a string"),t.http.makeRequest({url:`/v1/${i}/${e}`},n)},getAll:function(e){function n(){return t.http.makeRequest({url:s},e).then(function(t){return r=r.concat(t.data||[]),(s=t.pages.next)?n():r})}let r=[],s=`/v1/${i}`;return n()},getIterator:function*(e){yield*s(function(){let n=`/v1/${i}`;return function(){return t.http.makeRequest({url:n},e).then(function(t){return n=t.pages.next,t})}}())},create:function(e,n){return r.object(e,"object must be an object"),t.http.makeRequest({method:"POST",body:e,url:`/v1/${i}`},n)},update:function(e,n,s){return r.string(e,"id must be a string"),r.array(n,"updates must be an array"),t.http.makeRequest({method:"PATCH",body:n,url:`/v1/${i}/${e}`},s)},remove:function(e,n){return r.string(e,"id must be a string"),t.http.makeRequest({method:"DELETE",url:`/v1/${i}/${e}`},n)}}}},function(t,e,n){"use strict";const r=n(0),s=n(1),i="achievements";t.exports=function(t){const e=s(t,i);return e.getAchievementCriteria=function(e,n){return r.string(e,"id must be a string"),t.http.makeRequest({url:`/v1/apps/${t.applicationId}/${i}/${e}/criteria`},n).then(function(t){return t.data})},e.getAchievementAwards=function(e,n){return r.string(e,"id must be a string"),t.http.makeRequest({url:`/v1/apps/${t.applicationId}/${i}/${e}/awards`},n).then(function(t){return t.data})},e}},function(t,e,n){"use strict";const r=n(0),s=n(2),i="analytics";t.exports=function(t){return{eventsLastNDays:function(e,n){return r.assert(r.integer(e)&&r.greater(e,0),"numDays must be a positive integer"),t.http.makeRequest({url:`/v1/apps/${t.applicationId}/${i}/events/last-n-days?duration=${e}`},n)},eventsLastNDaysBySubject:function(e,n,s){return r.assert(r.integer(e)&&r.greater(e,0),"numDays must be a positive integer"),r.string(n,"subject must be a string"),t.http.makeRequest({url:`/v1/apps/${t.applicationId}/${i}/events/last-n-days/subject/${n}?duration=${e}`},s)},subjectsLastNDays:function(e,n){return r.assert(r.integer(e)&&r.greater(e,0),"numDays must be a positive integer"),t.http.makeRequest({url:`/v1/apps/${t.applicationId}/${i}/subjects/last-n-days?duration=${e}`},n)},newSubjectsLastNDays:function(e,n){return r.assert(r.integer(e)&&r.greater(e,0),"numDays must be a positive integer"),t.http.makeRequest({url:`/v1/apps/${t.applicationId}/${i}/subjects/new/last-n-days?duration=${e}`},n)},earnedAchievementsLastNDays:function(e,n){return r.assert(r.integer(e)&&r.greater(e,0),"numDays must be a positive integer"),t.http.makeRequest({url:`/v1/apps/${t.applicationId}/${i}/earnedachievements/last-n-days?duration=${e}`},n)},getSubjectsSummaryIterator:function*(e){yield*s(function(){let n=`/v1/apps/${t.applicationId}/${i}/subjects/summary`;return function(){return t.http.makeRequest({url:n},e).then(function(t){return n=t.pages.next,t})}}())},getAllMetricKeys:function(e){return t.http.makeRequest({url:`/v1/apps/${t.applicationId}/${i}/metrics/keys`},e).then(t=>t.data)}}}},function(t,e,n){"use strict";const r=n(1),s="apikeys";t.exports=function(t){const e=r(t,s);return{getAll:e.getAll,getIterator:e.getIterator,create:e.create,remove:e.remove,update:e.update,listScopes:function(e){return t.http.makeRequest({url:`/v1/apps/${t.applicationId}/${s}/scopes`},e).then(function(t){return t.data})}}}},function(t,e,n){"use strict";const r=n(1);t.exports=function(t){return r(t,"awards")}},function(t,e,n){"use strict";const r=n(1);t.exports=function(t){const e=r(t,"criteria");return{get:e.get,getIterator:e.getIterator,getAll:e.getAll,create:e.create,update:e.update,remove:e.remove,getDynamicCriteriaImages:function(e){return t.http.makeRequest({url:`/v1/apps/${t.applicationId}/dcimages`},e).then(t=>t.data)}}}},function(t,e,n){"use strict";const r=n(0),s=n(1),i=n(4),u=n(2),a=n(3),o="earnedachievements",c=["achievementId","subject","since","until"];t.exports=function(t){const e=s(t,o);class n{constructor(t){this.context=t,this._params={}}achievementId(t){return r.string(t,"achievementId must be a string"),this._params.achievementId=t,this}subject(t){return r.string(t,"subject must be a string"),this._params.subject=t,this}since(t){return r.date(t,"since must be a date"),this._params.since=t.toISOString(),this}until(t){return r.date(t,"until must be a date"),this._params.until=t.toISOString(),this}_buildQuery(t){if(0===Object.keys(t).length)throw new Error('You must specify at least the "achievementId", "subject", "since", or "until"');return a.stringify(t)}getAll(e){function n(){return t.http.makeRequest({url:a},e).then(function(t){return r=r.concat(t.data||[]),(a=t.pages.next)?n():r})}let r=[];const s=i(this._params,c),u=this._buildQuery(s);let a=`/v1/apps/${t.applicationId}/${o}?${u}`;return n()}*getIterator(e){const n=i(this._params,c),r=this._buildQuery(n);yield*u(function(){let n=`/v1/apps/${t.applicationId}/${o}?${r}`;return function(){return t.http.makeRequest({url:n},e).then(function(t){return n=t.pages.next,t})}}())}remove(t){const e=i(this._params,c),n=this._buildQuery(e);return this.context.http.makeRequest({method:"DELETE",url:`/v1/apps/${this.context.applicationId}/${o}?${n}`},t)}}return{get:e.get,getAll:e.getAll,getIterator:e.getIterator,remove:e.remove,query:function(){return new n(t)}}}},function(t,e){t.exports=require("lodash.pickby")},function(t,e){t.exports=require("lodash.includes")},function(t,e,n){"use strict";const r=n(0),s=n(1),i=n(2),u=n(4),a=n(3),o="metrics",c=["key","subject"];t.exports=function(t){const e=s(t,o);class n{constructor(t){this.context=t,this._params={}}key(t){return r.string(t,"key must be a string"),this._params.key=t,this}subject(t){return r.string(t,"subject must be a string"),this._params.subject=t,this}remove(t){const e=u(this._params,c);if(0===Object.keys(e).length)throw new Error('You must specify at least the "subject" or "key"');return this.context.http.makeRequest({method:"DELETE",url:`/v1/apps/${this.context.applicationId}/${o}?${a.stringify(e)}`},t)}}return{getAll:e.getAll,getIterator:e.getIterator,create:e.create,getAllSubjectMetrics:function(e,n){function s(){return t.http.makeRequest({url:u},n).then(function(t){return i=i.concat(t.data||[]),(u=t.pages.next)?s():i})}r.string(e,"subject must be a string");let i=[],u=`/v1/apps/${t.applicationId}/${o}/${e}`;return s()},getSubjectMetricsIterator:function*(e,n){r.string(e,"subject must be a string"),yield*i(function(){let r=`/v1/apps/${t.applicationId}/${o}/${e}`;return function(){return t.http.makeRequest({url:r},n).then(function(t){return r=t.pages.next,t})}}())},getIndividualSubjectMetric:function(e,n,s){return r.string(e,"subject must be a string"),r.string(n,"key must be a string"),t.http.makeRequest({url:`/v1/apps/${t.applicationId}/${o}/${e}/${n}`},s)},query:function(){return new n(t)}}}},function(t,e,n){"use strict";const r=n(1);t.exports=function(t){return{create:r(t,"events").create}}},function(t,e,n){"use strict";const r=n(0),s=n(3),i=n(2),u=n(4),a="progress",o=["subject","achievementId"];class c{constructor(t){this.context=t,this._params={}}achievementId(t){return r.string(t,"achievementId must be a string"),this._params.achievementId=t,this}subject(t){return r.string(t,"subject must be a string"),this._params.subject=t,this}getAll(t){if(!this._params.subject)throw new Error("subject must be provided");const e=u(this._params,o);let n=[],r=`/v1/apps/${this.context.applicationId}/${a}?${s.stringify(e)}`;const i=()=>this.context.http.makeRequest({url:r},t).then(function(t){return n=n.concat(t.data||[]),(r=t.pages.next)?i():n});return i()}*getIterator(t){if(!this._params.subject)throw new Error("subject must be provided");const e=u(this._params,o);yield*i((()=>{let n=`/v1/apps/${this.context.applicationId}/${a}?${s.stringify(e)}`;return()=>this.context.http.makeRequest({url:n},t).then(function(t){return n=t.pages.next,t})})())}}t.exports=function(t){return{query:function(){return new c(t)}}}},function(t,e,n){"use strict";const r=n(0),s=n(4),i=n(3),u=n(2),a="jobresult",o=["criterionId","subject","id","sort"];t.exports=function(t){class e{constructor(t){this.context=t,this._params={}}criterionId(t){return r.string(t,"criterionId must be a string"),this._params.criterionId=t,this}subject(t){return r.string(t,"subject must be a string"),this._params.subject=t,this}id(t){return r.string(t,"id must be a string"),this._params.id=t,this}sort(t,e){return r.string(t,"key must be a string"),r.string(e,"direction must be a string"),this._params.sort=`${t}:${e}`,this}*getIterator(e){const n=s(this._params,o);yield*u(function(){let r=`/v1/apps/${t.applicationId}/${a}?${i.stringify(n)}`;return function(){return t.http.makeRequest({url:r},e).then(function(t){return r=t.pages.next,t})}}())}getAll(e){function n(){return t.http.makeRequest({url:c},e).then(function(t){return u=u.concat(t.data||[]),(c=t.pages.next)?n():u})}const r=s(this._params,o);let u=[],c=`/v1/apps/${t.applicationId}/${a}?${i.stringify(r)}`;return n()}}return{query:function(){return new e(t)}}}},function(t,e,n){"use strict";const r=n(1),s="achievementicons";t.exports=function(t){return{getAll:function(e){return t.http.makeRequest({method:"GET",url:`/v1/apps/${t.applicationId}/${s}`},e)},remove:r(t,s).remove}}},function(t,e,n){"use strict";t.exports=function(t){return Buffer.from(t,"base64").toString("utf8")}},function(t,e,n){"use strict";t.exports=function(t){return Buffer.from(t,"ascii").toString("base64")}}])});