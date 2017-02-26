import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.experimental)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@experimental} */
      describe('testExperimentalVariable', () =>
      {
         const doc = Util.readDoc(target, 'variable/index.html');

         describe('in summary', () =>
         {
            it('has desc', () =>
            {
               Util.findParent(doc, '[data-ice="summary"] [href$="#static-variable-testExperimentalVariable"]',
                '[data-ice="target"]', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="experimental"]', 'this variable is experimental.');
               });
            });
         });

         describe('in details', () =>
         {
            it('has desc.', () =>
            {
               Util.findParent(doc, '[id="static-variable-testExperimentalVariable"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="experimental"]', 'this variable is experimental.');
               });
            });
         });
      });
   }
}
