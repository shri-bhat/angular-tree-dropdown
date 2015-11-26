# Angular Tree Dropdown

Pure [AngularJS](http://www.angularjs.org/) based tree-dropdown directive.

[
![Click Here For Tree Dropdown Demo](https://dl.dropboxusercontent.com/u/58164209/Angular-Tree-Dropdown/demo-img.png)
](https://dl.dropboxusercontent.com/u/58164209/Angular-Tree-Dropdown/demo.html)

## Installation

Copy the script and css into your project and add a script and link tag to your page.

```html
<script src="tree-dropdown/tree-dropdown.js"></script>
<link rel='stylesheet' href="tree-dropdown/tree-dropdown.css" />
```

Add a dependency to your application module.

```javascript
angular.module('App', ['tree.dropdown']);
```

Add a tree-dropdown to your application. See [Usage](#usage).

## Usage

Attributes of angular tree-dropdown are below.

- tree-dropdown: the tree dropdown directive.
- data : the tree model on $scope.
- selected : selected item.

Here is an example.
```html
<tree-dropdown class="tree-dropdown" data="treeData" selected="selected"></tree-dropdown>
```

Example model:

```javascript
$scope.treeData = 
[
  { "id": 1, "name": "Option 1", "children": [
    { "id": 2, "name": "Option 1.1", "children": [
      { "id": 3, "name": "Option 1.1.1"},
      { "id": 4, "name": "Option 1.1.2"}
    ]}
  ]},
  { "id": 5, "name": "Option 2" },
  { "id": 6, "name": "Option 2.1" }
];
```

## Selection

If tree-dropdown item is selected, then that selected tree-dropdown item is saved to $scope.selected. Also default tree-dropdown item selection can be done from the $scope.selected.

The MIT License.

Copyright ⓒ 2015 Shripad Bhat

See [LICENSE](https://github.com/sphonasepal/angular-tree-dropdown/blob/master/LICENSE)
