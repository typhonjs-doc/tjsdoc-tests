import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'extends', (target) =>
{
   /**
    * @test {ClassDoc#@extends}
    * @test {DocResolver#_resolveNecessary}
    */
   describe(`TestExtendsMixin (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target,
          'class/test/fixture/package/src/extends/MixinExplicit.js~TextExplicitMixin.html');
      });

      it('has extends chain.', () =>
      {
         Util.find(doc, '.self-detail [data-ice="mixinExtends"]', (doc) =>
         {
            Util.assert.includes(doc, null, 'TestExplicitMixin1, TestExplicitMixin2');

            Util.assert.includes(doc,
             'a[href="class/test/fixture/package/src/extends/MixinExplicit.js~TestExplicitMixin1.html"]',
              'TestExplicitMixin1');

            Util.assert.includes(doc,
             'a[href="class/test/fixture/package/src/extends/MixinExplicit.js~TestExplicitMixin2.html"]',
              'TestExplicitMixin2');
         });
      });
   });
});
