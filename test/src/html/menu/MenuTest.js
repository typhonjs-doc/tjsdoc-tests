import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html', 'manual', (target) =>
{
   /** @test {PublishUtil#getIceCapLayout} */
   describe(`test main menu (${target.name}):`, () =>
   {
      it('has main toolbar links in header', () =>
      {
         const doc = Util.readDoc(target, 'index.html');

         Util.find(doc, '[data-ice="mainToolbarItems"]', (doc) =>
         {
            Util.assert.includes(doc, 'a:nth-of-type(3)', 'https://github.com/typhonjs-node-tjsdoc/tjsdoc', 'href');
            Util.assert.includes(doc, 'a:nth-of-type(3)', 'fa-icons fa-github', 'class');

            Util.assert.includes(doc, 'a:nth-of-type(4)', 'https://tjsdoc.typhonjs.io/', 'href');
            Util.assert.includes(doc, 'a:nth-of-type(4)', 'fa-icons fa-external-link-square', 'class');

            Util.assert.includes(doc, 'a:nth-of-type(5)', 'material-icons tjsdoc-toolbar-button-overflow', 'class');
         });
      });

      it('has main toolbar overflow links in drop down list', () =>
      {
         const doc = Util.readDoc(target, 'index.html');

         Util.find(doc, '[data-ice="mainToolbarOverflowItems"]', (doc) =>
         {
            Util.assert.includes(doc, 'li:nth-of-type(1)', 'Manual');
            Util.assert.includes(doc, 'li:nth-of-type(1)', 'mdc-list-item', 'class');
            Util.assert.includes(doc, 'li:nth-of-type(1)', './manual/index.html', 'data-href');

            Util.assert.includes(doc, 'li:nth-of-type(2)', 'mdc-list-divider', 'class');

            Util.assert.includes(doc, 'li:nth-of-type(3)', 'Reference');
            Util.assert.includes(doc, 'li:nth-of-type(3)', 'mdc-list-item', 'class');
            Util.assert.includes(doc, 'li:nth-of-type(3)', 'identifiers.html', 'data-href');

            Util.assert.includes(doc, 'li:nth-of-type(4)', 'mdc-list-divider', 'class');

            Util.assert.includes(doc, 'li:nth-of-type(5)', 'Doc Coverage');
            Util.assert.includes(doc, 'li:nth-of-type(5)', 'mdc-list-item', 'class');
            Util.assert.includes(doc, 'li:nth-of-type(5)', 'source.html', 'data-href');

            Util.assert.includes(doc, 'li:nth-of-type(6)', 'mdc-list-divider', 'class');

            Util.assert.includes(doc, 'li:nth-of-type(7)', 'Test');
            Util.assert.includes(doc, 'li:nth-of-type(7)', 'mdc-list-item', 'class');
            Util.assert.includes(doc, 'li:nth-of-type(7)', 'test.html', 'data-href');
         });
      });
   });
});
