import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config_raw_data', 'outputDocData', (target) =>
{
   /** @test {publish} */
   describe(`test config.outputDocData: true (${target.name}):`, () =>
   {
      before(async () =>
      {
         await Util.invoke(target, './test/fixture/config/tjsdoc-outputDocData.json',
          { silent: testConfig.consoleSilent });
      });

      it('outputs ast data.', () =>
      {
         Util.assert.doesNotThrow(() => { Util.readFile(target, 'docData.json', 'tjsdoc-outputDocData'); });
      });
   });
});
