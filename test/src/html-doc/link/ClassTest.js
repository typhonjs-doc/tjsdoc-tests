import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.link)
{
   for (const target of testConfig.targets)
   {
      /** @test {DocResolver#_resolveLink} */
      describe('TestLinkClass', () =>
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
            Util.findParent(doc, '[id="instance-constructor-constructor"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc,
                '[data-ice="description"] a[href="function/index.html#static-function-testLinkFunction"]',
                 'testLinkFunction');
            });
         });

         it('has link from member.', () =>
         {
            Util.findParent(doc, '[id="instance-member-p1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc,
                '[data-ice="description"] a[href="function/index.html#static-function-testLinkFunction"]',
                 'testLinkFunction');
            });
         });

         it('has link from method.', () =>
         {
            Util.findParent(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc,
                '[data-ice="description"] a[href="function/index.html#static-function-testLinkFunction"]',
                 'testLinkFunction');
            });
         });
      });
   }
}
