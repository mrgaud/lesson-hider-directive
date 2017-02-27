angular.module('directivePractice')
    .directive('lessonHider', function() {
        return {
            templateUrl: '../views/lessonHider.html',
            restrict: "E",
            link: function(scope, ele, attrs) {
                scope.getSchedule.then(function(response) {
                    scope.schedule = response.data


                    scope.schedule.forEach(function(scheduleDay) {
                        if (scheduleDay.lesson === scope.lesson) {
                            ele.addClass('stripped');
                            scope.lessonDay = scheduleDay.weekday;
                            return;
                        }else{
                            ele.addClass('hide')
                        }
                    });
                })


            },
            scope: {
                lesson: '=',
                test: '=',
                dayAlert: '&',
                checked: '='
            },
            controller: function($scope, lessonServ) {
                $scope.getSchedule = lessonServ.getSchedule()
            }
        }
    })
// css('text-decoration', 'line-through')
