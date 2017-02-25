import publish    from 'tjsdoc-publisher-static-html';

/**
 * Wires up the default publisher to plugin eventbus adding a global variable `global.$$tjsdoc_alternate_publisher`
 * to indicate that the publisher has been swapped out with an alternate version.
 *
 * @param {PluginEvent} ev - The plugin event.
 *
 * @ignore
 */
export function onPluginLoad(ev)
{
   const eventbus = ev.eventbus;

   eventbus.on('tjsdoc:publisher:publish', (eventbus) =>
   {
      publish(eventbus);

      // Set global variable for alternate publisher test.
      global.$$tjsdoc_alternate_publisher = true;
   });
}
