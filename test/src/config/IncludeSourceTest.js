import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'includeSource', (target) =>
{
   /** @test {publish} */
   describe(`test config.includeSource: false (${target.name}):`, () =>
   {
      Util.invoke(target, './test/fixture/config/tjsdoc-includeSource.json', { silent: testConfig.consoleSilent });

      it('has source code.', () =>
      {
         const doc = Util.readDoc(target, 'file/test/fixture/package/src/desc/Class.js.html', 'tjsdoc-includeSource');

         Util.assert.includes(doc, 'code[data-ice="content"]', 'export default class TestDescClass {');
      });
   });
});
