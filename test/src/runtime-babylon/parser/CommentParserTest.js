import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('runtime_babylon', 'parser', (target) =>
{
   const PluginManager = require('typhonjs-plugin-manager');
   const testEventbus = require('backbone-esnext-eventbus').testEventbus;

   /** @test {CommentParser} */
   describe(`CommentParser (${target.name}):`, () =>
   {
      let pluginManager;

      before(() =>
      {
         pluginManager = new PluginManager({ eventbus: testEventbus });

         pluginManager.add({ name: target.runtime });
      });

      after(() => { pluginManager.destroy(); testEventbus.off(); });

      /** @test {CommentParser.parse} */
      it('can parse doc comment.', () =>
      {
         const value = `*
   * this is desc.
   * @tag1
   * @tag2 tag2 value
   * @tag3 tag3 value
   * tag3 second value
   *
   * @tag4 tag4 value
   *
   `;
         const comment = { type: 'CommentBlock', value };
         const tags = testEventbus.triggerSync('tjsdoc:system:parser:comment:parse', comment);

         Util.assert.equal(tags.length, 5);
         Util.assert.deepEqual(tags[0], { tagName: '@desc', tagValue: 'this is desc.' });
         Util.assert.deepEqual(tags[1], { tagName: '@tag1', tagValue: '' });
         Util.assert.deepEqual(tags[2], { tagName: '@tag2', tagValue: 'tag2 value' });
         Util.assert.deepEqual(tags[3], { tagName: '@tag3', tagValue: 'tag3 value\ntag3 second value' });
         Util.assert.deepEqual(tags[4], { tagName: '@tag4', tagValue: 'tag4 value' });
      });

      /** @test {CommentParser.parse} */
      it('can parse doc comments with trailing tabs', () =>
      {
         const value = `*
   \t* this is desc.
   \t* @tag1
   \t* @tag2 tag2 value
   \t* @tag3 tag3 value
   \t* tag3 second value
   \t*
   \t* @tag4 tag4 value
   \t*
   `;
         const comment = { type: 'CommentBlock', value };
         const tags = testEventbus.triggerSync('tjsdoc:system:parser:comment:parse', comment);

         Util.assert.equal(tags.length, 5);
         Util.assert.deepEqual(tags[0], { tagName: '@desc', tagValue: 'this is desc.' });
         Util.assert.deepEqual(tags[1], { tagName: '@tag1', tagValue: '' });
         Util.assert.deepEqual(tags[2], { tagName: '@tag2', tagValue: 'tag2 value' });
         Util.assert.deepEqual(tags[3], { tagName: '@tag3', tagValue: 'tag3 value\ntag3 second value' });
         Util.assert.deepEqual(tags[4], { tagName: '@tag4', tagValue: 'tag4 value' });
      });

      /** @test {CommentParser.isCommentNode} */
      it('return empty with non doc comment.', () =>
      {
         const value = `\
   this is not doc comment.
   `;
         const comment = { type: 'CommentBlock', value };
         const tags = testEventbus.triggerSync('tjsdoc:system:parser:comment:parse', comment);

         Util.assert.equal(tags.length, 0);
      });

      /** @test {CommentParser.parse} */
      it('return empty with line comment.', () =>
      {
         const value = `this is line comment.`;
         const comment = { type: 'CommentLine', value };
         const tags = testEventbus.triggerSync('tjsdoc:system:parser:comment:parse', comment);

         Util.assert.equal(tags.length, 0);
      });
   });
});
