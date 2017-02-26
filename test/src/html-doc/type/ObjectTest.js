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
      describe('TestTypeObject', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/type/Object.js~TestTypeObject.html');

         it('has object type.', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'method1(p1: Object)');
               Util.assert.multiIncludes(doc, '[data-ice="signature"] a', [
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object'
               ], 'href');
            });
         });

         it('has object property.', () =>
         {
            Util.findParent(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '.params [data-ice="property"]:nth-child(1)', 'p1 Object this is object p1.');
               Util.assert.includes(doc, '.params [data-ice="property"]:nth-child(2)', 'p1.x1 number this is number x1.');
            });
         });
      });
   }
}
