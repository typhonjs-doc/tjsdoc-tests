import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'export', (target) =>
{
   /** @test {FunctionDoc#@_name} */
   describe(`test exported assignment function expression (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'function/index.html');

      it('has default import path with assigned function definition.', () =>
      {
         Util.findParent(doc, '[id="static-function-testExportAssignmentFunction1"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="importPath"]',
             `import testExportAssignmentFunction1 from 'tjsdoc-test-fixture/test/fixture/package/src/export/AssignmentFunctionExpression.js'`);
         });
      });

      it('has default import path with assigned arrow function definition.', () =>
      {
         Util.findParent(doc, '[id="static-function-testExportAssignmentArrowFunction1"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="importPath"]',
             `import testExportAssignmentArrowFunction1 from 'tjsdoc-test-fixture/test/fixture/package/src/export/AssignmentArrowFunctionExpression.js'`);
         });
      });
   });
});
