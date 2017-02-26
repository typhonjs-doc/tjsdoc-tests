import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.type)
{
   for (const target of testConfig.targets)
   {
      /**
       * @test {ParamParser#parseParamValue}
       * @test {ParamParser#parseParam}
       */
      describe('TestTypeFunction', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/type/Function.js~TestTypeFunction.html');

         it('has function type.', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'method1(p1: function(x1: number, x2: string): boolean)');
               Util.assert.multiIncludes(doc, '[data-ice="signature"] a', [
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number',
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String',
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean'
               ], 'href');
            });
         });
      });
   }
}
