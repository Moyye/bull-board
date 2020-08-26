export const STATUSES = {
  latest: 'latest',
  active: 'active',
  waiting: 'waiting',
  completed: 'completed',
  failed: 'failed',
  delayed: 'delayed',
  paused: 'paused',
}

export type Status = keyof typeof STATUSES

export type Field =
  | 'attempts'
  | 'data'
  | 'id'
  | 'name'
  | 'opts'
  | 'progress'
  | 'timestamps'
  | 'delay'
  | 'failedReason'
  | 'retry'
  | 'promote'
  | 'clean'

export const FIELDS: Record<Status, Field[]> = {
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
}
