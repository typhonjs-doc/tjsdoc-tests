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
      describe('TestTypeExternal', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/type/External.js~TestTypeExternal.html');

         it('has external type.', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'method1(p1: XMLHttpRequest)');

               Util.assert.includes(doc, 'a[href="https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest"]',
                'XMLHttpRequest');
            });
         });
      });
   }
}
