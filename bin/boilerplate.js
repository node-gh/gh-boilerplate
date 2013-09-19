#!/usr/bin/env node

/*
 * Copyright 2013, All Rights Reserved.
 *
 * Code licensed under the BSD License:
 * https://github.com/node-gh/gh/blob/master/LICENSE.md
 *
 * @author Author <email@email.com>
 */

// -- Environment --------------------------------------------------------------
var GH_PATH = process.env.GH_PATH;

// -- Requires -----------------------------------------------------------------
var logger = require(GH_PATH + 'lib/logger');

// -- Constructor --------------------------------------------------------------
function Boilerplate(options) {
    this.options = options;
}

// -- Constants ----------------------------------------------------------------
Boilerplate.DETAILS = {
    alias: 'bo',
    commands: [
        'foo'
    ],
    description: 'Plugin example. Copy to start a new plugin.',
    options: {
        'foo': Boolean
    },
    shorthands: {
        'f': [ '--foo' ]
    },
    payload: function(payload, options) {
        options.foo = true;
    }
};

// -- Commands -----------------------------------------------------------------
Boilerplate.prototype.run = function() {
    var instance = this,
        options = instance.options;

    if (options.foo) {
        logger.log(instance.foo());
    }
};

Boilerplate.prototype.foo = function() {
    return 'NodeGH plugin boilerplate :)';
};

exports.Impl = Boilerplate;