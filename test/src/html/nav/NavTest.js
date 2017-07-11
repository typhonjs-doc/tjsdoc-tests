import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html', 'nav', (target) =>
{
   /** @test {DocBuilder#_buildNavDoc} */
   describe(`test navigation (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'index.html');
      });

      it('has class', () =>
      {
         Util.findParent(doc,
          '[data-ice="nav"] a[href="class/test/fixture/package/src/desc/Class.js~TestDescClass.html"]',
           '[data-ice="doc"]', (doc) =>
         {
            Util.assert.includes(doc, null, 'TestDescClass');
         });
      });

      it('has interface.', () =>
      {
         Util.findParent(doc,
          '[data-ice="nav"] a[href="class/test/fixture/package/src/interface/Definition.js~TestInterfaceDefinition.html"]',
           '[data-ice="doc"]', (doc) =>
         {
            Util.assert.includes(doc, null, 'TestInterfaceDefinition');
         });
      });

      it('has function.', () =>
      {
         Util.findParent(doc, '[data-ice="nav"] a[href="function/index.html#static-modulefunction-testDescFunction"]',
          '[data-ice="doc"]', (doc) =>
         {
            Util.assert.includes(doc, null, 'testDescFunction');
         });
      });

      it('has variable.', () =>
      {
         Util.findParent(doc, '[data-ice="nav"] a[href="variable/index.html#static-modulevariable-testDescVariable"]',
          '[data-ice="doc"]', (doc) =>
         {
            Util.assert.includes(doc, null, 'testDescVariable');
         });
      });

      it('has typedef.', () =>
      {
         Util.findParent(doc,
          '[data-ice="nav"] a[href="typedef/index.html#static-virtualtypedef-TestTypedefDefinition"]',
           '[data-ice="doc"]', (doc) =>
         {
            Util.assert.includes(doc, null, 'TestTypedefDefinition');
         });
      });

      it('has external.', () =>
      {
         Util.findParent(doc, '[data-ice="nav"] a[href="http://example.com"]', '[data-ice="doc"]', (doc) =>
         {
            Util.assert.includes(doc, null, 'TestExternalDefinition');
         });
      });
   });
});
