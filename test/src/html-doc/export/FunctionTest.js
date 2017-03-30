import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'export', (target) =>
{
   /** @test {FunctionDoc#@_name} */
   describe(`test export function (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'function/index.html');

      it('has default import path with direct function definition.', () =>
      {
         Util.findParent(doc, '[id="static-function-testExportFunction1"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="importPath"]',
             `import testExportFunction1 from 'tjsdoc-test-fixture/test/fixture/package/src/export/Function.js'`);
         });
      });

      it('has named import path with direct function definition.', () =>
      {
         Util.findParent(doc, '[id="static-function-testExportFunction2"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="importPath"]',
             `import {testExportFunction2} from 'tjsdoc-test-fixture/test/fixture/package/src/export/Function.js'`);
         });
      });

      it('has named import path with direct function expression', () =>
      {
         Util.findParent(doc, '[id="static-function-testExportFunction3"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="importPath"]',
             `import {testExportFunction3} from 'tjsdoc-test-fixture/test/fixture/package/src/export/Function.js'`);
         });
      });

      it('has named import path with direct generator function definition.', () =>
      {
         Util.findParent(doc, '[id="static-function-testExportFunction6"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="importPath"]',
             `import {testExportFunction6} from 'tjsdoc-test-fixture/test/fixture/package/src/export/Function.js'`);
         });
      });

      it('has named import path with undocument', () =>
      {
         Util.findParent(doc, '[id="static-function-testExportFunction7"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="importPath"]',
             `import {testExportFunction7} from 'tjsdoc-test-fixture/test/fixture/package/src/export/Function.js'`);
         });
      });

      it('has named import path with indirect function definition.', () =>
      {
         Util.findParent(doc, '[id="static-function-testExportFunction8"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="importPath"]',
             `import {testExportFunction8} from 'tjsdoc-test-fixture/test/fixture/package/src/export/Function.js'`);
         });
      });
   });
});
