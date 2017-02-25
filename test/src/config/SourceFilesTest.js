import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

import process from 'process';

if (testConfig.category.config && testConfig.config.tests.sourceFiles)
{
   for (const target of testConfig.targets)
   {
      /** @test {ManualDocBuilder} */
      describe(`test config.sourceFiles (${target.name})`, () =>
      {
         Util.invoke(target, './test/fixture/config/tjsdoc-sourceFiles.js');

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

            Util.assert.doesNotThrow(() => readDoc('class/test/fixture/package/src/desc/Markdown.js~TestDescMarkdown.html'));

            Util.assert.doesNotThrow(() => readDoc(
             'class/test/fixture/package/src/desc/MultiLine.js~TestDescMultiLine.html'));
         });
      });
   }
}
