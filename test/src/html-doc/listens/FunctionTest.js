import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.listens)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@listens} */
      describe('testListensFunction', () =>
      {
         const doc = Util.readDoc(target, 'function/index.html');

         it('has listens.', () =>
         {
            Util.findParent(doc, '[id="static-function-testListensFunction"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc,
                '[data-ice="listen"] a[href="class/test/fixture/package/src/listens/Function.js~TestListensFunctionEvent.html"]',
                 'TestListensFunctionEvent');
            });
         });
      });
   }
}
