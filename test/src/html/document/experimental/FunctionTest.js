import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.experimental)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@experimental} */
      describe('testExperimentalFunction', () =>
      {
         const doc = Util.readDoc(target, 'function/index.html');

         describe('in summary', () =>
         {
            it('has desc', () =>
            {
               Util.findParent(doc, '[data-ice="summary"] [href$="#static-function-testExperimentalFunction"]',
                '[data-ice="target"]', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="experimental"]', 'this function is experimental.');
               });
            });
         });

         describe('in details', () =>
         {
            it('has desc.', () =>
            {
               Util.findParent(doc, '[id="static-function-testExperimentalFunction"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="experimental"]', 'this function is experimental.');
               });
            });
         });
      });
   }
}
