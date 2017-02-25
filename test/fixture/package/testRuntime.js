import testConfig from '../../src/testConfig.js';

/**
 * This mock runtime is executed in the scope of the target TJSDoc instance thus requiring
 * `testConfig.currentTarget.runtime` and invoking the `onPluginLoad` method will have the required dependencies
 * available.
 *
 * Wires up a mock runtime that defers to the current target runtime to the plugin eventbus adding a global variable
 * `global.$$tjsdoc_alternate_runtime` to indicate that the runtime has been swapped out with an alternate version.
 *
 * @param {PluginEvent} ev - The plugin event.
 *
 * @ignore
 */
export function onPluginLoad(ev)
{
   require(testConfig.currentTarget.runtime).onPluginLoad(ev);

   // Set global variable for alternate runtime test.
   global.$$tjsdoc_alternate_runtime = true;
}
