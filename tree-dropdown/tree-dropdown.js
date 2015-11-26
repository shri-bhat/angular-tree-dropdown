/**
 * Created by Shripad on 2015-Nov-17.
 */

angular.module('tree.dropdown', []).directive('treeDropdown', treeDropdown);

treeDropdown.$inject = ['$compile'];

function treeDropdown($compile){
    var template = "<div class='select' ng-click='openTree()'><p>{{selected.name}}</p></div>";
    template += "<div class='list' ng-show='isOpen'></div>";

    return {
        restrict: 'E',
        scope: {
            data: '=',
            selected: '='
        },
        
        template: template,
        controller: function($scope, $element){
            ctrl = $scope;
            ctrl.isOpen = false;

            ctrl.openTree = function(){
                ctrl.isOpen = ctrl.isOpen? false:true;
            }

            ctrl.childClick = function(obj){
                setSelected(ctrl, obj);
                ctrl.isOpen = false;
                ctrl.$apply();
            }
        },
        link: function(scope, element, attrs, ngModel) {
            var list =  angular.element(element[0].querySelector('.list'));

            scope.$watchGroup(['data', 'selected'], function(newValues, oldValues, scope) {
                list.html('');
    
                if(!scope.selected){
                    setSelected (scope, null);
                }
                var options = getOptions(scope, scope.data, 0);
                list.append($compile(options)(scope));
            });

            // Close on click outside the dropdown...            
            angular.element(document).bind('click', function(event){
                if (element !== event.target && !element[0].contains(event.target)) {
                    scope.$apply(function(){
                        scope.isOpen = false;
                    })
                }
            });
        }
    };

    function getOptions(scope, data, level){

        var optionUL = angular.element("<ul></ul>");

        angular.forEach(data, function(obj){
            var optionLI = angular.element("<li></li>");
            var optionA = angular.element("<p ng-class='{selected:selected.id=="+obj.id+"}' class='level-"+level+"'>"+obj.name+"</p>");
            optionLI.append(optionA);

            // Set selected option if selected id or object exist..
            if(scope.selected==obj){
                setSelected (scope, obj);
            }

            optionA.bind("click", function(){
                scope.childClick(obj);
            })

            if(obj.children){
                optionLI.append(getOptions(scope, obj.children, level+1));
            }
            optionUL.append(optionLI);
        })

        return optionUL;
    }

    function setSelected(scope, obj){
        if(obj){
            scope.selected = obj;
        } else {
            scope.selected = null;
        }
    }
}