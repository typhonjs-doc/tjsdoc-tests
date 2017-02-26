import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.link)
{
   for (const target of testConfig.targets)
   {
      /** @test {DocResolver#_resolveLink} */
      describe('testLinkVariable', () =>
      {
         const doc = Util.readDoc(target, 'variable/index.html');

         it('has link.', () =>
         {
            Util.findParent(doc, '[id="static-variable-testLinkVariable"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc,
                '[data-ice="description"] a[href="class/test/fixture/package/src/link/Class.js~TestLinkClass.html"]',
                 'TestLinkClass');
            });
         });
      });
   }
}
