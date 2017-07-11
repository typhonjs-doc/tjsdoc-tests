import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'guess', (target) =>
{
   /** @test {ParamParser#guessParam} */
   describe(`TestGuessProperty (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'class/test/fixture/package/src/Guess/Property.js~TestGuessProperty.html');
      });

      describe('in summary', () =>
      {
         it('has guessed member.', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmember-p1"]', '[data-ice="target"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'public p1: number');
            });

            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmember-p2"]', '[data-ice="target"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'public p2: number[]');
            });

            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmember-p3"]', '[data-ice="target"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'public p3: {"x1": number, "x2": string}');
            });

            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmember-p4"]', '[data-ice="target"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'public p4: string');
            });
         });
      });

      describe('in details', () =>
      {
         it('has guessed member.', () =>
         {
            Util.findParent(doc, '[id="instance-classmember-p1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public p1: number');
            });

            Util.findParent(doc, '[id="instance-classmember-p2"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public p2: number[]');
            });

            Util.findParent(doc, '[id="instance-classmember-p3"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public p3: {"x1": number, "x2": string}');
            });

            Util.findParent(doc, '[id="instance-classmember-p4"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public p4: string');
            });
         });
      });
   });
});
