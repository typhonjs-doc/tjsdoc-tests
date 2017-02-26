import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.access)
{
   for (const target of testConfig.targets)
   {
      /** @test {ClassDocBuilder} */
      describe('TestAccessClass:', () =>
      {
         describe('in header:', () =>
         {
            /** @test {ClassDocBuilder#_buildClassDoc} */
            it('has public accessor.', () =>
            {
               const doc = Util.readDoc(target,
                'class/test/fixture/package/src/access/Class.js~TestAccessClassPublic.html');

               Util.assert.includes(doc, '.header-notice [data-ice="access"]', 'public');
            });

            /** @test {ClassDocBuilder#_buildClassDoc} */
            it('has protected accessor.', () =>
            {
               const doc = Util.readDoc(target,
                'class/test/fixture/package/src/access/Class.js~TestAccessClassProtected.html');

               Util.assert.includes(doc, '.header-notice [data-ice="access"]', 'protected');
            });

            /** @test {ClassDocBuilder#_buildClassDoc} */
            it('has private accessor.', () =>
            {
               const doc = Util.readDoc(target,
                'class/test/fixture/package/src/access/Class.js~TestAccessClassPrivate.html');

               Util.assert.includes(doc, '.header-notice [data-ice="access"]', 'private');
            });

            /** @test {ClassDocBuilder#_buildClassDoc} */
            it('has auto private accessor.', () =>
            {
               const doc = Util.readDoc(target,
                'class/test/fixture/package/src/access/Class.js~_TestAccessClassAutoPrivate.html');

               Util.assert.includes(doc, '.header-notice [data-ice="access"]', 'private');
            });
         });
      });
   }
}
