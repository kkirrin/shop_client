"use strict";
exports.__esModule = true;
exports.$catalogMenuIsOpen = exports.$menuIsOpen = exports.closeCatalogMenu = exports.openCatalogMenu = exports.closeMenu = exports.openMenu = void 0;
var effector_1 = require("effector");
var modals = effector_1.createDomain();
exports.openMenu = modals.createEvent();
exports.closeMenu = modals.createEvent();
exports.openCatalogMenu = modals.createEvent();
exports.closeCatalogMenu = modals.createEvent();
exports.$menuIsOpen = modals
    .createStore(false)
    .on(exports.openMenu, function () { return true; })
    .on(exports.closeMenu, function () { return false; });
exports.$catalogMenuIsOpen = modals
    .createStore(false)
    .on(exports.openCatalogMenu, function () { return true; })
    .on(exports.closeCatalogMenu, function () { return false; });
