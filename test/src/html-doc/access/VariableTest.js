import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'access', (target) =>
{
   /** @test {SingleDocBuilder} */
   describe(`TestAccessVariable (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'variable/index.html');

      /** @test {SingleDocBuilder#_buildSingleDoc} */
      describe('in summary: ', () =>
      {
         it('has public accessor.', () =>
         {
            Util.find(doc,
             '[data-ice="summary"] [href="variable/index.html#static-modulevariable-testAccessVariablePublic"]', (doc) =>
            {
               doc = doc.parents('[data-ice="target"]');
               Util.assert.includes(doc, null, 'public testAccessVariablePublic:');
            });
         });

         it('has protected accessor.', () =>
         {
            Util.find(doc,
             '[data-ice="summary"] [href="variable/index.html#static-modulevariable-testAccessVariableProtected"]',
              (doc) =>
            {
               doc = doc.parents('[data-ice="target"]');
               Util.assert.includes(doc, null, 'protected testAccessVariableProtected:');
            });
         });

         it('has private accessor.', () =>
         {
            Util.find(doc,
             '[data-ice="summary"] [href="variable/index.html#static-modulevariable-testAccessVariablePrivate"]', (doc) =>
            {
               doc = doc.parents('[data-ice="target"]');
               Util.assert.includes(doc, null, 'private testAccessVariablePrivate:');
            });
         });

         it('has auto private accessor.', () =>
         {
            Util.find(doc,
             '[data-ice="summary"] [href="variable/index.html#static-modulevariable-_testAccessVariableAutoPrivate"]',
              (doc) =>
            {
               doc = doc.parents('[data-ice="target"]');
               Util.assert.includes(doc, null, 'private _testAccessVariableAutoPrivate:');
            });
         });
      });

      /** @test {SingleDocBuilder#_buildSingleDoc} */
      describe('in detail: ', () =>
      {
         it('has public accessor.', () =>
         {
            Util.assert.includes(doc, '[data-ice="detail"] #static-modulevariable-testAccessVariablePublic',
             'public testAccessVariablePublic:');
         });

         it('has protected accessor.', () =>
         {
            Util.assert.includes(doc, '[data-ice="detail"] #static-modulevariable-testAccessVariableProtected',
             'protected testAccessVariableProtected:');
         });

         it('has private accessor.', () =>
         {
            Util.assert.includes(doc, '[data-ice="detail"] #static-modulevariable-testAccessVariablePrivate',
             'private testAccessVariablePrivate:');
         });

         it('has auto private accessor.', () =>
         {
            Util.assert.includes(doc, '[data-ice="detail"] #static-modulevariable-_testAccessVariableAutoPrivate',
             'private _testAccessVariableAutoPrivate:');
         });
      });
   });
});
