<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Create a SlideAlive Presentation</title>

    <script src="js/angular.min.js"></script>

    <script>
        function TodoCtrl($scope) {
            $scope.navBar = {"one":{"left":20},
                            "two":{"left":185},
                            "three":{"left":330},
                            "four":{"left":480},
                            "five":{"left":623},
                            "six":{"left":775}};
            $scope.navDisc = {"left":$scope.navBar.one.left};
        } 
    </script>


</head>

<body ng-app>
  <style>
    body{
        padding: 0;
        margin: 0;
    }
    nav{
        position: relative;
    }
    nav #disc {
        position: absolute;
        width: 45px;
        top: 0;
        /*todo get this to rotate as it moves*/
/*        -webkit-animation: rotation .3s infinite linear;
        rotation: .3s infinite linear;
*/       
        -webkit-transition: all 0.7s ease-out;
        transition: all 0.7s ease-out;
    }
    nav #bar{
        margin-top: 5px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
    nav ul{
        list-style-type: none;
        padding-left: 0; 
    }
    nav li{
        display: inline-block;
        width: 30px;
        height: 30px;
        margin-top: 6px;
        z-index: 3;
        position: absolute;

        /*todo: have this 3 places right now*/
        top: -60px;
    }
    </style>
<div ng-controller="TodoCtrl">
  
    <div id="header" style="position: relative; width: 140px;">
        <img src="../images/logoBanner.png" alt="" style="display: block;">
        <nav style="postition: absolute; float: right;">
            <ul>
                <li id="{{nav}}" style="left: {{nav.left}}px" ng-repeat="nav in navBar" ng-click="navDisc.left = nav.left"></li>
            </ul>
            <img src="images/bar.png" alt="" id="bar" style="top: -60px;">
            <img src="images/disc.png" alt="" id="disc" style="left: {{navDisc.left}}px; top: -60px;">
        </nav>
    </div>

</div>


</body>

</html>
