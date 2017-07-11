import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'undocumentIdentifier', (target) =>
{
   /** @test {DocResolver#_resolveUndocumentIdentifier} */
   describe(`test config.undocumentIdentifier: false (${target.name}):`, () =>
   {
      before(async () =>
      {
         await Util.invoke(target, './test/fixture/config/tjsdoc-undocumentIdentifier.json',
          { silent: testConfig.consoleSilent });
      });

      it('does not have undocument identifier', () =>
      {
         Util.assert.throws(() =>
         {
            Util.readDoc(target, 'class/src/Undocument/Definition.js~TestUndocumentDefinition.html',
             'tjsdoc-undocumentIdentifier');
         });
      });
   });
});
