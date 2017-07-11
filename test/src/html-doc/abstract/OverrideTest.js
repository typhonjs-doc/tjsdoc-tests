import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'abstract', (target) =>
{
   /** @test {DocBuilder} */
   describe(`TestAbstractOverride (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target,
          'class/test/fixture/package/src/abstract/Override.js~TestAbstractOverride.html');
      });

      /** @test {DocBuilder#_buildOverrideMethod} */
      it('has override description in summary.', () =>
      {
         Util.find(doc, '[data-ice="detail"]:nth-of-type(1)', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="override"] a', 'TestAbstractDefinition#method1');

            Util.assert.includes(doc, '[data-ice="override"] a',
             'class/test/fixture/package/src/abstract/Definition.js~TestAbstractDefinition.html#instance-classmethod-method1',
              'href');
         });

         Util.find(doc, '[data-ice="detail"]:nth-of-type(2)', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="override"] a', 'TestAbstractDefinition#method2');

            Util.assert.includes(doc, '[data-ice="override"] a',
             'class/test/fixture/package/src/abstract/Definition.js~TestAbstractDefinition.html#instance-classmethod-method2',
               'href');
         });
      });
   });
});
