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
 * Tracks that `onHandleConfigAsync` has been invoked from `MyPlugin1`.
 *
 * Modifies the config for testing.
 *
 * @param {object} ev - Plugin event
 */
export function onHandleConfigAsync(ev)
{
   callInfo.handlerNames.onHandleConfigAsync = ['MyPlugin1'];
   ev.data.mainConfig.title = 'Modified Config';
}

/**
 * Tracks that `onHandleDocDBAsync` has been invoked from `MyPlugin1`.
 *
 * Performs basic doc DB modification.
 *
 * @param {object} ev - Plugin event
 */
export function onHandleDocDBAsync(ev)
{
   callInfo.handlerNames.onHandleDocDBAsync = ['MyPlugin1'];

   ev.data.docDB.query({ name: 'MyClass_ModifiedCode_ModifiedAST_ModifiedDoc' }).update(function()
   {
      this.name = 'MyClass_ModifiedCode_ModifiedAST_ModifiedDoc_ModifiedDB'; return this;
   });
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
   const doc = ev.data.docObject;

   doc.name += '_ModifiedDoc';

   if (!Array.isArray(callInfo.handlerNames.onHandleDocObject))
   {
      callInfo.handlerNames.onHandleDocObject = ['MyPlugin1'];
   }
}

/**
 * Tracks that `onHandlePostPublishAsync` has been invoked from `MyPlugin1`.
 */
export function onHandlePostPublishAsync()
{
   callInfo.handlerNames.onHandlePostPublishAsync = ['MyPlugin1'];
}

/**
 * Tracks that `onHandlePrePublishAsync` has been invoked from `MyPlugin1`.
 */
export function onHandlePrePublishAsync()
{
   callInfo.handlerNames.onHandlePrePublishAsync = ['MyPlugin1'];
}

/**
 * Tracks that `onHandlePublishAsync` has been invoked from `MyPlugin1`.
 */
export function onHandlePublishAsync()
{
   callInfo.handlerNames.onHandlePublishAsync = ['MyPlugin1'];
}

/**
 * Tracks that `onHandleSearchIndexAsync` has been invoked from `MyPlugin1`.
 */
export function onHandleSearchIndexAsync()
{
   callInfo.handlerNames.onHandleSearchIndexAsync = ['MyPlugin1'];
}

/**
 * Tracks that `onHandleVirtualAsync` has been invoked from `MyPlugin1`.
 */
export function onHandleVirtualAsync()
{
   callInfo.handlerNames.onHandleVirtualAsync = ['MyPlugin1'];
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

   if (!ev.data.filePath.endsWith('html')) { return; }

   ev.data.fileData = ev.data.fileData.replace('MyClass_ModifiedCode_ModifiedAST_ModifiedDoc_ModifiedDB',
    'MyClass_ModifiedCode_ModifiedAST_ModifiedDoc_ModifiedDB_ModifiedHTML');

   // insert ev.data.filePath into <head />
   ev.data.fileData = ev.data.fileData.replace(
      '</head>',
      `<meta name="x-from-plugin" content="filePath:${ev.data.filePath}" />\n</head>`
   );
}

/**
 * Tracks that `onRuntimeCompleteAsync` has been invoked from `MyPlugin1`.
 */
export function onRuntimeCompleteAsync()
{
   callInfo.handlerNames.onRuntimeCompleteAsync = ['MyPlugin1'];
}

/**
 * Tracks that `onRuntimePreGenerateAsync` has been invoked from `MyPlugin1`
 */
export function onRuntimePreGenerateAsync()
{
   callInfo.handlerNames.onRuntimePreGenerateAsync = ['MyPlugin1'];
}

/**
 * Tracks that `onRuntimeShutdownAsync` has been invoked from `MyPlugin1`
 */
export function onRuntimeShutdownAsync()
{
   callInfo.handlerNames.onRuntimeShutdownAsync = ['MyPlugin1'];
}

/**
 * Tracks that `onRuntimeStartAsync` has been invoked from `MyPlugin1` and stores plugin options.
 *
 * @param {object} ev - Plugin event
 */
export function onRuntimeStartAsync(ev)
{
   callInfo.handlerNames.onRuntimeStartAsync = ['MyPlugin1'];
   callInfo.pluginOptions = ev.pluginOptions;
}
