import path from 'path';

let npmScript;

try
{
   const npmArgv = JSON.parse(process.env['npm_config_argv']).cooked;
   npmScript = npmArgv[1];
}
catch (err)
{
   console.error(`'tjsdoc-tests' error: could not obtain 'npm_config_argv' environment variable.`);
   process.exit(1);
}

// Attempt to load local test config. A local config must be provided to define any target runtimes.
let localConfig;

try
{
   localConfig = require(path.resolve('./test/ecmascriptConfig.js'));
}
catch (err)
{
   console.error(`'tjsdoc-tests' error: could not require './test/ecmascriptConfig.js'.`);
   process.exit(1);
}

const runtimeTargets = typeof localConfig.targets === 'object' ? localConfig.targets[npmScript] : [];

if (runtimeTargets.length === 0)
{
   console.error(`'tjsdoc-tests' error: Missing runtime configuration for NPM script '${
    npmScript}' in 'targets' object hash of './test/config.js'.`);

   process.exit(1);
}

const s_DEFAULT_CATEGORIES = { cli: true, config: true, doc: true, html: true, parser: true, utils: true };

const runtimeCategories = Object.assign(s_DEFAULT_CATEGORIES, localConfig.category);

const runtimeEmptyDest = typeof localConfig.emptyDest === 'boolean' && localConfig.emptyDest;
const runtimeGenerateMain = typeof localConfig.generateMain === 'boolean' && localConfig.generateMain;

console.log(`\nnpm script: ${npmScript}`);
console.log(`emptying destination: ${runtimeEmptyDest}`);
console.log(`generating main (tjsdoc): ${runtimeGenerateMain}\n`);
console.log(`test runtimes: \n${JSON.stringify(runtimeTargets, null, 3)}\n`);
console.log(`test categories: ${JSON.stringify(runtimeCategories)}\n`);

/**
 * Defines which modules to run tests. Please note that setting `generateMain` to false doesn't build documentation
 * for the main demo test code. The next level of tests which can be disabled are `testConfig.category` followed
 * by further tests or categories in `testConfig.config`, `testConfig.doc`, `testConfig.html` and `testConfig.parser`.
 *
 * @type {{}}
 */
const testConfig =
{
   // Empties `./test/fixture/dest/` if true on initializing tests.
   emptyDest: runtimeEmptyDest,

   // Generates the main TJSDoc test output. Note: many tests will fail without main generation.
   generateMain: runtimeGenerateMain,

   // Enables the main categories of tests.
   category: runtimeCategories,

   targets: runtimeTargets,

   currentTarget: void 0,

   forEachTarget: (catIndex, test, callback) =>
   {
      if (testConfig.category[catIndex])
      {
         if (testConfig[catIndex]['tests'][test])
         {
            for (const target of testConfig.targets)
            {
               testConfig.currentTarget = target;
               callback(target);
            }
         }
      }
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
      category:
      {
         coverage: true,
         document: true,
         file: true,
         identifiers: true,
         index: true,
         manual: true,
         nav: true,
         test: true
      },

      // There are many documentation tests and each html document sub-category can be enabled independently.
      document:
      {
         category:
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
   },

   // Enables specific parser tests.
   parser:
   {
      tests:
      {
         codeParser: true,
         commentParser: true,
         paramParser: true
      }
   },

   // Enables specific utils tests.
   utils:
   {
      tests:
      {
         invalidCodeLogger: true
      }
   }
};

export default testConfig;
