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
      describe('TestTypeOptional', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/type/Optional.js~TestTypeOptional.html');

         it('has optional attribute.', () =>
         {
            Util.findParent(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '.params [data-ice="property"]:nth-child(1)', 'optional');
            });
         });
      });
   }
}
