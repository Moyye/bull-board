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
    active: ['attempts', 'data', 'name', 'opts', 'timestamps'],
    completed: ['attempts', 'data', 'name', 'opts', 'timestamps', 'clean'],
    delayed: [
        'attempts',
        'data',
        'delay',
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
        'name',
        'retry',
        'timestamps',
        'clean',
    ],
    latest: ['attempts', 'data', 'name', 'opts', 'timestamps'],
    paused: ['attempts', 'data', 'name', 'opts', 'timestamps'],
    waiting: ['data', 'name', 'opts', 'timestamps', 'clean'],
};
//# sourceMappingURL=constants.js.map