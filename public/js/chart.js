Highcharts.chart('containerChart', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Vonesa maksimale në pikën kufitare <%= doc.pikaKufitare %>'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            '<%= doc.pikaKufitare %>'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
            dataLabels: {
                enabled: true
            },
        }
    },
    series: [{
        name: 'Hyrje (minuta)',
        data: [<%= doc.hyrjeMaxMinuta %>]

    }, {
        name: 'Dalje (minuta)',
        data: [<%= doc.daljeMaxMinuta %>]

    }, {
        name: 'Hyrje - Kolona (metra)',
        data: [<%= doc.hyrjeMaxMetra %>]

    }, {
        name: 'Dalje - Kolona (metra)',
        data: [<%= doc.daljeMaxMetra %>]

    }]
});