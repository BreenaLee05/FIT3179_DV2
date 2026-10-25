
// Start from html page 
// var spec1 = "/FIT3179_DV2/chart1_genre_trend/js/genre_trend_streamgraph.vg.json";
var spec1 = "https://raw.githubusercontent.com/BreenaLee05/FIT3179_DV2/refs/heads/main/chart1_genre_trend/js/genre_trend_streamgraph.vg.json";
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


// var spec1 = "https://breenalee05.github.io/FIT3179_DV2/chart1_genre_trend/js/genre_trend_streamgraph.vg.json";

// vegaEmbed("#streamgraph", spec1)
//   .then(function(result) {
//     console.log("Chart rendered successfully");
//   })
//   .catch(function(error) {
//     console.error("Chart loading failed:", error);
//   });


// var spec2 = "../chart2_author_nationality/js/author_nationality_graduateddot.vg.json";
// var spec2 = "https://raw.githubusercontent.com/BreenaLee05/FIT3179_DV2/refs/heads/main/chart2_author_nationality/js/author_nationality_choropleth.vg.json";
var spec2 = "https://raw.githubusercontent.com/BreenaLee05/FIT3179_DV2/refs/heads/main/chart2_author_nationality/js/author_nationality_graduateddot.vg.json";
// vegaEmbed('#graduateddotmap', spec2).then(function(result) {
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

        return vegaEmbed("#graduateddotmap", spec);
    })
    .then(function(result) {
        console.log("Chart rendered successfully");
    })
    .catch(function(error) {
        console.error("Chart loading failed:", error);
    });

// var spec3 = "../chart3_genre_distribution/js/genre_distribution_treemap.vg.json";
// var spec3 = "https://raw.githubusercontent.com/BreenaLee05/FIT3179_DV2/refs/heads/main/chart3_genre_distribution/js/genre_distribution_treemap.vg.json";
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


// var spec4 = "../chart4_origin_destination_flow/js/origin_destination_flow.vg.json";
var spec4 = "https://raw.githubusercontent.com/BreenaLee05/FIT3179_DV2/refs/heads/main/chart4_origin_destination_flow/js/origin_destination_flow.vg.json";
// vegaEmbed('#treemap', spec3).then(function(result) {
//     // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
// }).catch(console.error);

fetch(spec4)
    .then(function(response) {
        console.log("JSON response status:", response.status);

        if (!response.ok) {
            throw new Error("Could not load JSON: " + response.status);
        }

        return response.json();
    })
    .then(function(spec) {
        console.log("JSON loaded successfully:", spec);

        return vegaEmbed("#flowmap", spec);
    })
    .then(function(result) {
        console.log("Chart rendered successfully");
    })
    .catch(function(error) {
        console.error("Chart loading failed:", error);
    });


// var spec5 = "../chart5_reviews_rating/js/reviews_rating_waffle.vg.json";
var spec5 = "https://raw.githubusercontent.com/BreenaLee05/FIT3179_DV2/refs/heads/main/chart5_reviews_rating/js/reviews_rating_waffle.vg.json";

// vegaEmbed('#treemap', spec3).then(function(result) {
//     // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
// }).catch(console.error);

fetch(spec5)
    .then(function(response) {
        console.log("JSON response status:", response.status);

        if (!response.ok) {
            throw new Error("Could not load JSON: " + response.status);
        }

        return response.json();
    })
    .then(function(spec) {
        console.log("JSON loaded successfully:", spec);

        return vegaEmbed("#wafflechart", spec);
    })
    .then(function(result) {
        console.log("Chart rendered successfully");
    })
    .catch(function(error) {
        console.error("Chart loading failed:", error);
    });



var spec6 = "../chart6_publisher_genre/js/publisher_genre_heatmap.vg.json";
// vegaEmbed('#treemap', spec3).then(function(result) {
//     // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
// }).catch(console.error);

fetch(spec6)
    .then(function(response) {
        console.log("JSON response status:", response.status);

        if (!response.ok) {
            throw new Error("Could not load JSON: " + response.status);
        }

        return response.json();
    })
    .then(function(spec) {
        console.log("JSON loaded successfully:", spec);

        return vegaEmbed("#heatmap", spec);
    })
    .then(function(result) {
        console.log("Chart rendered successfully");
    })
    .catch(function(error) {
        console.error("Chart loading failed:", error);
    });



var spec7 = "../chart7_reading_by_gender/js/reading_by_gender_pointrange.vg.json";
// vegaEmbed('#treemap', spec3).then(function(result) {
//     // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
// }).catch(console.error);

fetch(spec7)
    .then(function(response) {
        console.log("JSON response status:", response.status);

        if (!response.ok) {
            throw new Error("Could not load JSON: " + response.status);
        }

        return response.json();
    })
    .then(function(spec) {
        console.log("JSON loaded successfully:", spec);

        return vegaEmbed("#pointrange", spec);
    })
    .then(function(result) {
        console.log("Chart rendered successfully");
    })
    .catch(function(error) {
        console.error("Chart loading failed:", error);
    });


var spec8 = "../chart8_time_spent_by_gender/js/time_spent_by_gender_bar.vg.json";
// vegaEmbed('#treemap', spec3).then(function(result) {
//     // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
// }).catch(console.error);

fetch(spec8)
    .then(function(response) {
        console.log("JSON response status:", response.status);

        if (!response.ok) {
            throw new Error("Could not load JSON: " + response.status);
        }

        return response.json();
    })
    .then(function(spec) {
        console.log("JSON loaded successfully:", spec);

        return vegaEmbed("#barchart", spec);
    })
    .then(function(result) {
        console.log("Chart rendered successfully");
    })
    .catch(function(error) {
        console.error("Chart loading failed:", error);
    });


var spec9 = "../chart9_average_books_read/js/average_books_read_choropleth.vg.json";
// vegaEmbed('#treemap', spec3).then(function(result) {
//     // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
// }).catch(console.error);

fetch(spec9)
    .then(function(response) {
        console.log("JSON response status:", response.status);

        if (!response.ok) {
            throw new Error("Could not load JSON: " + response.status);
        }

        return response.json();
    })
    .then(function(spec) {
        console.log("JSON loaded successfully:", spec);

        return vegaEmbed("#choroplethmap", spec);
    })
    .then(function(result) {
        console.log("Chart rendered successfully");
    })
    .catch(function(error) {
        console.error("Chart loading failed:", error);
    });
