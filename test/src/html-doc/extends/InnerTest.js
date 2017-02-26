import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'extends', (target) =>
{
   /**
    * @test {ClassDoc#@extends}
    * @test {DocResolver@_resolveNecessary}
    */
   describe(`TestExtendsInner (${target.name}):`, () =>
   {
      it('has extends chain.', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/extends/Inner.js~TestExtendsInner.html');

         Util.find(doc, '.self-detail [data-ice="extendsChain"]', (doc) =>
         {
            Util.assert.includes(doc, null, '_TestExtendsInner → TestExtendsInner');
            Util.assert.includes(doc, 'a[href$="_TestExtendsInner.html"]', '_TestExtendsInner');
         });
      });

      it('has direct subclass.', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/extends/Inner.js~_TestExtendsInner.html');

         Util.find(doc, '.self-detail [data-ice="directSubclass"]', (doc) =>
         {
            Util.assert.includes(doc, 'a[href="class/test/fixture/package/src/extends/Inner.js~TestExtendsInner.html"]',
             'TestExtendsInner');
         });
      });
   });
});
