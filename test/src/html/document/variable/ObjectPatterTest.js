import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.variable)
{
   for (const target of testConfig.targets)
   {
      /** @test {VariableDoc} */
      describe('testVariableObjectPattern', () =>
      {
         const doc = Util.readDoc(target, 'variable/index.html');

         describe('in summary', () =>
         {
            it('has desc', () =>
            {
               Util.findParent(doc, '[data-ice="summary"] [href$="#static-variable-testVariableObjectPattern1"]',
                '[data-ice="target"]', (doc) =>
               {
                  Util.assert.includes(doc, null, 'public testVariableObjectPattern1: number');
               });
            });
         });

         describe('in details', () =>
         {
            it('has desc.', () =>
            {
               Util.findParent(doc, '[id="static-variable-testVariableObjectPattern1"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, 'h3', 'public testVariableObjectPattern1: number');
               });
            });
         });
      });
   }
}
