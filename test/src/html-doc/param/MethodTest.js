import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'param', (target) =>
{
   /** @test {AbstractDoc#@desc} */
   describe(`TestParamMethod (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'class/test/fixture/package/src/Param/Method.js~TestParamMethod.html');
      });

      describe('in summary', () =>
      {
         it('has desc', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method1"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'public method1(p1: number, p2: TestClassDefinition)');
            });
         });
      });

      describe('in details', () =>
      {
         it('has desc.', () =>
         {
            Util.findParent(doc, '[id="instance-classmethod-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method1(p1: number, p2: TestClassDefinition)');

               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="name"]', 'p1');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="type"]', 'number');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="description"]', 'this is p1.');

               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(2) [data-ice="name"]', 'p2');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(2) [data-ice="type"]', 'TestClassDefinition');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(2) [data-ice="description"]', 'this is p2.');

               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(2) [data-ice="type"] a',
                'class/test/fixture/package/src/class/Definition.js~TestClassDefinition.html', 'href');
            });
         });
      });
   });
});
