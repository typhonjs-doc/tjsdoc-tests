import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html_doc && testConfig.html_doc.tests.throws)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@throws} */
      describe('TestThrowsMethod', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/throws/Method.js~TestThrowsMethod.html');

         it('has throws.', () =>
         {
            Util.findParent(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, 'tr[data-ice="throw"]:nth-child(1)', 'TestThrowsMethodError1 throw error if foo.');

               Util.assert.includes(doc, 'tr[data-ice="throw"]:nth-child(1) a',
                'class/test/fixture/package/src/throws/Method.js~TestThrowsMethodError1.html', 'href');

               Util.assert.includes(doc, 'tr[data-ice="throw"]:nth-child(2)', 'TestThrowsMethodError2 throw error if bar.');

               Util.assert.includes(doc, 'tr[data-ice="throw"]:nth-child(2) a',
                'class/test/fixture/package/src/throws/Method.js~TestThrowsMethodError2.html', 'href');
            });
         });
      });
   }
}
