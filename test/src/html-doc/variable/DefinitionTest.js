import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'variable', (target) =>
{
   /** @test {VariableDoc} */
   describe(`testVariableDefinition (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'variable/index.html');

      describe('in summary', () =>
      {
         it('has desc', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#static-variable-testVariableDefinition"]',
             '[data-ice="target"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'public testVariableDefinition: number');
            });
         });
      });

      describe('in details', () =>
      {
         it('has desc.', () =>
         {
            Util.findParent(doc, '[id="static-variable-testVariableDefinition"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public testVariableDefinition: number');
            });
         });
      });
   });
});
