import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'async', (target) =>
{
   /** @test {FunctionDoc#_$async} */
   describe(`testAsyncFunction (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'function/index.html');

      describe('in summary', () =>
      {
         it('has async mark', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#static-modulefunction-testAsyncFunction"]',
             '[data-ice="target"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'public async testAsyncFunction()');
            });
         });
      });

      describe('in details', () =>
      {
         it('has async mark.', () =>
         {
            Util.findParent(doc, '[id="static-modulefunction-testAsyncFunction"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public async testAsyncFunction()');
            });
         });
      });
   });
});
