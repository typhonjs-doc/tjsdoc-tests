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
      describe('test default export with new expression and property.', () =>
      {
         it('has instance description', () =>
         {
            const doc = Util.readDoc(target,
             'class/test/fixture/package/src/export/NewExpressionProperty.js~TestExportNewExpressionProperty.html');

            Util.find(doc, '[data-ice="instanceDocs"]', (doc) =>
            {
               Util.assert.includes(doc, null,
                'You can directly use an instance of this class. testExportNewExpressionProperty');

               Util.assert.includes(doc, 'a', 'testExportNewExpressionProperty');

               Util.assert.includes(doc, 'a', 'variable/index.html#static-variable-testExportNewExpressionProperty', 'href');
            });

            // does not have import path because the class is not clear exported.
            Util.assert.throws(() => Util.assert.includes(doc, '.header-notice [data-ice="importPath"]', 'import'));
         });

         it('has class description', () =>
         {
            const doc = Util.readDoc(target, 'variable/index.html');

            Util.findParent(doc, '[data-ice="summary"] [href$="#static-variable-testExportNewExpressionProperty"]',
             '[data-ice="target"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'public testExportNewExpressionProperty: TestExportNewExpressionProperty');
            });

            Util.findParent(doc, '#static-variable-testExportNewExpressionProperty', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public testExportNewExpressionProperty: TestExportNewExpressionProperty');

               Util.assert.includes(doc, '[data-ice="importPath"]',
                `import testExportNewExpressionProperty from 'tjsdoc-test-fixture/test/fixture/package/src/export/NewExpressionProperty.js'`);
            });
         });
      });
   }
}
