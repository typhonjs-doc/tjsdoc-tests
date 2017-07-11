import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'generator', (target) =>
{
   /** @test {AbstractDoc#@_generator} */
   describe(`testGeneratorFunction (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'function/index.html');
      });

      describe('in summary', () =>
      {
         it('has generator mark', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#static-modulefunction-testGeneratorFunction"]',
             '[data-ice="target"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'public * testGeneratorFunction()');
            });
         });
      });

      describe('in details', () =>
      {
         it('has generator mark.', () =>
         {
            Util.findParent(doc, '[id="static-modulefunction-testGeneratorFunction"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public * testGeneratorFunction()');
            });
         });
      });
   });
});
