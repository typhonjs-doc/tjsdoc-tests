import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'type', (target) =>
{
   /**
    * @test {ParamParser#parseParamValue}
    * @test {ParamParser#parseParam}
    */
   describe(`TestTypeObject (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'class/test/fixture/package/src/type/Object.js~TestTypeObject.html');
      });

      it('has object type.', () =>
      {
         Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method1"]', '[data-ice="target"]',
          (doc) =>
         {
            Util.assert.includes(doc, null, 'method1(p1: Object)');

            Util.assert.multiIncludes(doc, '[data-ice="signature"] a', [
               'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object'
            ], 'href');
         });
      });

      it('has object property.', () =>
      {
         Util.findParent(doc, '[id="instance-classmethod-method1"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="name"]', 'p1');
            Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="type"]', 'Object');
            Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="description"]', 'this is object p1.');

            Util.assert.includes(doc, 'div.bordered-div-row:nth-child(2) [data-ice="name"]', 'p1.x1');
            Util.assert.includes(doc, 'div.bordered-div-row:nth-child(2) [data-ice="type"]', 'number');
            Util.assert.includes(doc, 'div.bordered-div-row:nth-child(2) [data-ice="description"]', 'this is number x1.');
         });
      });
   });
});
