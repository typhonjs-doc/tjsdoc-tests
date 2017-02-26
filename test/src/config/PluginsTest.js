import path       from 'path';
import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'plugins', (target) =>
{
   /** @test {Plugin} */
   describe(`test config.plugins: [...] (${target.name}):`, () =>
   {
      Util.invoke(target, './test/fixture/config/tjsdoc-plugins.json');

      /* eslint-disable global-require */
      it('call each handlers', () =>
      {
         const pluginPath = path.resolve('./test/fixture/package/plugin/MyPlugin1.js');
         const plugin = require(pluginPath);

         for (const key of Object.keys(plugin.callInfo.handlerNames))
         {
            Util.assert(plugin.callInfo.handlerNames[key]);
         }

         Util.assert.deepEqual(plugin.callInfo.pluginOptions, { foo: 1 });
         Util.assert.equal(plugin.callInfo.usedParser, true);
      });

      it('custom document by each handlers', () =>
      {
         const doc = Util.readDoc(target, 'index.html', 'tjsdoc-plugins');

         Util.assert.includes(doc, 'head title', 'Modified Config');
         Util.assert.includes(doc, '.navigation', 'MyClass_ModifiedCode_ModifiedAST_ModifiedTag_ModifiedHTML');
         Util.assert.includes(doc, 'head meta[name="x-from-plugin"]', 'fileName:', 'content');
      });

      /* eslint-disable global-require */
      it('call multi plugins', () =>
      {
         const pluginPath = path.resolve('./test/fixture/package/plugin/MyPlugin1.js');
         const plugin = require(pluginPath);

         for (const key of Object.keys(plugin.callInfo.handlerNames))
         {
            Util.assert.deepEqual(plugin.callInfo.handlerNames[key], ['MyPlugin1', 'MyPlugin2']);
         }
      });
   });
});
