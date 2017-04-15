import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'class', (target) =>
{
   /** @test {ClassDocBuilder} */
   describe(`TestClassDefinition (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target,
       'class/test/fixture/package/src/class/Definition.js~TestClassDefinition.html');

      /** @test {DocBuilder#_getTitle} */
      describe('in title:', () =>
      {
         it('has document title', () =>
         {
            Util.assert.includes(doc, 'head title', 'TestClassDefinition | TJSDoc Test Fixture API Document');
         });
      });

      /** @test {ClassDocBuilder#_buildClassDoc} */
      describe('in header', () =>
      {
         it('has header notice.', () =>
         {
            Util.find(doc, '[data-ice="content"] .header-notice', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="importPath"]',
                "import TestClassDefinition from 'tjsdoc-test-fixture/test/fixture/package/src/class/Definition.js'");

               Util.assert.includes(doc, '[data-ice="access"]', 'public');

               Util.assert.includes(doc, '[data-ice="kind"]', 'class');

               Util.assert.includes(doc, '[data-ice="source"]', 'source');

               Util.assert.includes(doc, '[data-ice="source"] a',
                'file/test/fixture/package/src/class/Definition.js.html#lineNumber5', 'href');
            });
         });
      });

      /** @test {ClassDocBuilder#_buildClassDoc} */
      describe('in detail', () =>
      {
         it('has self detail.', () =>
         {
            Util.find(doc, '[data-ice="content"] .self-detail', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="name"]', 'TestClassDefinition');
               Util.assert.includes(doc, '[data-ice="description"]', 'this is TestClassDefinition.');
            });
         });
      });

      /** @test {ClassDocBuilder#_buildClassDoc} */
      describe('in summary', () =>
      {
         it('has static member', () =>
         {
            Util.find(doc, '[data-ice="staticMemberSummary"]', (doc) =>
            {
               Util.find(doc, 'table[data-ice="summary"]:nth-of-type(1)', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1)',
                   'public static p1: number this is static p1.');

                  Util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1) [data-ice="name"] a',
                   'class/test/fixture/package/src/class/Definition.js~TestClassDefinition.html#static-classmember-p1',
                    'href');
               });
            });
         });

         it('has static method.', () =>
         {
            Util.find(doc, '[data-ice="staticMethodSummary"]', (doc) =>
            {
               Util.find(doc, 'table[data-ice="summary"]:nth-of-type(1)', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1)',
                   'public static method1() this is static method1.');

                  Util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1) a',
                   'class/test/fixture/package/src/class/Definition.js~TestClassDefinition.html#static-classmethod-method1',
                    'href');
               });
            });
         });

         it('has constructor.', () =>
         {
            Util.find(doc, '[data-ice="constructorSummary"]', (doc) =>
            {
               Util.find(doc, 'table[data-ice="summary"]:nth-of-type(1)', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1)',
                   'public constructor() this is constructor.');

                  Util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1) [data-ice="name"] a',
                   'class/test/fixture/package/src/class/Definition.js~TestClassDefinition.html#instance-classmethod-constructor',
                    'href');
               });
            });
         });

         it('has member.', () =>
         {
            Util.find(doc, '[data-ice="memberSummary"]', (doc) =>
            {
               Util.find(doc, 'table[data-ice="summary"]:nth-of-type(1)', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1)', 'public p1: number this is p1.');

                  Util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1) [data-ice="name"] a',
                   'class/test/fixture/package/src/class/Definition.js~TestClassDefinition.html#instance-classmember-p1',
                    'href');

                  Util.assert.includes(doc, '[data-ice="target"]:nth-of-type(2)',
                   'public get value1: number this is get value1.');

                  Util.assert.includes(doc, '[data-ice="target"]:nth-of-type(2) [data-ice="name"] a',
                   'class/test/fixture/package/src/class/Definition.js~TestClassDefinition.html#instance-classmethod-get-value1',
                    'href');

                  Util.assert.includes(doc, '[data-ice="target"]:nth-of-type(3)',
                   'public set value2: number this is set value2.');

                  Util.assert.includes(doc, '[data-ice="target"]:nth-of-type(3) [data-ice="name"] a',
                   'class/test/fixture/package/src/class/Definition.js~TestClassDefinition.html#instance-classmethod-set-value2',
                    'href');
               });
            });
         });

         it('has method summary.', () =>
         {
            Util.find(doc, '[data-ice="methodSummary"]', (doc) =>
            {
               Util.find(doc, 'table[data-ice="summary"]:nth-of-type(1)', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1)', 'public method1() this is method1.');

                  Util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1) [data-ice="name"] a',
                   'class/test/fixture/package/src/class/Definition.js~TestClassDefinition.html#instance-classmethod-method1',
                    'href');
               });
            });
         });
      });

      /** @test {ClassDocBuilder#_buildClassDoc} */
      describe('in detail', () =>
      {
         it('has static member.', () =>
         {
            Util.find(doc, '[data-ice="staticMemberDetails"]', (doc) =>
            {
               Util.find(doc, '[data-ice="detail"]:nth-of-type(1)', (doc) =>
               {
                  Util.assert.includes(doc, '#static-classmember-p1', 'public static p1: number');
                  Util.assert.includes(doc, '[data-ice="description"]', 'this is static p1.');
               });
            });
         });

         it('has static method.', () =>
         {
            Util.find(doc, '[data-ice="staticMethodDetails"]', (doc) =>
            {
               Util.find(doc, '[data-ice="detail"]:nth-of-type(1)', (doc) =>
               {
                  Util.assert.includes(doc, '#static-classmethod-method1', 'public static method1()');
                  Util.assert.includes(doc, '[data-ice="description"]', 'this is static method1.');
               });
            });
         });

         it('has member.', () =>
         {
            Util.find(doc, '[data-ice="memberDetails"]', (doc) =>
            {
               Util.find(doc, '[data-ice="detail"]:nth-of-type(1)', (doc) =>
               {
                  Util.assert.includes(doc, '#instance-classmember-p1', 'public p1: number');
                  Util.assert.includes(doc, '#instance-classmember-p1 + [data-ice="description"]', 'this is p1.');
               });

               Util.find(doc, '[data-ice="detail"]:nth-of-type(2)', (doc) =>
               {
                  Util.assert.includes(doc, '#instance-classmethod-get-value1', 'public get value1: number');
                  Util.assert.includes(doc, '#instance-classmethod-get-value1 + [data-ice="description"]', 'this is get value1.');
               });

               Util.find(doc, '[data-ice="detail"]:nth-of-type(3)', (doc) =>
               {
                  Util.assert.includes(doc, '#instance-classmethod-set-value2', 'public set value2: number');
                  Util.assert.includes(doc, '#instance-classmethod-set-value2 + [data-ice="description"]', 'this is set value2.');
               });
            });
         });

         it('has constructor detail.', () =>
         {
            Util.find(doc, '[data-ice="constructorDetails"]', (doc) =>
            {
               Util.find(doc, '[data-ice="detail"]:nth-of-type(1)', (doc) =>
               {
                  Util.assert.includes(doc, '#instance-classmethod-constructor', 'public constructor()');

                  Util.assert.includes(doc, '#instance-classmethod-constructor + [data-ice="description"]',
                   'this is constructor.');
               });
            });
         });

         it('has method detail.', () =>
         {
            Util.find(doc, '[data-ice="methodDetails"]', (doc) =>
            {
               Util.find(doc, '[data-ice="detail"]:nth-of-type(1)', (doc) =>
               {
                  Util.assert.includes(doc, '#instance-classmethod-method1', 'public method1()');

                  Util.assert.includes(doc, '#instance-classmethod-method1 ~ [data-ice="description"]', 'this is method1.');
               });
            });
         });
      });
   });
});
