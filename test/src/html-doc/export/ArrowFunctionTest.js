import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'export', (target) =>
{
   /** @test {FunctionDoc#@_name} */
   describe(`test export arrow function (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'function/index.html');

      it('has default import path with direct arrow function definition.', () =>
      {
         Util.findParent(doc, '[id="static-modulefunction-ArrowFunction"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="importPath"]',
             `import ArrowFunction from 'tjsdoc-test-fixture/test/fixture/package/src/export/ArrowFunction.js'`);
         });
      });

      it('has named import path with direct arrow function definition.', () =>
      {
         Util.findParent(doc, '[id="static-modulefunction-testExportArrowFunction2"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="importPath"]',
             `import {testExportArrowFunction2} from 'tjsdoc-test-fixture/test/fixture/package/src/export/ArrowFunction.js'`);
         });
      });

      it('has named import path with undocument', () =>
      {
         Util.findParent(doc, '[id="static-modulefunction-testExportArrowFunction4"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="importPath"]',
             `import {testExportArrowFunction4} from 'tjsdoc-test-fixture/test/fixture/package/src/export/ArrowFunction.js'`);
         });
      });

      it('has named import path with indirect function definition.', () =>
      {
         Util.findParent(doc, '[id="static-modulefunction-testExportArrowFunction5"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="importPath"]',
             `import {testExportArrowFunction5} from 'tjsdoc-test-fixture/test/fixture/package/src/export/ArrowFunction.js'`);
         });
      });
   });
});
