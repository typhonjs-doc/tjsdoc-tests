import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

if (testConfig.category.config && testConfig.config.tests.compactData)
{
   for (const target of testConfig.targets)
   {
      /** @test {publish} */
      describe('test config.compactData: true, config.outputASTData: true, config.outputDocData: true', () =>
      {
         Util.invoke(target, './test/fixture/config/tjsdoc-compactData.json');

         it('does have ast data.', () =>
         {
            Util.assert.doesNotThrow(() =>
            {
               const astDataLines = Util.readFile(target, 'ast/test/fixture/package/src/desc/Class.js.json',
                'tjsdoc-compactData').match(/^.+$/gm);

               const docDataLines = Util.readFile(target, 'docData.json', 'tjsdoc-compactData').match(/^.+$/gm);

               Util.assert.isArray(astDataLines);
               Util.assert.isArray(docDataLines);

               // Ensure that there is only one line.
               Util.assert.lengthOf(astDataLines, 1);
               Util.assert.lengthOf(docDataLines, 1);
            });
         });
      });
   }
}
