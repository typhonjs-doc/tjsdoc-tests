import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

if (testConfig.category.config && testConfig.config.tests.includeSource)
{
   for (const target of testConfig.targets)
   {
      /** @test {publish} */
      describe('test config.includeSource: false', () =>
      {
         Util.invoke(target, './test/fixture/config/tjsdoc-includeSource.json');

         it('does not have source code.', () =>
         {
            const doc = Util.readDoc(target, 'file/test/fixture/package/src/desc/Class.js.html',
             'tjsdoc-includeSource');

            Util.assert.includes(doc, '[data-ice="content"]', 'src/desc/Class.js');
            Util.assert.includes(doc, '[data-ice="content"]', 'Sorry, this documentation does not provide source code.');
            Util.assert.notIncludes(doc, '[data-ice="content"]', 'class TestDescClass');
         });
      });
   }
}
