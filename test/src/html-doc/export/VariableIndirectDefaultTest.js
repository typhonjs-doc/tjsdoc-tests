import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'export', (target) =>
{
   /** @test {VariableDoc#@_name} */
   describe(`test export variable indirect default (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'variable/index.html');

      it('has default import path with indirect variable definition.', () =>
      {
         Util.findParent(doc, '[id="static-variable-testExportVariableIndirectDefault"]', '[data-ice="detail"]',
          (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="importPath"]',
             `import testExportVariableIndirectDefault from 'tjsdoc-test-fixture/test/fixture/package/src/export/VariableIndirectDefault.js'`);
         });
      });
   });
});
