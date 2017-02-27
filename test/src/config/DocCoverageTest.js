import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'docCoverage', (target) =>
{
   /** @test {CoverageBuilder} */
   describe(`test config.docCoverage: false (${target.name}):`, () =>
   {
      Util.invoke(target, './test/fixture/config/tjsdoc-docCoverage.json', testConfig.consoleSilent);

      it('does not have doc coverage', () =>
      {
         const doc = Util.readDoc(target, 'source.html', 'tjsdoc-docCoverage');

         Util.assert.throws(() =>
         {
            Util.assert.includes(doc, '[data-ice="coverageBadge"]', './badge.svg', 'src');
         });
      });
   });
});
