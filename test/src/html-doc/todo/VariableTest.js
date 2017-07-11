import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'todo', (target) =>
{
   /** @test {AbstractDoc#@todo} */
   describe(`testTodoVariable (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'variable/index.html');
      });

      it('has see.', () =>
      {
         Util.findParent(doc, '[id="static-modulevariable-testTodoVariable"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="todo"]', 'this is todo.');
         });
      });
   });
});
