
// Start from html page 
// var spec1 = "../chart1_genre_trend/js/genre_trend_streamgraph.vg.json";
var spec1 = "https://raw.githubusercontent.com/BreenaLee05/FIT3179_DV2/refs/heads/main/chart1_genre_trend/js/genre_trend_streamgraph.vg.json"
// vegaEmbed('#streamgraph', spec1).then(function(result) {
//     // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
// }).catch(console.error);
fetch(spec1)
    .then(function(response) {
        console.log("JSON response status:", response.status);

        if (!response.ok) {
            throw new Error("Could not load JSON: " + response.status);
        }

        return response.json();
    })
    .then(function(spec) {
        console.log("JSON loaded successfully:", spec);

        return vegaEmbed("#streamgraph", spec);
    })
    .then(function(result) {
        console.log("Chart rendered successfully");
    })
    .catch(function(error) {
        console.error("Chart loading failed:", error);
    });

var spec2 = "https://raw.githubusercontent.com/BreenaLee05/FIT3179_DV2/refs/heads/main/chart2_author_nationality/js/author_nationality_choropleth.vg.json";
// vegaEmbed('#choropleth_map', spec2).then(function(result) {
//     // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
// }).catch(console.error);

fetch(spec2)
    .then(function(response) {
        console.log("JSON response status:", response.status);

        if (!response.ok) {
            throw new Error("Could not load JSON: " + response.status);
        }

        return response.json();
    })
    .then(function(spec) {
        console.log("JSON loaded successfully:", spec);

        return vegaEmbed("#choropleth_map", spec);
    })
    .then(function(result) {
        console.log("Chart rendered successfully");
    })
    .catch(function(error) {
        console.error("Chart loading failed:", error);
    });

var spec3 = "https://raw.githubusercontent.com/BreenaLee05/FIT3179_DV2/refs/heads/main/chart3_genre_distribution/js/genre_distribution_treemap.vg.json";
// vegaEmbed('#treemap', spec3).then(function(result) {
//     // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
// }).catch(console.error);

fetch(spec3)
    .then(function(response) {
        console.log("JSON response status:", response.status);

        if (!response.ok) {
            throw new Error("Could not load JSON: " + response.status);
        }

        return response.json();
    })
    .then(function(spec) {
        console.log("JSON loaded successfully:", spec);

        return vegaEmbed("#treemap", spec);
    })
    .then(function(result) {
        console.log("Chart rendered successfully");
    })
    .catch(function(error) {
        console.error("Chart loading failed:", error);
    });