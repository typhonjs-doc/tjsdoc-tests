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
      describe('TestTypeRecord', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/type/Record.js~TestTypeRecord.html');

         it('has record type.', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]',
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
   }
}
