import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'type', (target) =>
{
   /**
    * @test {ParamParser#parseParamValue}
    * @test {ParamParser#parseParam}
    */
   describe(`TestTypeArray (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'class/test/fixture/package/src/type/Array.js~TestTypeArray.html');

      it('has array type.', () =>
      {
         Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]', (doc) =>
         {
            Util.assert.includes(doc, null, 'method1(p1: number[])');
         });
      });
   });
});
