import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'link', (target) =>
{
   /** @test {DocResolver#_resolveLink} */
   describe(`testLinkFunction (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'function/index.html');
      });

      it('has link.', () =>
      {
         Util.findParent(doc, '[id="static-modulefunction-testLinkFunction"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc,
             '[data-ice="description"] a[href="class/test/fixture/package/src/link/Class.js~TestLinkClass.html"]',
              'TestLinkClass');

            Util.assert.includes(doc,
             '[data-ice="description"] a[href="class/test/fixture/package/src/link/Class.js~TestLinkClass.html#instance-classmember-p1"]',
              'TestLinkClass#p1');

            Util.assert.includes(doc,
             '[data-ice="description"] a[href="class/test/fixture/package/src/link/Class.js~TestLinkClass.html#instance-classmethod-method1"]',
              'TestLinkClass#method1');
         });
      });
   });
});
