/// <reference types="react" />
import { Status } from './constants';
import { AppQueue, AppJob } from '../../@types/app';
interface QueueProps {
    queue: AppQueue;
    selectedStatus: Status;
    selectStatus: (statuses: Record<string, Status>) => void;
    cleanAllDelayed: () => Promise<void>;
    cleanAllFailed: () => Promise<void>;
    cleanAllCompleted: () => Promise<void>;
    retryAll: () => Promise<void>;
    retryJob: (job: AppJob) => () => Promise<void>;
    cleanJob: (job: AppJob) => () => Promise<void>;
    promoteJob: (job: AppJob) => () => Promise<void>;
}
export declare const Queue: ({ cleanAllDelayed, cleanAllFailed, cleanAllCompleted, queue, retryAll, retryJob, cleanJob, promoteJob, selectedStatus, selectStatus, }: QueueProps) => JSX.Element;
export {};
