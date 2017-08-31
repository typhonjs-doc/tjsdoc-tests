import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'typedef', (target) =>
{
   /** @test {TypedefDoc} */
   describe(`TestTypedefDefinition (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'typedef/index.html');
      });

      describe('in summary', () =>
      {
         it('has desc', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#static-virtualtypedef-TestTypedefDefinition"]',
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
            Util.findParent(doc, '[id="static-virtualtypedef-TestTypedefDefinition"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public TestTypedefDefinition: Object');

               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="name"]', 'p1');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="type"]', 'number');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="description"]', 'this is p1.');
            });
         });
      });
   });
});
