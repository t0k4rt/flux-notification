"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationActions = exports.NotificationStore = undefined;

var _NotificationActions2 = require('./NotificationActions');

var _NotificationActions3 = _interopRequireDefault(_NotificationActions2);

var _NotificationStore2 = require('./NotificationStore');

var _NotificationStore3 = _interopRequireDefault(_NotificationStore2);

var _fluxDatastore = require('flux-datastore');

var _NotificationRecord = require('./NotificationRecord');

var _flux = require('flux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _flux.Dispatcher();

var NotificationConstants = new _fluxDatastore.Constants("error", {
  create: "create",
  delete: "delete",
  dismiss: "dismiss",
  dismissAll: "dismiss_all"
});

var d = new _flux.Dispatcher();
var _NotificationStore = new _NotificationStore3.default(_NotificationRecord.NotificationRecord, NotificationConstants, d);
var _NotificationActions = new _NotificationActions3.default(NotificationConstants, d);

exports.default = {
  NotificationStore: _NotificationStore,
  NotificationActions: _NotificationActions
};
exports.NotificationStore = _NotificationStore;
exports.NotificationActions = _NotificationActions;