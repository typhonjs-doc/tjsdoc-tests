import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'example', (target) =>
{
   /** @test {AbstractDoc#@example} */
   describe(`TestExampleClass (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'class/test/fixture/package/src/Example/Class.js~TestExampleClass.html');
      });

      describe('in self detail', () =>
      {
         it('has example.', () =>
         {
            Util.assert.includes(doc, '.self-detail [data-ice="exampleDoc"]:nth-of-type(1)',
             'const foo = 123; console.log(foo);');

            Util.assert.includes(doc, '.self-detail [data-ice="exampleDoc"]:nth-of-type(2)',
             'const bar = 123; console.log(bar);');
         });
      });

      describe('in details', () =>
      {
         it('has example.', () =>
         {
            Util.findParent(doc, '[id="instance-classmethod-constructor"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="exampleDoc"]', 'const foo = 123;');
            });

            Util.findParent(doc, '[id="instance-classmember-p1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="exampleDoc"]', 'const foo = 123;');
            });

            Util.findParent(doc, '[id="instance-classmethod-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="exampleDoc"]', 'const foo = 123;');
            });
         });
      });
   });
});
