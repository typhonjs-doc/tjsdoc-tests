import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'unexportIdentifier', (target) =>
{
   /** @test {DocResolver#_resolveUnexportIdentifier} */
   describe(`test config.unexportIdentifier: true (${target.name}):`, () =>
   {
      Util.invoke(target, './test/fixture/config/tjsdoc-unexportIdentifier.json', { silent: testConfig.consoleSilent });

      /**
       * Helper function to change the directory when invoking `_readDoc`.
       *
       * @param {string}   filePath - Local file path to load relative to
       *                              './test/fixture/dest/<target.type>/<target.name>/tjsdoc-unexportIdentifier/'.
       *
       * @returns {*}
       */
      function readDoc(filePath)
      {
         return Util.readDoc(target, filePath, 'tjsdoc-unexportIdentifier');
      }

      it('class is not documented.', () =>
      {
         Util.assert.throws(() => readDoc('class/test/fixture/package/src/export/Class.js~TestExportClass6.html'));
      });

      it('direct arrow function expression is not documented', () =>
      {
         const doc = readDoc('function/index.html');

         Util.assert.throws(() => Util.findParent(doc, '[id="static-function-testExportArrowFunction3"]',
          '[data-ice="detail"]', () => {}));
      });

      it('direct function definition is not documented', () =>
      {
         const doc = readDoc('function/index.html');

         Util.assert.throws(() => Util.findParent(doc, '[id="static-function-testExportFunction4"]',
          '[data-ice="detail"]', () => {}));
      });

      it('direct function expression is not documented', () =>
      {
         const doc = readDoc('function/index.html');

         Util.assert.throws(() => Util.findParent(doc, '[id="static-function-testExportFunction5"]',
          '[data-ice="detail"]', () => {}));
      });

      it('direct variable definition is not documented', () =>
      {
         const doc = readDoc('variable/index.html');

         Util.assert.throws(() => Util.findParent(doc, '[id="static-variable-testExportVariable3"]',
          '[data-ice="detail"]', () => {}));
      });

      it('has coverage summary', () =>
      {
         const doc = readDoc('source.html');
         const badge = Util.readFile(target, 'badge.svg', 'tjsdoc-unexportIdentifier').toString();

         Util.assert(badge.includes('88%'));
         Util.assert.includes(doc, '[data-ice="coverageBadge"]', './badge.svg', 'src');
         Util.assert.includes(doc, '[data-ice="totalCoverageCount"]', '39/44');
         Util.assert.equal(doc.find('[data-ice="file"] [data-ice="coverage"]').length, 19);
      });
   });
});
