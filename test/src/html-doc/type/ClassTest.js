import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'type', (target) =>
{
   /**
    * @test {ParamParser#parseParamValue}
    * @test {ParamParser#parseParam}
    */
   describe(`TestTypeClass (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'class/test/fixture/package/src/type/Class.js~TestTypeClass.html');
      });

      it('has class type.', () =>
      {
         Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method1"]', '[data-ice="target"]',
          (doc) =>
         {
            Util.assert.includes(doc, null, 'method1(p1: TestTypeClassInner)');

            Util.assert.includes(doc, 'a[href="class/test/fixture/package/src/type/Class.js~TestTypeClassInner.html"]',
             'TestTypeClassInner');
         });
      });
   });
});
