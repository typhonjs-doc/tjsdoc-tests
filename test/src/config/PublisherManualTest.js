import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'manual', (target) =>
{
   /** @test {ManualDocBuilder} */
   describe(`test config.manual: null (${target.name}):`, () =>
   {
      Util.invoke(target, './test/fixture/config/tjsdoc-publisherManual.json', { silent: testConfig.consoleSilent });

      it('does not have manual.', () =>
      {
         Util.assert.throws(() =>
         {
            Util.readDoc(target, 'manual/index.html', 'tjsdoc-publisherManual');
         });
      });
   });
});
