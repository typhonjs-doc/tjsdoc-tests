import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'export', (target) =>
{
   /** @test {FunctionDoc#@_name} */
   describe(`testExportAnonymousFunction (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'function/index.html');

      describe('in summary', () =>
      {
         it('has desc', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#static-modulefunction-AnonymousFunction"]',
             '[data-ice="target"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'public AnonymousFunction()');
            });
         });
      });

      describe('in details', () =>
      {
         it('has desc.', () =>
         {
            Util.findParent(doc, '[id="static-modulefunction-AnonymousFunction"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public AnonymousFunction()');

               Util.assert.includes(doc, '[data-ice="importPath"]',
                `import AnonymousFunction from 'tjsdoc-test-fixture/test/fixture/package/src/export/AnonymousFunction.js'`);
            });
         });
      });
   });
});
