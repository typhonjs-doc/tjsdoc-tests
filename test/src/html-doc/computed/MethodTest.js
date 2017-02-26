import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'computed', (target) =>
{
   /** @test {MethodDoc#@_name} */
   describe(`TestComputedMethod (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'class/test/fixture/package/src/computed/Method.js~TestComputedMethod.html');

      describe('in summary:', () =>
      {
         it('has computed methods.', () =>
         {
            Util.find(doc, '[data-ice="summary"]', (doc) =>
            {
               Util.assert.includes(doc,
                `[href="class/test/fixture/package/src/computed/Method.js~TestComputedMethod.html#instance-method-['foo']"]`,
                 `['foo']`);

               Util.assert.includes(doc,
                `[href="class/test/fixture/package/src/computed/Method.js~TestComputedMethod.html#instance-method-[Symbol.iterator]"]`,
                 `[Symbol.iterator]`);

               Util.assert.includes(doc,
                '[href="class/test/fixture/package/src/computed/Method.js~TestComputedMethod.html#instance-method-[`${foo}`]"]',
                 '[`${foo}`]');

               Util.assert.includes(doc,
                `[href="class/test/fixture/package/src/computed/Method.js~TestComputedMethod.html#instance-method-[foo + bar]"]`,
                 `[foo + bar]`);

               Util.assert.includes(doc,
                `[href="class/test/fixture/package/src/computed/Method.js~TestComputedMethod.html#instance-method-[foo()]"]`,
                 `[foo()]`);

               Util.assert.includes(doc,
                `[href="class/test/fixture/package/src/computed/Method.js~TestComputedMethod.html#instance-method-[foo.bar()]"]`,
                 `[foo.bar()]`);

               Util.assert.includes(doc,
                `[href="class/test/fixture/package/src/computed/Method.js~TestComputedMethod.html#instance-method-[foo.bar.baz]"]`,
                 `[foo.bar.baz]`);

               Util.assert.includes(doc,
                `[href="class/test/fixture/package/src/computed/Method.js~TestComputedMethod.html#instance-method-[foo.bar]"]`,
                 `[foo.bar]`);

               Util.assert.includes(doc,
                `[href="class/test/fixture/package/src/computed/Method.js~TestComputedMethod.html#instance-method-[foo.p + bar]"]`,
                 `[foo.p + bar]`);

               Util.assert.includes(doc, `[href="class/test/fixture/package/src/computed/Method.js~TestComputedMethod.html#instance-method-[foo]"]`,
                `[foo]`);
            });
         });
      });

      describe('in detail:', () =>
      {
         it('has computed method.', () =>
         {
            Util.assert.includes(doc, `[id="instance-method-['foo']"] [data-ice="name"]`, `['foo']`);
            Util.assert.includes(doc, `[id="instance-method-[Symbol.iterator]"] [data-ice="name"]`, `[Symbol.iterator]`);
            Util.assert.includes(doc, '[id="instance-method-[`${foo}`]"] [data-ice="name"]', '[`${foo}`]');
            Util.assert.includes(doc, `[id="instance-method-[foo + bar]"] [data-ice="name"]`, `[foo + bar]`);
            Util.assert.includes(doc, `[id="instance-method-[foo()]"] [data-ice="name"]`, `[foo()]`);
            Util.assert.includes(doc, `[id="instance-method-[foo.bar()]"] [data-ice="name"]`, `[foo.bar()]`);
            Util.assert.includes(doc, `[id="instance-method-[foo.bar.baz]"] [data-ice="name"]`, `[foo.bar.baz]`);
            Util.assert.includes(doc, `[id="instance-method-[foo.bar]"] [data-ice="name"]`, `[foo.bar]`);
            Util.assert.includes(doc, `[id="instance-method-[foo.p + bar]"] [data-ice="name"]`, `[foo.p + bar]`);
            Util.assert.includes(doc, `[id="instance-method-[foo]"] [data-ice="name"]`, `[foo]`);
         });
      });
   });
});
