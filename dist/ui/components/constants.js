"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATUSES = {
    latest: 'latest',
    active: 'active',
    waiting: 'waiting',
    completed: 'completed',
    failed: 'failed',
    delayed: 'delayed',
    paused: 'paused',
};
exports.FIELDS = {
    active: ['attempts', 'data', 'id', 'name', 'progress', 'opts', 'timestamps'],
    completed: ['attempts', 'data', 'id', 'name', 'opts', 'timestamps'],
    delayed: [
        'attempts',
        'data',
        'delay',
        'id',
        'name',
        'opts',
        'promote',
        'timestamps',
        'clean',
    ],
    failed: [
        'attempts',
        'failedReason',
        'data',
        'opts',
        'id',
        'name',
        'retry',
        'timestamps',
        'clean',
    ],
    latest: ['attempts', 'data', 'id', 'name', 'opts', 'timestamps'],
    paused: ['attempts', 'data', 'id', 'name', 'opts', 'timestamps'],
    waiting: ['data', 'id', 'name', 'opts', 'timestamps', 'clean'],
};
//# sourceMappingURL=constants.js.map