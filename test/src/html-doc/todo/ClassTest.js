import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.todo)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@todo} */
      describe('TestTodoClass', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/Todo/Class.js~TestTodoClass.html');

         it('has todo at class.', () =>
         {
            Util.find(doc, '.self-detail [data-ice="todo"]', (doc) =>
            {
               Util.assert.includes(doc, 'li:nth-child(1)', 'this is first todo.');
               Util.assert.includes(doc, 'li:nth-child(2)', 'this is second todo.');
            });
         });

         it('has todo at constructor.', () =>
         {
            Util.findParent(doc, '[id="instance-constructor-constructor"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="todo"]', 'this is todo');
            });
         });

         it('has see from member.', () =>
         {
            Util.findParent(doc, '[id="instance-member-p1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="todo"]', 'this is todo');
            });
         });

         it('has see from method.', () =>
         {
            Util.findParent(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="todo"]', 'this is todo');
            });
         });
      });
   }
}
