import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'scripts', (target) =>
{
   /** @test {DocBuilder#_buildLayoutDoc} */
   describe(`test config.scripts: ["./test/fixture/script/custom.js"] (${target.name}):`, () =>
   {
      Util.invoke(target, './test/fixture/config/tjsdoc-scripts.json', testConfig.consoleSilent);

      it('has custom script', () =>
      {
         const doc = Util.readDoc(target, 'index.html', 'tjsdoc-scripts');

         Util.assert.includes(doc, '[data-ice="userScript"]', 'user/script/0-custom.js', 'src');
      });
   });
});
