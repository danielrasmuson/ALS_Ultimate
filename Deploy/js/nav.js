function NavCtrl($scope) {
    function getYPos(id) {
            var obj = document.getElementById(id);
            var p = {};
            p.x = obj.offsetLeft;
            p.y = obj.offsetTop;
            while (obj.offsetParent) {
                p.x = p.x + obj.offsetParent.offsetLeft;
                p.y = p.y + obj.offsetParent.offsetTop;
                if (obj == document.getElementsByTagName("body")[0]) {
                    break;
                }
                else {
                    obj = obj.offsetParent;
                }
            }
            return p.y;
    }

    // if you change th css you have to change it here too
    $scope.NAV_BAR_HEIGHT = 84;

    $scope.navBar = [{
                        "left":20,
                        "id":"slide-2",
                        "text":"Tournament"
                    },
                    {
                        "left":185,
                        "id":"slide-3",
                        "text":"The Cause"
                    },
                    {
                        "left":330,
                        "id":"slide-4",
                        "text":"Donations"
                    },
                    {
                        "left":480,
                        "id":"slide-5",
                        "text":"Sponsors"
                    },
                    {
                        "left":623,
                        "id":"slide-6",
                        "text":"Sign Up"
                    },
                    {
                        "left":775,
                        "id":"slide-7",
                        "text":"About Us"
                    }];
    $scope.navDisc = {"left":$scope.navBar[0].left};
    $scope.navClick = function(nav){
        $scope.navDisc.left = nav.left;

        var scrollY = getYPos(nav.id);
        scrollY -= $scope.NAV_BAR_HEIGHT;
        window.scrollTo(0,scrollY);
    }
    function getPageNumber(y){
        // what this function is doing return y ranges
        // if 0 < y < 1000 --> return 0
        // if 1001 < y < 2000 --> return 1
        // if 2001 < y < 3000 --> return 2
        // etc...
        var currentY;
        var nextY;

        nextY = getYPos($scope.navBar[1].id);
        if (y < nextY){
            return 0; 
        }
        for (var i = 2; i < $scope.navBar.length; i++) {
            currentY = getYPos($scope.navBar[i-1].id);
            nextY = getYPos($scope.navBar[i].id);
            if (y > currentY && y < nextY){
                return i-1; 
            }
        };
        return $scope.navBar.length-1; 
    }
    $(window).scroll(function() {
        if (document.getElementsByClassName('loading').length === 0){
            // todo make 84 and 85 header size
            var scrollHeight = $(window).scrollTop()+$scope.NAV_BAR_HEIGHT+1;

            // move the disc to the current page
            $scope.navDisc.left = $scope.navBar[getPageNumber(scrollHeight)].left; 
            $scope.$apply();
            return;
        }
    });
} 
