import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'trailingComma', (target) =>
{
   /** @test {ESParser} */
   describe(`TestTrailingCommaDefinition (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target,
          'class/test/fixture/package/src/TrailingComma/Definition.js~TestTrailingCommaDefinition.html');
      });

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
            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method1"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'public method1(p1: number, p2: string)');
            });

            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method2"]', '[data-ice="target"]',
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
            Util.findParent(doc, '[id="instance-classmethod-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="property"]:nth-of-type(1) [data-ice="name"]', 'p1');
               Util.assert.includes(doc, '[data-ice="property"]:nth-of-type(1) [data-ice="type"]', 'number');
               Util.assert.includes(doc, '[data-ice="property"]:nth-of-type(1) [data-ice="description"]', 'this is p1.');

               Util.assert.includes(doc, '[data-ice="property"]:nth-of-type(2) [data-ice="name"]', 'p2');
               Util.assert.includes(doc, '[data-ice="property"]:nth-of-type(2) [data-ice="type"]', 'string');
               Util.assert.includes(doc, '[data-ice="property"]:nth-of-type(2) [data-ice="description"]', 'this is p2.');
            });

            Util.findParent(doc, '[id="instance-classmethod-method2"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="description"]', 'this is method2.');
            });
         });
      });
   });
});
