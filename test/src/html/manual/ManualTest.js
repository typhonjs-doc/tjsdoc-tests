import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html', 'menu', (target) =>
{
   /** @test {ManualDocBuilder} */
   describe(`test manual (${target.name}):`, () =>
   {
      describe('test navigation', () =>
      {
         let doc;

         before(() =>
         {
            doc = Util.readDoc(target, 'manual/index.html');
         });

         /** @test {ManualDocBuilder#_buildManualNav} */
         it('has manual navigation', () =>
         {
            Util.find(doc, '[data-ice="nav"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(1)',
                'Overview Feature Homepage License Author');

               Util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(2)', 'Design Concept Architecture Model');

               Util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(3)',
                'Installation indent 2 indent 3 indent 4 indent 5');

               Util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(4)', 'Tutorial');

               Util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(5)',
                'Usage Usage2 h2 in usage2 h3 in usage2');

               Util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(6)', 'Configuration');

               Util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(7)', 'Advanced');

               Util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(8)',
                'Example Minimum Config Integration Test Code Into Documentation');

               Util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(9)', 'FAQ Goal');

               Util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(10)', 'Changelog 0.0.1');

               // overview
               Util.find(doc, '[data-ice="manual"]:nth-of-type(1)', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(1) a', 'manual/overview/overview.html',
                   'href');

                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(2) a',
                   'manual/overview/overview.html#feature', 'href');

                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(3) a',
                   'manual/overview/overview.html#homepage', 'href');

                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(4) a',
                   'manual/overview/overview.html#license', 'href');

                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(5) a',
                   'manual/overview/overview.html#author', 'href');
               });

               // design
               Util.find(doc, '[data-ice="manual"]:nth-of-type(2)', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(1) a',
                   'manual/design/design.html', 'href');

                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(2) a',
                   'manual/design/design.html#concept', 'href');

                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(3) a',
                   'manual/design/design.html#architecture', 'href');

                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(4) a',
                   'manual/design/design.html#model', 'href');
               });

               // installation
               Util.find(doc, '[data-ice="manual"]:nth-of-type(3)', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(1) a',
                   'manual/installation/installation.html', 'href');

                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(2) a',
                   'manual/installation/installation.html#indent-2', 'href');

                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(3) a',
                   'manual/installation/installation.html#indent-3', 'href');

                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(4) a',
                   'manual/installation/installation.html#indent-4', 'href');

                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(5) a',
                   'manual/installation/installation.html#indent-5', 'href');
               });

               // tutorial
               Util.find(doc, '[data-ice="manual"]:nth-of-type(4)', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(1) a', 'manual/tutorial/tutorial.html',
                   'href');
               });

               // usage
               Util.find(doc, '[data-ice="manual"]:nth-of-type(5)', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(1) a', 'manual/usage/usage1.html',
                   'href');

                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(2) a', 'manual/usage/usage2.html',
                   'href');

                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(3) a',
                   'manual/usage/usage2.html#h2-in-usage2', 'href');

                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(4) a',
                   'manual/usage/usage2.html#h3-in-usage2', 'href');
               });

               // configuration
               Util.find(doc, '[data-ice="manual"]:nth-of-type(6)', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(1) a',
                   'manual/configuration/configuration.html', 'href');
               });

               // advanced
               Util.find(doc, '[data-ice="manual"]:nth-of-type(7)', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(1) a', 'manual/advanced/advanced.html',
                   'href');
               });

               // example
               Util.find(doc, '[data-ice="manual"]:nth-of-type(8)', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(1) a', 'manual/example/example.html',
                   'href');

                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(2) a',
                   'manual/example/example.html#minimum-config', 'href');

                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(3) a',
                   'manual/example/example.html#integration-test-code-into-documentation', 'href');
               });

               // faq
               Util.find(doc, '[data-ice="manual"]:nth-of-type(9)', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(1) a', 'manual/faq/faq.html', 'href');
               });

               // changelog
               Util.find(doc, '[data-ice="manual"]:nth-of-type(10)', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(1) a',
                   'manual/changelog/CHANGELOG.html', 'href');

                  Util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(2) a',
                   'manual/changelog/CHANGELOG.html#001', 'href');
               });
            });
         });
      });

      /** @test {ManualDocBuilder#_buildManualIndex} */
      describe('test each heading tags', () =>
      {
         let doc;

         before(() =>
         {
            doc = Util.readDoc(target, 'manual/index.html');
         });

         it('has overview heading tags', () =>
         {
            Util.find(doc, '.manual-card-wrap:nth-of-type(1)', (doc) =>
            {
               Util.assert.includes(doc, 'h1[data-ice="label"]', 'Overview');
               Util.assert.includes(doc, '.manual-card > a', 'manual/overview/overview.html', 'href');
            });
         });

         it('has design heading tags', () =>
         {
            Util.find(doc, '.manual-card-wrap:nth-of-type(2)', (doc) =>
            {
               Util.assert.includes(doc, 'h1[data-ice="label"]', 'Design');
               Util.assert.includes(doc, '.manual-card > a', 'manual/design/design.html', 'href');
            });
         });

         it('has installation heading tags', () =>
         {
            Util.find(doc, '.manual-card-wrap:nth-of-type(3)', (doc) =>
            {
               Util.assert.includes(doc, 'h1[data-ice="label"]', 'Installation');
               Util.assert.includes(doc, '.manual-card > a', 'manual/installation/installation.html', 'href');
            });
         });

         it('has tutorial heading tags', () =>
         {
            Util.find(doc, '.manual-card-wrap:nth-of-type(4)', (doc) =>
            {
               Util.assert.includes(doc, 'h1[data-ice="label"]', 'Tutorial');
               Util.assert.includes(doc, '.manual-card > a', 'manual/tutorial/tutorial.html', 'href');
            });
         });

         it('has usage heading tags', () =>
         {
            Util.find(doc, '.manual-card-wrap:nth-of-type(5)', (doc) =>
            {
               Util.assert.includes(doc, 'h1[data-ice="label"]', 'Usage');
               Util.assert.includes(doc, '.manual-card > a', 'manual/usage/usage1.html', 'href');
            });
         });

         it('has usage2 heading tags', () =>
         {
            Util.find(doc, '.manual-card-wrap:nth-of-type(6)', (doc) =>
            {
               Util.assert.includes(doc, 'h1[data-ice="label"]', 'Usage2');
               Util.assert.includes(doc, '.manual-card > a', 'manual/usage/usage2.html', 'href');
            });
         });

         it('has configuration heading tags', () =>
         {
            Util.find(doc, '.manual-card-wrap:nth-of-type(7)', (doc) =>
            {
               Util.assert.includes(doc, 'h1[data-ice="label"]', 'Configuration');
               Util.assert.includes(doc, '.manual-card > a', 'manual/configuration/configuration.html', 'href');
            });
         });

         it('has advanced heading tags', () =>
         {
            Util.find(doc, '.manual-card-wrap:nth-of-type(8)', (doc) =>
            {
               Util.assert.includes(doc, 'h1[data-ice="label"]', 'Advanced');
               Util.assert.includes(doc, '.manual-card > a', 'manual/advanced/advanced.html', 'href');
            });
         });

         it('has example heading tags', () =>
         {
            Util.find(doc, '.manual-card-wrap:nth-of-type(9)', (doc) =>
            {
               Util.assert.includes(doc, 'h1[data-ice="label"]', 'Example');
               Util.assert.includes(doc, '.manual-card > a', 'manual/example/example.html', 'href');
            });
         });

         it('has faq heading tags', () =>
         {
            Util.find(doc, '.manual-card-wrap:nth-of-type(10)', (doc) =>
            {
               Util.assert.includes(doc, 'h1[data-ice="label"]', 'FAQ');
               Util.assert.includes(doc, '.manual-card > a', 'manual/faq/faq.html', 'href');
            });
         });

         it('has changelog heading tags', () =>
         {
            Util.find(doc, '.manual-card-wrap:nth-of-type(11)', (doc) =>
            {
               Util.assert.includes(doc, 'h1[data-ice="label"]', 'Changelog');
               Util.assert.includes(doc, '.manual-card > a', 'manual/changelog/CHANGELOG.html', 'href');
            });
         });
      });

      /** @test {ManualDocBuilder#_buildManual} */
      describe('test each manual', () =>
      {
         it('has overview', () =>
         {
            const doc = Util.readDoc(target, 'manual/overview/overview.html');

            Util.assert.includes(doc, '.markdown h1', 'Overview');

            Util.assert.includes(doc, '.markdown [data-ice="content"]',
             'TJSDoc is a documentation generator for JavaScript (ES6+) & Typescript.');
         });

         it('has installation', () =>
         {
            const doc = Util.readDoc(target, 'manual/installation/installation.html');

            Util.assert.includes(doc, '.markdown h1', 'Installation');
            Util.assert.includes(doc, '.markdown [data-ice="content"]', 'npm install tjsdoc');
         });

         it('has usage', () =>
         {
            const doc = Util.readDoc(target, 'manual/usage/usage1.html');

            Util.assert.includes(doc, '.markdown h1:nth-of-type(1)', 'Usage');
            Util.assert.includes(doc, '.markdown [data-ice="content"]', 'tjsdoc -c .tjsdocrc');
         });

         it('has tutorial', () =>
         {
            const doc = Util.readDoc(target, 'manual/tutorial/tutorial.html');

            Util.assert.includes(doc, '.markdown h1', 'Tutorial');
            Util.assert.includes(doc, '.markdown [data-ice="content"]', 'this is tutorial');
         });

         it('has configuration', () =>
         {
            const doc = Util.readDoc(target, 'manual/configuration/configuration.html');

            Util.assert.includes(doc, '.markdown h1', 'Configuration');
            Util.assert.includes(doc, '.markdown [data-ice="content"]', 'this is configuration');
         });

         it('has example', () =>
         {
            const doc = Util.readDoc(target, 'manual/example/example.html');

            Util.assert.includes(doc, '.markdown h1', 'Example');
            Util.assert.includes(doc, '.markdown [data-ice="content"] h2:nth-of-type(1)', 'Minimum Config');
         });

         it('has faq', () =>
         {
            const doc = Util.readDoc(target, 'manual/faq/faq.html');

            Util.assert.includes(doc, '.markdown h1', 'FAQ');
            Util.assert.includes(doc, '.markdown [data-ice="content"]', 'TJSDoc has several goals:');
         });

         it('has changelog', () =>
         {
            const doc = Util.readDoc(target, 'manual/changelog/CHANGELOG.html');

            Util.assert.includes(doc, '.markdown h1', 'Changelog');
            Util.assert.includes(doc, '.markdown [data-ice="content"] h2:nth-of-type(1)', '0.0.1');
         });
      });
   });
});
