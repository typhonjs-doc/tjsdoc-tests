import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.see)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@see} */
      describe('testSeeVariable', () =>
      {
         const doc = Util.readDoc(target, 'variable/index.html');

         it('has see.', () =>
         {
            Util.findParent(doc, '[id="static-variable-testSeeVariable"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="see"] a[href="http://example.com"]', 'http://example.com');
            });
         });
      });
   }
}
