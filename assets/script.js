/*global document, console, window, Chart */
/*eslint no-console: "off"*/
"use strict";

var setup = {
    type: 'line',

    // The data
    data: {
        labels: ['1996', '1999', '2002', '2005', '2008', '2011', '2014', '2017'],

        datasets: [

            {
                label: 'drugs',
                fill: false,
                borderColor: '#FFA500',
                data: [37.52, 34.98, 29.61, 20.3, 14.77, 12.73, 16.19, 17.41]
            },

            {
                label: 'alcohol',
                fill: false,
                borderColor: '#F08080',
                data: [89.74, 90.2, 89.79, 89.55, 85.88, 73.23, 71.56, 65.54]
            },
            {
                label: 'smoking',
                fill: false,
                borderColor: '#20B2AA',
                data: [16.9, 16.3, 14.1, 5.7, 5.6, 3.3, 2.5, 0.9]
            }]
    },

    // The Config Options
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }


};
var canvas = document.getElementById('thechart');
var ctx = canvas.getContext('2d');

var mychart = new Chart(ctx, setup);
//dataset index
// 0 = drugs
// 1 = alcohol
// 2 = smoking

// do this when you click a data point
canvas.onclick = function (itemClickedOn) {
    var activeItem = mychart.getElementAtEvent(itemClickedOn);
    var link = '';
    console.log('active item:', activeItem[0]._datasetIndex);
    var datasetIndex = activeItem[0]._datasetIndex;
    if (datasetIndex === 0) {
        console.log('drugs');
        link = 'https://beta.health.gov.au/sites/default/files/secondary-school-students-use-of-tobacco-alcohol-and-other-drugs-in-2017_0.pdf';
    } else if (datasetIndex === 1) {
        console.log('alcohol');
        link = 'http://darta.net.au/category/new-research-and-statistics/';
    } else if (datasetIndex === 2) {
        console.log('smoking');
        link = 'https://www.tobaccoinaustralia.org.au/chapter-1-prevalence/1-6-prevalence-of-smoking-teenagers/';
    }
    
    window.open(link, '_blank');

};
