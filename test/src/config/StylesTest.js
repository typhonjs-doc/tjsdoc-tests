import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

if (testConfig.category.config && testConfig.config.tests.styles)
{
   for (const target of testConfig.targets)
   {
      /** @test {DocBuilder#_buildLayoutDoc} */
      describe('test config.styles: ["./test/fixture/style/custom.css"]', () =>
      {
         Util.invoke(target, './test/fixture/config/tjsdoc-styles.json');

         it('has custom style', () =>
         {
            const doc = Util.readDoc(target, 'index.html', 'tjsdoc-styles');

            Util.assert.includes(doc, '[data-ice="userStyle"]', 'user/css/0-custom.css', 'href');
         });
      });
   }
}
