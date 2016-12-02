/*
 * grunt-contrib-CDN-usemin
 * https://github.com/levincao1/grunt-contrib-CDN-usemin
 *
 * Copyright (c) 2014 levin
 * Licensed under the MIT license.
 */

'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            grunt: {
                src: ['Gruntfile.js']
            },
            core: {
                src: ['lib/**/*.js', 'tasks/*.js']
            },
            test: {
                src: ['test/**/*.js', '!test/temp/**/*.js', '!test/fixtures/*.js']
            }
        },

        jscs: {
            options: {
                config: '.jscsrc'
            },
            grunt: {
                src: ['<%= jshint.grunt.src %>']
            },
            core: {
                src: ['<%= jshint.core.src %>']
            },
            test: {
                src: ['<%= jshint.test.src %>']
            }
        },

        mochacli: {
            all: ['test/test-*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-mocha-cli');

    grunt.loadTasks('tasks');

    grunt.registerTask('default', ['jshint', 'jscs', 'mochacli']);
    grunt.registerTask('test', 'default');
};
