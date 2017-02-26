import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.deprecated)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@deprecated} */
      describe('testDeprecatedFunction:', () =>
      {
         const doc = Util.readDoc(target, 'function/index.html');

         describe('in summary', () =>
         {
            it('has deprecated message.', () =>
            {
               Util.find(doc,
                '[data-ice="summary"] [href="function/index.html#static-function-testDeprecatedFunction"]', (doc) =>
               {
                  doc = doc.parents('[data-ice="target"]');
                  Util.assert.includes(doc, '[data-ice="deprecated"]', 'this function was deprecated.');
               });
            });
         });

         describe('in details', () =>
         {
            it('has deprecated message of member and method.', () =>
            {
               Util.find(doc, '[id="static-function-testDeprecatedFunction"]', (doc) =>
               {
                  doc = doc.parents('[data-ice="detail"]');
                  Util.assert.includes(doc, '[data-ice="deprecated"]', 'this function was deprecated.');
               });
            });
         });
      });
   }
}
