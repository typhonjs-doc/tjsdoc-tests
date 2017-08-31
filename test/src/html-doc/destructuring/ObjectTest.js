import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'destructuring', (target) =>
{
   /** @test {AbstractDoc#@param} */
   describe(`TestDestructuringObject (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target,
          'class/test/fixture/package/src/Destructuring/Object.js~TestDestructuringObject.html');
      });

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

               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="name"]', 'p');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="type"]', 'Object');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="description"]',
                'this is object p.');

               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(2) [data-ice="name"]', 'p.p1');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(2) [data-ice="type"]', 'number');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(2) [data-ice="description"]',
                'this is property p1 of p.');

               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(3) [data-ice="name"]', 'p.p2');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(3) [data-ice="type"]', 'string');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(3) [data-ice="description"]',
                'this is property p2 of p.');
            });
         });
      });
   });
});
