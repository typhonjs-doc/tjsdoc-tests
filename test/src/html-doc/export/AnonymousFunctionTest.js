import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.export)
{
   for (const target of testConfig.targets)
   {
      /** @test {FunctionDoc#@_name} */
      describe('testExportAnonymousFunction', () =>
      {
         const doc = Util.readDoc(target, 'function/index.html');

         describe('in summary', () =>
         {
            it('has desc', () =>
            {
               Util.findParent(doc, '[data-ice="summary"] [href$="#static-function-AnonymousFunction"]',
                '[data-ice="target"]', (doc) =>
               {
                  Util.assert.includes(doc, null, 'public AnonymousFunction()');
               });
            });
         });

         describe('in details', () =>
         {
            it('has desc.', () =>
            {
               Util.findParent(doc, '[id="static-function-AnonymousFunction"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, 'h3', 'public AnonymousFunction()');

                  Util.assert.includes(doc, '[data-ice="importPath"]',
                   `import AnonymousFunction from 'tjsdoc-test-fixture/test/fixture/package/src/export/AnonymousFunction.js'`);
               });
            });
         });
      });
   }
}
