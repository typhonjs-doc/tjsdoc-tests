import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'type', (target) =>
{
   /**
    * @test {ParamParser#parseParamValue}
    * @test {ParamParser#parseParam}
    */
   describe(`TestTypeSpread (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'class/test/fixture/package/src/type/Spread.js~TestTypeSpread.html');

      it('has spread type.', () =>
      {
         Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]', (doc) =>
         {
            Util.assert.includes(doc, null, 'method1(p1: ...number)');

            Util.assert.multiIncludes(doc, '[data-ice="signature"] a', [
               'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number'
            ], 'href');
         });
      });

      it('has object spread type.', () =>
      {
         Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method2"]', '[data-ice="target"]', (doc) =>
         {
            Util.assert.includes(doc, null, 'method2(config: Object)');

            Util.assert.multiIncludes(doc, '[data-ice="signature"] a', [
               'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object'
            ], 'href');
         });
      });
   });
});
