import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.export)
{
   for (const target of testConfig.targets)
   {
      /** @test {FunctionDoc#@_name} */
      describe('test export function', () =>
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

         it('is not documented with direct function definition', () =>
         {
            Util.assert.throws(() => Util.findParent(doc, '[id="static-function-testExportFunction4"]',
             '[data-ice="detail"]', () => {}));
         });

         it('is not documented with direct function expression', () =>
         {
            Util.assert.throws(() => Util.findParent(doc, '[id="static-function-testExportFunction5"]',
             '[data-ice="detail"]', () => {}));
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
   }
}
