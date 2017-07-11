import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'external', (target) =>
{
   /** @test {ExternalDoc#@_name} */
   describe(`TestExternalDefinition (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'index.html');
      });

      it('has external document.', () =>
      {
         Util.findParent(doc, '[data-ice="nav"] [data-ice="doc"] a[href="http://example.com"]', '[data-ice="doc"]',
          (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="name"]', 'TestExternalDefinition');
         });
      });
   });
});
