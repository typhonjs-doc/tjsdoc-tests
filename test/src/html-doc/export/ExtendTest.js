import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'export', (target) =>
{
   /** @test {DocResolver#_resolveNecessary} */
   describe(`TestExportExtendsInner (${target.name}):`, () =>
   {
      it('is documented.', () =>
      {
         Util.readDoc(target, 'class/test/fixture/package/src/export/Extends.js~TestExportExtendsInner.html');
      });
   });
});
