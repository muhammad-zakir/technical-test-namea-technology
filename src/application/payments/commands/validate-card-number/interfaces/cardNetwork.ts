import { rangedRecord } from './rangedRecord';

export interface cardNetwork {
  [index: string]: {
    length: rangedRecord;
    name: string;
    prefixes: Array<number>;
    rangedPrefixes: Array<rangedRecord>;
  }
}
