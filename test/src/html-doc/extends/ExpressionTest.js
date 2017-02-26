import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.extends)
{
   for (const target of testConfig.targets)
   {
      /** @test {ClassDoc#@extends} */
      describe('TestExtendsExpression', () =>
      {
         const doc = Util.readDoc(target,
          'class/test/fixture/package/src/extends/Expression.js~TestExtendsExpression.html');

         it('has expression extends.', () =>
         {
            Util.find(doc, '.self-detail [data-ice="expressionExtends"]', (doc) =>
            {
               Util.assert.includes(doc, 'pre code', 'class TestExtendsExpression extends testExtendsExpressionInner(123)');
            });
         });

         it('has extends chain.', () =>
         {
            Util.find(doc, '.self-detail [data-ice="extendsChain"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'testExtendsExpressionInner → TestExtendsExpression');

               Util.assert.includes(doc, 'a[href$="#static-function-testExtendsExpressionInner"]',
                'testExtendsExpressionInner');
            });
         });
      });
   }
}
