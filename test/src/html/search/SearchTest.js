import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html', 'search', (target) =>
{
   describe(`test search (${target.name}):`, () =>
   {
      let searchIndex;

      before(() =>
      {
         const searchIndexJS = Util.readFile(target, 'scripts/search_index.js').toString();
         const searchIndexJSON = searchIndexJS.replace('window.tjsdocSearchIndex = ', '');
         searchIndex = JSON.parse(searchIndexJSON);
      });

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
            'ModuleClass'
         ]);
      });

      it('has member index', () =>
      {
         Util.assert.deepEqual(find('class/test/fixture/package/src/desc/Class.js~TestDescClass.html#instance-classmember-p1'), [
            'testdescclass#p1',
            'class/test/fixture/package/src/desc/Class.js~TestDescClass.html#instance-classmember-p1',
            '<span>TestDescClass#p1</span> <span class=\"search-result-import-path\">test/fixture/package/src/desc/Class.js</span>',
            'ClassMember'
         ]);
      });

      it('has method index', () =>
      {
         Util.assert.deepEqual(find('class/test/fixture/package/src/desc/Class.js~TestDescClass.html#instance-classmethod-method1'), [
            'testdescclass#method1',
            'class/test/fixture/package/src/desc/Class.js~TestDescClass.html#instance-classmethod-method1',
            '<span>TestDescClass#method1</span> <span class=\"search-result-import-path\">test/fixture/package/src/desc/Class.js</span>',
            'ClassMethod'
         ]);
      });

      it('has interface index', () =>
      {
         Util.assert.deepEqual(find('class/test/fixture/package/src/interface/Definition.js~TestInterfaceDefinition.html'), [
            'tjsdoc-test-fixture/test/fixture/package/src/interface/definition.js~testinterfacedefinition',
            'class/test/fixture/package/src/interface/Definition.js~TestInterfaceDefinition.html',
            '<span>TestInterfaceDefinition</span> <span class="search-result-import-path">tjsdoc-test-fixture/test/fixture/package/src/interface/Definition.js</span>',
            'ModuleClass'
         ]);
      });

      it('has function index', () =>
      {
         Util.assert.deepEqual(find('function/index.html#static-modulefunction-testDescFunction'), [
            'tjsdoc-test-fixture/test/fixture/package/src/desc/function.js~testdescfunction',
            'function/index.html#static-modulefunction-testDescFunction',
            '<span>testDescFunction</span> <span class="search-result-import-path">tjsdoc-test-fixture/test/fixture/package/src/desc/Function.js</span>',
            'ModuleFunction'
         ]);
      });

      it('has variable index', () =>
      {
         Util.assert.deepEqual(find('variable/index.html#static-modulevariable-testDescVariable'), [
            'tjsdoc-test-fixture/test/fixture/package/src/desc/variable.js~testdescvariable',
            'variable/index.html#static-modulevariable-testDescVariable',
            '<span>testDescVariable</span> <span class="search-result-import-path">tjsdoc-test-fixture/test/fixture/package/src/desc/Variable.js</span>',
            'ModuleVariable'
         ]);
      });

      it('has typedef index', () =>
      {
         Util.assert.deepEqual(find('typedef/index.html#static-virtualtypedef-TestTypedefDefinition'), [
            'testtypedefdefinition',
            'typedef/index.html#static-virtualtypedef-TestTypedefDefinition',
            'TestTypedefDefinition',
            'VirtualTypedef'
         ]);
      });

      it('has external index', () =>
      {
         Util.assert.deepEqual(find('http://example.com'), [
            'testexternaldefinition',
            'http://example.com',
            'TestExternalDefinition',
            'VirtualExternal'
         ]);
      });

      it('has file index', () =>
      {
         Util.assert.deepEqual(find('file/test/fixture/package/src/desc/Class.js.html'), [
            'test/fixture/package/src/desc/class.js',
            'file/test/fixture/package/src/desc/Class.js.html',
            'test/fixture/package/src/desc/Class.js',
            'ModuleFile'
         ]);
      });

      it('has test file index', () =>
      {
         Util.assert.deepEqual(find('test-file/test/fixture/package/test/DescTest.js.html'), [
            'test/fixture/package/test/desctest.js',
            'test-file/test/fixture/package/test/DescTest.js.html',
            'test/fixture/package/test/DescTest.js',
            'ModuleTestFile'
         ]);
      });

      it('has test index', () =>
      {
         Util.assert.deepEqual(find('test-file/test/fixture/package/test/DescTest.js.html#lineNumber2'), [
            'testdescclass test/fixture/package/src/desc/class.js~testdescclass,testdescclass',
            'test-file/test/fixture/package/test/DescTest.js.html#lineNumber2',
            'Use describe style mocha interface',
            'Test'
         ]);
      });
   });
});
