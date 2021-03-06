import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'ignore', (target) =>
{
   /** @test {DocResolver#_resolveIgnore */
   describe(`test ignore class (${target.name}):`, () =>
   {
      describe('TestIgnoreClass1', () =>
      {
         it('is not documented.', () =>
         {
            Util.assert.throws(() => Util.readDoc(target,
             'class/test/fixture/package/src/Ignore/Class.js~TestIgnoreClass1.html'));
         });
      });

      describe('TestIgnoreClass2', () =>
      {
         let doc;

         before(() =>
         {
            doc = Util.readDoc(target, 'class/test/fixture/package/src/Ignore/Class.js~TestIgnoreClass2.html');
         });

         it('does not have ignored member.', () =>
         {
            Util.assert.throws(() => Util.find(doc, '[data-ice="summary"] [href$="#instance-member-p1"]', () => {}));
            Util.assert.throws(() => Util.find(doc, '[id="instance-member-p1"]', () => {}));
         });

         it('does not have ignored method.', () =>
         {
            Util.assert.throws(() => Util.find(doc,
             '[data-ice="summary"] [href$="#instance-method-method1"]', () => {}));

            Util.assert.throws(() => Util.find(doc, '[id="instance-method-method1"]', () => {}));
         });
      });
   });
});
