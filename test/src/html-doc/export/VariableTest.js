import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.export)
{
   for (const target of testConfig.targets)
   {
      /** @test {VariableDoc#@_name} */
      describe('test export variable', () =>
      {
         const doc = Util.readDoc(target, 'variable/index.html');

         it('has default import path with direct variable definition.', () =>
         {
            Util.findParent(doc, '[id="static-variable-testExportVariable1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="importPath"]',
                `import testExportVariable1 from 'tjsdoc-test-fixture/test/fixture/package/src/export/Variable.js'`);
            });
         });

         it('has named import path with direct variable definition.', () =>
         {
            Util.findParent(doc, '[id="static-variable-testExportVariable2"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="importPath"]',
                `import {testExportVariable2} from 'tjsdoc-test-fixture/test/fixture/package/src/export/Variable.js'`);
            });
         });

         it('is not documented with direct variable definition', () =>
         {
            Util.assert.throws(() => Util.findParent(doc, '[id="static-variable-testExportVariable3"]',
             '[data-ice="detail"]', () => {}));
         });

         it('has named import path with none doc comment', () =>
         {
            Util.findParent(doc, '[id="static-variable-testExportVariable4"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="importPath"]',
                `import {testExportVariable4} from 'tjsdoc-test-fixture/test/fixture/package/src/export/Variable.js'`);
            });

            Util.findParent(doc, '[id="static-variable-testExportVariable5"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="importPath"]',
                `import {testExportVariable5} from 'tjsdoc-test-fixture/test/fixture/package/src/export/Variable.js'`);
            });
         });

         it('has named import path with indirect variable definition.', () =>
         {
            Util.findParent(doc, '[id="static-variable-testExportVariable6"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="importPath"]',
                `import {testExportVariable6} from 'tjsdoc-test-fixture/test/fixture/package/src/export/Variable.js'`);
            });
         });

         it('has named import path with unknown type.', () =>
         {
            Util.findParent(doc, '[id="static-variable-testExportVariable7"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="importPath"]',
                `import {testExportVariable7} from 'tjsdoc-test-fixture/test/fixture/package/src/export/Variable.js'`);
            });
         });
      });
   }
}
