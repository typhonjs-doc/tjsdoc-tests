import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document &&
 testConfig.html.document.category.exponentialOperator)
{
   for (const target of testConfig.targets)
   {
      /** @test {ESParser} */
      describe('TestExponentiationOperatorDefinition', () =>
      {
         const doc = Util.readDoc(target,
          'class/test/fixture/package/src/ExponentiationOperator/Definition.js~TestExponentiationOperatorDefinition.html');

         describe('in self detail', () =>
         {
            it('has desc.', () =>
            {
               Util.assert.includes(doc, '.self-detail [data-ice="description"]',
                'this is TestExponentiationOperatorDefinition.');
            });
         });

         describe('in summary', () =>
         {
            it('has desc', () =>
            {
               Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]',
                (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="description"]', 'this is method1.');
               });
            });
         });

         describe('in details', () =>
         {
            it('has desc.', () =>
            {
               Util.findParent(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="description"]', 'this is method1.');
               });
            });
         });
      });
   }
}
