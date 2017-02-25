import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.generator)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@_generator} */
      describe('testGeneratorFunction', () =>
      {
         const doc = Util.readDoc(target, 'function/index.html');

         describe('in summary', () =>
         {
            it('has generator mark', () =>
            {
               Util.findParent(doc, '[data-ice="summary"] [href$="#static-function-testGeneratorFunction"]',
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
               Util.findParent(doc, '[id="static-function-testGeneratorFunction"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, 'h3', 'public * testGeneratorFunction()');
               });
            });
         });
      });
   }
}
