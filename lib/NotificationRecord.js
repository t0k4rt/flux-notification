"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.levels = exports.NotificationRecord = undefined;

var _fluxDatastore = require('flux-datastore');

var levels = {
  EMERGENCY: 'emergency',
  ALERT: 'alert',
  CRITICAL: 'critical',
  ERROR: 'error',
  WARNING: 'warning',
  NOTICE: 'notice',
  INFO: 'info',
  DEBUG: 'debug'
};

var NotificationRecord = new _fluxDatastore.Record({ level: levels.DEBUG, message: null, context: {}, ttl: 4000 });

exports.NotificationRecord = NotificationRecord;
exports.levels = levels;
exports.default = NotificationRecord;