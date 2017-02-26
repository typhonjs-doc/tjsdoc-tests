import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.export)
{
   for (const target of testConfig.targets)
   {
      /** @test {FunctionDoc#@_name} */
      describe('test export function indirect default', () =>
      {
         const doc = Util.readDoc(target, 'function/index.html');
         it('has default import path with indirect function definition', () =>
         {
            Util.findParent(doc, '[id="static-function-testExportFunctionIndirectDefault"]', '[data-ice="detail"]',
             (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="importPath"]',
                `import testExportFunctionIndirectDefault from 'tjsdoc-test-fixture/test/fixture/package/src/export/FunctionIndirectDefault.js'`);
            });
         });
      });
   }
}
