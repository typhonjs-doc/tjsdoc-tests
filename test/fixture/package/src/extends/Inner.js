/**
 * This is _TestExtendsInner.
 */
class _TestExtendsInner
{
   /**
    * This is method1.
    */
   method1() {}

   /**
    * This is method2.
    */
   method2() {}
}

/**
 * This is TestExtendsInner.
 */
export default class TestExtendsInner extends _TestExtendsInner
{
   /**
    * This is method1 with override.
    */
   method1() {}

   /**
    * This is method3.
    */
   method3() {}
}
