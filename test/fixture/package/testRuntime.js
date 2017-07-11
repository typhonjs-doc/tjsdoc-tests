/**
 * This mock runtime is executed in the scope of the target TJSDoc instance stored in
 * `global.$$tjsdoc_testConfig_currentTarget` thus requiring `global.$$tjsdoc_testConfig_currentTarget.runtime` and
 * invoking the `onPluginLoad` method will have the required dependencies available.
 *
 * Wires up a mock runtime that defers to the current target runtime to the plugin eventbus adding a global variable
 * `global.$$tjsdoc_alternate_runtime` to indicate that the runtime has been swapped out with an alternate version.
 *
 * Please see `AlternativeRuntimeTest` for the test framework code setting `global.$$tjsdoc_testConfig_currentTarget`.
 *
 * @param {PluginEvent} ev - The plugin event.
 *
 * @ignore
 */
export function onPluginLoad(ev)
{
   const runtime = global.$$tjsdoc_testConfig_currentTarget.runtime;

   require(typeof runtime === 'object' ? runtime.target || runtime.name : runtime).onPluginLoad(ev);

   // Set global variable for alternate runtime test.
   global.$$tjsdoc_alternate_runtime = true;
}
