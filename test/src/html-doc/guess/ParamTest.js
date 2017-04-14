import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'guess', (target) =>
{
   /** @test {ParamParser#guessParam} */
   describe(`TestGuessParam (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'class/test/fixture/package/src/Guess/Param.js~TestGuessParam.html');

      describe('in summary', () =>
      {
         it('has guessed param.', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method1"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'public method1(p1: number, p2: string)');
            });

            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method2"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'public method2(p1: number[], p2: {"x1": string, "x2": boolean})');
            });

            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method3"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'public method3(arrayPattern: number[])');
            });

            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method4"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'public method4(objectPattern: {"x1": number, "x2": string})');
            });

            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method5"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'public method5(p1: ...*)');
            });

            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method6"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'public method6(objectPattern: {"x1": *, "x2": *})');
            });

            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method7"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'public method7(p1: *)');
            });

            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method8"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'public method8(p1: *)');
            });

            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method9"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'public method9(objectPattern: {"x": *, "y": *, ...z: Object})');
            });

            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method10"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'public method10(arrayPattern: number[])');
            });
         });
      });

      describe('in details', () =>
      {
         it('has guessed param.', () =>
         {
            Util.findParent(doc, '[id="instance-classmethod-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method1(p1: number, p2: string)');

               Util.assert.includes(doc, '.params tbody tr:nth-child(1)', 'p1 number optional default: 123');

               Util.assert.includes(doc, '.params tbody tr:nth-child(2)', 'p2 string optional default: text');
            });

            Util.findParent(doc, '[id="instance-classmethod-method2"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method2(p1: number[], p2: {"x1": string, "x2": boolean})');

               Util.assert.includes(doc, '.params tbody tr:nth-child(1)', 'p1 number[] optional default: [123,456]');

               Util.assert.includes(doc, '.params tbody tr:nth-child(2)',
                'p2 {"x1": string, "x2": boolean} optional default: {"x1":"text","x2":true}');
            });

            Util.findParent(doc, '[id="instance-classmethod-method3"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method3(arrayPattern: number[])');

               Util.assert.includes(doc, '.params tbody tr:nth-child(1)',
                'arrayPattern number[] optional default: [123,456]');
            });

            Util.findParent(doc, '[id="instance-classmethod-method4"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method4(objectPattern: {"x1": number, "x2": string})');

               Util.assert.includes(doc, '.params tbody tr:nth-child(1)',
                'objectPattern {"x1": number, "x2": string} optional default: {"x1":123,"x2":"text"}');
            });

            Util.findParent(doc, '[id="instance-classmethod-method5"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method5(p1: ...*)');

               Util.assert.includes(doc, '.params tbody tr:nth-child(1)', 'p1 ...*');
            });

            Util.findParent(doc, '[id="instance-classmethod-method6"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method6(objectPattern: {"x1": *, "x2": *})');

               Util.assert.includes(doc, '.params tbody tr:nth-child(1)',
                'objectPattern {"x1": *, "x2": *} default: {"x1":null,"x2":null}');
            });

            Util.findParent(doc, '[id="instance-classmethod-method7"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method7(p1: *)');

               Util.assert.includes(doc, '.params tbody tr:nth-child(1)', 'p1 * optional default: value');
            });

            Util.findParent(doc, '[id="instance-classmethod-method8"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method8(p1: *)');

               Util.assert.includes(doc, '.params tbody tr:nth-child(1)', 'p1 * optional');
            });

            Util.findParent(doc, '[id="instance-classmethod-method9"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method9(objectPattern: {"x": *, "y": *, ...z: Object})');

               Util.assert.includes(doc, '.params tbody tr:nth-child(1)',
                'objectPattern {"x": *, "y": *, ...z: Object} default: {"x":null,"y":null,"z":{}}');
            });

            Util.findParent(doc, '[id="instance-classmethod-method10"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method10(arrayPattern: number[])');

               Util.assert.includes(doc, '.params tbody tr:nth-child(1)',
                'arrayPattern number[] default: [null, 10, *, "text", *]');
            });
         });
      });
   });
});
