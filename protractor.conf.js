const
    { ConsoleReporter } = require('@serenity-js/console-reporter'),
    { ArtifactArchiver } = require('@serenity-js/core'),
    { Photographer, TakePhotosOfInteractions } = require('@serenity-js/protractor'),
    { SerenityBDDReporter } = require('@serenity-js/serenity-bdd'),
    isCI = require('is-ci');

exports.config = {

    chromeDriver: require(`chromedriver/lib/chromedriver`).path,

    SELENIUM_PROMISE_MANAGER: false,

    directConnect: true,

    allScriptsTimeout: 110000,

    framework:      'custom',
    frameworkPath:  require.resolve('@serenity-js/protractor/adapter'),

    specs: [ 'features/**/*.feature' ],

    serenity: {
        runner: 'cucumber',
        crew: [
            ArtifactArchiver.storingArtifactsAt('./target/site/serenity'),
            ConsoleReporter.forDarkTerminals(),
            Photographer.whoWill(TakePhotosOfInteractions),     // or Photographer.whoWill(TakePhotosOfFailures),
            new SerenityBDDReporter(),
        ]
    },

    /**
     * If you're interacting with a non-Angular application,
     * uncomment the below onPrepare section,
     * which disables Angular-specific test synchronisation.
     */
     onPrepare: function() {
         browser.waitForAngularEnabled(false);
         var width = 1000;
         var height = 1000;
         browser.driver.manage().window().setSize(width, height);
         browser.manage().timeouts().implicitlyWait(5000)
     },

    cucumberOpts: {
        require: [ 'features/**/*.ts'],
        'require-module':   [ 'ts-node/register'],
        strict:  false
    },

    capabilities: {
        browserName: 'chrome',

        loggingPrefs: {
            browser: 'SEVERE' // "OFF", "SEVERE", "WARNING", "INFO", "CONFIG", "FINE", "FINER", "FINEST", "ALL".
        },

        chromeOptions: {
            args: [
                '--no-sandbox',
                '--disable-infobars',
                '--disable-dev-shm-usage',
                '--disable-extensions',
                '--log-level=3',
                '--disable-gpu',
                '--headless'
            ].concat(isCI ? ['--headless'] : [])    // run in headless mode on the CI server
        }
    }
};