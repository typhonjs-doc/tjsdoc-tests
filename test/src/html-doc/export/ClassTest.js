import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'export', (target) =>
{
   /**
    * @test {AbstractDoc#@_export}
    * @test {ClassDocBuilder@_buildClassDoc}
    */
   describe(`test export class (${target.name}):`, () =>
   {
      it('has default import path with direct class definition.', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/export/Class.js~TestExportClass1.html');

         Util.assert.includes(doc, '.header-notice [data-ice="importPath"]',
          `import TestExportClass1 from 'tjsdoc-test-fixture/test/fixture/package/src/export/Class.js'`);
      });

      it('has named import path with direct.', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/export/Class.js~TestExportClass2.html');

         Util.assert.includes(doc, '.header-notice [data-ice="importPath"]',
          `import {TestExportClass2} from 'tjsdoc-test-fixture/test/fixture/package/src/export/Class.js'`);
      });

      it('has named import path with indirect class definition', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/export/Class.js~TestExportClass3.html');

         Util.assert.includes(doc, '.header-notice [data-ice="importPath"]',
          `import {TestExportClass3} from 'tjsdoc-test-fixture/test/fixture/package/src/export/Class.js'`);
      });

      it('has named import path with indirect class expression', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/export/Class.js~TestExportClass4.html');

         Util.assert.includes(doc, '.header-notice [data-ice="importPath"]',
          `import {TestExportClass4} from 'tjsdoc-test-fixture/test/fixture/package/src/export/Class.js'`);
      });

      it('has named import path with undocument', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/export/Class.js~TestExportClass5.html');

         Util.assert.includes(doc, '.header-notice [data-ice="importPath"]',
          `import {TestExportClass5} from 'tjsdoc-test-fixture/test/fixture/package/src/export/Class.js'`);
      });
   });
});
