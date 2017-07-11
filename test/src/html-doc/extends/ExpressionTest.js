import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'extends', (target) =>
{
   /** @test {ClassDoc#@extends} */
   describe(`TestExtendsExpression (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target,
          'class/test/fixture/package/src/extends/Expression.js~TestExtendsExpression.html');
      });

      it('has expression extends.', () =>
      {
         Util.find(doc, '.self-detail [data-ice="expressionExtends"]', (doc) =>
         {
            Util.assert.includes(doc, 'pre code',
             'class TestExtendsExpression extends testExtendsExpressionInner(123)');
         });
      });

      it('has extends chain.', () =>
      {
         Util.find(doc, '.self-detail [data-ice="extendsChain"]', (doc) =>
         {
            Util.assert.includes(doc, null, 'testExtendsExpressionInner → TestExtendsExpression');

            Util.assert.includes(doc, 'a[href$="#static-modulefunction-testExtendsExpressionInner"]',
             'testExtendsExpressionInner');
         });
      });
   });
});
