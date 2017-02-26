import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.param)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@desc} */
      describe('TestParamMethod', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/Param/Method.js~TestParamMethod.html');

         describe('in summary', () =>
         {
            it('has desc', () =>
            {
               Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]',
                (doc) =>
               {
                  Util.assert.includes(doc, null, 'public method1(p1: number, p2: TestClassDefinition)');
               });
            });
         });

         describe('in details', () =>
         {
            it('has desc.', () =>
            {
               Util.findParent(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, 'h3', 'public method1(p1: number, p2: TestClassDefinition)');

                  Util.assert.includes(doc, '.params tbody tr:nth-child(1)', 'p1 number this is p1.');

                  Util.assert.includes(doc, '.params tbody tr:nth-child(2)', 'p2 TestClassDefinition this is p2.');

                  Util.assert.includes(doc, '.params tbody tr:nth-child(2) a',
                   'class/test/fixture/package/src/class/Definition.js~TestClassDefinition.html', 'href');
               });
            });
         });
      });
   }
}
