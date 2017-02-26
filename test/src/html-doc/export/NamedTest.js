import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.export)
{
   for (const target of testConfig.targets)
   {
      /**
       * @test {AbstractDoc#@_export}
       * @test {ClassDocBuilder@_buildClassDoc}
       */
      describe('TestExportNamed', () =>
      {
         it('has named import path.', () =>
         {
            const doc = Util.readDoc(target,
             'class/test/fixture/package/src/export/Named.js~TestExportNamed.html');

            Util.assert.includes(doc, '.header-notice [data-ice="importPath"]',
             `import {TestExportNamed} from 'tjsdoc-test-fixture/test/fixture/package/src/export/Named.js'`);
         });
      });
   }
}
