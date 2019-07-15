window.onload = function (){
var ctx = document.getElementById('thechart').getContext('2d');
var chart = new Chart(ctx,{
    type: 'line',

    // The data for our dataset
    data:{
        labels: ['1996', '1999', '2002', '2005', '2008', '2011', '2014', '2017'],
        
        datasets: [
            
        {label: 'drugs',
            fill: false,
            borderColor: '#FFA500',
            data: [37.52, 34.98, 29.61, 20.3, 14.77, 12.73, 16.19, 17.41]},
            
        {label: 'alcohol',
            fill: false,
            borderColor: '#F08080',
            data: [89.74, 90.2, 89.79, 89.55, 85.88, 73.23, 71.56, 65.54]},
        {label: 'smoking',
            fill: false,
            borderColor: '#20B2AA',
            data: [16.9, 16.3, 14.1, 5.7, 5.6, 3.3, 2.5, 0.9]}]
    }, 

    // The Config Options
    options:
    {responsive: true,
    maintainAspectRatio: false,
    scales: {yAxes: [{ticks: {beginAtZero:true}}]}}

});}