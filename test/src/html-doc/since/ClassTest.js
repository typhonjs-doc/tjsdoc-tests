import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.since)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@since} */
      describe('TestSinceClass', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/Since/Class.js~TestSinceClass.html');

         it('has since at class.', () =>
         {
            Util.assert.includes(doc, '.header-notice [data-ice="since"]', 'since 1.2.3');
         });

         describe('in summary', () =>
         {
            it('has since at constructor.', () =>
            {
               Util.findParent(doc, '[href$="#instance-constructor-constructor"]', '[data-ice="target"]', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="since"]', 'since 1.2.3');
               });
            });

            it('has since at member.', () =>
            {
               Util.findParent(doc, '[href$="#instance-member-p1"]', '[data-ice="target"]', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="since"]', 'since 1.2.3');
               });
            });

            it('has since at method.', () =>
            {
               Util.findParent(doc, '[href$="#instance-method-method1"]', '[data-ice="target"]', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="since"]', 'since 1.2.3');
               });
            });
         });

         describe('in detail', () =>
         {
            it('has since at constructor.', () =>
            {
               Util.findParent(doc, '[id="instance-constructor-constructor"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="since"]', 'since 1.2.3');
               });
            });

            it('has since at member.', () =>
            {
               Util.findParent(doc, '[id="instance-member-p1"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="since"]', 'since 1.2.3');
               });
            });

            it('has since at method.', () =>
            {
               Util.findParent(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="since"]', 'since 1.2.3');
               });
            });
         });
      });
   }
}
