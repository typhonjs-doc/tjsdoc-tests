import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.async)
{
   for (const target of testConfig.targets)
   {
      /** @test {FunctionDoc#_$async} */
      describe('testAsyncFunction', () =>
      {
         const doc = Util.readDoc(target, 'function/index.html');

         describe('in summary', () =>
         {
            it('has async mark', () =>
            {
               Util.findParent(doc, '[data-ice="summary"] [href$="#static-function-testAsyncFunction"]',
                '[data-ice="target"]', (doc) =>
               {
                  Util.assert.includes(doc, null, 'public async testAsyncFunction()');
               });
            });
         });

         describe('in details', () =>
         {
            it('has async mark.', () =>
            {
               Util.findParent(doc, '[id="static-function-testAsyncFunction"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, 'h3', 'public async testAsyncFunction()');
               });
            });
         });
      });
   }
}
