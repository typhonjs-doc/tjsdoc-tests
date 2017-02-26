import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.typedef)
{
   for (const target of testConfig.targets)
   {
      /** @test {TypedefDoc} */
      describe('TestTypedefDefinition', () =>
      {
         const doc = Util.readDoc(target, 'typedef/index.html');

         describe('in summary', () =>
         {
            it('has desc', () =>
            {
               Util.findParent(doc, '[data-ice="summary"] [href$="#static-typedef-TestTypedefDefinition"]',
                '[data-ice="target"]', (doc) =>
               {
                  Util.assert.includes(doc, null, 'public TestTypedefDefinition: Object');
               });
            });
         });

         describe('in details', () =>
         {
            it('has desc.', () =>
            {
               Util.findParent(doc, '[id="static-typedef-TestTypedefDefinition"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, 'h3', 'public TestTypedefDefinition: Object');
                  Util.assert.includes(doc, '.params [data-ice="property"]:nth-child(1)', 'p1 number this is p1.');
               });
            });
         });
      });
   }
}
