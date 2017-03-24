import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html', 'file', (target) =>
{
   /** @test {FileDocBuilder} */
   describe(`test source code file (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'file/test/fixture/package/src/desc/Class.js.html');

      it('does not have source code.', () =>
      {
         Util.assert.includes(doc, 'body [data-ice="title"]', 'src/desc/Class.js');

         // By default source code is not output.
         Util.assert.includes(doc, '[data-ice="content"]', 'src/desc/Class.js');
         Util.assert.includes(doc, '[data-ice="content"]', 'Sorry, this documentation does not provide source code.');
         Util.assert.notIncludes(doc, '[data-ice="content"]', 'class TestDescClass');
      });
   });
});
