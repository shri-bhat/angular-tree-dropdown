/**
 * Created by Shripad on 2015-Nov-17.
 */
 
angular.module('App',['tree.dropdown']).controller('treeDropdownCtrl', treeDropdownCtrl);

function treeDropdownCtrl() {
    var ctrl = this;
    
    ctrl.treeData = [
    	{
            "id": 1,
    		"name": "Option 1",
    		"children": [
    			{
                    "id": 2,
    				"name": "Option 1.1",
    				"children": [
    					{
                            "id": 3,
		    				"name": "Option 1.1.1",
		    			},
                        {
                            "id": 4,
                            "name": "Option 1.1.2",
                        }
    				]
    			}
    		]
    	},
        {
            "id": 5,
            "name": "Option 2",
            "children": [
                {
                    "id": 6,
                    "name": "Option 2.1",
                    "children": [
                        {
                            "id": 7,
                            "name": "Option 2.1.1",
                        },
                        {
                            "id": 8,
                            "name": "Option 2.1.2",
                        }
                    ]
                }
            ]
        }
    ]

    // Set default selected...
    ctrl.selected = ctrl.treeData[0];
    

    ctrl.update = function (){
        ctrl.treeData = [
            {
                "id": 1,
                "name": "Level 1",
            },
            {
                "id": 5,
                "name": "Level 2",
            }
        ]
        ctrl.selected = ctrl.treeData[0];
    }
}