import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'autoPrivate', (target) =>
{
   /** @test {DocResolver#_resolveAccess} */
   describe(`test config.autoPrivate: false (${target.name}):`, () =>
   {
      Util.invoke(target, './test/fixture/config/tjsdoc-autoPrivate.json', { silent: testConfig.consoleSilent });

      /**
       * Helper function to change the directory when invoking `_readDoc`.
       *
       * @param {string}   filePath - Local file path to load relative to './test/fixture/dest/tjsdoc-autoPrivate'.
       *
       * @returns {*}
       */
      function readDoc(filePath)
      {
         return Util.readDoc(target, filePath, 'tjsdoc-autoPrivate');
      }

      it('treat _class as public', () =>
      {
         const doc = readDoc('class/test/fixture/package/src/access/Class.js~_TestAccessClassAutoPrivate.html');

         Util.assert.includes(doc, '.self-detail [data-ice="name"]', '_TestAccessClassAutoPrivate');
      });

      it('treat _method as public', () =>
      {
         const doc = readDoc('class/test/fixture/package/src/access/Method.js~TestAccessMethod.html');

         Util.assert.includes(doc, '#instance-method-_method4', 'public _method4()');
      });

      it('treat _member as public', () =>
      {
         const doc = readDoc('class/test/fixture/package/src/access/Property.js~TestAccessProperty.html');

         Util.assert.includes(doc, '#instance-member-_p4', 'public _p4: number');
      });

      it('treat _function as public', () =>
      {
         const doc = readDoc('function/index.html');

         Util.assert.includes(doc, '#static-function-_testAccessFunctionAutoPrivate',
          'public _testAccessFunctionAutoPrivate()');
      });

      it('treat _variable as public', () =>
      {
         const doc = readDoc('variable/index.html');

         Util.assert.includes(doc, '#static-variable-_testAccessVariableAutoPrivate',
          'public _testAccessVariableAutoPrivate: number');
      });
   });
});


