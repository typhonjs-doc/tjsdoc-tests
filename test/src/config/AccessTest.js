import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

const s_CONFIG_NAMES = { 'babylon': true, 'default': true };

if (testConfig.category.config && testConfig.config.tests.access)
{
   for (const target of testConfig.targets)
   {
      if (s_CONFIG_NAMES[target.name])
      {
         /** @test {DocResolver#_resolveAccess} */
         describe('test config.access: ["public", "protected"]', () =>
         {
            Util.invoke(target, './test/fixture/config/tjsdoc-access.json');

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
                  Util.assert.includes(doc, '#instance-method-method1', 'public method1()');
               });

               it('have protected method', () =>
               {
                  Util.assert.includes(doc, '#instance-method-method2', 'protected method2()');
               });

               it('does not have private method', () =>
               {
                  Util.assert.throws(() =>
                  {
                     Util.assert.includes(doc, '#instance-method-method3', 'private method3()');
                  });
               });

               it('does not have auto private method', () =>
               {
                  Util.assert.throws(() =>
                  {
                     Util.assert.includes(doc, '#instance-method-_method4', 'private _method4()');
                  });
               });
            });

            describe('member', () =>
            {
               const doc = readDoc('class/test/fixture/package/src/access/Property.js~TestAccessProperty.html');

               it('have public member', () =>
               {
                  Util.assert.includes(doc, '#instance-member-p1', 'public p1: number');
               });

               it('have protected member', () =>
               {
                  Util.assert.includes(doc, '#instance-member-p2', 'protected p2: number');
               });

               it('does not have private member', () =>
               {
                  Util.assert.throws(() =>
                  {
                     Util.assert.includes(doc, '#instance-member-p3', 'private p3: number');
                  });
               });

               it('does not have auto private member', () =>
               {
                  Util.assert.throws(() =>
                  {
                     Util.assert.includes(doc, '#instance-member-_p4', 'private _p4: number');
                  });
               });
            });

            describe('function', () =>
            {
               const doc = readDoc('function/index.html');

               it('have public function', () =>
               {
                  Util.assert.includes(doc, '#static-function-testAccessFunctionPublic',
                   'public testAccessFunctionPublic()');
               });

               it('have protected function', () =>
               {
                  Util.assert.includes(doc, '#static-function-testAccessFunctionProtected',
                   'protected testAccessFunctionProtected()');
               });

               it('does not have private function', () =>
               {
                  Util.assert.throws(() =>
                  {
                     Util.assert.includes(doc, '#static-function-testAccessFunctionPrivate',
                      'testAccessFunctionPrivate()');
                  });
               });

               it('does not have auto private function', () =>
               {
                  Util.assert.throws(() =>
                  {
                     Util.assert.includes(doc, '#static-function-_testAccessFunctionAutoPrivate',
                      '_testAccessFunctionAutoPrivate()');
                  });
               });
            });


            describe('variable', () =>
            {
               const doc = readDoc('variable/index.html');

               it('have public variable', () =>
               {
                  Util.assert.includes(doc, '#static-variable-testAccessVariablePublic',
                   'public testAccessVariablePublic: number');
               });

               it('have protected variable', () =>
               {
                  Util.assert.includes(doc, '#static-variable-testAccessVariableProtected',
                   'protected testAccessVariableProtected: number');
               });

               it('does not have private variable', () =>
               {
                  Util.assert.throws(() =>
                  {
                     Util.assert.includes(doc, '#static-variable-testAccessVariablePrivate',
                      'private testAccessVariablePrivate: number');
                  });
               });

               it('does not have auto private variable', () =>
               {
                  Util.assert.throws(() =>
                  {
                     Util.assert.includes(doc, '#static-variable-_testAccessVariableAutoPrivate',
                      'private _testAccessVariableAutoPrivate: number');
                  });
               });
            });
         });
      }
   }
}
