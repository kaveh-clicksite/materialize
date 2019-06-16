window.onload = function() {
    var chart = new CanvasJS.Chart("salesChart", {
        title: {
            text: "آمار بلیط های فروخته شده در این ماه"
        },
        animationEnabled: true,
        theme: "light2",
        axisY: {
            includeZero: false
        },
        data: [{
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "line",
            showInLegend: true,
            legendText: "بلیط",
            color: "rgba(244,67,54,.7)",

            dataPoints: [
                { y: 1200 },
                { y: 1010 },
                { y: 900 },
                { y: 1300 },
                { y: 1500 },
                { y: 1380 },
                { y: 1320 },
                { y: 720 },
                { y: 810 },
                { y: 840 },
                { y: 860 },
                { y: 780 },
                { y: 600 },
                { y: 420, indexLabel: "کمترین", markerColor: "blue", markerType: "cross" },
                { y: 900 },
                { y: 1300 },
                { y: 1800, indexLabel: "بیشترین", markerColor: "blue", markerType: "triangle" },
                { y: 1502 },
                { y: 1400 },
                { y: 1000 },
                { y: 1100 },
                { y: 1120 },
                { y: 1000 },
                { y: 800 },
                { y: 1300 },
                { y: 1400 },
                { y: 1420 },
                { y: 1440 },
                { y: 1130 },
                { y: 1490 }
            ]
        }]
    });

    setTimeout(() => {
        chart.render();
    }, 2000);
}