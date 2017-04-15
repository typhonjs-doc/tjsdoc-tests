import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'listens', (target) =>
{
   /** @test {AbstractDoc#@listens} */
   describe(`testListensFunction (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'function/index.html');

      it('has listens.', () =>
      {
         Util.findParent(doc, '[id="static-modulefunction-testListensFunction"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc,
             '[data-ice="listen"] a[href="class/test/fixture/package/src/listens/Function.js~TestListensFunctionEvent.html"]',
              'TestListensFunctionEvent');
         });
      });
   });
});
