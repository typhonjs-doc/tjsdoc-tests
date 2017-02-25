import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.nav)
{
   for (const target of testConfig.targets)
   {
      /** @test {DocBuilder#_buildNavDoc} */
      describe('test navigation:', () =>
      {
         const doc = Util.readDoc(target, 'index.html');

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
            Util.findParent(doc, '[data-ice="nav"] a[href="function/index.html#static-function-testDescFunction"]',
             '[data-ice="doc"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'testDescFunction');
            });
         });

         it('has variable.', () =>
         {
            Util.findParent(doc, '[data-ice="nav"] a[href="variable/index.html#static-variable-testDescVariable"]',
             '[data-ice="doc"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'testDescVariable');
            });
         });

         it('has typedef.', () =>
         {
            Util.findParent(doc, '[data-ice="nav"] a[href="typedef/index.html#static-typedef-TestTypedefDefinition"]',
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
   }
}
