import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html', 'manual', (target) =>
{
   /** @test {PublishUtil#getIceCapLayout} */
   describe(`test main menu (${target.name}):`, () =>
   {
      it('has menu links in header', () =>
      {
         const doc = Util.readDoc(target, 'index.html');

         Util.find(doc, '[data-ice="mainMenuLinks"]', (doc) =>
         {
            Util.assert.includes(doc, 'a:nth-of-type(2)', 'Home');
            Util.assert.includes(doc, 'a:nth-of-type(2)', './', 'href');

            Util.assert.includes(doc, 'a:nth-of-type(3)', 'Manual');
            Util.assert.includes(doc, 'a:nth-of-type(3)', './manual/index.html', 'href');

            Util.assert.includes(doc, 'a:nth-of-type(4)', 'Reference');
            Util.assert.includes(doc, 'a:nth-of-type(4)', 'identifiers.html', 'href');

            Util.assert.includes(doc, 'a:nth-of-type(5)', 'Source');
            Util.assert.includes(doc, 'a:nth-of-type(5)', 'source.html', 'href');

            Util.assert.includes(doc, 'a:nth-of-type(6)', 'Test');
            Util.assert.includes(doc, 'a:nth-of-type(6)', 'test.html', 'href');

            Util.assert.includes(doc, 'a:nth-of-type(7)', 'Repository');
            Util.assert.includes(doc, 'a:nth-of-type(7)', 'https://github.com/typhonjs-node-tjsdoc/tjsdoc', 'href');
            Util.assert.includes(doc, 'a:nth-of-type(7)', 'repo-url-github', 'class');
         });
      });
   });
});
