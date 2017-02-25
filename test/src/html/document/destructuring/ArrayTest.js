import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.destructuring)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@param} */
      describe('TestDestructuringArray', () =>
      {
         const doc = Util.readDoc(target,
          'class/test/fixture/package/src/Destructuring/Array.js~TestDestructuringArray.html');

         describe('in summary', () =>
         {
            it('has array destructuring', () =>
            {
               Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]',
                (doc) =>
               {
                  Util.assert.includes(doc, null, 'method1(p: number[])');
               });
            });
         });

         describe('in details', () =>
         {
            it('has array destructuring.', () =>
            {
               Util.findParent(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, 'h3', 'method1(p: number[])');
                  Util.assert.includes(doc, 'table.params', 'p number[] this is p.');
                  Util.assert.includes(doc, 'table.params', 'p[0] number this is first of p.');
                  Util.assert.includes(doc, 'table.params', 'p[1] number this is second of p.');
               });
            });
         });
      });
   }
}
