import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'since', (target) =>
{
   /** @test {AbstractDoc#@since} */
   describe(`TestSinceClass (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'class/test/fixture/package/src/Since/Class.js~TestSinceClass.html');
      });

      it('has since at class.', () =>
      {
         Util.assert.includes(doc, '.header-notice [data-ice="since"]', 'since 1.2.3');
      });

      describe('in summary', () =>
      {
         it('has since at constructor.', () =>
         {
            Util.findParent(doc, '[href$="#instance-classmethod-constructor"]', '[data-ice="target"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="since"]', 'since 1.2.3');
            });
         });

         it('has since at member.', () =>
         {
            Util.findParent(doc, '[href$="#instance-classmember-p1"]', '[data-ice="target"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="since"]', 'since 1.2.3');
            });
         });

         it('has since at method.', () =>
         {
            Util.findParent(doc, '[href$="#instance-classmethod-method1"]', '[data-ice="target"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="since"]', 'since 1.2.3');
            });
         });
      });

      describe('in detail', () =>
      {
         it('has since at constructor.', () =>
         {
            Util.findParent(doc, '[id="instance-classmethod-constructor"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="since"]', 'since 1.2.3');
            });
         });

         it('has since at member.', () =>
         {
            Util.findParent(doc, '[id="instance-classmember-p1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="since"]', 'since 1.2.3');
            });
         });

         it('has since at method.', () =>
         {
            Util.findParent(doc, '[id="instance-classmethod-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="since"]', 'since 1.2.3');
            });
         });
      });
   });
});
