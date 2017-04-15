import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'export', (target) =>
{
   /** @test {VariableDoc#@_name} */
   describe(`test export variable (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'variable/index.html');

      it('has default import path with direct variable definition.', () =>
      {
         Util.findParent(doc, '[id="static-moduleassignment-testExportVariable1"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="importPath"]',
             `import testExportVariable1 from 'tjsdoc-test-fixture/test/fixture/package/src/export/Variable.js'`);
         });
      });

      it('has named import path with direct variable definition.', () =>
      {
         Util.findParent(doc, '[id="static-modulevariable-testExportVariable2"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="importPath"]',
             `import {testExportVariable2} from 'tjsdoc-test-fixture/test/fixture/package/src/export/Variable.js'`);
         });
      });

      it('has named import path with none doc comment', () =>
      {
         Util.findParent(doc, '[id="static-modulevariable-testExportVariable4"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="importPath"]',
             `import {testExportVariable4} from 'tjsdoc-test-fixture/test/fixture/package/src/export/Variable.js'`);
         });

         Util.findParent(doc, '[id="static-modulevariable-testExportVariable5"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="importPath"]',
             `import {testExportVariable5} from 'tjsdoc-test-fixture/test/fixture/package/src/export/Variable.js'`);
         });
      });

      it('has named import path with indirect variable definition.', () =>
      {
         Util.findParent(doc, '[id="static-modulevariable-testExportVariable6"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="importPath"]',
             `import {testExportVariable6} from 'tjsdoc-test-fixture/test/fixture/package/src/export/Variable.js'`);
         });
      });

      it('has named import path with unknown type.', () =>
      {
         Util.findParent(doc, '[id="static-modulevariable-testExportVariable7"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="importPath"]',
             `import {testExportVariable7} from 'tjsdoc-test-fixture/test/fixture/package/src/export/Variable.js'`);
         });
      });
   });
});
