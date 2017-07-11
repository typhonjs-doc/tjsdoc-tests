import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'guess', (target) =>
{
   /** @test {ParamParser#guessReturn} */
   describe(`TestGuessReturn (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'class/test/fixture/package/src/Guess/Return.js~TestGuessReturn.html');
      });

      describe('in summary', () =>
      {
         it('has guessed return.', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method1"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'public method1(): number');
            });

            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method2"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'public method2(): number[]');
            });

            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method3"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'public method3(): {"x1": number, "x2": string}');
            });

            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method4"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'public method4(): string');
            });

            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method5"]', '[data-ice="target"]',
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
            Util.findParent(doc, '[id="instance-classmethod-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method1(): number');
            });

            Util.findParent(doc, '[id="instance-classmethod-method2"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method2(): number[]');
            });

            Util.findParent(doc, '[id="instance-classmethod-method3"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method3(): {"x1": number, "x2": string}');
            });

            Util.findParent(doc, '[id="instance-classmethod-method4"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method4(): string');
            });

            Util.findParent(doc, '[id="instance-classmethod-method5"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method5(): {"a": *, ...obj: Object}');
            });
         });
      });
   });
});
