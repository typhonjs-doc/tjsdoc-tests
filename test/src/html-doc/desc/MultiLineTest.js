import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'desc', (target) =>
{
   /** @test {AbstractDoc#@desc} */
   describe(`TestDescMultiLine (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target,
       'class/test/fixture/package/src/desc/MultiLine.js~TestDescMultiLine.html');

      describe('in summary', () =>
      {
         it('has first sentence desc', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="description"]', 'this is method1.');
            });

            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method2"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="description"]', 'this is method2.');
            });

            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method3"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="description"]', 'this is method3.');
            });
         });
      });

      describe('in details:', () =>
      {
         it('has all sentence desc.', () =>
         {
            Util.findParent(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="description"]', 'this is method1. this is second line.');
            });

            Util.findParent(doc, '[id="instance-method-method2"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="description"]', 'this is method2. this is second sentence.');
            });

            Util.findParent(doc, '[id="instance-method-method3"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="description"]', 'this is method3. this is second sentence.');
            });
         });
      });
   });
});
