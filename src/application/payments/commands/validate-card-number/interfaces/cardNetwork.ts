import { rangedRecord } from './rangedRecord';

export interface cardNetwork {
  length: rangedRecord;
  name: string;
  prefixes: Array<number>;
  rangedPrefixes: Array<rangedRecord>;
}
