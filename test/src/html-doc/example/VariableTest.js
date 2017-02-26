import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.example)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@example} */
      describe('testExampleVariable', () =>
      {
         const doc = Util.readDoc(target, 'variable/index.html');

         describe('in details', () =>
         {
            it('has desc.', () =>
            {
               Util.findParent(doc, '[id="static-variable-testExampleVariable"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="exampleDoc"]', 'const foo = 123;');
               });
            });
         });
      });
   }
}
