import DocDB      from 'tjsdoc-runtime-common/src/doc/utils/DocDB.js';
import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

if (testConfig.category.doc && testConfig.doc.tests.undocument)
{
   for (const target of testConfig.targets)
   {
      /**
       * @test {DocFactory#_traverseComments}
       * @test {AbstractDoc#@desc}
       * @test {DocResolver#_resolveUndocumentIdentifier}
       */
      describe('test undocument', () =>
      {
         it('has undocument tag.', () =>
         {
            const docDB = new DocDB(Util.readJSON(target, 'docData.json'));

            const doc = docDB.find({ name: 'TestUndocumentDefinition', undocument: true })[0];

            Util.assert.equal(doc.undocument, true);
         });
      });
   }
}
