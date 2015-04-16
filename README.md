#Kendo IE fix

##ng-disabled changes does not change DropDownList to enabled in IE9
Added a directive watching ng-change attribute for changes and manually enable or disable Kendo DropDownList. Only in IE9!

#Installation
You can install `kendo-ie-fix` as a bower dependency:

`bower install kendo-ie-fix`

#Usage
First add `AngularJS` to your HTML file. `AngularJS` have to be loaded before `kendo-ie-fix`.
Make sure you require kendo-ie-fix as a dependency of your AngularJS module. 

#Changelog
0.1.0 - first version

#License
[MTI license](https://github.com/i18next/ng-i18next/blob/master/LICENSE)