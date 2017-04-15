import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'extends', (target) =>
{
   /**
    * @test {ClassDoc#@extends}
    * @test {ClassDocBuilder#_buildInheritedSummaryHTML}
    */
   describe(`test deep extends (${target.name}):`, () =>
   {
      describe('TestExtendsDeepSquare', () =>
      {
         const doc = Util.readDoc(target,
          'class/test/fixture/package/src/extends/Deep.js~TestExtendsDeepSquare.html');

         it('has extends chain.', () =>
         {
            Util.find(doc, '.self-detail [data-ice="extendsChain"]', (doc) =>
            {
               Util.assert.includes(doc, null,
                'TestExtendsDeepShape → TestExtendsDeepRectangle → TestExtendsDeepSquare');

               Util.assert.includes(doc, 'a[href$="Array"]', 'Array');

               Util.assert.includes(doc,
                'a[href="class/test/fixture/package/src/extends/Deep.js~TestExtendsDeepShape.html"]',
                 'TestExtendsDeepShape');

               Util.assert.includes(doc,
                'a[href="class/test/fixture/package/src/extends/Deep.js~TestExtendsDeepRectangle.html"]',
                 'TestExtendsDeepRectangle');
            });
         });

         it('has super^1 class methods and more.', () =>
         {
            Util.findParent(doc, '[data-ice="inheritedSummary"] a[href$="TestExtendsDeepRectangle.html"]',
             '[data-ice="summary"]', (doc) =>
            {
               Util.assert.includes(doc, 'thead', 'From class TestExtendsDeepRectangle');
               Util.assert.includes(doc, 'thead a',
                'class/test/fixture/package/src/extends/Deep.js~TestExtendsDeepRectangle.html',
                  'href');

               Util.assert.includes(doc, 'a[href$="#static-classmethod-get-staticValueRectangle"]', 'staticValueRectangle');
               Util.assert.includes(doc, 'a[href$="#static-classmethod-set-staticValueRectangle"]', 'staticValueRectangle');
               Util.assert.includes(doc, 'a[href$="#static-classmember-staticPRectangle"]', 'staticPRectangle');
               Util.assert.includes(doc, 'a[href$="#static-classmethod-staticMethodRectangle"]', 'staticMethodRectangle');

               Util.assert.includes(doc, 'a[href$="#instance-classmethod-get-valueRectangle"]', 'valueRectangle');
               Util.assert.includes(doc, 'a[href$="#instance-classmethod-set-valueRectangle"]', 'valueRectangle');
               Util.assert.includes(doc, 'a[href$="#instance-classmember-pRectangle"]', 'pRectangle');
               Util.assert.includes(doc, 'a[href$="#instance-classmethod-methodRectangle"]', 'methodRectangle');
            });
         });

         it('has super^2 class methods and more.', () =>
         {
            Util.findParent(doc, '[data-ice="inheritedSummary"] a[href$="TestExtendsDeepShape.html"]',
             '[data-ice="summary"]', (doc) =>
            {
               Util.assert.includes(doc, 'thead', 'From class TestExtendsDeepShape');
               Util.assert.includes(doc, 'thead a',
                'class/test/fixture/package/src/extends/Deep.js~TestExtendsDeepShape.html', 'href');

               Util.assert.includes(doc, 'a[href$="#static-classmethod-get-staticValueShape"]', 'staticValueShape');
               Util.assert.includes(doc, 'a[href$="#static-classmethod-set-staticValueShape"]', 'staticValueShape');
               Util.assert.includes(doc, 'a[href$="#static-classmember-staticPShape"]', 'staticPShape');
               Util.assert.includes(doc, 'a[href$="#static-classmethod-staticMethodShape"]', 'staticMethodShape');

               Util.assert.includes(doc, 'a[href$="#instance-classmethod-get-valueShape"]', 'valueShape');
               Util.assert.includes(doc, 'a[href$="#instance-classmethod-set-valueShape"]', 'valueShape');
               Util.assert.includes(doc, 'a[href$="#instance-classmember-pShape"]', 'pShape');
               Util.assert.includes(doc, 'a[href$="#instance-classmethod-methodShape"]', 'methodShape');
            });
         });
      });

      describe('TestExtendsDeepRectangle', () =>
      {
         const doc = Util.readDoc(target,
          'class/test/fixture/package/src/extends/Deep.js~TestExtendsDeepRectangle.html');

         it('has direct subclass.', () =>
         {
            Util.find(doc, '.self-detail [data-ice="directSubclass"]', (doc) =>
            {
               Util.assert.includes(doc,
                'a[href="class/test/fixture/package/src/extends/Deep.js~TestExtendsDeepSquare.html"]',
                 'TestExtendsDeepSquare');
            });
         });
      });

      describe('TestExtendsDeepShape', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/extends/Deep.js~TestExtendsDeepShape.html');

         it('has direct subclass.', () =>
         {
            Util.find(doc, '.self-detail [data-ice="directSubclass"]', (doc) =>
            {
               Util.assert.includes(doc,
                'a[href="class/test/fixture/package/src/extends/Deep.js~TestExtendsDeepRectangle.html"]',
                 'TestExtendsDeepRectangle');
            });
         });

         it('has indirect subclass.', () =>
         {
            Util.find(doc, '.self-detail [data-ice="indirectSubclass"]', (doc) =>
            {
               Util.assert.includes(doc,
                'a[href="class/test/fixture/package/src/extends/Deep.js~TestExtendsDeepSquare.html"]',
                 'TestExtendsDeepSquare');
            });
         });
      });
   });
});
