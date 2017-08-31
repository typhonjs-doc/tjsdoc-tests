import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'return', (target) =>
{
   /** @test {MethodDoc#@return} */
   describe(`TestReturnMethod (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'class/test/fixture/package/src/Return/Method.js~TestReturnMethod.html');
      });

      describe('in summary', () =>
      {
         it('has return', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method1"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'public method1(): number');
            });

            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method2"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'public method2(): TestClassDefinition');
            });
         });
      });

      describe('in details', () =>
      {
         it('has desc.', () =>
         {
            Util.findParent(doc, '[id="instance-classmethod-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method1(): number');

               // Util.assert.includes(doc, '[data-ice="returnParams"] tbody tr', 'number this is return value.');

               Util.assert.includes(doc,
                '[data-ice="returnParams"] div.bordered-div-row:nth-child(1) [data-ice="returnType"]',
                 'number');
               Util.assert.includes(doc,
                '[data-ice="returnParams"] div.bordered-div-row:nth-child(1) [data-ice="returnDescription"]',
                 'this is return value.');
            });

            Util.findParent(doc, '[id="instance-classmethod-method2"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method2(): TestClassDefinition');

               Util.assert.includes(doc,
                '[data-ice="returnParams"] div.bordered-div-row:nth-child(1) [data-ice="returnType"]',
                 'TestClassDefinition');
               Util.assert.includes(doc,
                '[data-ice="returnParams"] div.bordered-div-row:nth-child(1) [data-ice="returnDescription"]',
                 'this is return value.');

               Util.assert.includes(doc,
                '[data-ice="returnParams"] div.bordered-div-row:nth-child(1) [data-ice="returnType"] a',
                 'class/test/fixture/package/src/class/Definition.js~TestClassDefinition.html', 'href');
            });
         });
      });
   });
});
