/**
 * Class Foo.
 */
export default class Foo
{
   /**
    * Method 1 - Do expressions.
    * @param {*} x - A value.
    */
   method1(x)
   {
      const a = do { x > 10 ? 'big' : 'small'; };  // eslint-disable-line no-unused-vars
   }
}
