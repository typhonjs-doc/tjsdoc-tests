import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'export', (target) =>
{
   /**
    * @test {AbstractDoc#@_export}
    * @test {ClassDocBuilder@_buildClassDoc}
    */
   describe(`test export class indirect default (${target.name}):`, () =>
   {
      it('has default import path with indirect class definition.', () =>
      {
         const doc = Util.readDoc(target,
          'class/test/fixture/package/src/export/ClassIndirectDefault.js~TestExportClassIndirectDefault.html');

         Util.assert.includes(doc, '.header-notice [data-ice="importPath"]',
          `import TestExportClassIndirectDefault from 'tjsdoc-test-fixture/test/fixture/package/src/export/ClassIndirectDefault.js'`);
      });
   });
});
