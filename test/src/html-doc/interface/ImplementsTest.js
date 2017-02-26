import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.interface)
{
   for (const target of testConfig.targets)
   {
      /** @test {ClassDoc#@implements} */
      describe('TestInterfaceImplements', () =>
      {
         const doc = Util.readDoc(target,
          'class/test/fixture/package/src/interface/Implements.js~TestInterfaceImplements.html');

         it('has implements.', () =>
         {
            Util.find(doc, '.self-detail [data-ice="implements"]', (doc) =>
            {
               Util.assert.includes(doc, 'ul', 'TestInterfaceDefinition, TestInterfaceImplementsInner');

               Util.assert.includes(doc,
                'ul a[href="class/test/fixture/package/src/interface/Definition.js~TestInterfaceDefinition.html"]',
                 'TestInterfaceDefinition');

               Util.assert.includes(doc,
                'ul a[href="class/test/fixture/package/src/interface/Implements.js~TestInterfaceImplementsInner.html"]',
                 'TestInterfaceImplementsInner');
            });
         });
      });
   }
}
