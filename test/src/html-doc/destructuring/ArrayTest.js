import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'destructuring', (target) =>
{
   /** @test {AbstractDoc#@param} */
   describe(`TestDestructuringArray (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target,
          'class/test/fixture/package/src/Destructuring/Array.js~TestDestructuringArray.html');
      });

      describe('in summary', () =>
      {
         it('has array destructuring', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method1"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'method1(p: number[])');
            });
         });
      });

      describe('in details', () =>
      {
         it('has array destructuring.', () =>
         {
            Util.findParent(doc, '[id="instance-classmethod-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'method1(p: number[])');

               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="name"]', 'p');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="type"]', 'number[]');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="description"]', 'this is p.');

               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(2) [data-ice="name"]', 'p[0]');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(2) [data-ice="type"]', 'number');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(2) [data-ice="description"]',
                'this is first of p.');

               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(3) [data-ice="name"]', 'p[1]');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(3) [data-ice="type"]', 'number');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(3) [data-ice="description"]',
                'this is second of p.');
            });
         });
      });
   });
});
