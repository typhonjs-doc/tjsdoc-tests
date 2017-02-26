import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.abstract)
{
   for (const target of testConfig.targets)
   {
      /** @test {DocBuilder} */
      describe('TestAbstractDefinition:', () =>
      {
         const doc = Util.readDoc(target,
          'class/test/fixture/package/src/abstract/Definition.js~TestAbstractDefinition.html');

         /** @test {DocBuilder#_buildSummaryDoc} */
         it('has abstract method in summary.', () =>
         {
            Util.find(doc, '[data-ice="summary"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1)',
                'public abstract method1() this is abstract method1');

               Util.assert.includes(doc, '[data-ice="target"]:nth-of-type(2)',
                'public abstract method2() this is abstract method2');
            });
         });

         /** @test {DocBuilder#_buildDetailDocs} */
         it('has abstract method in detail.', () =>
         {
            Util.assert.includes(doc, '[data-ice="detail"]:nth-of-type(1)', 'public abstract method1()');
            Util.assert.includes(doc, '[data-ice="detail"]:nth-of-type(2)', 'public abstract method2()');
         });
      });
   }
}
