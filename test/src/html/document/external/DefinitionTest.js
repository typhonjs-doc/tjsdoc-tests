import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.external)
{
   for (const target of testConfig.targets)
   {
      /** @test {ExternalDoc#@_name} */
      describe('TestExternalDefinition', () =>
      {
         const doc = Util.readDoc(target, 'index.html');

         it('has external document.', () =>
         {
            Util.findParent(doc, '[data-ice="nav"] [data-ice="doc"] a[href="http://example.com"]', '[data-ice="doc"]',
             (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="name"]', 'TestExternalDefinition');
            });
         });
      });
   }
}
