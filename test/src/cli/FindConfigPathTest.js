import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

if (testConfig.category.cli && testConfig.cli.tests.findConfigPath)
{
   for (const target of testConfig.targets)
   {
      if (target.name !== 'babylon') { continue; }

      describe(`test finding config path (${target.name}):`, () =>
      {
         Util.cli(target, null, true, `./test/fixture/config-cli/${target.name}/find-.tjsdoc.json/`);
         Util.cli(target, null, true, `./test/fixture/config-cli/${target.name}/find-.tjsdoc.js/`);
         Util.cli(target, null, true, `./test/fixture/config-cli/${target.name}/find-.tjsdocrc.json/`);
         Util.cli(target, null, true, `./test/fixture/config-cli/${target.name}/find-.tjsdocrc.js/`);
         Util.cli(target, null, true, `./test/fixture/config-cli/${target.name}/find-.tjsdocrc/`);
         Util.cli(target, null, true, `./test/fixture/config-cli/${target.name}/find-package.json/`);

         //Util.cliRel(target, [__dirname, '../../../'], null, true, `./test/fixture/config-cli/${target.name}/find-.tjsdoc.json/`);
         //Util.cliRel(target, [__dirname, '../../../'], null, true, `./test/fixture/config-cli/${target.name}/find-.tjsdoc.js/`);
         //Util.cliRel(target, [__dirname, '../../../'], null, true, `./test/fixture/config-cli/${target.name}/find-.tjsdocrc.json/`);
         //Util.cliRel(target, [__dirname, '../../../'], null, true, `./test/fixture/config-cli/${target.name}/find-.tjsdocrc.js/`);
         //Util.cliRel(target, [__dirname, '../../../'], null, true, `./test/fixture/config-cli/${target.name}/find-.tjsdocrc/`);
         //Util.cliRel(target, [__dirname, '../../../'], null, true, `./test/fixture/config-cli/${target.name}/find-package.json/`);

         /**
          * Helper function to change the directory when invoking `_readDoc`.
          *
          * @param {string}   filePath - Local file path to load relative to './test/fixture/dest/tjsdoc-access'.
          *
          * @returns {*}
          */
         function readDoc(filePath, dirName)
         {
            return Util.readDoc(target, filePath, dirName, 'dest-cli');
         }

         it('can find .tjsdoc.json', () =>
         {
            const doc = readDoc('class/,,/,,/,,/package/src/access/Class.js~TestAccessClassPublic.html',
             'find-.tjsdoc.json');

            Util.assert.includes(doc, '.self-detail [data-ice="name"]', 'TestAccessClassPublic');
         });

         it('can find .tjsdoc.js', () =>
         {
            const doc = readDoc('class/,,/,,/,,/package/src/access/Class.js~TestAccessClassPublic.html',
             'find-.tjsdoc.js');

            Util.assert.includes(doc, '.self-detail [data-ice="name"]', 'TestAccessClassPublic');
         });

         it('can find .tjsdocrc.json', () =>
         {
            const doc = readDoc('class/,,/,,/,,/package/src/access/Class.js~TestAccessClassPublic.html',
             'find-.tjsdocrc.json');

            Util.assert.includes(doc, '.self-detail [data-ice="name"]', 'TestAccessClassPublic');
         });

         it('can find .tjsdocrc.js', () =>
         {
            const doc = readDoc('class/,,/,,/,,/package/src/access/Class.js~TestAccessClassPublic.html',
             'find-.tjsdocrc.js');

            Util.assert.includes(doc, '.self-detail [data-ice="name"]', 'TestAccessClassPublic');
         });

         it('can find .tjsdocrc', () =>
         {
            const doc = readDoc('class/,,/,,/,,/package/src/access/Class.js~TestAccessClassPublic.html',
             'find-.tjsdocrc');

            Util.assert.includes(doc, '.self-detail [data-ice="name"]', 'TestAccessClassPublic');
         });

         it('can find package.js', () =>
         {
            const doc = readDoc('class/,,/,,/,,/package/src/access/Class.js~TestAccessClassPublic.html',
             'find-package.json');

            Util.assert.includes(doc, '.self-detail [data-ice="name"]', 'TestAccessClassPublic');
         });
      });
   }
}