import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'type', (target) =>
{
   /**
    * @test {ParamParser#parseParamValue}
    * @test {ParamParser#parseParam}
    */
   describe(`TestTypeDefault (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'class/test/fixture/package/src/type/Default.js~TestTypeDefault.html');
      });

      it('has default value.', () =>
      {
         Util.findParent(doc, '[id="instance-classmethod-method1"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="attributes"]',
             'optional default: 123');

            Util.assert.includes(doc, 'div.bordered-div-row:nth-child(2) [data-ice="attributes"]',
             'optional default: []');
         });
      });

      it('has default value of object.', () =>
      {
         Util.findParent(doc, '[id="instance-classmethod-method2"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="attributes"]',
             'optional default: new Foo()');
         });
      });
   });
});
