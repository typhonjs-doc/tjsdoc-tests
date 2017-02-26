import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'extends', (target) =>
{
   /** @test {ClassDoc#@extends} */
   describe(`TestExtendsBuiltin (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'class/test/fixture/package/src/extends/Builtin.js~TestExtendsBuiltin.html');

      it('has extends chain.', () =>
      {
         Util.find(doc, '.self-detail [data-ice="extendsChain"]', (doc) =>
         {
            Util.assert.includes(doc, null, 'Array → TestExtendsBuiltin');

            Util.assert.includes(doc, 'a', 'Array');

            Util.assert.includes(doc, 'a',
             'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array', 'href');
         });
      });
   });
});
