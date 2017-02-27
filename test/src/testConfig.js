import Utils from 'tjsdoc-test-utils';

/**
 * Defines which modules to run tests. Please note that setting `generateMain` to false doesn't build documentation
 * for the main demo test code. The next level of tests which can be disabled are `testConfig.category` followed
 * by further tests or categories in `testConfig.cli`, `testConfig.config`, `testConfig.doc`, `testConfig.html` and
 * `testConfig.html_doc`.
 *
 * @type {{}}
 */
const config =
{
   // Empties `./test/fixture/dest/` if true on initializing tests.
   emptyDest: true,

   // Generates the main TJSDoc test output. Note: many tests will fail without main generation.
   generateMain: true,

   // Disables console output when invoking CLI or TJSDoc directly in tests.
   consoleSilent: true,

   // Enables the main categories of tests.
   category:
   {
      cli: true,
      config: true,
      doc: true,
      html: true,
      html_doc: true
   },

   // Enables specific cli tests
   cli:
   {
      tests:
      {
         cli: true,
         findConfigPath: true
      }
   },

   // Enables specific config tests.
   config:
   {
      tests:
      {
         access: true,
         alternatePublisher: true,
         alternateRuntime: true,
         autoPrivate: true,
         builtinExternal: true,
         compactData: true,
         compressAllSeparate: true,
         compressData: true,
         compress: true,
         compressZip: true,
         coverage: true,
         emptyDestination: true,
         excludePackage: true,
         excludes: true,
         includeSource: true,
         manual: true,
         outputASTData: true,
         outputDocData: true,
         plugins: true,
         removeCommonPath: true,
         scripts: true,
         sourceFiles: true,
         styles: true,
         test: true,
         undocumentIdentifier: true,
         unexportIdentifier: true
      }
   },

   // Enables specific doc tests.
   doc:
   {
      tests:
      {
         lintDocLogger: true,
         search: true,
         tagsKnown: true,
         tagsUnknown: true,
         undocument: true
      }
   },

   // There are several html sub-categories and each can be enabled independently.
   html:
   {
      tests:
      {
         coverage: true,
         file: true,
         identifiers: true,
         index: true,
         manual: true,
         nav: true,
         test: true
      }
   },

   // There are many documentation tests and each html document sub-category can be enabled independently.
   html_doc:
   {
      tests:
      {
         'abstract': true,
         'access': true,
         'async': true,
         'class': true,
         'classProperty': true,
         'computed': true,
         'decorator': true,
         'deprecated': true,
         'desc': true,
         'destructuring': true,
         'duplication': true,
         'emits': true,
         'example': true,
         'experimental': true,
         'exponentialOperator': true,
         'export': true,
         'extends': true,
         'external': true,
         'generator': true,
         'guess': true,
         'ignore': true,
         'interface': true,
         'jsx': true,
         'link': true,
         'listens': true,
         'param': true,
         'property': true,
         'return': true,
         'see': true,
         'since': true,
         'throws': true,
         'todo': true,
         'trailingComma': true,
         'type': true,
         'typedef': true,
         'undocument': true,
         'variable': true,
         'version': true
      }
   }
};

export default Utils.createTestConfig(config, './test/ecmascriptConfig.js', 'tjsdoc-tests-ecmascript');
