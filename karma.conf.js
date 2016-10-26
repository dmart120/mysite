module.exports = function (config) {
    config.set({

        //base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '.',

        //frameworks to use
        frameworks: ['jasmine'],

        //list of files / patterns to load in the browser
        files: [
            {pattern: 'app/**', included: true}
        ]
    })
};