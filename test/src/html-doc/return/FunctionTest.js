import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'return', (target) =>
{
   /** @test {FunctionDoc#@return} */
   describe(`test return (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'function/index.html');
      });

      describe('testReturnFunction1', () =>
      {
         describe('in summary', () =>
         {
            it('has return.', () =>
            {
               Util.findParent(doc, '[data-ice="summary"] [href$="#static-modulefunction-testReturnFunction1"]',
                '[data-ice="target"]', (doc) =>
               {
                  Util.assert.includes(doc, null, 'public testReturnFunction1(): TestClassDefinition');
               });
            });
         });

         describe('in details', () =>
         {
            it('has return.', () =>
            {
               Util.findParent(doc, '[id="static-modulefunction-testReturnFunction1"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, 'h3', 'public testReturnFunction1(): TestClassDefinition');

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

      describe('testReturnFunction2', () =>
      {
         describe('in summary', () =>
         {
            it('has return.', () =>
            {
               Util.findParent(doc, '[data-ice="summary"] [href$="#static-modulefunction-testReturnFunction2"]',
                '[data-ice="target"]', (doc) =>
               {
                  Util.assert.includes(doc, null, 'public testReturnFunction2(): number');
               });
            });
         });

         describe('in details', () =>
         {
            it('has return.', () =>
            {
               Util.findParent(doc, '[id="static-modulefunction-testReturnFunction2"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, 'h3', 'public testReturnFunction2(): number');

                  Util.assert.includes(doc,
                   '[data-ice="returnParams"] div.bordered-div-row:nth-child(1) [data-ice="returnType"]',
                    'number');
                  Util.assert.includes(doc,
                   '[data-ice="returnParams"] div.bordered-div-row:nth-child(1) [data-ice="returnDescription"]',
                    'this is return value.');
               });
            });
         });
      });
   });
});
