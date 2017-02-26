import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'version', (target) =>
{
   /** @test {AbstractDoc#@version} */
   describe(`TestVersionClass (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'class/test/fixture/package/src/Version/Class.js~TestVersionClass.html');

      describe('in self detail', () =>
      {
         it('has version.', () =>
         {
            Util.assert.includes(doc, '.header-notice [data-ice="version"]', '1.2.3');
         });
      });

      describe('in summary', () =>
      {
         it('has version', () =>
         {
            Util.assert.includes(doc, '[data-ice="constructorSummary"] [data-ice="version"]', '1.2.3');

            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-member-p1"]', '[data-ice="target"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="version"]', '1.2.3');
            });

            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="version"]', '1.2.3');
            });
         });
      });

      describe('in details', () =>
      {
         it('has version', () =>
         {
            Util.findParent(doc, '[id="instance-constructor-constructor"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="version"]', '1.2.3');
            });

            Util.findParent(doc, '[id="instance-member-p1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="version"]', '1.2.3');
            });

            Util.findParent(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="version"]', '1.2.3');
            });
         });
      });
   });
});
