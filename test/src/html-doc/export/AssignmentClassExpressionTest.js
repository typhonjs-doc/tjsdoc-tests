import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'export', (target) =>
{
   /**
    */
   describe(`test exported assignment class expression (${target.name}):`, () =>
   {
      it('has default import path with assigned class definition.', () =>
      {
         const doc = Util.readDoc(target,
          'class/test/fixture/package/src/export/AssignmentClassExpression.js~TestExportAssignmentClass1.html');

         Util.assert.includes(doc, '.header-notice [data-ice="importPath"]',
          `import TestExportAssignmentClass1 from 'tjsdoc-test-fixture/test/fixture/package/src/export/AssignmentClassExpression.js'`);
      });
   });
});
