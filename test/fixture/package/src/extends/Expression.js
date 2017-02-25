/**
 * This is testExtendsExpressionInner.
 */
function testExtendsExpressionInner() {}

/**
 * This is TestExtendsExpression.
 */
export default class TestExtendsExpression extends testExtendsExpressionInner(123)
{
   /**
    * This is method1.
    */
   method1() {}
}
