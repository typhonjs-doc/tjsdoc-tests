import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.link)
{
   for (const target of testConfig.targets)
   {
      /** @test {DocResolver#_resolveLink} */
      describe('testLinkFunction', () =>
      {
         const doc = Util.readDoc(target, 'function/index.html');

         it('has link.', () =>
         {
            Util.findParent(doc, '[id="static-function-testLinkFunction"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc,
                '[data-ice="description"] a[href="class/test/fixture/package/src/link/Class.js~TestLinkClass.html"]',
                 'TestLinkClass');

               Util.assert.includes(doc,
                '[data-ice="description"] a[href="class/test/fixture/package/src/link/Class.js~TestLinkClass.html#instance-member-p1"]',
                 'TestLinkClass#p1');

               Util.assert.includes(doc,
                '[data-ice="description"] a[href="class/test/fixture/package/src/link/Class.js~TestLinkClass.html#instance-method-method1"]',
                 'TestLinkClass#method1');
            });
         });
      });
   }
}
