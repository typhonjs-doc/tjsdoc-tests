import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'ignore', (target) =>
{
   /** @test {DocResolver#_resolveIgnore */
   describe(`testIgnoreVariable (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'variable/index.html');
      });

      it('is not documented.', () =>
      {
         Util.assert.throws(() => Util.find(doc, '[data-ice="summary"] [href$="#static-variable-testIgnoreVariable"]',
          () => {}));

         Util.assert.throws(() => Util.find(doc, '[id="static-variable-testIgnoreVariable"]', () => {}));
      });
   });
});
