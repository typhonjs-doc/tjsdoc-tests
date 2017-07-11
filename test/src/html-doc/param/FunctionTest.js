import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'param', (target) =>
{
   /** @test {FunctionDoc#@param} */
   describe(`testParamFunction (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'function/index.html');
      });

      describe('in summary', () =>
      {
         it('has param.', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#static-modulefunction-testParamFunction"]',
             '[data-ice="target"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'public testParamFunction(p1: number, p2: TestClassDefinition)');
            });
         });
      });

      describe('in details', () =>
      {
         it('has param.', () =>
         {
            Util.findParent(doc, '[id="static-modulefunction-testParamFunction"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'h3', 'public testParamFunction(p1: number, p2: TestClassDefinition)');

               Util.assert.includes(doc, '.params tbody tr:nth-child(1)', 'p1 number this is p1.');

               Util.assert.includes(doc, '.params tbody tr:nth-child(2)', 'p2 TestClassDefinition this is p2.');

               Util.assert.includes(doc, '.params tbody tr:nth-child(2) a',
                'class/test/fixture/package/src/class/Definition.js~TestClassDefinition.html', 'href');
            });
         });
      });
   });
});
