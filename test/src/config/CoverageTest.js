import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'coverage', (target) =>
{
   /** @test {CoverageBuilder} */
   describe(`test config.coverage: false (${target.name}):`, () =>
   {
      Util.invoke(target, './test/fixture/config/tjsdoc-coverage.json');

      it('does not have coverage', () =>
      {
         const doc = Util.readDoc(target, 'source.html', 'tjsdoc-coverage');

         Util.assert.throws(() =>
         {
            Util.assert.includes(doc, '[data-ice="coverageBadge"]', './badge.svg', 'src');
         });
      });
   });
});
