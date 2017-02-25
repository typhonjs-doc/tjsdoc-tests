import DocDB      from 'tjsdoc-runtime-common/src/doc/utils/DocDB.js';
import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

if (testConfig.category.doc && testConfig.doc.tests.tagsKnown)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@_known} */
      describe('test known tags', () =>
      {
         const docDB = new DocDB(Util.readJSON(target, 'docData.json'));

         it('has known tags (@abstract / TestAbstractDefinition#method1).', () =>
         {
            const doc = docDB.find(
             { longname: 'test/fixture/package/src/abstract/Definition.js~TestAbstractDefinition#method1' })[0];

            Util.assert.isArray(doc.tagsKnown);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@abstract'), 0);
         });

         it('has known tags (@deprecated / TestDeprecatedClass).', () =>
         {
            const doc = docDB.find({ name: 'TestDeprecatedClass' })[0];

            Util.assert.isArray(doc.tagsKnown);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@deprecated'), 0);
         });

         it('has known tags (@desc / TestDescClass).', () =>
         {
            const doc = docDB.find({ name: 'TestDescClass' })[0];

            Util.assert.isArray(doc.tagsKnown);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@desc' &&
             tag.tagValue === 'this is TestDescClass.'), 0);
         });

         it('has known tags (@emits / testEmitsFunction).', () =>
         {
            const doc = docDB.find({ name: 'testEmitsFunction' })[0];

            Util.assert.isArray(doc.tagsKnown);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@emits' &&
             tag.tagValue === '{TestEmitsFunctionEvent}'), 0);
         });

         it('has known tags (@example / TestExampleCaption).', () =>
         {
            const doc = docDB.find({ name: 'TestExampleCaption' })[0];

            Util.assert.isArray(doc.tagsKnown);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@example' &&
             tag.tagValue === '<caption>this is caption</caption>\nconst foo = 123;\nconsole.log(foo);'), 0);
         });

         it('has known tags (@experimental / TestExperimentalClass).', () =>
         {
            const doc = docDB.find({ name: 'TestExperimentalClass' })[0];

            Util.assert.isArray(doc.tagsKnown);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@experimental' &&
             tag.tagValue === 'this is experimental'), 0);
         });

         it('has known tags (@extends / TextExplicitMixin).', () =>
         {
            const doc = docDB.find({ name: 'TextExplicitMixin' })[0];

            Util.assert.isArray(doc.tagsKnown);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@extends' &&
             tag.tagValue === '{TestExplicitMixin1}'), 0);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@extends' &&
             tag.tagValue === '{TestExplicitMixin2}'), 0);
         });

         it('has known tags (@external / TestExternalDefinition).', () =>
         {
            const doc = docDB.find({ name: 'TestExternalDefinition' })[0];

            Util.assert.isArray(doc.tagsKnown);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@external' &&
             tag.tagValue === '{TestExternalDefinition} http://example.com'), 0);
         });

         it('has known tags (@ignore / Property.js~foo).', () =>
         {
            const doc = docDB.find({ longname: 'test/fixture/package/src/computed/Property.js~foo' })[0];

            Util.assert.isArray(doc.tagsKnown);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@ignore'), 0);
         });

         it('has known tags (@interface / TestInterfaceDefinition).', () =>
         {
            const doc = docDB.find({ name: 'TestInterfaceDefinition' })[0];

            Util.assert.isArray(doc.tagsKnown);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@interface'), 0);
         });

         it('has known tags (@implements / TestInterfaceImplements).', () =>
         {
            const doc = docDB.find({ name: 'TestInterfaceImplements' })[0];

            Util.assert.isArray(doc.tagsKnown);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@implements' &&
             tag.tagValue === '{TestInterfaceDefinition}'), 0);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@implements' &&
             tag.tagValue === '{TestInterfaceImplementsInner}'), 0);
         });

         it('has known tags (@listens / Function.js~testListensFunction).', () =>
         {
            const doc = docDB.find({ longname: 'test/fixture/package/src/listens/Function.js~testListensFunction' })[0];

            Util.assert.isArray(doc.tagsKnown);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@listens' &&
             tag.tagValue === '{TestListensFunctionEvent}'), 0);
         });

         it('has known tags (@override / Override.js~TestAbstractOverride#method1).', () =>
         {
            const doc = docDB.find(
             { longname: 'test/fixture/package/src/abstract/Override.js~TestAbstractOverride#method1' })[0];

            Util.assert.isArray(doc.tagsKnown);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@override'), 0);
         });

         it('has known tags (@param / Array.js~TestDestructuringArray#method1).', () =>
         {
            const doc = docDB.find(
             { longname: 'test/fixture/package/src/destructuring/Array.js~TestDestructuringArray#method1' })[0];

            Util.assert.isArray(doc.tagsKnown);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@param' &&
             tag.tagValue === '{number[]} p - this is p.'), 0);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@param' &&
             tag.tagValue === '{number} p[0] - this is first of p.'), 0);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@param' &&
             tag.tagValue === '{number} p[1] - this is second of p.'), 0);
         });

         it('has known tags (@public / TestAccessClassPublic).', () =>
         {
            const doc = docDB.find({ name: 'TestAccessClassPublic' })[0];

            Util.assert.isArray(doc.tagsKnown);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@public'), 0);
         });

         it('has known tags (@property / Variable.js~testExportVariable1).', () =>
         {
            const doc = docDB.find(
             { longname: 'test/fixture/package/src/export/Variable.js~testExportVariable1' })[0];

            Util.assert.isArray(doc.tagsKnown);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@property' &&
             tag.tagValue === '{number} p1 - this is p1.'), 0);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@property' &&
             tag.tagValue === '{string[]} p2 - this is p2.'), 0);
         });

         it('has known tags (@protected / TestAccessClassProtected).', () =>
         {
            const doc = docDB.find({ name: 'TestAccessClassProtected' })[0];

            Util.assert.isArray(doc.tagsKnown);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@protected'), 0);
         });

         it('has known tags (@private / TestAccessClassPrivate).', () =>
         {
            const doc = docDB.find({ name: 'TestAccessClassPrivate' })[0];

            Util.assert.isArray(doc.tagsKnown);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@private'), 0);
         });

         it('has known tags (@return / TestExponentiationOperatorDefinition#method1).', () =>
         {
            const doc = docDB.find(
            {
               longname: 'test/fixture/package/src/exponentiationoperator/Definition.js~'
                + 'TestExponentiationOperatorDefinition#method1'
            })[0];

            Util.assert.isArray(doc.tagsKnown);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex(
             (tag) => tag.tagName === '@return' && tag.tagValue === '{number}'), 0);
         });

         it('has known tags (@returns / Definition.js~TestJSXDefinition#method1).', () =>
         {
            const doc = docDB.find(
             { longname: 'test/fixture/package/src/jsx/Definition.js~TestJSXDefinition#method1' })[0];

            Util.assert.isArray(doc.tagsKnown);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex(
             (tag) => tag.tagName === '@returns' && tag.tagValue === '{string}'), 0);
         });

         it('has known tags (@see / Variable.js~testExportVariable7).', () =>
         {
            const doc = docDB.find({ longname: 'test/fixture/package/src/export/Variable.js~testExportVariable7' })[0];

            Util.assert.isArray(doc.tagsKnown);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@see' &&
             tag.tagValue === 'https://github.com/typhonjs-node-tjsdoc/tjsdoc'), 0);
         });

         it('has known tags (@since / TestSinceClass).', () =>
         {
            const doc = docDB.find({ name: 'TestSinceClass' })[0];

            Util.assert.isArray(doc.tagsKnown);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@since' && tag.tagValue === '1.2.3'), 0);
         });

         it('has known tags (@throws / Function.js~testThrowsFunction).', () =>
         {
            const doc = docDB.find({ longname: 'test/fixture/package/src/throws/Function.js~testThrowsFunction' })[0];

            Util.assert.isArray(doc.tagsKnown);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@throws' &&
             tag.tagValue === '{TestThrowsFunctionError}'), 0);
         });

         it('has known tags (@typedef / Typedef.js~TestTypeTypedefInner).', () =>
         {
            const doc = docDB.find({ longname: 'test/fixture/package/src/type/Typedef.js~TestTypeTypedefInner' })[0];

            Util.assert.isArray(doc.tagsKnown);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@typedef' &&
             tag.tagValue === '{Object} TestTypeTypedefInner'), 0);
         });

         it('has known tags (@todo / TestClassPropertyDefinition).', () =>
         {
            const doc = docDB.find({ name: 'TestClassPropertyDefinition' })[0];

            Util.assert.isArray(doc.tagsKnown);
            Util.assert.isAtLeast(doc.tagsKnown.findIndex((tag) => tag.tagName === '@todo' &&
             tag.tagValue === 'test `Access`, `Deprecated`, `Desc`, `Duplication`, `Example`, `Experimental`, `Guess`, '
              + '`Ignore`, `Link`, `See`, `Since`, `Todo` and `Version`.'), 0);
         });

         it('has known tags (@type / Property.js~TestAccessProperty#p1).', () =>
         {
            const doc = docDB.find(
             { longname: 'test/fixture/package/src/access/Property.js~TestAccessProperty#p1' })[0];

            Util.assert.isArray(doc.tagsKnown);

            Util.assert.isAtLeast(
             doc.tagsKnown.findIndex((tag) => tag.tagName === '@type' && tag.tagValue === '{number}'), 0);
         });

         it('has known tags (@version / TestVersionClass).', () =>
         {
            const doc = docDB.find({ name: 'TestVersionClass' })[0];

            Util.assert.isArray(doc.tagsKnown);

            Util.assert.isAtLeast(
             doc.tagsKnown.findIndex((tag) => tag.tagName === '@version' && tag.tagValue === '1.2.3'), 0);
         });
      });
   }
}
