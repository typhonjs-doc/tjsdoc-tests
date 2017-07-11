import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'undocument', (target) =>
{
   /**
    * @test {DocFactory#_traverseComments}
    * @test {AbstractDoc#@desc}
    * @test {DocResolver#_resolveUndocumentIdentifier}
    */
   describe(`TestUndocumentDefinition (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target,
          'class/test/fixture/package/src/Undocument/Definition.js~TestUndocumentDefinition.html');
      });

      it('is exist', () =>
      {
         Util.assert.includes(doc, '.self-detail [data-ice="name"]', 'TestUndocumentDefinition');
      });
   });
});
