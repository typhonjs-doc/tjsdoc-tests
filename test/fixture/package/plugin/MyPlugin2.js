import { callInfo } from './MyPlugin1.js';

/**
 * Tracks that `onHandleAST` has been invoked from `MyPlugin2`.
 */
export function onHandleAST()
{
   callInfo.handlerNames.onHandleAST.push('MyPlugin2');
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
 * Tracks that `onHandleConfigAsync` has been invoked from `MyPlugin2`.
 */
export function onHandleConfigAsync()
{
   callInfo.handlerNames.onHandleConfigAsync.push('MyPlugin2');
}

/**
 * Tracks that `onHandleDocDBAsync` has been invoked from `MyPlugin2`.
 */
export function onHandleDocDBAsync()
{
   callInfo.handlerNames.onHandleDocDBAsync.push('MyPlugin2');
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
 * Tracks that `onHandlePostPublishAsync` has been invoked from `MyPlugin2`.
 */
export function onHandlePostPublishAsync()
{
   callInfo.handlerNames.onHandlePostPublishAsync.push('MyPlugin2');
}

/**
 * Tracks that `onHandlePrePublishAsync` has been invoked from `MyPlugin2`.
 */
export function onHandlePrePublishAsync()
{
   callInfo.handlerNames.onHandlePrePublishAsync.push('MyPlugin2');
}

/**
 * Tracks that `onHandlePublishAsync` has been invoked from `MyPlugin2`.
 */
export function onHandlePublishAsync()
{
   callInfo.handlerNames.onHandlePublishAsync.push('MyPlugin2');
}

/**
 * Tracks that `onHandleSearchIndexAsync` has been invoked from `MyPlugin2`.
 */
export function onHandleSearchIndexAsync()
{
   callInfo.handlerNames.onHandleSearchIndexAsync.push('MyPlugin2');
}

/**
 * Tracks that `onHandleVirtualAsync` has been invoked from `MyPlugin2`.
 */
export function onHandleVirtualAsync()
{
   callInfo.handlerNames.onHandleVirtualAsync.push('MyPlugin2');
}

/**
 * Tracks that `onHandleWriteFile` has been invoked from `MyPlugin2`.
 */
export function onHandleWriteFile()
{
   callInfo.handlerNames.onHandleWriteFile.push('MyPlugin2');
}

/**
 * Tracks that `onRuntimeCompleteAsync` has been invoked from `MyPlugin2`.
 */
export function onRuntimeCompleteAsync()
{
   callInfo.handlerNames.onRuntimeCompleteAsync.push('MyPlugin2');
}

/**
 * Tracks that `onRuntimePreGenerateAsync` has been invoked from `MyPlugin2`
 */
export function onRuntimePreGenerateAsync()
{
   callInfo.handlerNames.onRuntimePreGenerateAsync.push('MyPlugin2');
}

/**
 * Tracks that `onRuntimeShutdownAsync` has been invoked from `MyPlugin2`.
 */
export function onRuntimeShutdownAsync()
{
   callInfo.handlerNames.onRuntimeShutdownAsync.push('MyPlugin2');
}

/**
 * Tracks that `onRuntimeStartAsync` has been invoked from `MyPlugin2`.
 */
export function onRuntimeStartAsync()
{
   callInfo.handlerNames.onRuntimeStartAsync.push('MyPlugin2');
}
