/**
 * Wires up a mock publisher to the plugin eventbus adding a global variable `global.$$tjsdoc_alternate_publisher`
 * to indicate that the publisher has been swapped out with an alternate version.
 *
 * @param {PluginEvent} ev - The plugin event.
 *
 * @ignore
 */
export function onPluginLoad(ev)
{
   ev.eventbus.on('tjsdoc:publisher:publish', () =>
   {
      // Set global variable for alternate publisher test.
      global.$$tjsdoc_alternate_publisher = true;
   });
}
