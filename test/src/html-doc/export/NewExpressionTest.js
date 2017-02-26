import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'export', (target) =>
{
   /**
    * @test {DocFactory#_inspectExportDefaultDeclaration}
    * @test {DocFactory#_inspectExportNamedDeclaration}
    */
   describe(`test default export with new expression (${target.name}):`, () =>
   {
      describe('default export', () =>
      {
         it('has instance description', () =>
         {
            const doc = Util.readDoc(target,
             'class/test/fixture/package/src/export/NewExpression.js~TestExportNewExpression.html');

            Util.find(doc, '[data-ice="instanceDocs"]', (doc) =>
            {
               Util.assert.includes(doc, null,
                'You can directly use an instance of this class. testExportNewExpression');

               Util.assert.includes(doc, 'a', 'testExportNewExpression');

               Util.assert.includes(doc, 'a', 'variable/index.html#static-variable-testExportNewExpression', 'href');
            });

            // does not have import path because the class is not clear exported.
            Util.assert.throws(() => Util.assert.includes(doc, '.header-notice [data-ice="importPath"]', 'import'));
         });

         it('has class description', () =>
         {
            const doc = Util.readDoc(target, 'variable/index.html');

            Util.findParent(doc, '[data-ice="summary"] [href$="#static-variable-testExportNewExpression"]',
             '[data-ice="target"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'public testExportNewExpression: TestExportNewExpression');
            });

            Util.findParent(doc, '#static-variable-testExportNewExpression', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public testExportNewExpression: TestExportNewExpression');

               Util.assert.includes(doc, '[data-ice="importPath"]',
                `import testExportNewExpression from 'tjsdoc-test-fixture/test/fixture/package/src/export/NewExpression.js'`);
            });
         });
      });

      describe('named export', () =>
      {
         it('has instance description', () =>
         {
            const doc = Util.readDoc(target,
             'class/test/fixture/package/src/export/NewExpression.js~TestExportNewExpression2.html');

            Util.find(doc, '[data-ice="instanceDocs"]', (doc) =>
            {
               Util.assert.includes(doc, null,
                'You can directly use an instance of this class. testExportNewExpression2');

               Util.assert.includes(doc, 'a', 'testExportNewExpression2');

               Util.assert.includes(doc, 'a', 'variable/index.html#static-variable-testExportNewExpression2', 'href');
            });

            // does not have import path because the class is not clear exported.
            Util.assert.throws(() => Util.assert.includes(doc, '.header-notice [data-ice="importPath"]', 'import'));
         });

         it('has class description', () =>
         {
            const doc = Util.readDoc(target, 'variable/index.html');

            Util.findParent(doc, '[data-ice="summary"] [href$="#static-variable-testExportNewExpression2"]',
             '[data-ice="target"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'public testExportNewExpression2: TestExportNewExpression2');
            });

            Util.findParent(doc, '#static-variable-testExportNewExpression2', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public testExportNewExpression2: TestExportNewExpression2');

               Util.assert.includes(doc, '[data-ice="importPath"]',
                `import {testExportNewExpression2} from 'tjsdoc-test-fixture/test/fixture/package/src/export/NewExpression.js'`);
            });
         });
      });
   });
});
