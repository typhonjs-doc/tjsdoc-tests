import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'export', (target) =>
{
   /** @test {DocFactory#_inspectExportNamedDeclaration} */
   describe(`test multiple export (${target.name}):`, () =>
   {
      it('is documented.', () =>
      {
         const doc1 = Util.readDoc(target, 'class/test/fixture/package/src/export/Multiple.js~TestExportMultiple.html');

         Util.assert.includes(doc1, '.header-notice [data-ice="importPath"]',
          `import {TestExportMultiple} from 'tjsdoc-test-fixture/test/fixture/package/src/export/Multiple.js'`);

         const doc2 = Util.readDoc(target, 'variable/index.html');

         Util.findParent(doc2, '[id="static-variable-testExportMultiple"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="importPath"]',
             `import {testExportMultiple} from 'tjsdoc-test-fixture/test/fixture/package/src/export/Multiple.js'`);
         });
      });
   });
});
