import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'desc', (target) =>
{
   /** @test {AbstractDoc#@desc} */
   describe(`TestDescMarkdown (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'class/test/fixture/package/src/desc/Markdown.js~TestDescMarkdown.html');
      });

      describe('in self detail', () =>
      {
         it('has markdown desc.', () =>
         {
            Util.find(doc, '.self-detail [data-ice="description"]', (doc) =>
            {
               // line
               Util.assert.includes(doc.find('p:nth-child(1)'), null, 'this is TestDescMarkdown.');

               // code fence of html
               Util.assert.includes(doc.find('pre:nth-child(2) code.language-html'), null,
                `<div>text</div> <ul> <li>item1</li> <li>item2</li> <li>item3</li> </ul>`);

               // header
               Util.assert.includes(doc.find('h1#inner-link:nth-child(3)'), null, 'Inner Link');

               // list
               Util.assert.includes(doc.find('ul:nth-child(4) li:nth-child(1)'), null, 'item1');
               Util.assert.includes(doc.find('ul:nth-child(4) li:nth-child(2)'), null, 'item2');
               Util.assert.includes(doc.find('ul:nth-child(4) li:nth-child(3)'), null, 'item3');

               // link
               Util.assert.includes(doc.find('p:nth-child(5) a[href$="#inner-link"]'), null, 'inner link');

               // code fence of js
               Util.assert.includes(doc.find('pre:nth-child(6) code.language-js'), null,
                `let foo = 'this is code block'`
               );

               // table
               Util.assert.includes(doc.find('div.table-overflow:nth-child(7) table thead tr'), null,
                'Left align Right align Center align');

               Util.assert.includes(doc.find('div.table-overflow:nth-child(7) table tbody tr:nth-child(1)'), null,
                'This This This');

               Util.assert.includes(doc.find('div.table-overflow:nth-child(7) table tbody tr:nth-child(2)'), null,
                'column column column');
            });
         });
      });
   });
});
