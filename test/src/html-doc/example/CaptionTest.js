import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'example', (target) =>
{
   /** @test {AbstractDoc#@example} */
   describe(`TestExampleCaption (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'class/test/fixture/package/src/Example/Caption.js~TestExampleCaption.html');
      });

      describe('in self detail', () =>
      {
         it('has caption of example.', () =>
         {
            Util.assert.includes(doc, '.self-detail [data-ice="exampleDoc"] [data-ice="exampleCaption"]',
             'this is caption');
         });
      });
   });
});
