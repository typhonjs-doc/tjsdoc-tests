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
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'class/test/fixture/package/src/type/Nullable.js~TypeTestNullable.html');
      });

      it('has nullable value.', () =>
      {
         Util.findParent(doc, '[id="instance-classmethod-method1"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="attributes"]', 'nullable: true');

            Util.assert.includes(doc, 'div.bordered-div-row:nth-child(2) [data-ice="attributes"]', 'nullable: false');
         });
      });
   });
});
