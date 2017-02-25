/**
 * This is TestEmitsMethod.
 */
export default class TestEmitsMethod
{
   /**
    * This is method1.
    * @emits {TestEmitsMethodEvent1} emits event when foo.
    * @emits {TestEmitsMethodEvent2} emits event when bar.
    */
   method1() {}
}

/**
 * This is TestEmitsMethodEvent1.
 */
export class TestEmitsMethodEvent1 {}

/**
 * This is TestEmitsMethodEvent2.
 */
export class TestEmitsMethodEvent2 {}
