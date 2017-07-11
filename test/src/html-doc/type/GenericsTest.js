import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'type', (target) =>
{
   /**
    * @test {ParamParser#parseParamValue}
    * @test {ParamParser#parseParam}
    */
   describe(`TestTypeGenerics (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'class/test/fixture/package/src/type/Generics.js~TestTypeGenerics.html');
      });

      it('has generics type.', () =>
      {
         Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method1"]', '[data-ice="target"]',
          (doc) =>
         {
            Util.assert.includes(doc, null,
             'method1(p1: Array<number>, p2: Map<number, string>, p3: Promise<number[], Error>)');

            Util.assert.multiIncludes(doc, '[data-ice="signature"] a', [
               'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
               'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number',
               'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map',
               'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number',
               'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String',
               'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
               'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number',
               'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error'
            ], 'href');
         });
      });
   });
});
