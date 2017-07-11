import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'deprecated', (target) =>
{
   /** @test {AbstractDoc#@deprecated} */
   describe(`TestDeprecatedClass (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target,
          'class/test/fixture/package/src/deprecated/Class.js~TestDeprecatedClass.html');
      });

      describe('in self detail:', () =>
      {
         it('has deprecated message of self.', () =>
         {
            Util.assert.includes(doc, '.self-detail [data-ice="deprecated"]', 'Deprecated: this is deprecated.');
         });
      });

      describe('in summary:', () =>
      {
         it('has deprecated message of member and method.', () =>
         {
            Util.find(doc,
             '[data-ice="summary"] [href="class/test/fixture/package/src/deprecated/Class.js~TestDeprecatedClass.html#instance-classmember-p1"]',
              (doc) =>
            {
               doc = doc.parents('[data-ice="target"]');
               Util.assert.includes(doc, '[data-ice="deprecated"]', 'Deprecated');
            });

            Util.find(doc,
             '[data-ice="summary"] [href="class/test/fixture/package/src/deprecated/Class.js~TestDeprecatedClass.html#instance-classmethod-method1"]',
              (doc) =>
            {
               doc = doc.parents('[data-ice="target"]');
               Util.assert.includes(doc, '[data-ice="deprecated"]', 'Deprecated');
            });
         });
      });

      describe('in details:', () =>
      {
         it('has deprecated message of member and method.', () =>
         {
            Util.find(doc, '[id="instance-classmember-p1"]', (doc) =>
            {
               doc = doc.parents('[data-ice="detail"]');

               Util.assert.includes(doc, '[data-ice="deprecated"]', 'Deprecated');
            });

            Util.find(doc, '[id="instance-classmethod-method1"]', (doc) =>
            {
               doc = doc.parents('[data-ice="detail"]');

               Util.assert.includes(doc, '[data-ice="deprecated"]', 'Deprecated');
            });
         });
      });
   });
});
