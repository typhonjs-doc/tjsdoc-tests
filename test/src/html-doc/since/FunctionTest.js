import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.since)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@since} */
      describe('testSinceFunction', () =>
      {
         const doc = Util.readDoc(target, 'function/index.html');

         describe('in summary', () =>
         {
            it('has since.', () =>
            {
               Util.findParent(doc, '[data-ice="summary"] [href$="#static-function-testSinceFunction"]',
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
               Util.findParent(doc, '[id="static-function-testSinceFunction"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="since"]', 'since 1.2.3');
               });
            });
         });
      });
   }
}
