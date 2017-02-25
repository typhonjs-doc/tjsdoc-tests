import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.access)
{
   for (const target of testConfig.targets)
   {
      /** @test {ClassDocBuilder#_buildClassDoc} */
      describe('TestAccessProperty:', () =>
      {
         const doc = Util.readDoc(target,
          'class/test/fixture/package/src/access/Property.js~TestAccessProperty.html');

         describe('in summary:', () =>
         {
            it('has public accessor.', () =>
            {
               Util.find(doc,
                '[data-ice="summary"] [href="class/test/fixture/package/src/access/Property.js~TestAccessProperty.html#instance-member-p1"]',
                 (doc) =>
               {
                  doc = doc.parents('[data-ice="target"]');
                  Util.assert.includes(doc, null, 'public p1:');
               });
            });

            it('has protected accessor.', () =>
            {
               Util.find(doc,
                '[data-ice="summary"] [href="class/test/fixture/package/src/access/Property.js~TestAccessProperty.html#instance-member-p2"]',
                 (doc) =>
               {
                  doc = doc.parents('[data-ice="target"]');
                  Util.assert.includes(doc, null, 'protected p2: ');
               });
            });

            it('has private accessor.', () =>
            {
               Util.find(doc,
                '[data-ice="summary"] [href="class/test/fixture/package/src/access/Property.js~TestAccessProperty.html#instance-member-p3"]',
                 (doc) =>
               {
                  doc = doc.parents('[data-ice="target"]');
                  Util.assert.includes(doc, null, 'private p3: ');
               });
            });

            it('has auto private accessor.', () =>
            {
               Util.find(doc,
                '[data-ice="summary"] [href="class/test/fixture/package/src/access/Property.js~TestAccessProperty.html#instance-member-_p4"]',
                 (doc) =>
               {
                  doc = doc.parents('[data-ice="target"]');
                  Util.assert.includes(doc, null, 'private _p4: ');
               });
            });
         });

         describe('in detail:', () =>
         {
            it('has public accessor.', () =>
            {
               Util.assert.includes(doc, '#instance-member-p1', 'public p1:');
            });

            it('has protected accessor.', () =>
            {
               Util.assert.includes(doc, '#instance-member-p2', 'protected p2:');
            });

            it('has private accessor.', () =>
            {
               Util.assert.includes(doc, '#instance-member-p3', 'private p3:');
            });

            it('has auto private accessor.', () =>
            {
               Util.assert.includes(doc, '#instance-member-_p4', 'private _p4:');
            });
         });
      });
   }
}
