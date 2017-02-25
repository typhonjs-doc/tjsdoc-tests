import Util       from 'tjsdoc-test-utils';

import testConfig from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.export)
{
   for (const target of testConfig.targets)
   {
      /** @test {DocResolver#_resolveNecessary} */
      describe('TestExportExtendsInner', () =>
      {
         it('is documented.', () =>
         {
            Util.readDoc(target, 'class/test/fixture/package/src/export/Extends.js~TestExportExtendsInner.html');
         });
      });
   }
}
