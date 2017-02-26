import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'export', (target) =>
{
   /** @test {ClassDoc#@_name} */
   describe(`TestExportAnonymousClass (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'class/test/fixture/package/src/export/AnonymousClass.js~AnonymousClass.html');

      describe('in self detail', () =>
      {
         it('is named with anonymous.', () =>
         {
            Util.assert.includes(doc, '[data-ice="importPath"]',
             `import AnonymousClass from 'tjsdoc-test-fixture/test/fixture/package/src/export/AnonymousClass.js'`);

            Util.assert.includes(doc, '.self-detail [data-ice="name"]', 'AnonymousClass');
         });
      });
   });
});
