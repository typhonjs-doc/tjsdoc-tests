import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

const s_CONFIG_MAP =
{
   'babylon': './test/fixture/config-cli/babylon/tjsdoc-cli.js',
   'default': './test/fixture/config-cli/default/tjsdoc-cli.js'
};

testConfig.forEachTarget('cli', 'cli', (target) =>
{
   if (s_CONFIG_MAP[target.name])
   {
      /**
       * @test {TJSDocCLI#exec}
       * @test {TJSDocCLI#_createConfigFromJSONFile}
       */
      describe(`test cli (${target.name}):`, () =>
      {
         const configPath = s_CONFIG_MAP[target.name];

         let cli;

         beforeEach(() =>
         {
            const argv = ['node', target.cli, '-c', configPath];

            const CLIClass = require(target.cli);

            // eslint-disable-next-line babel/new-cap
            cli = typeof CLIClass.default === 'function' ? new CLIClass.default(argv) : new CLIClass(argv);
         });

         it('can execute with config file.', () =>
         {
            Util.consoleLogSwitch(false);
            cli.exec();
            Util.consoleLogSwitch(true);
         });

         it('can show help', () =>
         {
            Util.consoleLogSwitch(false);
            cli._showHelp();
            Util.consoleLogSwitch(true);
         });

         it('can show version', () =>
         {
            Util.consoleLogSwitch(false);
            cli._showVersion();
            Util.consoleLogSwitch(true);
         });
      });
   }
});


