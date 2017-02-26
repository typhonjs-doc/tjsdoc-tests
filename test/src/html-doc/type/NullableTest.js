import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'type', (target) =>
{
   /**
    * @test {ParamParser#parseParamValue}
    * @test {ParamParser#parseParam}
    */
   describe(`TestTypeNullable (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'class/test/fixture/package/src/type/Nullable.js~TypeTestNullable.html');

      it('has nullable value.', () =>
      {
         Util.findParent(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '.params [data-ice="property"]:nth-child(1)', 'nullable: true');
            Util.assert.includes(doc, '.params [data-ice="property"]:nth-child(2)', 'nullable: false');
         });
      });
   });
});
