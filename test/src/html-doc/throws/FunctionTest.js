import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.throws)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@throws} */
      describe('testThrowsFunction', () =>
      {
         const doc = Util.readDoc(target, 'function/index.html');

         it('has throws.', () =>
         {
            Util.findParent(doc, '[id="static-function-testThrowsFunction"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc,
                '[data-ice="throw"] a[href="class/test/fixture/package/src/throws/Function.js~TestThrowsFunctionError.html"]',
                 'TestThrowsFunctionError');
            });
         });
      });
   }
}
