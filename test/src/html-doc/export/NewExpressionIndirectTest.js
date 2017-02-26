import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.export)
{
   for (const target of testConfig.targets)
   {
      /**
       * @test {DocFactory#_inspectExportDefaultDeclaration}
       * @test {DocFactory#_inspectExportNamedDeclaration}
       */
      describe('test default export with new expression and indirect.', () =>
      {
         it('has instance description', () =>
         {
            const doc = Util.readDoc(target,
             'class/test/fixture/package/src/export/NewExpressionIndirect.js~TestExportNewExpressionIndirect.html');

            Util.find(doc, '[data-ice="instanceDocs"]', (doc) =>
            {
               Util.assert.includes(doc, null,
                'You can directly use an instance of this class. testExportNewExpressionIndirect');

               Util.assert.includes(doc, 'a', 'testExportNewExpressionIndirect');

               Util.assert.includes(doc, 'a', 'variable/index.html#static-variable-testExportNewExpressionIndirect', 'href');
            });

            // does not have import path because the class is not clear exported.
            Util.assert.throws(() => Util.assert.includes(doc, '.header-notice [data-ice="importPath"]', 'import'));
         });

         it('has class description', () =>
         {
            const doc = Util.readDoc(target, 'variable/index.html');

            Util.findParent(doc, '[data-ice="summary"] [href$="#static-variable-testExportNewExpressionIndirect"]',
             '[data-ice="target"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'public testExportNewExpressionIndirect: TestExportNewExpressionIndirect');
            });

            Util.findParent(doc, '#static-variable-testExportNewExpressionIndirect', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public testExportNewExpressionIndirect: TestExportNewExpressionIndirect');
               Util.assert.includes(doc, '[data-ice="importPath"]',
                `import testExportNewExpressionIndirect from 'tjsdoc-test-fixture/test/fixture/package/src/export/NewExpressionIndirect.js'`);
            });
         });
      });
   }
}
