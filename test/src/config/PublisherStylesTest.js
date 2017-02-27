import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'styles', (target) =>
{
   /** @test {DocBuilder#_buildLayoutDoc} */
   describe(`test config.styles: ["./test/fixture/style/custom.css"] (${target.name}):`, () =>
   {
      Util.invoke(target, './test/fixture/config/tjsdoc-publisherStyles.json', testConfig.consoleSilent);

      it('has custom style', () =>
      {
         const doc = Util.readDoc(target, 'index.html', 'tjsdoc-publisherStyles');

         Util.assert.includes(doc, '[data-ice="userStyle"]', 'user/css/0-custom.css', 'href');
      });
   });
});
