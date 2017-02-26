import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.experimental)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@experimental} */
      describe('TestExperimentalClass', () =>
      {
         const doc = Util.readDoc(target,
          'class/test/fixture/package/src/Experimental/Class.js~TestExperimentalClass.html');

         describe('in self detail', () =>
         {
            it('has desc.', () =>
            {
               Util.assert.includes(doc, '.self-detail [data-ice="experimental"]',
                'this class is experimental. this is experimental');
            });
         });

         describe('in summary', () =>
         {
            it('has desc', () =>
            {
               Util.findParent(doc, '[data-ice="summary"] [href$="#instance-member-p1"]', '[data-ice="target"]',
                (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="experimental"]', 'this member is experimental.');
               });

               Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]',
                (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="experimental"]', 'this method is experimental.');
               });
            });
         });

         describe('in details', () =>
         {
            it('has desc.', () =>
            {
               Util.findParent(doc, '[id="instance-member-p1"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="experimental"]', 'this member is experimental.');
               });

               Util.findParent(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="experimental"]', 'this method is experimental.');
               });
            });
         });
      });
   }
}
