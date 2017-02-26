import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.deprecated)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@deprecated} */
      describe('TestDeprecatedClass:', () =>
      {
         const doc = Util.readDoc(target,
          'class/test/fixture/package/src/deprecated/Class.js~TestDeprecatedClass.html');

         describe('in self detail:', () =>
         {
            it('has deprecated message of self.', () =>
            {
               Util.assert.includes(doc, '.self-detail [data-ice="deprecated"]',
                'this class was deprecated. this is deprecated.');
            });
         });

         describe('in summary:', () =>
         {
            it('has deprecated message of member and method.', () =>
            {
               Util.find(doc,
                '[data-ice="summary"] [href="class/test/fixture/package/src/deprecated/Class.js~TestDeprecatedClass.html#instance-member-p1"]',
                 (doc) =>
               {
                  doc = doc.parents('[data-ice="target"]');
                  Util.assert.includes(doc, '[data-ice="deprecated"]', 'this member was deprecated.');
               });

               Util.find(doc,
                '[data-ice="summary"] [href="class/test/fixture/package/src/deprecated/Class.js~TestDeprecatedClass.html#instance-method-method1"]',
                 (doc) =>
               {
                  doc = doc.parents('[data-ice="target"]');
                  Util.assert.includes(doc, '[data-ice="deprecated"]', 'this method was deprecated.');
               });
            });
         });

         describe('in details:', () =>
         {
            it('has deprecated message of member and method.', () =>
            {
               Util.find(doc, '[id="instance-member-p1"]', (doc) =>
               {
                  doc = doc.parents('[data-ice="detail"]');

                  Util.assert.includes(doc, '[data-ice="deprecated"]', 'this member was deprecated.');
               });

               Util.find(doc, '[id="instance-method-method1"]', (doc) =>
               {
                  doc = doc.parents('[data-ice="detail"]');

                  Util.assert.includes(doc, '[data-ice="deprecated"]', 'this method was deprecated.');
               });
            });
         });
      });
   }
}
