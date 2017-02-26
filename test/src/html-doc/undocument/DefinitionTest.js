import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.undocument)
{
   for (const target of testConfig.targets)
   {
      /**
       * @test {DocFactory#_traverseComments}
       * @test {AbstractDoc#@desc}
       * @test {DocResolver#_resolveUndocumentIdentifier}
       */
      describe('TestUndocumentDefinition', () =>
      {
         const doc = Util.readDoc(target,
          'class/test/fixture/package/src/Undocument/Definition.js~TestUndocumentDefinition.html');

         it('is exist', () =>
         {
            Util.assert.includes(doc, '.self-detail [data-ice="name"]', 'TestUndocumentDefinition');
         });
      });
   }
}
