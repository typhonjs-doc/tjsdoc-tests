import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'guess', (target) =>
{
   /** @test {ParamParser#guessParam} */
   describe(`TestGuessParam (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'class/test/fixture/package/src/Guess/Param.js~TestGuessParam.html');
      });

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

               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="name"]', 'p1');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="type"]', 'number');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="attributes"]',
                'optional default: 123');

               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(2) [data-ice="name"]', 'p2');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(2) [data-ice="type"]', 'string');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(2) [data-ice="attributes"]',
                'optional default: text');
            });

            Util.findParent(doc, '[id="instance-classmethod-method2"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method2(p1: number[], p2: {"x1": string, "x2": boolean})');

               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="name"]', 'p1');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="type"]', 'number[]');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="attributes"]',
                'optional default: [123,456]');

               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(2) [data-ice="name"]', 'p2');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(2) [data-ice="type"]',
                '{"x1": string, "x2": boolean}');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(2) [data-ice="attributes"]',
                'optional default: {"x1":"text","x2":true}');
            });

            Util.findParent(doc, '[id="instance-classmethod-method3"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method3(arrayPattern: number[])');

               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="name"]', 'arrayPattern');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="type"]', 'number[]');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="attributes"]',
                'optional default: [123,456]');
            });

            Util.findParent(doc, '[id="instance-classmethod-method4"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method4(objectPattern: {"x1": number, "x2": string})');

               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="name"]', 'objectPattern');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="type"]',
                '{"x1": number, "x2": string}');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="attributes"]',
                'optional default: {"x1":123,"x2":"text"}');
            });

            Util.findParent(doc, '[id="instance-classmethod-method5"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method5(p1: ...*)');

               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="name"]', 'p1');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="type"]',
                '...*');
            });

            Util.findParent(doc, '[id="instance-classmethod-method6"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method6(objectPattern: {"x1": *, "x2": *})');

               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="name"]', 'objectPattern');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="type"]', '{"x1": *, "x2": *}');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="attributes"]',
                'default: {"x1":null,"x2":null}');
            });

            Util.findParent(doc, '[id="instance-classmethod-method7"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method7(p1: *)');

               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="name"]', 'p1');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="type"]', '*');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="attributes"]',
                'optional default: value');
            });

            Util.findParent(doc, '[id="instance-classmethod-method8"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method8(p1: *)');

               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="name"]', 'p1');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="type"]', '*');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="attributes"]', 'optional');
            });

            Util.findParent(doc, '[id="instance-classmethod-method9"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method9(objectPattern: {"x": *, "y": *, ...z: Object})');

               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="name"]', 'objectPattern');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="type"]',
                '{"x": *, "y": *, ...z: Object}');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="attributes"]',
                'default: {"x":null,"y":null,"z":{}}');
            });

            Util.findParent(doc, '[id="instance-classmethod-method10"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public method10(arrayPattern: number[])');

               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="name"]', 'arrayPattern');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="type"]', 'number[]');
               Util.assert.includes(doc, 'div.bordered-div-row:nth-child(1) [data-ice="attributes"]',
                'default: [null, 10, *, "text", *]');
            });
         });
      });
   });
});
