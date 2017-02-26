import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.generator)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@_generator} */
      describe('TestGeneratorMethod', () =>
      {
         const doc = Util.readDoc(target,
          'class/test/fixture/package/src/Generator/Method.js~TestGeneratorMethod.html');

         describe('in summary', () =>
         {
            it('has generator mark.', () =>
            {
               Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]',
                (doc) =>
               {
                  Util.assert.includes(doc, null, 'public * method1()');
               });
            });
         });

         describe('in details', () =>
         {
            it('has generator mark.', () =>
            {
               Util.findParent(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, 'h3', 'public * method1()');
               });
            });
         });
      });
   }
}
