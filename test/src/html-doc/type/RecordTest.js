import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'type', (target) =>
{
   /**
    * @test {ParamParser#parseParamValue}
    * @test {ParamParser#parseParam}
    */
   describe(`TestTypeRecord (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'class/test/fixture/package/src/type/Record.js~TestTypeRecord.html');
      });

      it('has record type.', () =>
      {
         Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method1"]', '[data-ice="target"]',
          (doc) =>
         {
            Util.assert.includes(doc, null, 'method1(p1: {x1: number, x2: string})');

            Util.assert.multiIncludes(doc, '[data-ice="signature"] a', [
               'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number',
               'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'
            ], 'href');
         });
      });
   });
});
