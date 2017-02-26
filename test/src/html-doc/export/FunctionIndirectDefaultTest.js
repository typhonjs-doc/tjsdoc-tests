import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'export', (target) =>
{
   /** @test {FunctionDoc#@_name} */
   describe(`test export function indirect default (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'function/index.html');
      it('has default import path with indirect function definition', () =>
      {
         Util.findParent(doc, '[id="static-function-testExportFunctionIndirectDefault"]', '[data-ice="detail"]',
          (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="importPath"]',
             `import testExportFunctionIndirectDefault from 'tjsdoc-test-fixture/test/fixture/package/src/export/FunctionIndirectDefault.js'`);
         });
      });
   });
});
