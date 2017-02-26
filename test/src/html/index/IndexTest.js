import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html', 'index', (target) =>
{
   /** @test {IndexDocBuilder} */
   describe(`test index (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'index.html');

      it('has README.md', () =>
      {
         Util.assert.includes(doc, '[data-ice="index"]', 'this is TJSDoc Test Fixture README.');
      });
   });
});
