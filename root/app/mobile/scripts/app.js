/*
 * app: boostrapping file for the mobile client
 *
 * {%= name %}
 * {%= repository %}
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * {%= author_url %}
 */
define(function (require, exports, module) {
    'use strict';
    var _ = require('underscore');

    /*
     * Templates are defined in the client's configuration file, and will point
     * ultimately to the compiled templates this client only.
     */
    var templates = require('templates');

    /*
     * `core/controllers/app-controller` must be required before we actually do
     * anything else, to give it a chance to require and add initialisers to
     * `core/app` before any other part of our code.
     */
    var appController = require('core/controllers/app-controller');

    /*
     * Now we get a chance to add our own initializers and event handlers to
     * `core/app`, via `core/controllers/app-controller`.
     */
    appController.app.addInitializer(function, (options) {

    });
    appController.app.on('start', function (options) {

    });

    /*
     * Finally we can start the application, passing any module specific
     * configuration, as well as the correct set of templates.
     */
    appController.app.start({
      templates: templates,
      config: module.config()
    });

});