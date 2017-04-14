import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'jsx', (target) =>
{
   /** @test {ESParser} */
   describe(`TestJSXDefinition (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'class/test/fixture/package/src/JSX/Definition.js~TestJSXDefinition.html');

      describe('in self detail', () =>
      {
         it('has desc.', () =>
         {
            Util.assert.includes(doc, '.self-detail [data-ice="description"]', 'this is TestJSXDefinition.');
         });
      });

      describe('in summary', () =>
      {
         it('has desc', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method1"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="description"]', 'this is method1.');
            });
         });
      });

      describe('in details', () =>
      {
         it('has desc.', () =>
         {
            Util.findParent(doc, '[id="instance-classmethod-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="description"]', 'this is method1.');
            });
         });
      });
   });
});
