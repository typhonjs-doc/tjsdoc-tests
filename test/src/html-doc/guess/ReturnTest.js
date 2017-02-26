import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.guess)
{
   for (const target of testConfig.targets)
   {
      /** @test {ParamParser#guessReturn} */
      describe('TestGuessReturn', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/Guess/Return.js~TestGuessReturn.html');

         describe('in summary', () =>
         {
            it('has guessed return.', () =>
            {
               Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]',
                (doc) =>
               {
                  Util.assert.includes(doc, null, 'public method1(): number');
               });

               Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method2"]', '[data-ice="target"]',
                (doc) =>
               {
                  Util.assert.includes(doc, null, 'public method2(): number[]');
               });

               Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method3"]', '[data-ice="target"]',
                (doc) =>
               {
                  Util.assert.includes(doc, null, 'public method3(): {"x1": number, "x2": string}');
               });

               Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method4"]', '[data-ice="target"]',
                (doc) =>
               {
                  Util.assert.includes(doc, null, 'public method4(): string');
               });

               Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method5"]', '[data-ice="target"]',
                (doc) =>
               {
                  Util.assert.includes(doc, null, 'public method5(): {"a": *, ...obj: Object}');
               });
            });
         });

         describe('in details', () =>
         {
            it('has guessed param.', () =>
            {
               Util.findParent(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, 'h3', 'public method1(): number');
               });

               Util.findParent(doc, '[id="instance-method-method2"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, 'h3', 'public method2(): number[]');
               });

               Util.findParent(doc, '[id="instance-method-method3"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, 'h3', 'public method3(): {"x1": number, "x2": string}');
               });

               Util.findParent(doc, '[id="instance-method-method4"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, 'h3', 'public method4(): string');
               });

               Util.findParent(doc, '[id="instance-method-method5"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, 'h3', 'public method5(): {"a": *, ...obj: Object}');
               });
            });
         });
      });
   }
}
