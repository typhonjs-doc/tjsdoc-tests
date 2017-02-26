import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html && testConfig.html.tests.index)
{
   for (const target of testConfig.targets)
   {
      /** @test {IndexDocBuilder} */
      describe('test index', () =>
      {
         const doc = Util.readDoc(target, 'index.html');

         it('has README.md', () =>
         {
            Util.assert.includes(doc, '[data-ice="index"]', 'this is TJSDoc Test Fixture README.');
         });
      });
   }
}
