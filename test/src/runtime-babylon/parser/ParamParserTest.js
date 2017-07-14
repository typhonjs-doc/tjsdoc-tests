import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('runtime_babylon', 'parser', (target) =>
{
   const PluginManager = require('typhonjs-plugin-manager');
   const testEventbus = require('backbone-esnext-eventbus').testEventbus;

   /** @test {ParamParser} */
   describe(`ParamParser (${target.name}):`, () =>
   {
      let pluginManager;

      before(async () =>
      {
         pluginManager = new PluginManager({ eventbus: testEventbus });

         await pluginManager.addAsync({ name: target.runtime });
      });

      after(async () => { await pluginManager.destroyAsync(); testEventbus.off(); });

      /** @test {ParamParser#parseParamValue} */
      it('parse param value.', () =>
      {
         const value = '{number} p1 this is desc';

         const { typeText, paramName, paramDesc } = testEventbus.triggerSync('tjsdoc:system:parser:param:value:parse',
          value);

         Util.assert.equal(typeText, 'number');
         Util.assert.equal(paramName, 'p1');
         Util.assert.equal(paramDesc, 'this is desc');
      });

      /** @test {ParamParser#parseParamValue} */
      it('parse param value with hyphen prefix.', () =>
      {
         const value = '{number} p1 - this is desc';

         const { typeText, paramName, paramDesc } = testEventbus.triggerSync('tjsdoc:system:parser:param:value:parse',
          value);

         Util.assert.equal(typeText, 'number');
         Util.assert.equal(paramName, 'p1');
         Util.assert.equal(paramDesc, 'this is desc');
      });

      /** @test {ParamParser#parseParamValue} */
      it('parse param value without param name', () =>
      {
         const value = '{number} this is desc';

         const { typeText, paramDesc } = testEventbus.triggerSync('tjsdoc:system:parser:param:value:parse', value,
          { type: true, name: false, desc: true });

         Util.assert.equal(typeText, 'number');
         Util.assert.equal(paramDesc, 'this is desc');
      });

      /** @test {ParamParser#parseParamValue} */
      it('parse param value without param desc', () =>
      {
         const value = '{number} p1';

         const { typeText, paramName } = testEventbus.triggerSync('tjsdoc:system:parser:param:value:parse', value,
          { type: true, name: true, desc: false });

         Util.assert.equal(typeText, 'number');
         Util.assert.equal(paramName, 'p1');
      });

      /** @test {ParamParser#parseParamValue} */
      it('parse param value with complex', () =>
      {
         const value = '{!(number|string|boolean[])} [p1=10] this is desc';

         const { typeText, paramName, paramDesc } = testEventbus.triggerSync('tjsdoc:system:parser:param:value:parse',
          value);

         Util.assert.equal(typeText, '!(number|string|boolean[])');
         Util.assert.equal(paramName, '[p1=10]');
         Util.assert.equal(paramDesc, 'this is desc');
      });

      /** @test {ParamParser#parseParam} */
      /** @test {ParamParser#parseParamValue} */
      /** @test {ParamParser#parseParamFromValue} */
      it('parse param.', () =>
      {
         const value = '{number} p1 this is desc';

         const result = testEventbus.triggerSync('tjsdoc:system:parser:param:from:value:parse',
          testEventbus.triggerSync('tjsdoc:system:parser:param:value:parse', value));

         Util.assert.deepEqual(result, {
            nullable: null,
            types: ['number'],
            spread: false,
            optional: false,
            name: 'p1',
            description: 'this is desc'
         });

         const result2 = testEventbus.triggerSync('tjsdoc:system:parser:param:parse', value);

         Util.assert.deepEqual(result2, {
            nullable: null,
            types: ['number'],
            spread: false,
            optional: false,
            name: 'p1',
            description: 'this is desc'
         });
      });

      /** @test {ParamParser#parseParam} */
      /** @test {ParamParser#parseParamValue} */
      /** @test {ParamParser#parseParamFromValue} */
      it('parse param with complex.', () =>
      {
         const value = '{?(number|string|boolean[])} [p1] this is desc';

         const result = testEventbus.triggerSync('tjsdoc:system:parser:param:from:value:parse',
          testEventbus.triggerSync('tjsdoc:system:parser:param:value:parse', value));

         Util.assert.deepEqual(result, {
            nullable: true,
            types: ['number', 'string', 'boolean[]'],
            spread: false,
            optional: true,
            name: 'p1',
            description: 'this is desc'
         });

         const result2 = testEventbus.triggerSync('tjsdoc:system:parser:param:parse', value);

         Util.assert.deepEqual(result2, {
            nullable: true,
            types: ['number', 'string', 'boolean[]'],
            spread: false,
            optional: true,
            name: 'p1',
            description: 'this is desc'
         });
      });

      /** @test {ParamParser#parseParamValue} */
      /** @test {ParamParser#parseParamFromValue} */
      it('parse param with object ({}) as default.', () =>
      {
         const value = '{!(number|string|boolean[])} [p1={}] this is desc';

         const result = testEventbus.triggerSync('tjsdoc:system:parser:param:from:value:parse',
          testEventbus.triggerSync('tjsdoc:system:parser:param:value:parse', value));

         Util.assert.deepEqual(result, {
            nullable: false,
            types: ['number', 'string', 'boolean[]'],
            spread: false,
            optional: true,
            name: 'p1',
            description: 'this is desc',
            defaultValue: '{}',
            defaultRaw: {}
         });

         const result2 = testEventbus.triggerSync('tjsdoc:system:parser:param:from:value:parse',
          testEventbus.triggerSync('tjsdoc:system:parser:param:value:parse', value));

         Util.assert.deepEqual(result2, {
            nullable: false,
            types: ['number', 'string', 'boolean[]'],
            spread: false,
            optional: true,
            name: 'p1',
            description: 'this is desc',
            defaultValue: '{}',
            defaultRaw: {}
         });
      });

      /** @test {ParamParser#parseParamValue} */
      /** @test {ParamParser#parseParamFromValue} */
      it('parse param with complex.', () =>
      {
         const value = '{...number} [p1=[10,20,30]] this is desc';

         const result = testEventbus.triggerSync('tjsdoc:system:parser:param:from:value:parse',
          testEventbus.triggerSync('tjsdoc:system:parser:param:value:parse', value));

         Util.assert.deepEqual(result, {
            nullable: null,
            types: ['...number'],
            spread: true,
            optional: true,
            name: 'p1',
            description: 'this is desc',
            defaultValue: '[10,20,30]',
            defaultRaw: [10, 20, 30]
         });

         const result2 = testEventbus.triggerSync('tjsdoc:system:parser:param:from:value:parse',
          testEventbus.triggerSync('tjsdoc:system:parser:param:value:parse', value));

         Util.assert.deepEqual(result2, {
            nullable: null,
            types: ['...number'],
            spread: true,
            optional: true,
            name: 'p1',
            description: 'this is desc',
            defaultValue: '[10,20,30]',
            defaultRaw: [10, 20, 30]
         });
      });

      /** @test {ParamParser#parseParamValue} */
      /** @test {ParamParser#parseParamFromValue} */
      it('parse param even if description has {}.', () =>
      {
         const value = '{number} p1 foo {a: number} bar';

         const result = testEventbus.triggerSync('tjsdoc:system:parser:param:from:value:parse',
          testEventbus.triggerSync('tjsdoc:system:parser:param:value:parse', value));

         Util.assert.deepEqual(result, {
            nullable: null,
            types: ['number'],
            spread: false,
            optional: false,
            name: 'p1',
            description: 'foo {a: number} bar'
         });

         const result2 = testEventbus.triggerSync('tjsdoc:system:parser:param:from:value:parse',
          testEventbus.triggerSync('tjsdoc:system:parser:param:value:parse', value));

         Util.assert.deepEqual(result2, {
            nullable: null,
            types: ['number'],
            spread: false,
            optional: false,
            name: 'p1',
            description: 'foo {a: number} bar'
         });
      });

      /** @test {ParamParser#parseParam} */
      /** @test {ParamParser#parseParamValue} */
      /** @test {ParamParser#parseParamFromValue} */
      it('throws error when empty type.', () =>
      {
         const value = '{} foo bar';

         try
         {
            testEventbus.triggerSync('tjsdoc:system:parser:param:from:value:parse',
             testEventbus.triggerSync('tjsdoc:system:parser:param:value:parse', value));
         }
         catch (err)
         {
            Util.assert.equal(err.message, 'Empty Type found name=foo desc=bar');

            return;
         }

         try
         {
            testEventbus.triggerSync('tjsdoc:system:parser:param:parse', value);
         }
         catch (err)
         {
            Util.assert.equal(err.message, 'Empty Type found name=foo desc=bar');

            return;
         }

         Util.assert(false);
      });
   });
});
