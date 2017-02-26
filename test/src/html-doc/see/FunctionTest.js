import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.see)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@see} */
      describe('testSeeFunction', () =>
      {
         const doc = Util.readDoc(target, 'function/index.html');

         it('has see.', () =>
         {
            Util.findParent(doc, '[id="static-function-testSeeFunction"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="see"] a[href="http://example.com"]', 'http://example.com');
            });
         });
      });
   }
}
