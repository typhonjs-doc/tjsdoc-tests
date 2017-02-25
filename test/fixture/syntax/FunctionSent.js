/**
 * Class Foo
 */
export default class Foo
{
   /**
    * Generator method
    */
   *method()
   {
      console.log(function.sent);
      yield true;
   }
}
