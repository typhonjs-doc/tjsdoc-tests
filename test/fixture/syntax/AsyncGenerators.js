/**
 * Class Foo.
 */
export default class Foo
{
   /**
    * Async generator method.
    */
   async *method()
   {
      const stream = [Promise.resolve(4), Promise.resolve(9), Promise.resolve(12)];
      let total = 0;

      // Presently eslint-plugin-babel doesn't have a semi rule override for async generators so disable for now.
      for await (const val of stream)  // eslint-disable-line semi
      {
         total += await val;
         yield total;
      }
   }
}
