import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

if (testConfig.category.doc && testConfig.doc.tests.search)
{
   for (const target of testConfig.targets)
   {
      describe('test search', () =>
      {
         const searchIndexJS = Util.readFile(target, 'script/search_index.js').toString();

         const searchIndexJSON = searchIndexJS.replace('window.tjsdocSearchIndex = ', '');

         const searchIndex = JSON.parse(searchIndexJSON);

         /**
          * Finds and URL in the search index JSON.
          *
          * @param {string}   url - URL to find in search index.
          *
          * @returns {*}
          */
         function find(url)
         {
            const results = [];

            for (const item of searchIndex)
            {
               if (item[1] === url) { results.push(item); }
            }

            if (results.length > 1) { Util.assert(false, `some ${url} found. results = ${results}`); }

            return results[0];
         }

         it('has class index', () =>
         {
            Util.assert.deepEqual(find('class/test/fixture/package/src/desc/Class.js~TestDescClass.html'), [
               'tjsdoc-test-fixture/test/fixture/package/src/desc/class.js~testdescclass',
               'class/test/fixture/package/src/desc/Class.js~TestDescClass.html',
               '<span>TestDescClass</span> <span class="search-result-import-path">tjsdoc-test-fixture/test/fixture/package/src/desc/Class.js</span>',
               'class'
            ]);
         });

         it('has member index', () =>
         {
            Util.assert.deepEqual(find('class/test/fixture/package/src/desc/Class.js~TestDescClass.html#instance-member-p1'), [
               'testdescclass#p1',
               'class/test/fixture/package/src/desc/Class.js~TestDescClass.html#instance-member-p1',
               '<span>TestDescClass#p1</span> <span class=\"search-result-import-path\">test/fixture/package/src/desc/Class.js</span>',
               'member'
            ]);
         });

         it('has method index', () =>
         {
            Util.assert.deepEqual(find('class/test/fixture/package/src/desc/Class.js~TestDescClass.html#instance-method-method1'), [
               'testdescclass#method1',
               'class/test/fixture/package/src/desc/Class.js~TestDescClass.html#instance-method-method1',
               '<span>TestDescClass#method1</span> <span class=\"search-result-import-path\">test/fixture/package/src/desc/Class.js</span>',
               'method'
            ]);
         });

         it('has interface index', () =>
         {
            Util.assert.deepEqual(find('class/test/fixture/package/src/interface/Definition.js~TestInterfaceDefinition.html'), [
               'tjsdoc-test-fixture/test/fixture/package/src/interface/definition.js~testinterfacedefinition',
               'class/test/fixture/package/src/interface/Definition.js~TestInterfaceDefinition.html',
               '<span>TestInterfaceDefinition</span> <span class="search-result-import-path">tjsdoc-test-fixture/test/fixture/package/src/interface/Definition.js</span>',
               'class'
            ]);
         });

         it('has function index', () =>
         {
            Util.assert.deepEqual(find('function/index.html#static-function-testDescFunction'), [
               'tjsdoc-test-fixture/test/fixture/package/src/desc/function.js~testdescfunction',
               'function/index.html#static-function-testDescFunction',
               '<span>testDescFunction</span> <span class="search-result-import-path">tjsdoc-test-fixture/test/fixture/package/src/desc/Function.js</span>',
               'function'
            ]);
         });

         it('has variable index', () =>
         {
            Util.assert.deepEqual(find('variable/index.html#static-variable-testDescVariable'), [
               'tjsdoc-test-fixture/test/fixture/package/src/desc/variable.js~testdescvariable',
               'variable/index.html#static-variable-testDescVariable',
               '<span>testDescVariable</span> <span class="search-result-import-path">tjsdoc-test-fixture/test/fixture/package/src/desc/Variable.js</span>',
               'variable'
            ]);
         });

         it('has typedef index', () =>
         {
            Util.assert.deepEqual(find('typedef/index.html#static-typedef-TestTypedefDefinition'), [
               'testtypedefdefinition',
               'typedef/index.html#static-typedef-TestTypedefDefinition',
               'TestTypedefDefinition',
               'typedef'
            ]);
         });

         it('has external index', () =>
         {
            Util.assert.deepEqual(find('http://example.com'), [
               'testexternaldefinition',
               'http://example.com',
               'TestExternalDefinition',
               'external'
            ]);
         });

         it('has file index', () =>
         {
            Util.assert.deepEqual(find('file/test/fixture/package/src/desc/Class.js.html'), [
               'test/fixture/package/src/desc/class.js',
               'file/test/fixture/package/src/desc/Class.js.html',
               'test/fixture/package/src/desc/Class.js',
               'file'
            ]);
         });

         it('has test file index', () =>
         {
            Util.assert.deepEqual(find('test-file/test/fixture/package/test/DescTest.js.html'), [
               'test/fixture/package/test/desctest.js',
               'test-file/test/fixture/package/test/DescTest.js.html',
               'test/fixture/package/test/DescTest.js',
               'testFile'
            ]);
         });

         it('has test index', () =>
         {
            Util.assert.deepEqual(find('test-file/test/fixture/package/test/DescTest.js.html#lineNumber2'), [
               'testdescclass test/fixture/package/src/desc/class.js~testdescclass,testdescclass',
               'test-file/test/fixture/package/test/DescTest.js.html#lineNumber2',
               'Use describe style mocha interface',
               'test'
            ]);
         });
      });
   }
}