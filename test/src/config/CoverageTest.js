import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

if (testConfig.category.config && testConfig.config.tests.coverage)
{
   for (const target of testConfig.targets)
   {
      /** @test {CoverageBuilder} */
      describe('test config.coverage: false', () =>
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
   }
}
