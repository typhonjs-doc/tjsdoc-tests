import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.desc)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@desc} */
      describe('TestDescClass', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/desc/Class.js~TestDescClass.html');

         describe('in self detail', () =>
         {
            it('has desc.', () =>
            {
               Util.assert.includes(doc, '.self-detail [data-ice="description"]', 'this is TestDescClass.');
            });
         });

         describe('in summary', () =>
         {
            it('has desc', () =>
            {
               Util.assert.includes(doc, '[data-ice="constructorSummary"] [data-ice="description"]', 'this is constructor.');

               Util.findParent(doc, '[data-ice="summary"] [href$="#instance-member-p1"]', '[data-ice="target"]',
                (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="description"]', 'this is p1.');
               });

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
               Util.findParent(doc, '[id="instance-constructor-constructor"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="description"]', 'this is constructor.');
               });

               Util.findParent(doc, '[id="instance-member-p1"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="description"]', 'this is p1.');
               });

               Util.findParent(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="description"]', 'this is method1.');
               });
            });
         });
      });
   }
}
