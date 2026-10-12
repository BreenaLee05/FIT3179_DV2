var spec1 = "js/genre_trend_streamgraph.vg.json";
vegaEmbed('#streamgraph', spec1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// vegaEmbed("#streamgraph", spec1)
//     .then(function(result) {
//         console.log("Streamgraph loaded successfully");
//     })
//     .catch(console.error);


// console.log("JavaScript file is running");

// vegaEmbed("#streamgraph", spec1)
//     .then(function (result) {
//         console.log("Vega-Lite loaded");

//         var container = document.querySelector("#streamgraph");

//         console.log("Container:", container);
//         console.log("Container width:", container.offsetWidth);
//         console.log("Container height:", container.offsetHeight);
//         console.log("SVG:", container.querySelector("svg"));
//     })
//     .catch(function (error) {
//         console.error("Vega-Lite error:", error);
//     });

// vegaEmbed("#streamgraph", spec1, {
//     actions: false
// })
// .then(function (result) {
//     console.log("Vega-Lite loaded successfully");

//     var container = document.querySelector("#streamgraph");

//     console.log("Container width:", container.offsetWidth);
//     console.log("Container height:", container.offsetHeight);
//     console.log("Rendered chart:", container.querySelector(".marks"));
// })
// .catch(function (error) {
//     console.error("Vega-Lite error:", error);
// });

