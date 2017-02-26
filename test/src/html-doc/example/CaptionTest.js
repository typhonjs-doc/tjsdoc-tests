import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.example)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@example} */
      describe('TestExampleCaption', () =>
      {
         const doc = Util.readDoc(target,
          'class/test/fixture/package/src/Example/Caption.js~TestExampleCaption.html');

         describe('in self detail', () =>
         {
            it('has caption of example.', () =>
            {
               Util.assert.includes(doc, '.self-detail [data-ice="exampleDoc"] [data-ice="exampleCaption"]',
                'this is caption');
            });
         });
      });
   }
}
