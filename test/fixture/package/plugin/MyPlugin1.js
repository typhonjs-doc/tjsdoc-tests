const callInfo = { handlerNames: {}, usedParser: false };
export { callInfo };

let originalParser;

/**
 * Wraps original parser to test that it can be replaced.
 *
 * @param {string}   code - Code to parse.
 *
 * @returns {*}
 */
function parser(code)
{
   callInfo.usedParser = true;
   return originalParser(code);
}

/**
 * Tracks that `onPreGenerate` has been invoked from `MyPlugin1`
 */
export function onPreGenerate()
{
   callInfo.handlerNames.onPreGenerate = ['MyPlugin1'];
}

/**
 * Tracks that `onStart` has been invoked from `MyPlugin1` and stores plugin options.
 *
 * @param {object} ev - Plugin event
 */
export function onStart(ev)
{
   callInfo.handlerNames.onStart = ['MyPlugin1'];
   callInfo.pluginOptions = ev.pluginOptions;
}

/**
 * Tracks that `onHandleConfig` has been invoked from `MyPlugin1`.
 *
 * Modifies the config for testing.
 *
 * @param {object} ev - Plugin event
 */
export function onHandleConfig(ev)
{
   callInfo.handlerNames.onHandleConfig = ['MyPlugin1'];
   ev.data.config.title = 'Modified Config';
}

/**
 * Tracks that `onHandleCode` has been invoked from `MyPlugin1`.
 *
 * Modifies code for testing. Note: All `./test/fixture/pacakge/src/desc/` files are modified.
 *
 * @param {object} ev - Plugin event
 */
export function onHandleCode(ev)
{
   callInfo.handlerNames.onHandleCode = ['MyPlugin1'];
   ev.data.code = 'export default class MyClass_ModifiedCode {}';
}

/**
 * Tracks that `onHandleCodeParser` has been invoked from `MyPlugin1`.
 *
 * Replaces default parser for testing.
 *
 * @param {object} ev - Plugin event
 */
export function onHandleCodeParser(ev)
{
   callInfo.handlerNames.onHandleCodeParser = ['MyPlugin1'];
   originalParser = ev.data.parser;
   ev.data.parser = parser;
}

/**
 * Tracks that `onHandleAST` has been invoked from `MyPlugin1`.
 *
 * Performs basic AST modification.
 *
 * @param {object} ev - Plugin event
 */
export function onHandleAST(ev)
{
   callInfo.handlerNames.onHandleAST = ['MyPlugin1'];
   ev.data.ast.program.body[0].declaration.id.name += '_ModifiedAST';
}

/**
 * Tracks that `onHandleDocObject` has been invoked from `MyPlugin1`.
 *
 * Performs basic DocObject modification.
 *
 * @param {object} ev - Plugin event
 */
export function onHandleDocObject(ev)
{
   const doc = ev.data.doc;

   doc.name += '_ModifiedDoc';

   if (!Array.isArray(callInfo.handlerNames.onHandleDocObject))
   {
      callInfo.handlerNames.onHandleDocObject = ['MyPlugin1'];
   }
}

/**
 * Tracks that `onHandleDocDB` has been invoked from `MyPlugin1`.
 *
 * Performs basic doc DB modification.
 *
 * @param {object} ev - Plugin event
 */
export function onHandleDocDB(ev)
{
   callInfo.handlerNames.onHandleDocDB = ['MyPlugin1'];

   ev.data.docDB.query({ name: 'MyClass_ModifiedCode_ModifiedAST_ModifiedDoc' }).update(function()
   {
      this.name = 'MyClass_ModifiedCode_ModifiedAST_ModifiedDoc_ModifiedDB'; return this;
   });
}

/**
 * Tracks that `onHandleWriteFile` has been invoked from `MyPlugin1`.
 *
 * Performs basic file / HTML modification.
 *
 * @param {object} ev - Plugin event
 */
export function onHandleWriteFile(ev)
{
   callInfo.handlerNames.onHandleWriteFile = ['MyPlugin1'];

   if (!ev.data.fileName.endsWith('html')) { return; }

   ev.data.fileData = ev.data.fileData.replace('MyClass_ModifiedCode_ModifiedAST_ModifiedDoc_ModifiedDB',
    'MyClass_ModifiedCode_ModifiedAST_ModifiedDoc_ModifiedDB_ModifiedHTML');

   // insert ev.data.fileName into <head />
   ev.data.fileData = ev.data.fileData.replace(
      '</head>',
      `<meta name="x-from-plugin" content="fileName:${ev.data.fileName}" />\n</head>`
   );
}

/**
 * Tracks that `onHandleVirtual` has been invoked from `MyPlugin1`.
 */
export function onHandleVirtual()
{
   callInfo.handlerNames.onHandleVirtual = ['MyPlugin1'];
}

/**
 * Tracks that `onHandleSearchIndex` has been invoked from `MyPlugin1`.
 */
export function onHandleSearchIndex()
{
   callInfo.handlerNames.onHandleSearchIndex = ['MyPlugin1'];
}

/**
 * Tracks that `onComplete` has been invoked from `MyPlugin1`.
 */
export function onComplete()
{
   callInfo.handlerNames.onComplete = ['MyPlugin1'];
}

/**
 * Tracks that `onShutdown` has been invoked from `MyPlugin1`
 */
export function onShutdown()
{
   callInfo.handlerNames.onShutdown = ['MyPlugin1'];
}

