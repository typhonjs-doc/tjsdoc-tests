import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('runtime_common', 'docDB', (target) =>
{
   const DocDB = require('tjsdoc-runtime-common/src/doc/DocDB.js').DocDB;

   /** @test {AbstractDoc#@_unknown} */
   describe(`test unknown tags (${target.name}):`, () =>
   {
      it('has unknown tags (TestUnknownDefinition).', () =>
      {
         const docDB = new DocDB(Util.readJSON(target, 'docData.json'));

         const doc = docDB.find({ name: 'TestUnknownDefinition' })[0];

         Util.assert.equal(doc.tagsUnknown.length, 1);

         const index = doc.tagsUnknown.findIndex((tag) => tag.tagName === '@foobar');

         Util.assert.isAtLeast(index, 0);
         Util.assert.equal(doc.tagsUnknown[index].tagValue, 'this is unknown tag.');
      });
   });
});
