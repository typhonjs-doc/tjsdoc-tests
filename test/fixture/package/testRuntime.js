import { onPluginLoad as babylonRuntime }   from 'tjsdoc-babylon';

/**
 * Wires up the default Babylon runtime to plugin eventbus adding a global variable `global.$$tjsdoc_alternate_runtime`
 * to indicate that the runtime has been swapped out with an alternate version.
 *
 * @param {PluginEvent} ev - The plugin event.
 *
 * @ignore
 */
export function onPluginLoad(ev)
{
   babylonRuntime(ev);

   // Set global variable for alternate runtime test.
   global.$$tjsdoc_alternate_runtime = true;
}
