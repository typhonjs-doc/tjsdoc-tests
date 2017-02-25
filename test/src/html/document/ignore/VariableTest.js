import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.ignore)
{
   for (const target of testConfig.targets)
   {
      /** @test {DocResolver#_resolveIgnore */
      describe('testIgnoreVariable', () =>
      {
         const doc = Util.readDoc(target, 'variable/index.html');

         it('is not documented.', () =>
         {
            Util.assert.throws(() => Util.find(doc, '[data-ice="summary"] [href$="#static-variable-testIgnoreVariable"]',
             () => {}));

            Util.assert.throws(() => Util.find(doc, '[id="static-variable-testIgnoreVariable"]', () => {}));
         });
      });
   }
}
