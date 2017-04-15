import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'throws', (target) =>
{
   /** @test {AbstractDoc#@throws} */
   describe(`testThrowsFunction (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'function/index.html');

      it('has throws.', () =>
      {
         Util.findParent(doc, '[id="static-modulefunction-testThrowsFunction"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc,
             '[data-ice="throw"] a[href="class/test/fixture/package/src/throws/Function.js~TestThrowsFunctionError.html"]',
              'TestThrowsFunctionError');
         });
      });
   });
});
