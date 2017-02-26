import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'desc', (target) =>
{
   /** @test {AbstractDoc#@desc} */
   describe(`testDescVariable (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'variable/index.html');

      describe('in summary', () =>
      {
         it('has desc', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#static-variable-testDescVariable"]',
             '[data-ice="target"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="description"]', 'this is testDescVariable.');
            });
         });
      });

      describe('in details', () =>
      {
         it('has desc.', () =>
         {
            Util.findParent(doc, '[id="static-variable-testDescVariable"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="description"]', 'this is testDescVariable.');
            });
         });
      });
   });
});
