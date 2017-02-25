import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.export)
{
   for (const target of testConfig.targets)
   {
      /** @test {FunctionDoc#@_name} */
      describe('test export arrow function', () =>
      {
         const doc = Util.readDoc(target, 'function/index.html');

         it('has default import path with direct arrow function definition.', () =>
         {
            Util.findParent(doc, '[id="static-function-ArrowFunction"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="importPath"]',
                `import ArrowFunction from 'tjsdoc-test-fixture/test/fixture/package/src/export/ArrowFunction.js'`);
            });
         });

         it('has named import path with direct arrow function definition.', () =>
         {
            Util.findParent(doc, '[id="static-function-testExportArrowFunction2"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="importPath"]',
                `import {testExportArrowFunction2} from 'tjsdoc-test-fixture/test/fixture/package/src/export/ArrowFunction.js'`);
            });
         });

         it('is not documented with direct arrow function expression', () =>
         {
            Util.assert.throws(() => Util.findParent(doc, '[id="static-function-testExportArrowFunction3"]',
             '[data-ice="detail"]', () => {}));
         });

         it('has named import path with undocument', () =>
         {
            Util.findParent(doc, '[id="static-function-testExportArrowFunction4"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="importPath"]',
                `import {testExportArrowFunction4} from 'tjsdoc-test-fixture/test/fixture/package/src/export/ArrowFunction.js'`);
            });
         });

         it('has named import path with indirect function definition.', () =>
         {
            Util.findParent(doc, '[id="static-function-testExportArrowFunction5"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="importPath"]',
                `import {testExportArrowFunction5} from 'tjsdoc-test-fixture/test/fixture/package/src/export/ArrowFunction.js'`);
            });
         });
      });
   }
}
