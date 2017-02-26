import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.version)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@version} */
      describe('testVersionVariable', () =>
      {
         const doc = Util.readDoc(target, 'variable/index.html');

         describe('in summary', () =>
         {
            it('has version', () =>
            {
               Util.findParent(doc, '[data-ice="summary"] [href$="#static-variable-testVersionVariable"]',
                '[data-ice="target"]', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="version"]', '1.2.3');
               });
            });
         });

         describe('in details', () =>
         {
            it('has desc.', () =>
            {
               Util.findParent(doc, '[id="static-variable-testVersionVariable"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="version"]', '1.2.3');
               });
            });
         });
      });
   }
}