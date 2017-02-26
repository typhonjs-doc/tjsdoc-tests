import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'unexportIdentifier', (target) =>
{
   /** @test {DocResolver#_resolveUnexportIdentifier} */
   describe(`test config.unexportIdentifier: true (${target.name}):`, () =>
   {
      Util.invoke(target, './test/fixture/config/tjsdoc-unexportIdentifier.json');

      it('has unexport identifier', () =>
      {
         const doc = Util.readDoc(target,
          'class/test/fixture/package/src/export/Class.js~TestExportClass6.html', 'tjsdoc-unexportIdentifier');

         Util.assert.includes(doc, '.self-detail [data-ice="name"]', 'TestExportClass6');
         Util.assert.notIncludes(doc, '.header-notice', 'import');
      });
   });
});
