angular.module('directivePractice')
    .controller('lessonCtrl', function($scope, lessonServ) {

        $scope.lessons = lessonServ.lessons;

        $scope.announceDay = function(lesson, day){
            alert(lesson+" is active on "+day+'.')
        }

        $scope.getChecked = function(checked){
            lessonServ.putCheck(checked)
        }

        $scope.hideShow = function(){
            lessonServ.hideShow();
        }

    })
