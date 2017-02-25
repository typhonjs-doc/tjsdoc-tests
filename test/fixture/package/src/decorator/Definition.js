/* eslint-disable require-jsdoc */ // Note: There is no require-jsdoc override to allow comments above decorators.

/**
 * This is TestDecoratorDefinition.
 */
@testDecoratorAnnotation1
export default class TestDecoratorDefinition
{
   /**
    * This is static method1.
    */
   @testDecoratorAnnotation1
   static method1() {}

   /**
    * This is get value1.
    * @type {number}
    */
   @testDecoratorAnnotation1
   get value1() {}

   /**
    * This is set value2.
    * @type {number}
    */
   @testDecoratorAnnotation1
   set value2(v) {}

   /**
    * This is method1.
    */
   @testDecoratorAnnotation1
   @testDecoratorAnnotation2(true)
   method1() {}
}

/**
 * This is testDecoratorAnnotation1.
 */
export function testDecoratorAnnotation1() {}

/**
 * This is testDecoratorAnnotation2.
 */
export function testDecoratorAnnotation2() {}
