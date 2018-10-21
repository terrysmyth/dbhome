angular.module("myApp", [])

var app = angular.module("myApp", ["ngRoute", 'firebase', "ui.router", "simditor"]);

app.directive('navbar', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/navbar.html'
    }
});

app.directive('filter', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/filter.html'
    }
});

app.directive('eat', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/subcats/eat.html'
    }
});

app.directive('ferry', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/ferry.html'
    }
});

app.directive('airport', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/airport.html'
    }
});

app.directive('categories', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/categories.html'
    }
});

app.directive('spa', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/subcats/spa.html'
    }
});

app.directive('health', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/subcats/health.html'
    }
});

app.directive('kidsedu', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/subcats/kidsedu.html'
    }
});

app.directive('kidssport', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/subcats/kidssport.html'
    }
});

app.directive('photo', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/subcats/photo.html'
    }
});

app.directive('adultsedu', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/subcats/adultsedu.html'
    }
});

app.directive('adultssport', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/subcats/adultssport.html'
    }
});

app.directive('uploadphoto', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/uploadPhoto.html'
    }
});

app.config(function($stateProvider) {
    var home = {
        name: 'home',
        url: 'home',
        templateUrl: 'home.html'
    }
    var selectedCompany = {
        name: 'selectedCompany',
        url: 'selectedCompany',
        templateUrl: 'selectedCompany.html'
    }
  
    
    $stateProvider.state(home);
    $stateProvider.state(selectedCompany);
});

app.config(function($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "home.html",
        })
        .when("/account", {
            templateUrl: "account.html",
        })
        .when("/signin", {
            templateUrl: "signin.html",
        })
        .when("/admin", {
            templateUrl: "admin.html",
        })
        .when("/selectedCompany", {
            templateUrl: "selectedCompany.html",
        })
        .when("/super", {
            templateUrl: "super.html",
        })
        .when("/categories", {
            templateUrl: "categories.html",
        })
        .when("/category", {
            templateUrl: "category.html",
        })
        .when("/contact", {
            templateUrl: "contact.html",
        })
        .when("/thankyou", {
            templateUrl: "thankyou.html",
        })
        .when("/newsLanding", {
            templateUrl: "newsLanding.html",
        })
        .when("/news", {
            templateUrl: "news.html",
        })
        .when("/addStory", {
            templateUrl: "addStory.html",
        })
        .when("/property", {
            templateUrl: "property.html",
        })
        .otherwise({
            redirectTo: '/home'
        });
});



