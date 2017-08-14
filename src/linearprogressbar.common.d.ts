import { View } from "tns-core-modules/ui/core/view";
import { Property } from 'tns-core-modules/ui/core/view';
export declare const indeterminateProperty: Property<Common, boolean>;
export declare const barColorProperty: Property<Common, string>;
export declare abstract class Common extends View {
    indeterminate: boolean;
    barColor: string;
    _setBarColor(color: string): void;
    _setIndeterminate(indeterminate: boolean): void;
    abstract setBarColor(color: string): any;
    abstract setIndeterminate(indeterminate: boolean): any;
}
