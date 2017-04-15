import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

const s_CONFIG_NAMES = { 'babylon': true, 'default': true };

testConfig.forEachTarget('config', 'access', (target) =>
{
   if (s_CONFIG_NAMES[target.name])
   {
      /** @test {DocResolver#_resolveAccess} */
      describe(`test config.access: ["public", "protected"] (${target.name}):`, () =>
      {
         Util.invoke(target, './test/fixture/config/tjsdoc-access.json', { silent: testConfig.consoleSilent });

         /**
          * Helper function to change the directory when invoking `_readDoc`.
          *
          * @param {string}   filePath - Local file path to load relative to './test/fixture/dest/tjsdoc-access'.
          *
          * @returns {*}
          */
         function readDoc(filePath)
         {
            return Util.readDoc(target, filePath, 'tjsdoc-access');
         }

         describe('class', () =>
         {
            it('have public class', () =>
            {
               const doc = readDoc('class/test/fixture/package/src/access/Class.js~TestAccessClassPublic.html');
               Util.assert.includes(doc, '.self-detail [data-ice="name"]', 'TestAccessClassPublic');
            });

            it('have protected class', () =>
            {
               const doc = readDoc('class/test/fixture/package/src/access/Class.js~TestAccessClassProtected.html');
               Util.assert.includes(doc, '.self-detail [data-ice="name"]', 'TestAccessClassProtected');
            });

            it('does not have private class', () =>
            {
               Util.assert.throws(() =>
               {
                  readDoc('class/test/fixture/package/src/access/Class.js~TestAccessClassPrivate.html');
               });
            });

            it('does not have auto private class', () =>
            {
               Util.assert.throws(() =>
               {
                  readDoc('class/test/fixture/package/src/access/Class.js~_TestAccessClassAutoPrivate.html');
               });
            });
         });

         describe('method', () =>
         {
            const doc = readDoc('class/test/fixture/package/src/access/Method.js~TestAccessMethod.html');

            it('have public method', () =>
            {
               Util.assert.includes(doc, '#instance-classmethod-method1', 'public method1()');
            });

            it('have protected method', () =>
            {
               Util.assert.includes(doc, '#instance-classmethod-method2', 'protected method2()');
            });

            it('does not have private method', () =>
            {
               Util.assert.throws(() =>
               {
                  Util.assert.includes(doc, '#instance-classmethod-method3', 'private method3()');
               });
            });

            it('does not have auto private method', () =>
            {
               Util.assert.throws(() =>
               {
                  Util.assert.includes(doc, '#instance-classmethod-_method4', 'private _method4()');
               });
            });
         });

         describe('member', () =>
         {
            const doc = readDoc('class/test/fixture/package/src/access/Property.js~TestAccessProperty.html');

            it('have public member', () =>
            {
               Util.assert.includes(doc, '#instance-classmember-p1', 'public p1: number');
            });

            it('have protected member', () =>
            {
               Util.assert.includes(doc, '#instance-classmember-p2', 'protected p2: number');
            });

            it('does not have private member', () =>
            {
               Util.assert.throws(() =>
               {
                  Util.assert.includes(doc, '#instance-classmember-p3', 'private p3: number');
               });
            });

            it('does not have auto private member', () =>
            {
               Util.assert.throws(() =>
               {
                  Util.assert.includes(doc, '#instance-classmember-_p4', 'private _p4: number');
               });
            });
         });

         describe('function', () =>
         {
            const doc = readDoc('function/index.html');

            it('have public function', () =>
            {
               Util.assert.includes(doc, '#static-modulefunction-testAccessFunctionPublic',
                'public testAccessFunctionPublic()');
            });

            it('have protected function', () =>
            {
               Util.assert.includes(doc, '#static-modulefunction-testAccessFunctionProtected',
                'protected testAccessFunctionProtected()');
            });

            it('does not have private function', () =>
            {
               Util.assert.throws(() =>
               {
                  Util.assert.includes(doc, '#static-modulefunction-testAccessFunctionPrivate',
                   'testAccessFunctionPrivate()');
               });
            });

            it('does not have auto private function', () =>
            {
               Util.assert.throws(() =>
               {
                  Util.assert.includes(doc, '#static-modulefunction-_testAccessFunctionAutoPrivate',
                   '_testAccessFunctionAutoPrivate()');
               });
            });
         });


         describe('variable', () =>
         {
            const doc = readDoc('variable/index.html');

            it('have public variable', () =>
            {
               Util.assert.includes(doc, '#static-modulevariable-testAccessVariablePublic',
                'public testAccessVariablePublic: number');
            });

            it('have protected variable', () =>
            {
               Util.assert.includes(doc, '#static-modulevariable-testAccessVariableProtected',
                'protected testAccessVariableProtected: number');
            });

            it('does not have private variable', () =>
            {
               Util.assert.throws(() =>
               {
                  Util.assert.includes(doc, '#static-modulevariable-testAccessVariablePrivate',
                   'private testAccessVariablePrivate: number');
               });
            });

            it('does not have auto private variable', () =>
            {
               Util.assert.throws(() =>
               {
                  Util.assert.includes(doc, '#static-modulevariable-_testAccessVariableAutoPrivate',
                   'private _testAccessVariableAutoPrivate: number');
               });
            });
         });
      });
   }
});

