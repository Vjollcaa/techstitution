Highcharts.chart('container', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Fluksi në pikat kufitare gjatë vitit 2017'
    },
    subtitle: {
        text: 'Burimi: QKMK - Kosovë'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Vonesa (minuta)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Vërmicë',
        data: [8, 3, 2, 4, 2, 3, 7, 10, 8, 4, 3, 10]
    }, {
        name: 'Merdarë',
        data: [60, 30, 8, 5, 2, 20, 46, 30, 8, 8, 10, 120]
    }, {
        name: 'Jarinje',
        data: [6, 4, 2, 2, 2, 15, 20, 15, 8, 2, 2, 20]
    }, {
        name: 'Dheu i Bardhë',
        data: [6, 3, 2, 3, 5, 16, 17, 5, 2, 3, 3, 30]
    }, {
        name: 'Hani i Elezit',
        data: [5, 2, 3, 2, 2, 15, 17, 18, 2, 2, 3, 12]
    }, {
        name: 'Pikat tjera...',
        data: [3, 2, 3, 2, 3, 4, 7, 6, 2, 2, 2, 10]
    }]
});
