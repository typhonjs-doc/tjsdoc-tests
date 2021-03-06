import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('runtime_common', 'utils', (target) =>
{
   const PluginManager = require('typhonjs-plugin-manager');
   const testEventbus = require('backbone-esnext-eventbus').testEventbus;

   /* eslint-disable comma-spacing */
   const s_TEST_CODE_OUTPUT = ["\n================================================","\u001b[32mInvalidCodeLogger warnings\u001b[0m","================================================","\n\u001b[33mwarning: could not process the following code.\u001b[0m\n\u001b[33mAn error message\u001b[0m\n\u001b[32m1| CODE2\n2| some\n3| bogus\n4| code\n5| that\n6| is\n7| just\n8| a\u001b[0m","\n\u001b[33mwarning: could not process the following code.\u001b[0m\n\u001b[32m1| CODE3\n2| some\n3| bogus\n4| code\n5| that\u001b[0m","\n================================================","\u001b[1;31mInvalidCodeLogger errors (internal TJSDoc failure)\u001b\n\u001b[0m","\u001b[1;31mPlease report an issue after checking if a similar one already exists:\u001b[0m","\u001b[1;31mhttps://github.com/typhonjs-node-tjsdoc/tjsdoc/issues\u001b[0m","================================================","\n\u001b[31merror: could not process the following code.\u001b[0m\n\u001b[1;31m1| CODE1\n2| some\n3| bogus\n4| code\n5| that\n6| is\u001b[0m","TEST_ERROR"];
   const s_TEST_FILE_OUTPUT = ["\n================================================","\u001b[32mInvalidCodeLogger warnings\u001b[0m","================================================","\n\u001b[33mwarning: could not process the following code.\u001b[0m\n\u001b[33m./test/fixture/package/src/invalid/CodeSyntax.js\u001b[0m\n\u001b[33mAn error message\u001b[0m\n\u001b[32m1| this\n2| is\n3| invalid\n4| syntax.\n5| \u001b[0m","\n\u001b[33mwarning: could not process the following code.\u001b[0m\n\u001b[33m./test/fixture/package/src/invalid/DocSyntax.js\u001b[0m\n\u001b[32m1| /* eslint-disable valid-jsdoc, no-unused-vars */\n2| /**\n3|  * @param {} p\n4|  */\n5| function testInvalidCodeSyntax(p) {}\u001b[0m","\n================================================","\u001b[1;31mInvalidCodeLogger errors (internal TJSDoc failure)\u001b\n\u001b[0m","\u001b[1;31mPlease report an issue after checking if a similar one already exists:\u001b[0m","\u001b[1;31mhttps://github.com/typhonjs-node-tjsdoc/tjsdoc/issues\u001b[0m","================================================","\n\u001b[31merror: could not process the following code.\u001b[0m\n\u001b[31m./test/fixture/package/src/guess/ObjectDefaultParam.js\u001b[0m\n\u001b[1;31m1| /* eslint-disable no-unused-vars, require-jsdoc */\n2| /**\n3|  * This is TestDestructuringObjectDefault.\n4|  */\n5| export default class TestGuessObjectDestructureDefault\n6| {\u001b[0m","TEST_ERROR"];
   /* eslint-enable comma-spacing */

   /** @test {InvalidCodeLogger} */
   describe(`InvalidCodeLogger (${target.name})`, () =>
   {
      let pluginManager;
      let output = [];

      let testCode1, testCode2, testCode3, testFile1, testFile2, testFile3;

      before(async () =>
      {
         pluginManager = new PluginManager({ eventbus: testEventbus });

         await pluginManager.addAsync({ name: target.runtime });

         testEventbus.on('log:error', (err) => output.push(err.message));
         testEventbus.on('log:error:raw', (message) => output.push(message));
         testEventbus.on('log:warn:raw', (message) => output.push(message));

         testCode1 = { code: "CODE1\nsome\nbogus\ncode\nthat\nis\njust\na\ntest!", node: { type: "ClassMethod", start: 111, end: 145, loc: { start: { line: 6, column: 3 }, end: { line: 6, column: 37 } } }, fatalError: new Error("TEST_ERROR") };
         testCode2 = { code: "CODE2\nsome\nbogus\ncode\nthat\nis\njust\na\ntest!", parserError: testEventbus.triggerSync('tjsdoc:system:error:parser:create', { line: 5, column: 0, message: 'An error message', position: 24 }) };
         testCode3 = { code: "CODE3\nsome\nbogus\ncode\nthat\nis\njust\na\ntest!", node: { type: "FunctionDeclaration", start: 72, end: 108, loc: { start: { line: 5, column: 0 }, end: { line: 5, column: 36 } }, leadingComments: [{ type: "CommentBlock", value: " eslint-disable valid-jsdoc, no-unused-vars ", start: 0, end: 48, loc: { start: { line: 1, column: 0 }, end: { line: 1, column: 48 } } }, { type: "CommentBlock", value: "*\n * @param {} p\n ", start: 49, end: 71, loc: { start: { line: 2, column: 0 }, end: { line: 4, column: 3 } } }] } };

         testFile1 = { filePath: "./test/fixture/package/src/guess/ObjectDefaultParam.js", node: { type: "ClassMethod", start: 111, end: 145, loc: { start: { line: 6, column: 3 }, end: { line: 6, column: 37 } } }, fatalError: new Error("TEST_ERROR") };
         testFile2 = { filePath: "./test/fixture/package/src/invalid/CodeSyntax.js", parserError: testEventbus.triggerSync('tjsdoc:system:error:parser:create', { line: 5, column: 0, message: 'An error message', position: 24 }) };
         testFile3 = { filePath: "./test/fixture/package/src/invalid/DocSyntax.js", node: { type: "FunctionDeclaration", start: 72, end: 108, loc: { start: { line: 5, column: 0 }, end: { line: 5, column: 36 } }, leadingComments: [{ type: "CommentBlock", value: " eslint-disable valid-jsdoc, no-unused-vars ", start: 0, end: 48, loc: { start: { line: 1, column: 0 }, end: { line: 1, column: 48 } } }, { type: "CommentBlock", value: "*\n * @param {} p\n ", start: 49, end: 71, loc: { start: { line: 2, column: 0 }, end: { line: 4, column: 3 } } }] } };
      });

      after(async () => { await pluginManager.destroyAsync(); testEventbus.off(); });

      it('throws on no data', () =>
      {
         Util.assert.throws(() => testEventbus.trigger('tjsdoc:system:invalid:code:add'));
      });

      it('can add and reset invalid code', () =>
      {
         output = [];

         // Add test invalid code.
         testEventbus.trigger('tjsdoc:system:invalid:code:add', testCode1);

         testEventbus.trigger('tjsdoc:system:invalid:code:reset');

         testEventbus.trigger('tjsdoc:system:invalid:code:log');

         Util.assert.deepEqual(output, []);
      });

      it('can add and log invalid code', () =>
      {
         output = [];

         testEventbus.trigger('tjsdoc:system:invalid:code:reset');

         // Add test invalid code.
         testEventbus.trigger('tjsdoc:system:invalid:code:add', testCode1);
         testEventbus.trigger('tjsdoc:system:invalid:code:add', testCode2);
         testEventbus.trigger('tjsdoc:system:invalid:code:add', testCode3);

         testEventbus.trigger('tjsdoc:system:invalid:code:log');

         Util.assert.deepEqual(output, s_TEST_CODE_OUTPUT);
      });

      it('can add and log invalid files', () =>
      {
         output = [];

         testEventbus.trigger('tjsdoc:system:invalid:code:reset');

         // Add test invalid code.
         testEventbus.trigger('tjsdoc:system:invalid:code:add', testFile1);
         testEventbus.trigger('tjsdoc:system:invalid:code:add', testFile2);
         testEventbus.trigger('tjsdoc:system:invalid:code:add', testFile3);

         testEventbus.trigger('tjsdoc:system:invalid:code:log');

         Util.assert.deepEqual(output, s_TEST_FILE_OUTPUT);
      });
   });
});
