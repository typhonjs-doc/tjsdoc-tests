/**
 * This is TestDeprecatedClass.
 * @deprecated this is deprecated.
 */
export default class TestDeprecatedClass
{
   /**
    * This is constructor.
    */
   constructor()
   {
      /**
       * This is p1.
       * @type {number}
       * @deprecated
       */
      this.p1 = 123;
   }

   /**
    * This is method1.
    * @deprecated
    */
   method1() {}
}
