import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

if (testConfig.category.config && testConfig.config.tests.undocumentIdentifier)
{
   for (const target of testConfig.targets)
   {
      /** @test {DocResolver#_resolveUndocumentIdentifier} */
      describe('test config.undocumentIdentifier: false', () =>
      {
         Util.invoke(target, './test/fixture/config/tjsdoc-undocumentIdentifier.json');

         it('does not have undocument identifier', () =>
         {
            Util.assert.throws(() =>
            {
               Util.readDoc(target, 'class/src/Undocument/Definition.js~TestUndocumentDefinition.html',
                'tjsdoc-undocumentIdentifier');
            });
         });
      });
   }
}
