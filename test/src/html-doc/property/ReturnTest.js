import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'property', (target) =>
{
   /** @test {AbstractDoc#@property} */
   describe(`TestPropertyReturn (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'class/test/fixture/package/src/Property/Return.js~TestPropertyReturn.html');
      });

      describe('in details', () =>
      {
         it('has desc.', () =>
         {
            Util.findParent(doc, '[id="instance-classmethod-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc,
                '[data-ice="returnProperties"] div.bordered-div-row:nth-child(1) [data-ice="name"]', 'x1');
               Util.assert.includes(doc,
                '[data-ice="returnProperties"] div.bordered-div-row:nth-child(1) [data-ice="type"]', 'number');
               Util.assert.includes(doc,
                '[data-ice="returnProperties"] div.bordered-div-row:nth-child(1) [data-ice="description"]',
                 'this is x1 of return value.');

               Util.assert.includes(doc,
                '[data-ice="returnProperties"] div.bordered-div-row:nth-child(2) [data-ice="name"]', 'x2');
               Util.assert.includes(doc,
                '[data-ice="returnProperties"] div.bordered-div-row:nth-child(2) [data-ice="type"]',
                 'TestClassDefinition');
               Util.assert.includes(doc,
                '[data-ice="returnProperties"] div.bordered-div-row:nth-child(2) [data-ice="description"]',
                 'this is x2 of return value.');

               Util.assert.includes(doc,
                '[data-ice="returnProperties"] div.bordered-div-row:nth-child(2) [data-ice="type"] a',
                 'class/test/fixture/package/src/class/Definition.js~TestClassDefinition.html', 'href');
            });
         });
      });
   });
});
