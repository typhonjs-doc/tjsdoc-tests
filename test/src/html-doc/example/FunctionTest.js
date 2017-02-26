import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.example)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@example} */
      describe('testExampleFunction', () =>
      {
         const doc = Util.readDoc(target, 'function/index.html');

         describe('in details', () =>
         {
            it('has desc.', () =>
            {
               Util.findParent(doc, '[id="static-function-testExampleFunction"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="exampleDoc"]', 'const foo = 123;');
               });
            });
         });
      });
   }
}
