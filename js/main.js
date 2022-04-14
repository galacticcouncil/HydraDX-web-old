const $ = require('jquery');
const header = require('./modules/header');
const {Chart} = require("chart.js");

$(function () {
    header();
    // var ctx = document.getElementById("chartPic").getContext('2d');
    // const fillGradient1 = ctx.createLinearGradient(0, 0, 0, 200);
    // fillGradient1.addColorStop(0, 'rgba(91, 30, 192, 0.5)');
    // fillGradient1.addColorStop(1, 'rgba(91, 30, 192, 0.06)');
    //
    // const fillGradient2 = ctx.createLinearGradient(0, 0, 0, 300);
    // fillGradient2.addColorStop(0, 'rgba(32, 138, 215, 0.5)');
    // fillGradient2.addColorStop(1, 'rgba(32, 138, 215, 0)');
    //
    // const fillGradient3 = ctx.createLinearGradient(0, 0, 0, 200);
    // fillGradient3.addColorStop(0, 'rgba(72, 175, 182, 0.5)');
    // fillGradient3.addColorStop(1, 'rgba(72, 175, 182, 0.06)');
    //
    // const fillGradient4 = ctx.createLinearGradient(0, 0, 0, 200);
    // fillGradient4.addColorStop(0, 'rgba(233, 136, 56, 0.5)');
    // fillGradient4.addColorStop(1, 'rgba(233, 136, 56, 0.06)');
    //
    // const fillGradient5 = ctx.createLinearGradient(0, 0, 0, 200);
    // fillGradient5.addColorStop(0, 'rgba(28, 159, 21, 0.5)');
    // fillGradient5.addColorStop(1, 'rgba(28, 159, 21, 0.06)');
    //
    // const fillGradient6 = ctx.createLinearGradient(0, 0, 0, 200);
    // fillGradient6.addColorStop(0, 'rgba(232, 194, 97, 0.37)');
    // fillGradient6.addColorStop(1, 'rgba(232, 194, 97, 0)');
    //
    // const fillGradient7 = ctx.createLinearGradient(0, 0, 0, 200);
    // fillGradient7.addColorStop(0, 'rgba(160, 65, 65, 0.32)');
    // fillGradient7.addColorStop(1, 'rgba(196, 66, 61, 0)');
    //
    // const fillGradient8 = ctx.createLinearGradient(0, 0, 0, 200);
    // fillGradient8.addColorStop(0, 'rgba(30, 88, 228, 0.35)');
    // fillGradient8.addColorStop(1, 'rgba(21, 88, 229, 0)');
    // var myChart = new Chart(ctx, {
    //         type: 'scatter',
    //         data: {
    //             datasets: [
    //                 {
    //                     label: 'KSM Airdrop',
    //                     data: [{x: 0, y: 13.89}, {x: 1, y: 20.95}, {x: 5, y: 32}, {x: 9, y: 42}, {x: 10, y: 44}, {x: 15, y: 54}, {x: 20, y: 68}, {x: 24, y: 70}],
    //                     backgroundColor: fillGradient1,
    //                     borderColor: '#5B1EC0',
    //                     borderWidth: 3,
    //                     showLine: true,
    //                     fill: true,
    //                 },
    //                 {
    //                     label: 'Collators',
    //                     data: [{x: 0, y: 13.8}, {x: 1, y: 19.95}, {x: 5, y: 31}, {x: 9, y: 41.5}, {x: 10, y: 43.9}, {x: 15, y: 53}, {x: 20, y: 66}, {x: 24, y: 68}],
    //                     backgroundColor: fillGradient2,
    //                     borderColor: '#208AD7',
    //                     borderWidth: 3,
    //                     showLine: true,
    //                     fill: true
    //                 },
    //                 {
    //                     label: 'Liquidity Mining',
    //                     data: [{x: 0, y: 13.8}, {x: 1, y: 19}, {x: 5, y: 30}, {x: 10, y: 42}, {x: 15, y: 50}, {x: 20, y: 59}, {x: 24, y: 61}],
    //                     backgroundColor: fillGradient3,
    //                     borderColor: '#48AFB6',
    //                     borderWidth: 3,
    //                     showLine: true,
    //                     fill: true
    //                 },
    //                 {
    //                     label: 'Treasury',
    //                     data: [{x: 0, y: 13.8}, {x: 1, y: 18.8}, {x: 5, y: 28}, {x: 9, y: 35}, {x: 10, y: 38}, {x: 15, y: 42}, {x: 20, y: 44}, {x: 24, y: 45}],
    //                     backgroundColor: fillGradient4,
    //                     borderColor: 'rgba(233, 136, 56, 1)',
    //                     borderWidth: 3,
    //                     showLine: true,
    //                     fill: true
    //                 },
    //                 {
    //                     label: 'BSXLBP',
    //                     data: [{x: 0, y: 4}, {x: 1, y: 10}, {x: 5, y: 18}, {x: 10, y: 27}, {x: 15, y: 32}, {x: 20, y: 38.5}, {x: 24, y: 39.9}],
    //                     backgroundColor: fillGradient5,
    //                     borderColor: '#64C26F',
    //                     borderWidth: 3,
    //                     showLine: true,
    //                     fill: true
    //                 },
    //                 {
    //                     label: 'HDX Claimers',
    //                     data: [{x: 0, y: 3.8}, {x: 5, y: 16}, {x: 6, y: 16.5}, {x: 10, y: 23}, {x: 15, y: 30}, {x: 20, y: 31}, {x: 24, y: 34}],
    //                     backgroundColor: fillGradient6,
    //                     borderColor: '#E9C362',
    //                     borderWidth: 3,
    //                     showLine: true,
    //                     fill: true
    //                 },
    //                 {
    //                     label: 'Intergalactic',
    //                     data: [{x: 0, y: 3.5}, {x: 5, y: 14}, {x: 6, y: 15}, {x: 10, y: 22.5}, {x: 15, y: 28}, {x: 20, y: 28}, {x: 24, y: 30}],
    //                     backgroundColor: fillGradient7,
    //                     borderColor: '#DD4238',
    //                     borderWidth: 3,
    //                     showLine: true,
    //                     fill: true
    //                 },
    //                 {
    //                     label: 'BSX Crowdloan',
    //                     data: [{x: 0, y: 2}, {x: 5, y: 10}, {x: 6, y: 10.5}, {x: 10, y: 18}, {x: 15, y: 17.5}, {x: 20, y: 17}, {x: 24, y: 16.6}],
    //                     backgroundColor: fillGradient8,
    //                     borderColor: '#1558E5',
    //                     borderWidth: 3,
    //                     showLine: true,
    //                     fill: true
    //                 }
    //             ]
    //         },
    //         options: {
    //             responsive: false,
    //             scales: {
    //                 y: {
    //                     ticks: {
    //                         stepSize: 20,
    //                         color: 'rgba(255, 255, 255, 0.7)',
    //                         callback: function (value) {
    //                             return value.toFixed(2) + "%"
    //                         },
    //                         font: {
    //                             size: 14
    //                         }
    //                     },
    //                     grid: {
    //                         color: 'rgba(255, 255, 255, 0.2)',
    //                         borderColor: 'rgba(255, 255, 255, 0.5)'
    //                     },
    //                     min: 0,
    //                     max: 80
    //                 },
    //                 x: {
    //                     ticks: {
    //                         color: 'rgba(255, 255, 255, 0.7)',
    //                         stepSize: 5,
    //                         font: {
    //                             size: 14,
    //                             family: "'pexico', sans-serif"
    //                         }
    //                     },
    //                     grid: {
    //                         color: 'rgba(255, 255, 255, 0.2)',
    //                         borderColor: 'rgba(255, 255, 255, 0.5)'
    //                     },
    //                     min: 0,
    //                     max: 24
    //                 }
    //             },
    //             elements: {
    //                 point: {
    //                     radius: 0,
    //                     hitRadius: 10,
    //                 }
    //             },
    //             plugins: {
    //                 legend: {
    //                     display: false
    //                 }
    //             }
    //         }
    //     });
    //
    // window.onload = function () {
    //     myChart.options.scales.y.ticks.font.family = "'pexico', sans-serif";
    //     myChart.update();
    //     if (window.innerWidth < 992) {
    //         myChart.resize(700, 500);
    //         // myChart.options.plugins.legend.labels.boxWidth = 14;
    //         // myChart.options.plugins.legend.labels.boxHeight = 14;
    //         // myChart.options.plugins.legend.labels.font.size = 14;
    //         myChart.update();
    //     }
    //
    //     if (window.innerWidth < 768) {
    //         myChart.options.plugins.legend.position = 'bottom';
    //         myChart.resize(460, 500);
    //         myChart.update();
    //     }
    //
    //     if (window.innerWidth < 500) {
    //         myChart.resize(400, 400);
    //     }
    //
    //     if (window.innerWidth < 400) {
    //         myChart.resize(300, 300);
    //     }
    // }
    //
    // window.onresize = function () {
    //     if (window.innerWidth < 992) {
    //         myChart.resize(700, 500);
    //         // myChart.options.plugins.legend.labels.boxWidth = 14;
    //         // myChart.options.plugins.legend.labels.boxHeight = 14;
    //         // myChart.options.plugins.legend.labels.font.size = 14;
    //         myChart.update();
    //     } else {
    //         // myChart.options.plugins.legend.position = 'right';
    //         myChart.resize(840, 440);
    //         myChart.update();
    //         // myChart.options.plugins.legend.labels.boxWidth = 16;
    //         // myChart.options.plugins.legend.labels.boxHeight = 16;
    //         // myChart.options.plugins.legend.labels.font.size = 16;
    //     }
    //
    //     if (window.innerWidth < 768) {
    //         myChart.options.plugins.legend.position = 'bottom';
    //         myChart.resize(460, 500);
    //         myChart.update();
    //     }
    //
    //     if (window.innerWidth < 500) {
    //         myChart.resize(400, 400);
    //     }
    //
    //     if (window.innerWidth < 400) {
    //         myChart.resize(300, 300);
    //     }
    // }

    window.onload = function () {
        const contributeElHeight = $(document.getElementById('contributeEl')).outerHeight();
        const footerElHeight = $(document.getElementById('footer')).outerHeight();
        // const headerElHeight = $(document.querySelector('header')).outerHeight();
        const errorBody = $(document.getElementById('errorBody'));
        if (errorBody) {
            errorBody.css('min-height', `calc(100vh - (${contributeElHeight}px + ${footerElHeight}px))`);
            // errorBody.css('padding-top', `${headerElHeight}px`)
        }
    }

    window.onresize = function () {
        const contributeElHeight = $(document.getElementById('contributeEl')).outerHeight();
        const footerElHeight = $(document.getElementById('footer')).outerHeight();
        const errorBody = $(document.getElementById('errorBody'));
        if (errorBody) {
            errorBody.css('min-height', `calc(100vh - (${contributeElHeight}px + ${footerElHeight}px))`);
        }
    }

    const body = document.body;
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    const headerHeight = document.querySelector('.header-desktop').offsetHeight;
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            body.classList.remove(scrollUp);
            body.classList.remove('scroll');
            return;
        }

        if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
            // down
            body.classList.remove(scrollUp);
            body.classList.add(scrollDown);
            if (currentScroll > headerHeight) {
                body.classList.add('scroll');
            }
        } else if (
            currentScroll < lastScroll &&
            body.classList.contains(scrollDown)
        ) {
            // up
            body.classList.remove(scrollDown);
            body.classList.add(scrollUp);

        }
        lastScroll = currentScroll;
    });

});
