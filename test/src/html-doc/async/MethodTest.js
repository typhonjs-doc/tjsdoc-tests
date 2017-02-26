import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.async)
{
   for (const target of testConfig.targets)
   {
      /** @test {MethodDoc#_$async} */
      describe('TestAsyncMethod', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/Async/Method.js~TestAsyncMethod.html');

         describe('in summary', () =>
         {
            it('has async mark.', () =>
            {
               Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]',
                (doc) =>
               {
                  Util.assert.includes(doc, null, 'public async method1()');
               });
            });
         });

         describe('in details', () =>
         {
            it('has async mark.', () =>
            {
               Util.findParent(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, 'h3', 'public async method1()');
               });
            });
         });
      });
   }
}
