import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'export', (target) =>
{
   /**
    * @test {DocFactory#_inspectExportDefaultDeclaration}
    * @test {DocFactory#_inspectExportNamedDeclaration}
    */
   describe(`test default export with new expression and property (${target.name}):`, () =>
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

            Util.assert.includes(doc, 'a', 'variable/index.html#static-modulevariable-testExportNewExpressionProperty',
             'href');
         });

         // does not have import path because the class is not clear exported.
         Util.assert.throws(() => Util.assert.includes(doc, '.header-notice [data-ice="importPath"]', 'import'));
      });

      it('has class description', () =>
      {
         const doc = Util.readDoc(target, 'variable/index.html');

         Util.findParent(doc, '[data-ice="summary"] [href$="#static-modulevariable-testExportNewExpressionProperty"]',
          '[data-ice="target"]', (doc) =>
         {
            Util.assert.includes(doc, null, 'public testExportNewExpressionProperty: TestExportNewExpressionProperty');
         });

         Util.findParent(doc, '#static-modulevariable-testExportNewExpressionProperty', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, 'h3', 'public testExportNewExpressionProperty: TestExportNewExpressionProperty');

            Util.assert.includes(doc, '[data-ice="importPath"]',
             `import testExportNewExpressionProperty from 'tjsdoc-test-fixture/test/fixture/package/src/export/NewExpressionProperty.js'`);
         });
      });
   });
});
