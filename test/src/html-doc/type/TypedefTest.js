import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.type)
{
   for (const target of testConfig.targets)
   {
      /**
       * @test {ParamParser#parseParamValue}
       * @test {ParamParser#parseParam}
       */
      describe('TestTypeTypedef', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/type/Typedef.js~TestTypeTypedef.html');

         it('has typedef type.', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'method1(p1: TestTypeTypedefInner)');
               Util.assert.multiIncludes(doc, '[data-ice="signature"] a', [
                  'typedef/index.html#static-typedef-TestTypeTypedefInner'
               ], 'href');
            });
         });
      });
   }
}
