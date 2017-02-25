import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

if (testConfig.category.config && testConfig.config.tests.emptyDestination)
{
   for (const target of testConfig.targets)
   {
      /** @test {publish} */
      describe('test config.emptyDestination: true', () =>
      {
         // Write a dummy data file to verify that empty destination works before invoking TJSDoc.
         Util.ensureDir(target, 'tjsdoc-emptyDestination');
         Util.writeFile(target, 'tjsdoc-emptyDestination', 'DUMMY_DATA', 'DUMMY_DATA');

         Util.invoke(target, './test/fixture/config/tjsdoc-emptyDestination.json');

         it('destination emptied.', () =>
         {
            // Verify that DUMMY_DATA is deleted.
            Util.assert.throws(() => { Util.readFile(target, 'DUMMY_DATA', 'tjsdoc-emptyDestination'); });
         });
      });
   }
}
