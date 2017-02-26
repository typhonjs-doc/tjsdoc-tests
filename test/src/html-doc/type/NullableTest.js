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
      describe('TestTypeNullable', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/type/Nullable.js~TypeTestNullable.html');

         it('has nullable value.', () =>
         {
            Util.findParent(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '.params [data-ice="property"]:nth-child(1)', 'nullable: true');
               Util.assert.includes(doc, '.params [data-ice="property"]:nth-child(2)', 'nullable: false');
            });
         });
      });
   }
}
