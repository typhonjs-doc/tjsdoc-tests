import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'link', (target) =>
{
   /** @test {DocResolver#_resolveLink} */
   describe(`TestLinkClass (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'class/test/fixture/package/src/link/Class.js~TestLinkClass.html');

      it('has link from class.', () =>
      {
         Util.assert.includes(doc,
          '.self-detail [data-ice="description"] a[href="function/index.html#static-function-testLinkFunction"]',
           'testLinkFunction');
      });

      it('has link from constructor.', () =>
      {
         Util.findParent(doc, '[id="instance-classmethod-constructor"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc,
             '[data-ice="description"] a[href="function/index.html#static-function-testLinkFunction"]',
              'testLinkFunction');
         });
      });

      it('has link from member.', () =>
      {
         Util.findParent(doc, '[id="instance-classmember-p1"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc,
             '[data-ice="description"] a[href="function/index.html#static-function-testLinkFunction"]',
              'testLinkFunction');
         });
      });

      it('has link from method.', () =>
      {
         Util.findParent(doc, '[id="instance-classmethod-method1"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc,
             '[data-ice="description"] a[href="function/index.html#static-function-testLinkFunction"]',
              'testLinkFunction');
         });
      });
   });
});
