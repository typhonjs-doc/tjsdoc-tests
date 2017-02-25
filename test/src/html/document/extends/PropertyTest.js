import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.extends)
{
   for (const target of testConfig.targets)
   {
      /** @test {ClassDoc#@extends} */
      describe('TestExtendsProperty', () =>
      {
         const doc = Util.readDoc(target,
          'class/test/fixture/package/src/extends/Property.js~TestExtendsProperty.html');

         it('has extends chain.', () =>
         {
            Util.find(doc, '.self-detail [data-ice="extendsChain"]', (doc) =>
            {
               Util.assert.includes(doc, null,
                'TestExtendsPropertyPackage~obj.TestExtendsPropertyInner → TestExtendsProperty');
            });
         });
      });
   }
}
