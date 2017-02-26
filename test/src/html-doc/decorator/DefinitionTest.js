import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'decorator', (target) =>
{
   /**
    * @test {ClassDocBuilder#_buildClassDoc}
    * @test {DocBuilder#_buildDetailDocs}
    */
   describe(`TestDecoratorDefinition (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target,
       'class/test/fixture/package/src/Decorator/Definition.js~TestDecoratorDefinition.html');

      it('has decorator at class.', () =>
      {
         Util.find(doc, '[data-ice="content"] .self-detail', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="decorator"]', 'testDecoratorAnnotation1');
         });
      });

      it('has decorator at static method.', () =>
      {
         Util.findParent(doc, '[id="static-method-method1"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="decorator"]', 'testDecoratorAnnotation1');
         });
      });

      it('has decorator at getter.', () =>
      {
         Util.findParent(doc, '[id="instance-get-value1"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="decorator"]', 'testDecoratorAnnotation1');
         });
      });

      it('has decorator at setter.', () =>
      {
         Util.findParent(doc, '[id="instance-set-value2"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="decorator"]', 'testDecoratorAnnotation1');
         });
      });

      it('has decorator at method.', () =>
      {
         Util.findParent(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', (doc) =>
         {
            Util.assert.includes(doc, '[data-ice="decorator"] li:nth-of-type(1)', 'testDecoratorAnnotation1');
            Util.assert.includes(doc, '[data-ice="decorator"] li:nth-of-type(2)', 'testDecoratorAnnotation2(true)');
         });
      });
   });
});
