import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'type', (target) =>
{
   /**
    * @test {ParamParser#parseParamValue}
    * @test {ParamParser#parseParam}
    */
   describe(`TestTypeExternal (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'class/test/fixture/package/src/type/External.js~TestTypeExternal.html');

      it('has external type.', () =>
      {
         Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]', (doc) =>
         {
            Util.assert.includes(doc, null, 'method1(p1: ArrayBuffer)');

            Util.assert.includes(doc,
             'a[href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"]',
              'ArrayBuffer');
         });
      });
   });
});
