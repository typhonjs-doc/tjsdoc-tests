import { callInfo } from './MyPlugin1.js';

/**
 * Tracks that `onPreGenerate` has been invoked from `MyPlugin2`
 */
export function onPreGenerate()
{
   callInfo.handlerNames.onPreGenerate.push('MyPlugin2');
}

/**
 * Tracks that `onStart` has been invoked from `MyPlugin2`.
 */
export function onStart()
{
   callInfo.handlerNames.onStart.push('MyPlugin2');
}

/**
 * Tracks that `onHandleConfig` has been invoked from `MyPlugin2`.
 */
export function onHandleConfig()
{
   callInfo.handlerNames.onHandleConfig.push('MyPlugin2');
}

/**
 * Tracks that `onHandleCode` has been invoked from `MyPlugin2`.
 */
export function onHandleCode()
{
   callInfo.handlerNames.onHandleCode.push('MyPlugin2');
}

/**
 * Tracks that `onHandleCodeParser` has been invoked from `MyPlugin2`.
 */
export function onHandleCodeParser()
{
   callInfo.handlerNames.onHandleCodeParser.push('MyPlugin2');
}

/**
 * Tracks that `onHandleAST` has been invoked from `MyPlugin2`.
 */
export function onHandleAST()
{
   callInfo.handlerNames.onHandleAST.push('MyPlugin2');
}

/**
 * Tracks that `onHandleDocObject` has been invoked from `MyPlugin2`.
 */
export function onHandleDocObject()
{
   if (callInfo.handlerNames.onHandleDocObject.indexOf('MyPlugin2') === -1)
   {
      callInfo.handlerNames.onHandleDocObject.push('MyPlugin2');
   }
}

/**
 * Tracks that `onHandleDocDB` has been invoked from `MyPlugin2`.
 */
export function onHandleDocDB()
{
   callInfo.handlerNames.onHandleDocDB.push('MyPlugin2');
}

/**
 * Tracks that `onHandleWriteFile` has been invoked from `MyPlugin2`.
 */
export function onHandleWriteFile()
{
   callInfo.handlerNames.onHandleWriteFile.push('MyPlugin2');
}

/**
 * Tracks that `onHandleVirtual` has been invoked from `MyPlugin2`.
 */
export function onHandleVirtual()
{
   callInfo.handlerNames.onHandleVirtual.push('MyPlugin2');
}

/**
 * Tracks that `onHandleSearchIndex` has been invoked from `MyPlugin2`.
 */
export function onHandleSearchIndex()
{
   callInfo.handlerNames.onHandleSearchIndex.push('MyPlugin2');
}

/**
 * Tracks that `onComplete` has been invoked from `MyPlugin2`.
 */
export function onComplete()
{
   callInfo.handlerNames.onComplete.push('MyPlugin2');
}
