import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'access', (target) =>
{
   /** @test {SingleDocBuilder} */
   describe(`TestAccessFunction (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'function/index.html');

      describe('in summary: ', () =>
      {
         /** @test {SingleDocBuilder#_buildSingleDoc} */
         it('has public accessor.', () =>
         {
            Util.find(doc,
             '[data-ice="summary"] [href="function/index.html#static-function-testAccessFunctionPublic"]', (doc) =>
            {
               doc = doc.parents('[data-ice="target"]');
               Util.assert.includes(doc, null, 'public testAccessFunctionPublic()');
            });
         });

         /** @test {SingleDocBuilder#_buildSingleDoc} */
         it('has protected accessor.', () =>
         {
            Util.find(doc,
             '[data-ice="summary"] [href="function/index.html#static-function-testAccessFunctionProtected"]',
              (doc) =>
            {
               doc = doc.parents('[data-ice="target"]');
               Util.assert.includes(doc, null, 'protected testAccessFunctionProtected()');
            });
         });

         /** @test {SingleDocBuilder#_buildSingleDoc} */
         it('has private accessor.', () =>
         {
            Util.find(doc,
             '[data-ice="summary"] [href="function/index.html#static-function-testAccessFunctionPrivate"]', (doc) =>
            {
               doc = doc.parents('[data-ice="target"]');
               Util.assert.includes(doc, null, 'private testAccessFunctionPrivate()');
            });
         });

         /** @test {SingleDocBuilder#_buildSingleDoc} */
         it('has auto private accessor.', () =>
         {
            Util.find(doc,
             '[data-ice="summary"] [href="function/index.html#static-function-_testAccessFunctionAutoPrivate"]',
              (doc) =>
            {
               doc = doc.parents('[data-ice="target"]');
               Util.assert.includes(doc, null, 'private _testAccessFunctionAutoPrivate()');
            });
         });
      });

      describe('in detail: ', () =>
      {
         /** @test {SingleDocBuilder#_buildSingleDoc} */
         it('has public accessor.', () =>
         {
            Util.assert.includes(doc, '[data-ice="detail"] #static-function-testAccessFunctionPublic',
             'public testAccessFunctionPublic()');
         });

         /** @test {SingleDocBuilder#_buildSingleDoc} */
         it('has protected accessor.', () =>
         {
            Util.assert.includes(doc, '[data-ice="detail"] #static-function-testAccessFunctionProtected',
             'protected testAccessFunctionProtected()');
         });

         /** @test {SingleDocBuilder#_buildSingleDoc} */
         it('has private accessor.', () =>
         {
            Util.assert.includes(doc, '[data-ice="detail"] #static-function-testAccessFunctionPrivate',
             'private testAccessFunctionPrivate()');
         });

         /** @test {SingleDocBuilder#_buildSingleDoc} */
         it('has auto private accessor.', () =>
         {
            Util.assert.includes(doc, '[data-ice="detail"] #static-function-_testAccessFunctionAutoPrivate',
             'private _testAccessFunctionAutoPrivate()');
         });
      });
   });
});
