import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'emits', (target) =>
{
   /** @test {AbstractDoc#@emits} */
   describe(`testEmitsFunction (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'function/index.html');
      });

      describe('in details', () =>
      {
         it('has desc.', () =>
         {
            Util.findParent(doc, '[id="static-modulefunction-testEmitsFunction"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="emitName"] [href$="TestEmitsFunctionEvent.html"]',
                'TestEmitsFunctionEvent');
            });
         });
      });
   });
});
