
// Start from html page 
var spec1 = "../chart1_genre_trend/js/genre_trend_streamgraph.vg.json";
vegaEmbed('#streamgraph', spec1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec2 = "../chart2_author_nationality/js/author_nationality_choropleth.vg.json";
vegaEmbed('#choropleth_map', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);