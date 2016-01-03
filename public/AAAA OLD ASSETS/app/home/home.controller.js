(function() {
    'use strict';

    angular
    .module('home')
    .controller('HomeController', HomeController);

    /**
     * Controller for the home page
     * @constructor
     */
    function HomeController($http) {
        var vm = this;
        vm.loadApiData = loadApiData;

        vm.loadApiData();

        /**
        * Load the data from the api data from the database with api request
        */
        function loadApiData() {
            $http({
                method: 'GET',
                url: '/api/savingsideas/SavingsProjectDesc IdeaSavingsAmount'
            }).then(
                function successCallback(response) {
                    //After successful callback create the three charts
                    createTheThreeCharts(response);
                },
                function errorCallback() {
                    console.error('Error with ajax request!!');
                }
            );
        }

        /**
         * Create three charts from single apidata
         * @param {object} apidata the data for the charts in JSON formatted for google charts
         */
        function createTheThreeCharts(apidata) {
            var chart1 = {};
            var chart2 = {};
            var chart3 = {};
            chart1.type = 'LineChart';
            chart2.type = 'BarChart';
            chart3.type = 'PieChart';

            chart1.data = apidata.data;
            console.log(chart1.data);

            chart1.options = {title:'SavingsProjectDesc',
                width: 400,
                height: 300,
                is3D: true,
                legend: 'bottom',
                backgroundColor: 'transparent'
            };

            chart2.data = chart1.data;
            chart3.data = chart1.data;
            chart2.options = chart1.options;
            chart3.options = chart1.options;

            chart1.formatters = {};
            chart2.formatters = {};
            chart3.formatters = {};

            vm.lineChart = chart1;
            vm.barChart = chart2;
            vm.pieChart = chart3;
        }
    }

})();
