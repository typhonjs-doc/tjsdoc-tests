import { testEventbus } from 'backbone-esnext-eventbus';
import path             from 'path';
import DocDB            from 'tjsdoc-runtime-common/src/doc/utils/DocDB.js';
import Util             from 'tjsdoc-test-utils';
import PluginManager    from 'typhonjs-plugin-manager';

import testConfig from '../testConfig.js';

// Synthesized mismatched doc to params from `./test/fixture/package/src/lint/Invalid.js`;
const s_DOC_DATA = JSON.parse(`[
   {"__docId__":0,"__esModuleId__":0,"static":false,"kind":"method","name":"method1","memberof":"test/fixture/package/src/lint/Invalid.js~TestLintInvalid","params":[{"nullable":null,"types":["number"],"spread":false,"optional":false,"name":"x","description":"","descriptionRaw":""}],"generator":false,"async":false,"longname":"test/fixture/package/src/lint/Invalid.js~TestLintInvalid#method1","access":"public","description":"this is method1.\\n","lineNumber":11,"tagsKnown":[{"tagName":"@desc","tagValue":"this is method1."},{"tagName":"@param","tagValue":"{number} x"}],"descriptionRaw":"this is method1."},
   {"__docId__":1,"__esModuleId__":0,"static":false,"kind":"method","name":"method2","memberof":"test/fixture/package/src/lint/Invalid.js~TestLintInvalid","params":[{"nullable":null,"types":["number"],"spread":false,"optional":false,"name":"x1","description":"","descriptionRaw":""},{"nullable":null,"types":["number[]"],"spread":false,"optional":false,"name":"x2","description":"","descriptionRaw":""},{"nullable":null,"types":["Object"],"spread":false,"optional":false,"name":"x3","description":"","descriptionRaw":""}],"generator":false,"async":false,"longname":"test/fixture/package/src/lint/Invalid.js~TestLintInvalid#method2","access":"public","description":"this is method2.\\n","lineNumber":19,"tagsKnown":[{"tagName":"@desc","tagValue":"this is method2."},{"tagName":"@param","tagValue":"{number} x1"},{"tagName":"@param","tagValue":"{number[]} x2"},{"tagName":"@param","tagValue":"{Object} x3"}],"descriptionRaw":"this is method2."},
   {"__docId__":2,"__esModuleId__":0,"static":false,"kind":"method","name":"method3","memberof":"test/fixture/package/src/lint/Invalid.js~TestLintInvalid","params":[{"nullable":null,"types":["number[]"],"spread":false,"optional":false,"name":"x","description":"","descriptionRaw":""}],"generator":false,"async":false,"longname":"test/fixture/package/src/lint/Invalid.js~TestLintInvalid#method3","access":"public","description":"this is method3.\\n","lineNumber":25,"tagsKnown":[{"tagName":"@desc","tagValue":"this is method3."},{"tagName":"@param","tagValue":"{number[]} x"}],"descriptionRaw":"this is method3."},
   {"__docId__":3,"__esModuleId__":0,"static":false,"kind":"method","name":"method4","memberof":"test/fixture/package/src/lint/Invalid.js~TestLintInvalid","params":[{"nullable":null,"types":["Object"],"spread":false,"optional":false,"name":"o","description":"","descriptionRaw":""}],"generator":false,"async":false,"longname":"test/fixture/package/src/lint/Invalid.js~TestLintInvalid#method4","access":"public","description":"this is method4.\\n","lineNumber":31,"tagsKnown":[{"tagName":"@desc","tagValue":"this is method4."},{"tagName":"@param","tagValue":"{Object} o"}],"descriptionRaw":"this is method4."}
]`);

// Synthesized mismatched doc to param nodes from `./test/fixture/package/src/lint/Invalid.js`;
const s_NODES = JSON.parse(`[
   {"type":"ClassMethod","start":188,"end":201,"loc":{"start":{"line":11,"column":3},"end":{"line":11,"column":16}},"computed":false,"key":{"type":"Identifier","start":188,"end":195,"loc":{"start":{"line":11,"column":3},"end":{"line":11,"column":10},"identifierName":"method1"},"name":"method1","leadingComments":null},"static":false,"kind":"method","id":null,"generator":false,"expression":false,"async":false,"params":[{"type":"Identifier","start":196,"end":197,"loc":{"start":{"line":11,"column":11},"end":{"line":11,"column":12},"identifierName":"p"},"name":"p"}],"body":{"type":"BlockStatement","start":199,"end":201,"loc":{"start":{"line":11,"column":14},"end":{"line":11,"column":16}},"body":[],"directives":[],"leadingComments":null,"trailingComments":null},"leadingComments":[{"type":"CommentBlock","value":"*\\n    * this is method1.\\n    * @param {number} x\\n    ","start":127,"end":184,"loc":{"start":{"line":7,"column":3},"end":{"line":10,"column":6}}}],"trailingComments":[{"type":"CommentBlock","value":"*\\n    * this is method2.\\n    * @param {number} x1\\n    * @param {number[]} x2\\n    * @param {Object} x3\\n    ","start":206,"end":316,"loc":{"start":{"line":13,"column":3},"end":{"line":18,"column":6}}}]},
   {"type":"ClassMethod","start":320,"end":380,"loc":{"start":{"line":19,"column":3},"end":{"line":19,"column":63}},"computed":false,"key":{"type":"Identifier","start":320,"end":327,"loc":{"start":{"line":19,"column":3},"end":{"line":19,"column":10},"identifierName":"method2"},"name":"method2","leadingComments":null},"static":false,"kind":"method","id":null,"generator":false,"expression":false,"async":false,"params":[{"type":"AssignmentPattern","start":328,"end":335,"loc":{"start":{"line":19,"column":11},"end":{"line":19,"column":18}},"left":{"type":"Identifier","start":328,"end":330,"loc":{"start":{"line":19,"column":11},"end":{"line":19,"column":13},"identifierName":"p1"},"name":"p1"},"right":{"type":"NumericLiteral","start":333,"end":335,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":18}},"extra":{"rawValue":10,"raw":"10"},"value":10}},{"type":"AssignmentPattern","start":337,"end":351,"loc":{"start":{"line":19,"column":20},"end":{"line":19,"column":34}},"left":{"type":"Identifier","start":337,"end":339,"loc":{"start":{"line":19,"column":20},"end":{"line":19,"column":22},"identifierName":"p2"},"name":"p2"},"right":{"type":"ArrayExpression","start":342,"end":351,"loc":{"start":{"line":19,"column":25},"end":{"line":19,"column":34}},"elements":[{"type":"NumericLiteral","start":343,"end":344,"loc":{"start":{"line":19,"column":26},"end":{"line":19,"column":27}},"extra":{"rawValue":1,"raw":"1"},"value":1},{"type":"NumericLiteral","start":346,"end":347,"loc":{"start":{"line":19,"column":29},"end":{"line":19,"column":30}},"extra":{"rawValue":2,"raw":"2"},"value":2},{"type":"NumericLiteral","start":349,"end":350,"loc":{"start":{"line":19,"column":32},"end":{"line":19,"column":33}},"extra":{"rawValue":3,"raw":"3"},"value":3}]}},{"type":"AssignmentPattern","start":353,"end":376,"loc":{"start":{"line":19,"column":36},"end":{"line":19,"column":59}},"left":{"type":"Identifier","start":353,"end":355,"loc":{"start":{"line":19,"column":36},"end":{"line":19,"column":38},"identifierName":"p3"},"name":"p3"},"right":{"type":"ObjectExpression","start":358,"end":376,"loc":{"start":{"line":19,"column":41},"end":{"line":19,"column":59}},"properties":[{"type":"ObjectProperty","start":360,"end":366,"loc":{"start":{"line":19,"column":43},"end":{"line":19,"column":49}},"method":false,"shorthand":false,"computed":false,"key":{"type":"Identifier","start":360,"end":363,"loc":{"start":{"line":19,"column":43},"end":{"line":19,"column":46},"identifierName":"foo"},"name":"foo"},"value":{"type":"NumericLiteral","start":365,"end":366,"loc":{"start":{"line":19,"column":48},"end":{"line":19,"column":49}},"extra":{"rawValue":1,"raw":"1"},"value":1}},{"type":"ObjectProperty","start":368,"end":374,"loc":{"start":{"line":19,"column":51},"end":{"line":19,"column":57}},"method":false,"shorthand":false,"computed":false,"key":{"type":"Identifier","start":368,"end":371,"loc":{"start":{"line":19,"column":51},"end":{"line":19,"column":54},"identifierName":"bar"},"name":"bar"},"value":{"type":"NumericLiteral","start":373,"end":374,"loc":{"start":{"line":19,"column":56},"end":{"line":19,"column":57}},"extra":{"rawValue":2,"raw":"2"},"value":2}}]}}],"body":{"type":"BlockStatement","start":378,"end":380,"loc":{"start":{"line":19,"column":61},"end":{"line":19,"column":63}},"body":[],"directives":[],"leadingComments":null,"trailingComments":null},"leadingComments":[{"type":"CommentBlock","value":"*\\n    * this is method2.\\n    * @param {number} x1\\n    * @param {number[]} x2\\n    * @param {Object} x3\\n    ","start":206,"end":316,"loc":{"start":{"line":13,"column":3},"end":{"line":18,"column":6}}}],"trailingComments":[{"type":"CommentBlock","value":"*\\n    * this is method3.\\n    * @param {number[]} x\\n    ","start":385,"end":444,"loc":{"start":{"line":21,"column":3},"end":{"line":24,"column":6}}}]},
   {"type":"ClassMethod","start":448,"end":464,"loc":{"start":{"line":25,"column":3},"end":{"line":25,"column":19}},"computed":false,"key":{"type":"Identifier","start":448,"end":455,"loc":{"start":{"line":25,"column":3},"end":{"line":25,"column":10},"identifierName":"method3"},"name":"method3","leadingComments":null},"static":false,"kind":"method","id":null,"generator":false,"expression":false,"async":false,"params":[{"type":"RestElement","start":456,"end":460,"loc":{"start":{"line":25,"column":11},"end":{"line":25,"column":15}},"argument":{"type":"Identifier","start":459,"end":460,"loc":{"start":{"line":25,"column":14},"end":{"line":25,"column":15},"identifierName":"p"},"name":"p"}}],"body":{"type":"BlockStatement","start":462,"end":464,"loc":{"start":{"line":25,"column":17},"end":{"line":25,"column":19}},"body":[],"directives":[],"leadingComments":null,"trailingComments":null},"leadingComments":[{"type":"CommentBlock","value":"*\\n    * this is method3.\\n    * @param {number[]} x\\n    ","start":385,"end":444,"loc":{"start":{"line":21,"column":3},"end":{"line":24,"column":6}}}],"trailingComments":[{"type":"CommentBlock","value":"*\\n    * this is method4.\\n    * @param {Object} o\\n    ","start":469,"end":526,"loc":{"start":{"line":27,"column":3},"end":{"line":30,"column":6}}}]},
   {"type":"ClassMethod","start":530,"end":564,"loc":{"start":{"line":31,"column":3},"end":{"line":31,"column":37}},"computed":false,"key":{"type":"Identifier","start":530,"end":537,"loc":{"start":{"line":31,"column":3},"end":{"line":31,"column":10},"identifierName":"method4"},"name":"method4","leadingComments":null},"static":false,"kind":"method","id":null,"generator":false,"expression":false,"async":false,"params":[{"type":"ObjectPattern","start":538,"end":548,"loc":{"start":{"line":31,"column":11},"end":{"line":31,"column":21}},"properties":[{"type":"ObjectProperty","start":540,"end":542,"loc":{"start":{"line":31,"column":13},"end":{"line":31,"column":15}},"method":false,"shorthand":true,"computed":false,"key":{"type":"Identifier","start":540,"end":542,"loc":{"start":{"line":31,"column":13},"end":{"line":31,"column":15},"identifierName":"p1"},"name":"p1"},"value":{"type":"Identifier","start":540,"end":542,"loc":{"start":{"line":31,"column":13},"end":{"line":31,"column":15},"identifierName":"p1"},"name":"p1"},"extra":{"shorthand":true}},{"type":"ObjectProperty","start":544,"end":546,"loc":{"start":{"line":31,"column":17},"end":{"line":31,"column":19}},"method":false,"shorthand":true,"computed":false,"key":{"type":"Identifier","start":544,"end":546,"loc":{"start":{"line":31,"column":17},"end":{"line":31,"column":19},"identifierName":"p2"},"name":"p2"},"value":{"type":"Identifier","start":544,"end":546,"loc":{"start":{"line":31,"column":17},"end":{"line":31,"column":19},"identifierName":"p2"},"name":"p2"},"extra":{"shorthand":true}}]},{"type":"ObjectPattern","start":550,"end":560,"loc":{"start":{"line":31,"column":23},"end":{"line":31,"column":33}},"properties":[{"type":"ObjectProperty","start":552,"end":554,"loc":{"start":{"line":31,"column":25},"end":{"line":31,"column":27}},"method":false,"shorthand":true,"computed":false,"key":{"type":"Identifier","start":552,"end":554,"loc":{"start":{"line":31,"column":25},"end":{"line":31,"column":27},"identifierName":"p3"},"name":"p3"},"value":{"type":"Identifier","start":552,"end":554,"loc":{"start":{"line":31,"column":25},"end":{"line":31,"column":27},"identifierName":"p3"},"name":"p3"},"extra":{"shorthand":true}},{"type":"ObjectProperty","start":556,"end":558,"loc":{"start":{"line":31,"column":29},"end":{"line":31,"column":31}},"method":false,"shorthand":true,"computed":false,"key":{"type":"Identifier","start":556,"end":558,"loc":{"start":{"line":31,"column":29},"end":{"line":31,"column":31},"identifierName":"p4"},"name":"p4"},"value":{"type":"Identifier","start":556,"end":558,"loc":{"start":{"line":31,"column":29},"end":{"line":31,"column":31},"identifierName":"p4"},"name":"p4"},"extra":{"shorthand":true}}]}],"body":{"type":"BlockStatement","start":562,"end":564,"loc":{"start":{"line":31,"column":35},"end":{"line":31,"column":37}},"body":[],"directives":[]},"leadingComments":[{"type":"CommentBlock","value":"*\\n    * this is method4.\\n    * @param {Object} o\\n    ","start":469,"end":526,"loc":{"start":{"line":27,"column":3},"end":{"line":30,"column":6}}}]}
]`);

// eslint-disable-next-line comma-spacing
const s_TEST_OUTPUT = ["\n\u001b[33m==================================\u001b[0m","\u001b[33mLintDocLogger warnings:\u001b[0m","\u001b[33m==================================\u001b[0m","\n\u001b[33mwarning: signature mismatch: TestLintInvalid#method1 test/fixture/package/src/lint/Invalid.js#6\u001b[32m","\u001b[32m7|    /**\n8|     * this is method1.\n9|     * @param {number} x\n10|     */\n11|    method1(p) {}\u001b[0m'","\n\u001b[33mwarning: signature mismatch: TestLintInvalid#method2 test/fixture/package/src/lint/Invalid.js#12\u001b[32m","\u001b[32m13|    /**\n14|     * this is method2.\n15|     * @param {number} x1\n16|     * @param {number[]} x2\n17|     * @param {Object} x3\n18|     */\n19|    method2(p1 = 10, p2 = [1, 2, 3], p3 = { foo: 1, bar: 2 }) {}\u001b[0m'","\n\u001b[33mwarning: signature mismatch: TestLintInvalid#method3 test/fixture/package/src/lint/Invalid.js#20\u001b[32m","\u001b[32m21|    /**\n22|     * this is method3.\n23|     * @param {number[]} x\n24|     */\n25|    method3(...p) {}\u001b[0m'","\n\u001b[33mwarning: signature mismatch: TestLintInvalid#method4 test/fixture/package/src/lint/Invalid.js#26\u001b[32m","\u001b[32m27|    /**\n28|     * this is method4.\n29|     * @param {Object} o\n30|     */\n31|    method4({ p1, p2 }, { p3, p4 }) {}\u001b[0m'"];

if (testConfig.category.doc && testConfig.doc.tests.lintDocLogger)
{
   for (const target of testConfig.targets)
   {
      /** @test {LintDocBuilder} */
      describe('LintDocLogger', () =>
      {
         let pluginManager;

         before(() =>
         {
            pluginManager = new PluginManager({ eventbus: testEventbus });

            // Create DocDB plugin from synthesized doc data.
            pluginManager.add({ name: 'tjsdoc-doc-database', instance: new DocDB(s_DOC_DATA) });

            // Add Babylon and common runtime.
            pluginManager.add({ name: target.runtime });
         });

         after(() => { pluginManager.destroy(); testEventbus.off(); });

         it('has results', () =>
         {
            const output = [];

            // Synthesize returning the `source` config value needed by LintDocLogger.
            testEventbus.on('tjsdoc:get:config', () => { return { _dirPath: path.resolve('.') }; });

            // Loads AST Nodes into IDs `0, 1, 2, 3` corresponding to the synthesized doc data.
            testEventbus.triggerSync('tjsdoc:ast:add:node', s_NODES[0]);
            testEventbus.triggerSync('tjsdoc:ast:add:node', s_NODES[1]);
            testEventbus.triggerSync('tjsdoc:ast:add:node', s_NODES[2]);
            testEventbus.triggerSync('tjsdoc:ast:add:node', s_NODES[3]);

            // Mock `log:warn:raw` logging storing in `output`.
            testEventbus.on('log:warn:raw', (message) => output.push(message));

            // Invoke LintDocLogger
            testEventbus.trigger('tjsdoc:log:lint:doc:warnings');

            Util.assert.deepEqual(output, s_TEST_OUTPUT);
         });
      });
   }
}