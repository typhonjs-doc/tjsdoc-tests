import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'type', (target) =>
{
   /**
    * @test {ParamParser#parseParamValue}
    * @test {ParamParser#parseParam}
    */
   describe(`TestTypeTypedef (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'class/test/fixture/package/src/type/Typedef.js~TestTypeTypedef.html');

      it('has typedef type.', () =>
      {
         Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method1"]', '[data-ice="target"]',
          (doc) =>
         {
            Util.assert.includes(doc, null, 'method1(p1: TestTypeTypedefInner)');

            Util.assert.multiIncludes(doc, '[data-ice="signature"] a', [
               'typedef/index.html#static-virtualtypedef-TestTypeTypedefInner'
            ], 'href');
         });
      });
   });
});
