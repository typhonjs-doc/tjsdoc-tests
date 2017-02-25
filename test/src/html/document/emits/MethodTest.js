import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.emits)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@emits} */
      describe('TestEmitsMethod', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/emits/Method.js~TestEmitsMethod.html');

         describe('in details', () =>
         {
            it('has desc.', () =>
            {
               Util.findParent(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.findParent(doc, '[data-ice="emit"] [href$="TestEmitsMethodEvent1.html"]', '[data-ice="emit"]',
                   (doc) =>
                  {
                     Util.assert.includes(doc, 'a', 'TestEmitsMethodEvent1');

                     Util.assert.includes(doc, 'a',
                      'class/test/fixture/package/src/emits/Method.js~TestEmitsMethodEvent1.html', 'href');

                     Util.assert.includes(doc, null, 'TestEmitsMethodEvent1 emits event when foo');
                  });

                  Util.findParent(doc, '[data-ice="emit"] [href$="TestEmitsMethodEvent2.html"]', '[data-ice="emit"]',
                   (doc) =>
                  {
                     Util.assert.includes(doc, 'a', 'TestEmitsMethodEvent2');

                     Util.assert.includes(doc, 'a',
                      'class/test/fixture/package/src/emits/Method.js~TestEmitsMethodEvent2.html', 'href');

                     Util.assert.includes(doc, null, 'TestEmitsMethodEvent2 emits event when bar');
                  });
               });
            });
         });
      });
   }
}
