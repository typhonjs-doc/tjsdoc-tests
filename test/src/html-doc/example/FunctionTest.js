import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'example', (target) =>
{
   /** @test {AbstractDoc#@example} */
   describe(`testExampleFunction (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'function/index.html');

      describe('in details', () =>
      {
         it('has desc.', () =>
         {
            Util.findParent(doc, '[id="static-modulefunction-testExampleFunction"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="exampleDoc"]', 'const foo = 123;');
            });
         });
      });
   });
});
