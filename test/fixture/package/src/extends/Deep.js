/**
 * This is TestExtendsDeepShape.
 */
export class TestExtendsDeepShape extends Array
{
   /**
    * This is get staticValueShape.
    */
   static get staticValueShape() {}

   /**
    * This is set staticValueShape.
    * @param {*} v -
    */
   static set staticValueShape(v) {}

   /**
    * This is staticMethodShape.
    */
   static staticMethodShape()
   {
      this.staticPShape = 123;
   }

   /**
    * This is get valueShape.
    */
   get valueShape() {}

   /**
    * This is set valueShape.
    * @param {*} v -
    */
   set valueShape(v) {}

   /**
    * This is methodShape.
    */
   methodShape()
   {
      this.pShape = 123;
   }
}

/**
 * This is
 */
export class TestExtendsDeepRectangle extends TestExtendsDeepShape
{
   /**
    * This is get staticValueRectangle.
    */
   static get staticValueRectangle() {}

   /**
    * This is set staticValueRectangle.
    * @param {*} v -
    */
   static set staticValueRectangle(v) {}

   /**
    * This is staticMethodRectangle.
    */
   static staticMethodRectangle()
   {
      this.staticPRectangle = 123;
   }

   /**
    * This is get valueRectangle.
    */
   get valueRectangle() {}

   /**
    * This is set valueRectangle.
    * @param {*} v -
    */
   set valueRectangle(v) {}

   /**
    * This is methodRectangle.
    */
   methodRectangle()
   {
      this.pRectangle = 123;
   }
}

/**
 * This is TestExtendsDeepSquare.
 */
export default class TestExtendsDeepSquare extends TestExtendsDeepRectangle
{
   /**
    * This is get staticValueSquare.
    */
   static get staticValueSquare() {}

   /**
    * This is set staticValueSquare.
    * @param {*} v -
    */
   static set staticValueSquare(v) {}

   /**
    * This is staticMethodSquare.
    */
   static staticMethodSquare()
   {
      this.staticPSquare = 123;
   }

   /**
    * This is get valueSquare.
    */
   get valueSquare() {}

   /**
    * This is set valueSquare.
    * @param {*} v -
    */
   set valueSquare(v) {}

   /**
    * This is methodSquare.
    */
   methodSquare()
   {
      this.pSquare = 123;
   }
}
