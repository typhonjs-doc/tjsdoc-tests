import Util             from 'tjsdoc-test-utils';

import testConfig       from '../../testConfig.js';

testConfig.forEachTarget('html', 'coverage', (target) =>
{
   /** @test {CoverageBuilder} */
   describe(`test coverage (${target.name}):`, () =>
   {
      const doc = Util.readDoc(target, 'source.html');
      const badge = Util.readFile(target, 'badge.svg').toString();

      it('has coverage summary', () =>
      {
         Util.assert(badge.includes('89%'));
         Util.assert.includes(doc, '[data-ice="coverageBadge"]', './badge.svg', 'src');
         Util.assert.includes(doc, '[data-ice="totalCoverageCount"]', '323/360');
         Util.assert.equal(doc.find('[data-ice="file"] [data-ice="coverage"]').length, 124);
      });

      /* eslint-disable max-statements */
      it('has coverage details', () =>
      {
         let count = 0;

         /**
          * Helper function to simplify the construction of the selector and callback method to check an expected
          * value when invoking `findParent`.
          *
          * @param {string}   filePath - Local file path to load relative to './test/fixture/dest/tjsdoc'.
          *
          * @param {*}        expect - expected value.
          */
         function test(filePath, expect)
         {
            Util.findParent(doc, `a[href="${filePath}"]`, '[data-ice="file"]', (doc) =>
            {
               Util.assert.includes(doc, '.coverage', expect);
               count++;
            });
         }

         test('file/test/fixture/package/src/abstract/Definition.js.html', '100 %3/3');
         test('file/test/fixture/package/src/abstract/Override.js.html', '100 %3/3');
         test('file/test/fixture/package/src/access/Class.js.html', '100 %4/4');
         test('file/test/fixture/package/src/access/Function.js.html', '100 %4/4');
         test('file/test/fixture/package/src/access/Method.js.html', '100 %5/5');
         test('file/test/fixture/package/src/access/Property.js.html', '100 %6/6');
         test('file/test/fixture/package/src/access/Variable.js.html', '100 %4/4');
         test('file/test/fixture/package/src/async/Function.js.html', '100 %1/1');
         test('file/test/fixture/package/src/async/Method.js.html', '100 %2/2');
         test('file/test/fixture/package/src/class/Definition.js.html', '100 %8/8');
         test('file/test/fixture/package/src/classproperty/Definition.js.html', '100 %3/3');
         test('file/test/fixture/package/src/computed/Method.js.html', '100 %11/11');
         test('file/test/fixture/package/src/computed/Property.js.html', '100 %12/12');
         test('file/test/fixture/package/src/decorator/Definition.js.html', '100 %7/7');
         test('file/test/fixture/package/src/deprecated/Class.js.html', '100 %4/4');
         test('file/test/fixture/package/src/deprecated/Function.js.html', '100 %1/1');
         test('file/test/fixture/package/src/deprecated/Variable.js.html', '100 %1/1');
         test('file/test/fixture/package/src/desc/Class.js.html', '100 %4/4');
         test('file/test/fixture/package/src/desc/Function.js.html', '100 %1/1');
         test('file/test/fixture/package/src/desc/Markdown.js.html', '100 %1/1');
         test('file/test/fixture/package/src/desc/MultiLine.js.html', '100 %4/4');
         test('file/test/fixture/package/src/desc/Variable.js.html', '100 %1/1');
         test('file/test/fixture/package/src/destructuring/Array.js.html', '100 %2/2');
         test('file/test/fixture/package/src/destructuring/Object.js.html', '100 %2/2');
         test('file/test/fixture/package/src/duplication/Definition.js.html', '100 %5/5');
         test('file/test/fixture/package/src/emits/Function.js.html', '100 %2/2');
         test('file/test/fixture/package/src/emits/Method.js.html', '100 %4/4');
         test('file/test/fixture/package/src/example/Caption.js.html', '100 %1/1');
         test('file/test/fixture/package/src/example/Class.js.html', '100 %4/4');
         test('file/test/fixture/package/src/example/Function.js.html', '100 %1/1');
         test('file/test/fixture/package/src/example/Variable.js.html', '100 %1/1');
         test('file/test/fixture/package/src/experimental/Class.js.html', '100 %4/4');
         test('file/test/fixture/package/src/experimental/Function.js.html', '100 %1/1');
         test('file/test/fixture/package/src/experimental/Variable.js.html', '100 %1/1');
         test('file/test/fixture/package/src/exponentiationoperator/Definition.js.html', '100 %2/2');
         test('file/test/fixture/package/src/export/AnonymousClass.js.html', '100 %1/1');
         test('file/test/fixture/package/src/export/AnonymousFunction.js.html', '100 %1/1');
         test('file/test/fixture/package/src/export/ArrowFunction.js.html#errorLines=18', '75 %3/4');
         test('file/test/fixture/package/src/export/Class.js.html#errorLines=25', '80 %4/5');
         test('file/test/fixture/package/src/export/ClassIndirectDefault.js.html', '100 %1/1');
         test('file/test/fixture/package/src/export/Default.js.html', '100 %1/1');
         test('file/test/fixture/package/src/export/Extends.js.html', '100 %2/2');
         test('file/test/fixture/package/src/export/Function.js.html#errorLines=33', '83 %5/6');
         test('file/test/fixture/package/src/export/FunctionIndirectDefault.js.html', '100 %1/1');
         test('file/test/fixture/package/src/export/Multiple.js.html', '100 %2/2');
         test('file/test/fixture/package/src/export/Named.js.html', '100 %1/1');
         test('file/test/fixture/package/src/export/NewExpression.js.html', '100 %4/4');
         test('file/test/fixture/package/src/export/NewExpressionIndirect.js.html', '100 %2/2');
         test('file/test/fixture/package/src/export/NewExpressionProperty.js.html', '100 %2/2');
         test('file/test/fixture/package/src/export/Variable.js.html#errorLines=23,24', '66 %4/6');
         test('file/test/fixture/package/src/export/VariableIndirectDefault.js.html', '100 %1/1');
         test('file/test/fixture/package/src/extends/Builtin.js.html', '100 %2/2');
         test('file/test/fixture/package/src/extends/Deep.js.html#errorLines=110,129,22,41,66,85', '77 %21/27');
         test('file/test/fixture/package/src/extends/Expression.js.html', '100 %3/3');
         test('file/test/fixture/package/src/extends/Inner.js.html', '100 %6/6');
         test('file/test/fixture/package/src/extends/Mixin.js.html', '100 %6/6');
         test('file/test/fixture/package/src/extends/MixinExplicit.js.html', '100 %3/3');
         test('file/test/fixture/package/src/extends/Outer.js.html', '100 %2/2');
         test('file/test/fixture/package/src/extends/Property.js.html', '100 %1/1');
         test('file/test/fixture/package/src/external/Definition.js.html', '-');
         test('file/test/fixture/package/src/generator/Function.js.html', '100 %1/1');
         test('file/test/fixture/package/src/generator/Method.js.html', '100 %2/2');
         test('file/test/fixture/package/src/guess/Param.js.html#errorLines=11,13,15,17,19,21,23,25,7,9', '9 %1/11');
         test('file/test/fixture/package/src/guess/Property.js.html#errorLines=11,13,15,17', '33 %2/6');
         test('file/test/fixture/package/src/guess/Return.js.html#errorLines=14,19,2,24,4,9', '0 %0/6');
         test('file/test/fixture/package/src/guess/Variable.js.html#errorLines=1,3,5,7', '0 %0/4');
         test('file/test/fixture/package/src/ignore/Class.js.html', '100 %2/2');
         test('file/test/fixture/package/src/ignore/Function.js.html', '-');
         test('file/test/fixture/package/src/ignore/Variable.js.html', '-');
         test('file/test/fixture/package/src/interface/Definition.js.html', '100 %2/2');
         test('file/test/fixture/package/src/interface/Implements.js.html', '100 %5/5');
         test('file/test/fixture/package/src/invalid/DocSyntax.js.html', '-');
         test('file/test/fixture/package/src/jsx/Definition.js.html', '100 %2/2');
         test('file/test/fixture/package/src/link/Class.js.html', '100 %4/4');
         test('file/test/fixture/package/src/link/Function.js.html', '100 %1/1');
         test('file/test/fixture/package/src/link/Variable.js.html', '100 %1/1');
         test('file/test/fixture/package/src/lint/Invalid.js.html', '100 %5/5');
         test('file/test/fixture/package/src/listens/Function.js.html', '100 %2/2');
         test('file/test/fixture/package/src/listens/Method.js.html', '100 %4/4');
         test('file/test/fixture/package/src/param/Function.js.html', '100 %1/1');
         test('file/test/fixture/package/src/param/Method.js.html', '100 %2/2');
         test('file/test/fixture/package/src/property/Return.js.html', '100 %2/2');
         test('file/test/fixture/package/src/return/Function.js.html', '100 %2/2');
         test('file/test/fixture/package/src/return/Method.js.html', '100 %3/3');
         test('file/test/fixture/package/src/see/Class.js.html', '100 %4/4');
         test('file/test/fixture/package/src/see/Function.js.html', '100 %1/1');
         test('file/test/fixture/package/src/see/Variable.js.html', '100 %1/1');
         test('file/test/fixture/package/src/since/Class.js.html', '100 %4/4');
         test('file/test/fixture/package/src/since/Function.js.html', '100 %1/1');
         test('file/test/fixture/package/src/since/Variable.js.html', '100 %1/1');
         test('file/test/fixture/package/src/throws/Function.js.html', '100 %2/2');
         test('file/test/fixture/package/src/throws/Method.js.html', '100 %4/4');
         test('file/test/fixture/package/src/todo/Class.js.html', '100 %4/4');
         test('file/test/fixture/package/src/todo/Function.js.html', '100 %1/1');
         test('file/test/fixture/package/src/todo/Variable.js.html', '100 %1/1');
         test('file/test/fixture/package/src/trailingcomma/Definition.js.html', '100 %3/3');
         test('file/test/fixture/package/src/type/Array.js.html', '100 %2/2');
         test('file/test/fixture/package/src/type/Class.js.html', '100 %3/3');
         test('file/test/fixture/package/src/type/Complex.js.html', '100 %7/7');
         test('file/test/fixture/package/src/type/Default.js.html', '100 %3/3');
         test('file/test/fixture/package/src/type/External.js.html', '100 %2/2');
         test('file/test/fixture/package/src/type/Function.js.html', '100 %2/2');
         test('file/test/fixture/package/src/type/Generics.js.html', '100 %2/2');
         test('file/test/fixture/package/src/type/Literal.js.html', '100 %2/2');
         test('file/test/fixture/package/src/type/Nullable.js.html', '100 %2/2');
         test('file/test/fixture/package/src/type/Object.js.html', '100 %2/2');
         test('file/test/fixture/package/src/type/Optional.js.html', '100 %2/2');
         test('file/test/fixture/package/src/type/Record.js.html', '100 %2/2');
         test('file/test/fixture/package/src/type/Spread.js.html', '100 %3/3');
         test('file/test/fixture/package/src/type/Typedef.js.html', '100 %2/2');
         test('file/test/fixture/package/src/type/Union.js.html', '100 %2/2');
         test('file/test/fixture/package/src/typedef/Definition.js.html', '-');
         test('file/test/fixture/package/src/undocument/Definition.js.html#errorLines=2', '0 %0/1');
         test('file/test/fixture/package/src/unknown/Definition.js.html', '100 %1/1');
         test('file/test/fixture/package/src/variable/ArrayPattern.js.html', '100 %1/1');
         test('file/test/fixture/package/src/variable/Definition.js.html', '100 %1/1');
         test('file/test/fixture/package/src/variable/ObjectPattern.js.html', '100 %1/1');
         test('file/test/fixture/package/src/version/Class.js.html', '100 %4/4');
         test('file/test/fixture/package/src/version/Function.js.html', '100 %1/1');
         test('file/test/fixture/package/src/version/Variable.js.html', '100 %1/1');

         Util.assert.equal(count, 120);
      });
   });
});
