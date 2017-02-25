import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.duplication)
{
   for (const target of testConfig.targets)
   {
      /** @test {DocResolver#_resolveDuplication} */
      describe('TestDuplicationDefinition', () =>
      {
         const doc = Util.readDoc(target,
          'class/test/fixture/package/src/Duplication/Definition.js~TestDuplicationDefinition.html');

         describe('in summary', () =>
         {
            it('has setter/getter/method.', () =>
            {
               Util.findParent(doc, '[data-ice="summary"] [href$="#instance-set-value"]', '[data-ice="target"]',
                (doc) =>
               {
                  Util.assert.includes(doc, null, 'public set value: number');
               });

               Util.findParent(doc, '[data-ice="summary"] [href$="#instance-get-value"]', '[data-ice="target"]',
                (doc) =>
               {
                  Util.assert.includes(doc, null, 'public get value: number');
               });

               Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-onClick"]', '[data-ice="target"]',
                (doc) =>
               {
                  Util.assert.includes(doc, null, 'public onClick(p: number)');
               });
            });
         });

         describe('in details', () =>
         {
            it('has setter/getter/method.', () =>
            {
               Util.findParent(doc, '[id="instance-set-value"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, null, 'public set value: number');
               });

               Util.findParent(doc, '[id="instance-get-value"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, null, 'public get value: number');
               });

               Util.findParent(doc, '[id="instance-method-onClick"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, null, 'public onClick(p: number)');
               });
            });
         });
      });
   }
}