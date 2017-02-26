import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'version', (target) =>
{
   /** @test {AbstractDoc#@version} */
   describe(`testVersionFunction (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'function/index.html');

      describe('in summary', () =>
      {
         it('has version', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#static-function-testVersionFunction"]',
             '[data-ice="target"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="version"]', '1.2.3');
            });
         });
      });

      describe('in details', () =>
      {
         it('has version.', () =>
         {
            Util.findParent(doc, '[id="static-function-testVersionFunction"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="version"]', '1.2.3');
            });
         });
      });
   });
});
