import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'desc', (target) =>
{
   /** @test {AbstractDoc#@desc} */
   describe(`testDescFunction (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'function/index.html');

      describe('in summary', () =>
      {
         it('has desc', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#static-function-testDescFunction"]',
             '[data-ice="target"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="description"]', 'this is testDescFunction.');
            });
         });
      });

      describe('in details', () =>
      {
         it('has desc.', () =>
         {
            Util.findParent(doc, '[id="static-function-testDescFunction"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="description"]', 'this is testDescFunction.');
            });
         });
      });
   });
});
