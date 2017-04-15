import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'computed', (target) =>
{
   /** @test {MemberDoc#@_name} */
   describe(`TestComputedProperty (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'class/test/fixture/package/src/computed/Property.js~TestComputedProperty.html');

      describe('in summary:', () =>
      {
         it('has computed properties.', () =>
         {
            Util.find(doc, '[data-ice="memberSummary"]', (doc) =>
            {
               Util.assert.includes(doc,
                `[href="class/test/fixture/package/src/computed/Property.js~TestComputedProperty.html#instance-classmember-['foo']"]`,
                 `['foo']`);

               Util.assert.includes(doc,
                `[href="class/test/fixture/package/src/computed/Property.js~TestComputedProperty.html#instance-classmember-[Symbol.iterator]"]`,
                 `[Symbol.iterator]`);

               Util.assert.includes(doc,
                '[href="class/test/fixture/package/src/computed/Property.js~TestComputedProperty.html#instance-classmember-[`${foo}`]"]',
                 '[`${foo}`]');

               Util.assert.includes(doc,
                `[href="class/test/fixture/package/src/computed/Property.js~TestComputedProperty.html#instance-classmember-[foo + bar]"]`,
                 `[foo + bar]`);

               Util.assert.includes(doc,
                `[href="class/test/fixture/package/src/computed/Property.js~TestComputedProperty.html#instance-classmember-[foo()]"]`,
                 `[foo()]`);

               Util.assert.includes(doc,
                `[href="class/test/fixture/package/src/computed/Property.js~TestComputedProperty.html#instance-classmember-[foo.bar()]"]`,
                 `[foo.bar()]`);

               Util.assert.includes(doc,
                `[href="class/test/fixture/package/src/computed/Property.js~TestComputedProperty.html#instance-classmember-[foo.bar.baz]"]`,
                 `[foo.bar.baz]`);

               Util.assert.includes(doc,
                `[href="class/test/fixture/package/src/computed/Property.js~TestComputedProperty.html#instance-classmember-[foo.bar]"]`,
                 `[foo.bar]`);

               Util.assert.includes(doc,
                `[href="class/test/fixture/package/src/computed/Property.js~TestComputedProperty.html#instance-classmember-[foo.p + bar]"]`,
                 `[foo.p + bar]`);

               Util.assert.includes(doc,
                `[href="class/test/fixture/package/src/computed/Property.js~TestComputedProperty.html#instance-classmember-[foo]"]`,
                 `[foo]`);
            });
         });
      });

      describe('in detail:', () =>
      {
         it('has computed properties.', () =>
         {
            Util.assert.includes(doc, `[id="instance-classmember-['foo']"] [data-ice="name"]`, `['foo']`);
            Util.assert.includes(doc, `[id="instance-classmember-[Symbol.iterator]"] [data-ice="name"]`, `[Symbol.iterator]`);
            Util.assert.includes(doc, '[id="instance-classmember-[`${foo}`]"] [data-ice="name"]', '[`${foo}`]');
            Util.assert.includes(doc, `[id="instance-classmember-[foo + bar]"] [data-ice="name"]`, `[foo + bar]`);
            Util.assert.includes(doc, `[id="instance-classmember-[foo()]"] [data-ice="name"]`, `[foo()]`);
            Util.assert.includes(doc, `[id="instance-classmember-[foo.bar()]"] [data-ice="name"]`, `[foo.bar()]`);
            Util.assert.includes(doc, `[id="instance-classmember-[foo.bar.baz]"] [data-ice="name"]`, `[foo.bar.baz]`);
            Util.assert.includes(doc, `[id="instance-classmember-[foo.bar]"] [data-ice="name"]`, `[foo.bar]`);
            Util.assert.includes(doc, `[id="instance-classmember-[foo.p + bar]"] [data-ice="name"]`, `[foo.p + bar]`);
            Util.assert.includes(doc, `[id="instance-classmember-[foo]"] [data-ice="name"]`, `[foo]`);
         });
      });
   });
});
