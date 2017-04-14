import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'async', (target) =>
{
   /** @test {MethodDoc#_$async} */
   describe(`TestAsyncMethod (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'class/test/fixture/package/src/Async/Method.js~TestAsyncMethod.html');

      describe('in summary', () =>
      {
         it('has async mark.', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method1"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'public async method1()');
            });
         });
      });

      describe('in details', () =>
      {
         it('has async mark.', () =>
         {
            Util.findParent(doc, '[id="instance-classmethod-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public async method1()');
            });
         });
      });
   });
});
