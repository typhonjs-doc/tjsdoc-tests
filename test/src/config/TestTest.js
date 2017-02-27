import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'test', (target) =>
{
   /** @test {publish} */
   describe(`test config.test: null (${target.name}):`, () =>
   {
      Util.invoke(target, './test/fixture/config/tjsdoc-test.json', testConfig.consoleSilent);

      it('does not have test integration', () =>
      {
         Util.assert.throws(() => Util.readDoc(target, 'test.html', 'tjsdoc-test'));
      });
   });
});
