import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html', 'identifiers', (target) =>
{
   /** @test {IdentifiersDocBuilder} */
   describe(`test identifiers (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'identifiers.html');
      });

      it('has class summary.', () =>
      {
         Util.findParent(doc,
          '[data-ice="classSummary"] a[href="class/test/fixture/package/src/desc/Class.js~TestDescClass.html"]',
           '[data-ice="target"]', (doc) =>
         {
            Util.assert.includes(doc, null, 'public TestDescClass this is TestDescClass.');
         });
      });

      it('has interface summary.', () =>
      {
         Util.findParent(doc,
          '[data-ice="interfaceSummary"] a[href="class/test/fixture/package/src/interface/Definition.js~TestInterfaceDefinition.html"]',
           '[data-ice="target"]', (doc) =>
         {
            Util.assert.includes(doc, null, 'public TestInterfaceDefinition this is TestInterfaceDefinition');
         });
      });

      it('has function summary.', () =>
      {
         Util.findParent(doc,
          '[data-ice="functionSummary"] a[href="function/index.html#static-modulefunction-testDescFunction"]',
           '[data-ice="target"]', (doc) =>
         {
            Util.assert.includes(doc, null, 'public testDescFunction() this is testDescFunction.');
         });
      });

      it('has variable summary.', () =>
      {
         Util.findParent(doc,
          '[data-ice="variableSummary"] a[href="variable/index.html#static-modulevariable-testDescVariable"]',
           '[data-ice="target"]', (doc) =>
         {
            Util.assert.includes(doc, null, 'public testDescVariable: number this is testDescVariable.');
         });
      });

      it('has typedef summary.', () =>
      {
         Util.findParent(doc,
          '[data-ice="typedefSummary"] a[href="typedef/index.html#static-virtualtypedef-TestTypedefDefinition"]',
           '[data-ice="target"]', (doc) =>
         {
            Util.assert.includes(doc, null, 'public TestTypedefDefinition: Object this is TestTypedefDefinition.');
         });
      });

      it('has external summary.', () =>
      {
         Util.findParent(doc, '[data-ice="externalSummary"] a[href="http://example.com"]', '[data-ice="target"]',
          (doc) =>
         {
            Util.assert.includes(doc, null, 'public TestExternalDefinition');
         });
      });
   });
});
