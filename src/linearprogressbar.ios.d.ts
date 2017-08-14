import { Common } from './linearprogressbar.common';
export declare class Linearprogressbar extends Common {
    private _nativeView;
    createNativeView(): any;
    setBarColor(color: string): void;
    setIndeterminate(indeterminate: boolean): void;
}
