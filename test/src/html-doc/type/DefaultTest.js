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
      describe('TestTypeDefault', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/type/Default.js~TestTypeDefault.html');

         it('has default value.', () =>
         {
            Util.findParent(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '.params [data-ice="property"]:nth-child(1)', 'optional default: 123');
               Util.assert.includes(doc, '.params [data-ice="property"]:nth-child(2)', 'optional default: []');
            });
         });

         it('has default value of object.', () =>
         {
            Util.findParent(doc, '[id="instance-method-method2"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '.params [data-ice="property"]:nth-child(1)', 'optional default: new Foo()');
            });
         });
      });
   }
}
