import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'extends', (target) =>
{
   /** @test {ClassDoc#@extends} */
   describe(`TestExtendsProperty (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'class/test/fixture/package/src/extends/Property.js~TestExtendsProperty.html');

      it('has extends chain.', () =>
      {
         Util.find(doc, '.self-detail [data-ice="extendsChain"]', (doc) =>
         {
            Util.assert.includes(doc, null,
             'TestExtendsPropertyPackage~obj.TestExtendsPropertyInner → TestExtendsProperty');
         });
      });
   });
});
