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
      describe('TestTypeClass', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/type/Class.js~TestTypeClass.html');

         it('has class type.', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'method1(p1: TestTypeClassInner)');

               Util.assert.includes(doc, 'a[href="class/test/fixture/package/src/type/Class.js~TestTypeClassInner.html"]',
                'TestTypeClassInner');
            });
         });
      });
   }
}
