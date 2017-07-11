import path       from 'path';
import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

// Due to `tjsdoc-sourceFiles.js` exporting an object hash it is necessary to create a copy of the config
// so that multiple targets use the same base config.
const config = require(path.resolve('./test/fixture/config/tjsdoc-sourceFiles.js'));

testConfig.forEachTarget('config', 'sourceFiles', (target) =>
{
   /** @test {ManualDocBuilder} */
   describe(`test config.sourceFiles (${target.name}):`, () =>
   {
      before(async () =>
      {
         // Please note the object copy of the config.
         await Util.invoke(target, JSON.parse(JSON.stringify(config)), { silent: testConfig.consoleSilent });
      });

      /**
       * Helper function to change the directory when invoking `_readDoc`.
       *
       * @param {string}   filePath - Local file path to load relative to
       *                              './test/fixture/dest/<target.name>/tjsdoc-sourceFiles'.
       *
       * @returns {*}
       */
      function readDoc(filePath)
      {
         return Util.readDoc(target, filePath, 'tjsdoc-sourceFiles');
      }

      it('Generates docs from sourceFiles', () =>
      {
         Util.assert.doesNotThrow(() => readDoc('class/test/fixture/package/src/desc/Class.js~TestDescClass.html'));

         Util.assert.doesNotThrow(() => readDoc(
          'class/test/fixture/package/src/desc/Markdown.js~TestDescMarkdown.html'));

         Util.assert.doesNotThrow(() => readDoc(
          'class/test/fixture/package/src/desc/MultiLine.js~TestDescMultiLine.html'));
      });
   });
});
