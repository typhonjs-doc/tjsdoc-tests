import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.trailingComma)
{
   for (const target of testConfig.targets)
   {
      /** @test {ESParser} */
      describe('TestTrailingCommaDefinition', () =>
      {
         const doc = Util.readDoc(target,
          'class/test/fixture/package/src/TrailingComma/Definition.js~TestTrailingCommaDefinition.html');

         describe('in self detail', () =>
         {
            it('has desc.', () =>
            {
               Util.assert.includes(doc, '.self-detail [data-ice="description"]', 'this is TestTrailingCommaDefinition.');
            });
         });

         describe('in summary', () =>
         {
            it('has desc', () =>
            {
               Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]',
                (doc) =>
               {
                  Util.assert.includes(doc, null, 'public method1(p1: number, p2: string)');
               });

               Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method2"]', '[data-ice="target"]',
                (doc) =>
               {
                  Util.assert.includes(doc, null, 'public method2()');
               });
            });
         });

         describe('in details', () =>
         {
            it('has desc.', () =>
            {
               Util.findParent(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, '.params [data-ice="property"]:nth-of-type(1)', 'p1 number this is p1.');
                  Util.assert.includes(doc, '.params [data-ice="property"]:nth-of-type(2)', 'p2 string this is p2.');
               });

               Util.findParent(doc, '[id="instance-method-method2"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="description"]', 'this is method2.');
               });
            });
         });
      });
   }
}
