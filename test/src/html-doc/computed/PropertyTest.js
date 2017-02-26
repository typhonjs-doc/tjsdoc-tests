import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.computed)
{
   for (const target of testConfig.targets)
   {
      /** @test {MemberDoc#@_name} */
      describe('TestComputedProperty:', () =>
      {
         const doc = Util.readDoc(target,
          'class/test/fixture/package/src/computed/Property.js~TestComputedProperty.html');

         describe('in summary:', () =>
         {
            it('has computed properties.', () =>
            {
               Util.find(doc, '[data-ice="memberSummary"]', (doc) =>
               {
                  Util.assert.includes(doc,
                   `[href="class/test/fixture/package/src/computed/Property.js~TestComputedProperty.html#instance-member-['foo']"]`,
                    `['foo']`);

                  Util.assert.includes(doc,
                   `[href="class/test/fixture/package/src/computed/Property.js~TestComputedProperty.html#instance-member-[Symbol.iterator]"]`,
                    `[Symbol.iterator]`);

                  Util.assert.includes(doc,
                   '[href="class/test/fixture/package/src/computed/Property.js~TestComputedProperty.html#instance-member-[`${foo}`]"]',
                    '[`${foo}`]');

                  Util.assert.includes(doc,
                   `[href="class/test/fixture/package/src/computed/Property.js~TestComputedProperty.html#instance-member-[foo + bar]"]`,
                    `[foo + bar]`);

                  Util.assert.includes(doc,
                   `[href="class/test/fixture/package/src/computed/Property.js~TestComputedProperty.html#instance-member-[foo()]"]`,
                    `[foo()]`);

                  Util.assert.includes(doc,
                   `[href="class/test/fixture/package/src/computed/Property.js~TestComputedProperty.html#instance-member-[foo.bar()]"]`,
                    `[foo.bar()]`);

                  Util.assert.includes(doc,
                   `[href="class/test/fixture/package/src/computed/Property.js~TestComputedProperty.html#instance-member-[foo.bar.baz]"]`,
                    `[foo.bar.baz]`);

                  Util.assert.includes(doc,
                   `[href="class/test/fixture/package/src/computed/Property.js~TestComputedProperty.html#instance-member-[foo.bar]"]`,
                    `[foo.bar]`);

                  Util.assert.includes(doc,
                   `[href="class/test/fixture/package/src/computed/Property.js~TestComputedProperty.html#instance-member-[foo.p + bar]"]`,
                    `[foo.p + bar]`);

                  Util.assert.includes(doc,
                   `[href="class/test/fixture/package/src/computed/Property.js~TestComputedProperty.html#instance-member-[foo]"]`,
                    `[foo]`);
               });
            });
         });

         describe('in detail:', () =>
         {
            it('has computed properties.', () =>
            {
               Util.assert.includes(doc, `[id="instance-member-['foo']"] [data-ice="name"]`, `['foo']`);
               Util.assert.includes(doc, `[id="instance-member-[Symbol.iterator]"] [data-ice="name"]`, `[Symbol.iterator]`);
               Util.assert.includes(doc, '[id="instance-member-[`${foo}`]"] [data-ice="name"]', '[`${foo}`]');
               Util.assert.includes(doc, `[id="instance-member-[foo + bar]"] [data-ice="name"]`, `[foo + bar]`);
               Util.assert.includes(doc, `[id="instance-member-[foo()]"] [data-ice="name"]`, `[foo()]`);
               Util.assert.includes(doc, `[id="instance-member-[foo.bar()]"] [data-ice="name"]`, `[foo.bar()]`);
               Util.assert.includes(doc, `[id="instance-member-[foo.bar.baz]"] [data-ice="name"]`, `[foo.bar.baz]`);
               Util.assert.includes(doc, `[id="instance-member-[foo.bar]"] [data-ice="name"]`, `[foo.bar]`);
               Util.assert.includes(doc, `[id="instance-member-[foo.p + bar]"] [data-ice="name"]`, `[foo.p + bar]`);
               Util.assert.includes(doc, `[id="instance-member-[foo]"] [data-ice="name"]`, `[foo]`);
            });
         });
      });
   }
}
