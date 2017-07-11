import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'guess', (target) =>
{
   /** @test {ParamParser#guessType} */
   describe(`testGuessVariable (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'variable/index.html');
      });

      describe('in summary', () =>
      {
         it('has guessed type.', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#static-modulevariable-testGuessVariable1"]',
             '[data-ice="target"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'public testGuessVariable1: number');
            });

            Util.findParent(doc, '[data-ice="summary"] [href$="#static-modulevariable-testGuessVariable2"]',
             '[data-ice="target"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'public testGuessVariable2: number[]');
            });

            Util.findParent(doc, '[data-ice="summary"] [href$="#static-modulevariable-testGuessVariable3"]',
             '[data-ice="target"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'public testGuessVariable3: {"x1": number, "x2": string}');
            });

            Util.findParent(doc, '[data-ice="summary"] [href$="#static-modulevariable-testGuessVariable4"]',
             '[data-ice="target"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'public testGuessVariable4: string');
            });
         });
      });

      describe('in details', () =>
      {
         it('has guessed type.', () =>
         {
            Util.findParent(doc, '[id="static-modulevariable-testGuessVariable1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public testGuessVariable1: number');
            });

            Util.findParent(doc, '[id="static-modulevariable-testGuessVariable2"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public testGuessVariable2: number[]');
            });

            Util.findParent(doc, '[id="static-modulevariable-testGuessVariable3"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public testGuessVariable3: {"x1": number, "x2": string}');
            });

            Util.findParent(doc, '[id="static-modulevariable-testGuessVariable4"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public testGuessVariable4: string');
            });
         });
      });
   });
});
