/**
 * This is TestTypeSpread.
 */
export default class TestTypeSpread
{
   /**
    * This is method1.
    *
    * @param {...number} p1 - this is spread number p1.
    */
   method1(...p1) {} // eslint-disable-line no-unused-vars

   /**
    * This is method2.
    *
    * @param {Object} config - this is config.
    * @param {number} config.x - this is number x.
    * @param {string} config.y - this is string y.
    * @param {number[]} config.a - thi is number[] a.
    * @param {string[]} config.b - thi is number[] b.
    */
   method2({ x, y, ...z }) {} // eslint-disable-line no-unused-vars
}
