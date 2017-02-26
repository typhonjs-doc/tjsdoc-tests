import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'interface', (target) =>
{
   /** @test {ClassDoc#@interface} */
   describe(`TestInterfaceDefinition (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target,
       'class/test/fixture/package/src/interface/Definition.js~TestInterfaceDefinition.html');

      it('has interface mark.', () =>
      {
         Util.assert.includes(doc, '.header-notice [data-ice="kind"]', 'interface');
      });

      it('has direct subclass.', () =>
      {
         Util.find(doc, '.self-detail [data-ice="directImplemented"]', (doc) =>
         {
            Util.assert.includes(doc,
             'a[href="class/test/fixture/package/src/interface/Implements.js~TestInterfaceImplements.html"]',
              'TestInterfaceImplements');
         });
      });
   });
});
