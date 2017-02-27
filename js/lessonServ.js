angular.module('directivePractice')
    .service('lessonServ', function($http) {

        this.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

        this.getSchedule = function() {
            return $http.get('../schedule.json')
        }

        this.putCheck = function(checked){
            if(checked){
                $('.stripped').css('text-decoration','line-through')
            }else {
                $('.stripped').css('text-decoration','none')
            }
        }

        this.hideShow = function(){
            $('.hide').fadeToggle();
            $('.stripped').show(0);
        }
    })
