import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'see', (target) =>
{
   /** @test {AbstractDoc#@see} */
   describe(`testSeeFunction (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'function/index.html');

      it('has see.', () =>
      {
         Util.findParent(doc, '[id="static-modulefunction-testSeeFunction"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="see"] a[href="http://example.com"]', 'http://example.com');
         });
      });
   });
});
