import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'todo', (target) =>
{
   /** @test {AbstractDoc#@todo} */
   describe(`TestTodoClass (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'class/test/fixture/package/src/Todo/Class.js~TestTodoClass.html');
      });

      it('has todo at class.', () =>
      {
         Util.find(doc, '.self-detail [data-ice="todoWrapper"]', (doc) =>
         {
            Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="todoEntry"]', 'this is first todo.');
            Util.assert.includes(doc, 'div.bordered-div-row:nth-child(2) [data-ice="todoEntry"]', 'this is second todo.');
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
