import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'ignore', (target) =>
{
   /** @test {DocResolver#_resolveIgnore */
   describe(`testIgnoreFunction (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'function/index.html');
      });

      it('is not documented.', () =>
      {
         Util.assert.throws(() => Util.find(doc, '[data-ice="summary"] [href$="#static-function-testIgnoreFunction"]',
          () => {}));

         Util.assert.throws(() => Util.find(doc, '[id="static-function-testIgnoreFunction"]', () => {}));
      });
   });
});
