import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'generator', (target) =>
{
   /** @test {AbstractDoc#@_generator} */
   describe(`TestGeneratorMethod (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'class/test/fixture/package/src/Generator/Method.js~TestGeneratorMethod.html');
      });

      describe('in summary', () =>
      {
         it('has generator mark.', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method1"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'public * method1()');
            });
         });
      });

      describe('in details', () =>
      {
         it('has generator mark.', () =>
         {
            Util.findParent(doc, '[id="instance-classmethod-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public * method1()');
            });
         });
      });
   });
});
