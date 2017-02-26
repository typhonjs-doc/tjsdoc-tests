import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.see)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@see} */
      describe('TestSeeClass', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/See/Class.js~TestSeeClass.html');

         it('has see from class.', () =>
         {
            Util.find(doc, '.self-detail [data-ice="see"]', (doc) =>
            {
               Util.assert.includes(doc, 'a[href="http://foo.example.com"]', 'http://foo.example.com');
               Util.assert.includes(doc, 'a[href="http://bar.example.com"]', 'http://bar.example.com');
            });
         });

         it('has see from constructor.', () =>
         {
            Util.findParent(doc, '[id="instance-constructor-constructor"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="see"] a[href="http://example.com"]', 'http://example.com');
            });
         });

         it('has see from member.', () =>
         {
            Util.findParent(doc, '[id="instance-member-p1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="see"] a[href="http://example.com"]', 'http://example.com');
            });
         });

         it('has see from method.', () =>
         {
            Util.findParent(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="see"] a[href="http://example.com"]', 'http://example.com');
            });
         });
      });
   }
}
