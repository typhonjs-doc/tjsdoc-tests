import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html', 'file', (target) =>
{
   /** @test {FileDocBuilder} */
   describe(`test source code file (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'file/test/fixture/package/src/desc/Class.js.html');

      it('has source code.', () =>
      {
         Util.assert.includes(doc, 'body [data-ice="title"]', 'src/desc/Class.js');
         Util.assert.includes(doc, 'code[data-ice="content"]', 'export default class TestDescClass {');
      });
   });
});
