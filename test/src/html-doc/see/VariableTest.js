import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'see', (target) =>
{
   /** @test {AbstractDoc#@see} */
   describe(`testSeeVariable (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'variable/index.html');

      it('has see.', () =>
      {
         Util.findParent(doc, '[id="static-variable-testSeeVariable"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="see"] a[href="http://example.com"]', 'http://example.com');
         });
      });
   });
});
