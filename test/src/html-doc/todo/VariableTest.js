import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.todo)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@todo} */
      describe('testTodoVariable', () =>
      {
         const doc = Util.readDoc(target, 'variable/index.html');

         it('has see.', () =>
         {
            Util.findParent(doc, '[id="static-variable-testTodoVariable"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="todo"]', 'this is todo.');
            });
         });
      });
   }
}
