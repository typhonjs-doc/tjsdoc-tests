import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'export', (target) =>
{
   /**
    * @test {AbstractDoc#@_export}
    * @test {ClassDocBuilder@_buildClassDoc}
    */
   describe(`TestExportDefault (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'class/test/fixture/package/src/export/Default.js~TestExportDefault.html');

      it('has default import path.', () =>
      {
         Util.assert.includes(doc, '.header-notice [data-ice="importPath"]',
          `import TestExportDefault from 'tjsdoc-test-fixture/test/fixture/package/src/export/Default.js'`);
      });
   });
});
