import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.emits)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@emits} */
      describe('testEmitsFunction', () =>
      {
         const doc = Util.readDoc(target, 'function/index.html');

         describe('in details', () =>
         {
            it('has desc.', () =>
            {
               Util.findParent(doc, '[id="static-function-testEmitsFunction"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="emitName"] [href$="TestEmitsFunctionEvent.html"]',
                   'TestEmitsFunctionEvent');
               });
            });
         });
      });
   }
}
