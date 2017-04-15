import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'todo', (target) =>
{
   /** @test {AbstractDoc#@todo} */
   describe(`TestTodoClass (${target.name}):`, () =>
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
         Util.findParent(doc, '[id="instance-classmethod-constructor"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="todo"]', 'this is todo');
         });
      });

      it('has see from member.', () =>
      {
         Util.findParent(doc, '[id="instance-classmember-p1"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="todo"]', 'this is todo');
         });
      });

      it('has see from method.', () =>
      {
         Util.findParent(doc, '[id="instance-classmethod-method1"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="todo"]', 'this is todo');
         });
      });
   });
});
