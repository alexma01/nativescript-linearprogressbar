# NativeScript Linear Progress Bar

A NativeScript plugin that provides a widget to implement a linear progress bar, inspired by [Google Material Design](https://www.google.com/design/spec/components/progress-activity.html#progress-activity-types-of-indicators#).<br />
The ios implemention uses [Philippe Boisney's linear progress bar ](https://github.com/PhilippeBoisney/LinearProgressBar#).

## Installation
- `tns plugin add nativescript-linearprogressbar`

## Vanilla NativeScript
### XML
```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd" loaded="pageLoaded" class="page"
  xmlns:Bar="nativescript-linearprogressbar">
  <StackLayout>
    <Bar:Linearprogressbar indeterminate="true" />
  </StackLayout>
</Page>
```

## Angular NativeScript
```TS
import { registerElement } from 'nativescript-angular/element-registry';

registerElement('LinearProgressBar', () => require('nativescript-linearprogressbar').Linearprogressbar);
```


```XML
<LinearProgressBar indeterminate="true">
</LinearProgressBar>
```

## Attributes

* **indeterminate** - *[boolean] if true, the bar will load indeterminately*
* **barColor** - *[string] sets the loading bar color with an hexadecimal color code*

## Version
1.0


## Author
slanca (npmdroid(@)gmail.com)