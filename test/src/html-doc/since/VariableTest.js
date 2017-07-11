import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'since', (target) =>
{
   /** @test {AbstractDoc#@since} */
   describe(`testSinceVariable (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'variable/index.html');
      });

      describe('in summary', () =>
      {
         it('has since.', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#static-modulevariable-testSinceVariable"]',
             '[data-ice="target"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="since"]', 'since 1.2.3');
            });
         });
      });

      describe('in detail', () =>
      {
         it('has since.', () =>
         {
            Util.findParent(doc, '[id="static-modulevariable-testSinceVariable"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="since"]', 'since 1.2.3');
            });
         });
      });
   });
});
