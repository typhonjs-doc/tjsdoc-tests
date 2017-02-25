/**
 * This is TestIgnoreClass1.
 * @ignore
 */
export default class TestIgnoreClass1
{
   /**
    * This is method1.
    */
   method1() {}
}

/**
 * This is TestIgnoreClass2.
 */
export class TestIgnoreClass2
{
   /**
    * This is constructor.
    */
   constructor()
   {
      /**
       * This is p1.
       * @type {number}
       * @ignore
       */
      this.p1 = 123;
   }

   /**
    * This is method1.
    * @ignore
    */
   method1() {}
}
