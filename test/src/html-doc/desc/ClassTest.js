import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'desc', (target) =>
{
   /** @test {AbstractDoc#@desc} */
   describe(`TestDescClass (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'class/test/fixture/package/src/desc/Class.js~TestDescClass.html');

      describe('in self detail', () =>
      {
         it('has desc.', () =>
         {
            Util.assert.includes(doc, '.self-detail [data-ice="description"]', 'this is TestDescClass.');
         });
      });

      describe('in summary', () =>
      {
         it('has desc', () =>
         {
            Util.assert.includes(doc, '[data-ice="constructorSummary"] [data-ice="description"]',
             'this is constructor.');

            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmember-p1"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="description"]', 'this is p1.');
            });

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
            Util.findParent(doc, '[id="instance-classmethod-constructor"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="description"]', 'this is constructor.');
            });

            Util.findParent(doc, '[id="instance-classmember-p1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="description"]', 'this is p1.');
            });

            Util.findParent(doc, '[id="instance-classmethod-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="description"]', 'this is method1.');
            });
         });
      });
   });
});
