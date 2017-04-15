import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html', 'test', (target) =>
{
   /**
    * @test {TestDocBuilder}
    * @test {TestDocBuilder#_buildTestDescribeDocHTML}
    */
   describe(`test integration of test (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'test.html').find('[data-ice="tests"]');

      describe('describe/it style', () =>
      {
         it('has describe', () =>
         {
            Util.findParent(doc, 'a[href="test-file/test/fixture/package/test/DescTest.js.html#lineNumber2"]',
             '[data-ice="testDescribe"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'Use describe style mocha interface TestDescClass 3');
               Util.assert.multiIncludes(doc, 'a', [
                  'test-file/test/fixture/package/test/DescTest.js.html#lineNumber2',
                  'class/test/fixture/package/src/desc/Class.js~TestDescClass.html'
               ], 'href');
            });
         });

         it('has it', () =>
         {
            Util.findParent(doc, 'a[href="test-file/test/fixture/package/test/DescTest.js.html#lineNumber5"]',
             '[data-ice="testIt"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'Use it style mocha interface TestDescClass#constructor');
               Util.assert.multiIncludes(doc, 'a', [
                  'test-file/test/fixture/package/test/DescTest.js.html#lineNumber5',
                  'class/test/fixture/package/src/desc/Class.js~TestDescClass.html#instance-classmethod-constructor'
               ], 'href');
            });
         });

         it('has nested describe', () =>
         {
            Util.findParent(doc, 'a[href="test-file/test/fixture/package/test/DescTest.js.html#lineNumber10"]',
             '[data-ice="testDescribe"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'Nested describe TestDescClass#p1 1');
               Util.assert.multiIncludes(doc, 'a', [
                  'test-file/test/fixture/package/test/DescTest.js.html#lineNumber10',
                  'class/test/fixture/package/src/desc/Class.js~TestDescClass.html#instance-classmember-p1'
               ], 'href');
            });
         });

         it('has nested it', () =>
         {
            Util.findParent(doc, 'a[href="test-file/test/fixture/package/test/DescTest.js.html#lineNumber13"]',
             '[data-ice="testIt"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'Nested it in describe testDescVariable');
               Util.assert.multiIncludes(doc, 'a', [
                  'test-file/test/fixture/package/test/DescTest.js.html#lineNumber13',
                  'variable/index.html#static-modulevariable-testDescVariable'
               ], 'href');
            });
         });
      });


      describe('context style', () =>
      {
         it('has context', () =>
         {
            Util.findParent(doc, 'a[href="test-file/test/fixture/package/test/DescTest.js.html#lineNumber19"]',
             '[data-ice="testDescribe"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'Use context style mocha interface TestDescClass#method1 1');
               Util.assert.multiIncludes(doc, 'a', [
                  'test-file/test/fixture/package/test/DescTest.js.html#lineNumber19',
                  'class/test/fixture/package/src/desc/Class.js~TestDescClass.html#instance-classmethod-method1'
               ], 'href');
            });
         });

         it('has context it', () =>
         {
            Util.findParent(doc, 'a[href="test-file/test/fixture/package/test/DescTest.js.html#lineNumber22"]',
             '[data-ice="testIt"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'Nested it in context testDescFunction');
               Util.assert.multiIncludes(doc, 'a', [
                  'test-file/test/fixture/package/test/DescTest.js.html#lineNumber22',
                  'function/index.html#static-modulefunction-testDescFunction'
               ], 'href');
            });
         });
      });

      describe('suite/test style', () =>
      {
         it('has suite', () =>
         {
            Util.findParent(doc, 'a[href="test-file/test/fixture/package/test/DescTest.js.html#lineNumber29"]',
             '[data-ice="testDescribe"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'Use suite style mocha interface TestDescClass 2');
               Util.assert.multiIncludes(doc, 'a', [
                  'test-file/test/fixture/package/test/DescTest.js.html#lineNumber29',
                  'class/test/fixture/package/src/desc/Class.js~TestDescClass.html'
               ], 'href');
            });
         });

         it('has test', () =>
         {
            Util.findParent(doc, 'a[href="test-file/test/fixture/package/test/DescTest.js.html#lineNumber32"]',
             '[data-ice="testIt"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'Use test style mocha interface TestDescClass#constructor');
               Util.assert.multiIncludes(doc, 'a', [
                  'test-file/test/fixture/package/test/DescTest.js.html#lineNumber32',
                  'class/test/fixture/package/src/desc/Class.js~TestDescClass.html#instance-classmethod-constructor'
               ], 'href');
            });
         });

         it('has nested suite', () =>
         {
            Util.findParent(doc, 'a[href="test-file/test/fixture/package/test/DescTest.js.html#lineNumber37"]',
             '[data-ice="testDescribe"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'Nested suite TestDescClass#p1 1');
               Util.assert.multiIncludes(doc, 'a', [
                  'test-file/test/fixture/package/test/DescTest.js.html#lineNumber37',
                  'class/test/fixture/package/src/desc/Class.js~TestDescClass.html#instance-classmember-p1'
               ], 'href');
            });
         });

         it('has nested test', () =>
         {
            Util.findParent(doc, 'a[href="test-file/test/fixture/package/test/DescTest.js.html#lineNumber40"]',
             '[data-ice="testIt"]', (doc) =>
            {
               Util.assert.includes(doc, null, 'Nested test TestDescClass#method1');
               Util.assert.multiIncludes(doc, 'a', [
                  'test-file/test/fixture/package/test/DescTest.js.html#lineNumber40',
                  'class/test/fixture/package/src/desc/Class.js~TestDescClass.html#instance-classmethod-method1'
               ], 'href');
            });
         });
      });
   });
});
