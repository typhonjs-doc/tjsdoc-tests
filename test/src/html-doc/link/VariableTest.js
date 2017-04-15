import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'link', (target) =>
{
   /** @test {DocResolver#_resolveLink} */
   describe(`testLinkVariable (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'variable/index.html');

      it('has link.', () =>
      {
         Util.findParent(doc, '[id="static-modulevariable-testLinkVariable"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc,
             '[data-ice="description"] a[href="class/test/fixture/package/src/link/Class.js~TestLinkClass.html"]',
              'TestLinkClass');
         });
      });
   });
});
