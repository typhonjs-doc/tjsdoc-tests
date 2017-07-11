import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'version', (target) =>
{
   /** @test {AbstractDoc#@version} */
   describe(`TestVersionClass (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'class/test/fixture/package/src/Version/Class.js~TestVersionClass.html');
      });

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

            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmember-p1"]', '[data-ice="target"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="version"]', '1.2.3');
            });

            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method1"]', '[data-ice="target"]',
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
            Util.findParent(doc, '[id="instance-classmethod-constructor"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="version"]', '1.2.3');
            });

            Util.findParent(doc, '[id="instance-classmember-p1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="version"]', '1.2.3');
            });

            Util.findParent(doc, '[id="instance-classmethod-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="version"]', '1.2.3');
            });
         });
      });
   });
});
