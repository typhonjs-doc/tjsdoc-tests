import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'scripts', (target) =>
{
   /** @test {DocBuilder#_buildLayoutDoc} */
   describe(`test config.publisherOptions.scripts: ["./test/fixture/scripts/custom.js"] (${target.name}):`, () =>
   {
      before(async () =>
      {
         await Util.invoke(target, './test/fixture/config/tjsdoc-publisherScripts.json',
          { silent: testConfig.consoleSilent });
      });

      it('has custom script', () =>
      {
         const doc = Util.readDoc(target, 'index.html', 'tjsdoc-publisherScripts');

         Util.assert.includes(doc, '[data-ice="userScript"]', 'user/scripts/0-custom.js', 'src');
      });
   });
});
