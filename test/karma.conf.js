'use strict';
// Karma configuration

module.exports = function karmaConfig(config) {
    config.set({

        // The base path is one level up since this file is in ./test/
        // If your karma.conf.js is in your project root, your basePath should
        // be './'
        basePath: '../',

        frameworks: ['jspm', 'jasmine'],

        jspm: {
            loadFiles: ['test/**/*.spec.js'],
            serveFiles: ['src/**/*.js']
        },

        preprocessors: {
            'src/**/*.js': ['babel'],
            'test/unit/*.js': ['babel']
        },

        proxies: {
            '/test/': '/base/test/',
            '/src/': '/base/src/',
            '/jspm_packages/': '/base/jspm_packages/'
        },

        browsers: ['PhantomJS'],

        reporters: ['progress'],

        singleRun: true,

        colors: true,

        exclude: [],

        logLevel: config.LOG_INFO

    });
};
