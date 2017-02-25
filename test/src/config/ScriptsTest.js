import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

if (testConfig.category.config && testConfig.config.tests.scripts)
{
   for (const target of testConfig.targets)
   {
      /** @test {DocBuilder#_buildLayoutDoc} */
      describe('test config.scripts: ["./test/fixture/script/custom.js"]', () =>
      {
         Util.invoke(target, './test/fixture/config/tjsdoc-scripts.json');

         it('has custom script', () =>
         {
            const doc = Util.readDoc(target, 'index.html', 'tjsdoc-scripts');

            Util.assert.includes(doc, '[data-ice="userScript"]', 'user/script/0-custom.js', 'src');
         });
      });
   }
}
