import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'todo', (target) =>
{
   /** @test {AbstractDoc#@todo} */
   describe(`testTodoFunction (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'function/index.html');

      it('has todo.', () =>
      {
         Util.findParent(doc, '[id="static-function-testTodoFunction"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="todo"]', 'this is todo.');
         });
      });
   });
});
