import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'return', (target) =>
{
   /** @test {MethodDoc#@return} */
   describe(`TestReturnMethod (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'class/test/fixture/package/src/Return/Method.js~TestReturnMethod.html');

      describe('in summary', () =>
      {
         it('has return', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'public method1(): number');
            });

            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method2"]', '[data-ice="target"]',
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
            Util.findParent(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method1(): number');

               Util.assert.includes(doc, '[data-ice="returnParams"] tbody tr', 'number this is return value.');
            });

            Util.findParent(doc, '[id="instance-method-method2"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method2(): TestClassDefinition');

               Util.assert.includes(doc, '[data-ice="returnParams"] tbody tr',
                'TestClassDefinition this is return value.');

               Util.assert.includes(doc, '[data-ice="returnParams"] tbody tr a',
                'class/test/fixture/package/src/class/Definition.js~TestClassDefinition.html', 'href');
            });
         });
      });
   });
});
