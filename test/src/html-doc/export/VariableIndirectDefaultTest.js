import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.export)
{
   for (const target of testConfig.targets)
   {
      /** @test {VariableDoc#@_name} */
      describe('test export variable indirect default', () =>
      {
         const doc = Util.readDoc(target, 'variable/index.html');

         it('has default import path with indirect variable definition.', () =>
         {
            Util.findParent(doc, '[id="static-variable-testExportVariableIndirectDefault"]', '[data-ice="detail"]',
             (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="importPath"]',
                `import testExportVariableIndirectDefault from 'tjsdoc-test-fixture/test/fixture/package/src/export/VariableIndirectDefault.js'`);
            });
         });
      });
   }
}
