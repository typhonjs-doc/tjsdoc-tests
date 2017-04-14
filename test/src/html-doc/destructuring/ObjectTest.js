import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'destructuring', (target) =>
{
   /** @test {AbstractDoc#@param} */
   describe(`TestDestructuringObject (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target,
       'class/test/fixture/package/src/Destructuring/Object.js~TestDestructuringObject.html');

      describe('in summary', () =>
      {
         it('has object destructuring', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method1"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'method1(p: Object)');
            });
         });
      });

      describe('in details', () =>
      {
         it('has object destructuring.', () =>
         {
            Util.findParent(doc, '[id="instance-classmethod-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'method1(p: Object)');
               Util.assert.includes(doc, 'table.params', 'p Object this is object p.');
               Util.assert.includes(doc, 'table.params', 'p.p1 number this is property p1 of p.');
               Util.assert.includes(doc, 'table.params', 'p.p2 string this is property p2 of p.');
            });
         });
      });
   });
});
