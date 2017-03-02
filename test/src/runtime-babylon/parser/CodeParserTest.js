import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('runtime_babylon', 'parser', (target) =>
{
   const PluginManager = require('typhonjs-plugin-manager');
   const testEventbus = require('backbone-esnext-eventbus').testEventbus;

   /** @test {CodeParser} */
   describe(`CodeParser (${target.name}):`, () =>
   {
      let pluginManager;

      before(() =>
      {
         pluginManager = new PluginManager({ eventbus: testEventbus });

         pluginManager.add({ name: target.runtime });
      });

      after(() => { pluginManager.destroy(); testEventbus.off(); });

      it('can parse "do expressions"', () =>
      {
         const ast = testEventbus.triggerSync('tjsdoc:parse:file', './test/fixture/syntax/DoExpressions.js');
         Util.assert(ast.program.sourceType === 'module');
      });

      it('can parse "function bind"', () =>
      {
         const ast = testEventbus.triggerSync('tjsdoc:parse:file', './test/fixture/syntax/FunctionBind.js');
         Util.assert(ast.program.sourceType === 'module');
      });

      it('can parse "function sent"', () =>
      {
         const ast = testEventbus.triggerSync('tjsdoc:parse:file', './test/fixture/syntax/FunctionSent.js');
         Util.assert(ast.program.sourceType === 'module');
      });

      it('can parse "async generators"', () =>
      {
         const ast = testEventbus.triggerSync('tjsdoc:parse:file', './test/fixture/syntax/AsyncGenerators.js');
         Util.assert(ast.program.sourceType === 'module');
      });

      it('can parse "export extensions"', () =>
      {
         const ast = testEventbus.triggerSync('tjsdoc:parse:file', './test/fixture/syntax/ExportExtensions.js');
         Util.assert(ast.program.sourceType === 'module');
      });

      it('can parse "dynamic import"', () =>
      {
         const ast = testEventbus.triggerSync('tjsdoc:parse:file', './test/fixture/syntax/DynamicImport.js');
         Util.assert(ast.program.sourceType === 'script');
      });

      it('throws with no code to parse', () =>
      {
         Util.assert.throw(() => testEventbus.triggerSync('tjsdoc:parse:code'));
      });

      it('throws with no file to parse', () =>
      {
         Util.assert.throw(() => testEventbus.triggerSync('tjsdoc:parse:file'));
      });
   });
});
