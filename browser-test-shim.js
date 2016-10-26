(function () {
    Error.stackTraceLimit = 0; //"No stacktrace"

    //uncomment to get full stacktrace output
    //Error.stackTraceLimit = Infinity;

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 3000;

    var baseURL = document.baseURI;
    baseURL = baseURL + baseURL[baseURL.length-1] ? '' : '/';

    System.config({
        baseURL: baseURL,

        packages: {'testing': {main: 'index.js', defaultExtension: 'js'}},

        map: {
            '@angular/core/testing': '@angular/core/bundles/core-testing-umd.js',
            '@angular/common/testing': '@angular/common/bundles/common-testing.umd.js',
            '@angular/compiler/testing': '@angular/compiler/bundles/compiler-testing.umd.js',
            '@angular/platform-browser/testing': '@angular/platform-browser/bundles/platform-browser-testing.umd.js',
            '@angular/platform-browser-dynamic/testing': '@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
            '@angular/http/testing': '@angular/http/bundles/http-testing.umd.js',
            '@angular/router/testing': '@angular/router/bundles/router-testing.umd.js',
            '@angular/forms/testing': '@angular/forms/bundles/forms-testing.umd.js',
        }
    });

    System.import('system.config.js')
        .then(initTestBed)
        .then(initTesting);

    function initTestBed () {
        return Promise.all([
            System.import('@angular/core/testing'),
            System.import('@angular/platform-browser-dynamic/testing')
        ])

            .then(function (providers) {
                var coreTesting = providers[0];
                var browserTesting = providers[1];

                coreTesting.TestBed.initTestEnvironment(
                    browserTesting.BrowserDynamicTestingModule,
                    browserTesting.platformBrowserDynamicTesting()
                );
            })
    }

    function initTesting () {
        console.log('loading spec files: ' + __spec_files__.join(', '));
        return Promise.all(
            __spec_files__.map(function (spec) {
                return System.import(spec);
            })
        )
            .then(success, console.error.bind(console));

        function success () {
            console.log('Spec files loaded; starting Jasmine test runner');
            window.onload();
        }
    }
})();