/**
 * @ignore
 *
 * @param {*} a -
 * @param {*} b -
 *
 * @returns {object}
 */
function mixin(a, b) { return Object.assign({}, a, b); }

/**
 * This is TestExtendsMixinInner1.
 */
export class TestExtendsMixinInner1
{
   /**
    * This is method1.
    */
   method1() {}
}

/**
 * This is TestExtendsMixinInner2.
 */
export class TestExtendsMixinInner2
{
   /**
    * This is method2.
    */
   method2() {}
}

/**
 * This is TestExtendsMixin.
 */
export default class TestExtendsMixin extends mixin(TestExtendsMixinInner1, TestExtendsMixinInner2)
{
   /**
    * This is method3.
    */
   method3() {}
}
