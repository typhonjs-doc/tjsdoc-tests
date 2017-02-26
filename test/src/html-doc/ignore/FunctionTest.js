import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.ignore)
{
   for (const target of testConfig.targets)
   {
      /** @test {DocResolver#_resolveIgnore */
      describe('testIgnoreFunction', () =>
      {
         const doc = Util.readDoc(target, 'function/index.html');

         it('is not documented.', () =>
         {
            Util.assert.throws(() => Util.find(doc, '[data-ice="summary"] [href$="#static-function-testIgnoreFunction"]',
             () => {}));

            Util.assert.throws(() => Util.find(doc, '[id="static-function-testIgnoreFunction"]', () => {}));
         });
      });
   }
}
