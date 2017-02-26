import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.property)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@property} */
      describe('TestPropertyReturn', () =>
      {
         const doc = Util.readDoc(target,
          'class/test/fixture/package/src/Property/Return.js~TestPropertyReturn.html');

         describe('in details', () =>
         {
            it('has desc.', () =>
            {
               Util.findParent(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="returnProperties"] tbody tr:nth-child(1)',
                   'x1 number this is x1 of return value.');

                  Util.assert.includes(doc, '[data-ice="returnProperties"] tbody tr:nth-child(2)',
                   'x2 TestClassDefinition this is x2 of return value.');

                  Util.assert.includes(doc, '[data-ice="returnProperties"] tbody tr:nth-child(2) a',
                   'class/test/fixture/package/src/class/Definition.js~TestClassDefinition.html', 'href');
               });
            });
         });
      });
   }
}
