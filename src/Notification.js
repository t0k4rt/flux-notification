"use strict";

import NotificationActions from './NotificationActions';
import NotificationStore from './NotificationStore';
import { Constants } from 'flux-datastore';
import { NotificationRecord, levels } from './NotificationRecord';
import { Dispatcher } from "flux";

export default new Dispatcher();

let NotificationConstants= new Constants("error", {
  create: "create",
  delete: "delete",
  dismiss: "dismiss",
  dismissAll: "dismiss_all"
});

let d = new Dispatcher();
let _NotificationStore =  new NotificationStore(NotificationRecord, NotificationConstants, d);
let _NotificationActions = new NotificationActions(NotificationConstants, d);

export default {
  NotificationStore: _NotificationStore,
  NotificationActions: _NotificationActions
};

export { _NotificationStore as NotificationStore, _NotificationActions as NotificationActions };

