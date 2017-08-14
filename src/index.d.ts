import { Common } from './linearprogressbar.common';
export declare class Linearprogressbar extends Common {
  // define your typings manually
  // or..
  // take the ios or android .d.ts files and copy/paste them here
  setBackgroundColor(color: string): void;
  setIndeterminate(indeterminate: boolean): void;
  setProgress(progress: number): void;
  setBarColor(color: string): void;
}
