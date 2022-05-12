import './assets/scss/app.scss'

var $ = require('jquery')
var d3 = require('d3')

var map_ = {};
map_[1] = '#47CACC';
map_[2] = '#787FF6';
map_[3] = '#CDB3D4';
map_[4] = '#FF9190';
map_[5] = '#42E695';
map_[6] = '#F54EA2';
map_[7] = '#FFE25C';
map_[8] = '#00E0D8';
map_[9] = '#FDQ600';

$(document).ready(function() {
    $('#helloworld')
        .append('<span>Hello, jQuery! </span>')
    
    d3.select('#helloworld')
        .append('span')
        .html('Hello, D3!');

    d3.csv('/data/pca.csv', function(d) {
        // convert to numerical values
        d.x = +d.x
        d.t = +d.y
        d.target = +d.target

        return d
    }).then(function(data) {
        // Your d3 drawing code comes here
        // The below example draws a simple "scatterplot"

        console.log(data)

        var x1_max = d3.max(data, function(d) {return d.x;})
        var x1_min = d3.min(data, function(d) {return d.x;})
        var x1 = d3.scaleLinear()
                .range([0, 30])
        var y1 = d3.scaleLinear()
                .range([0, 30])

        d3.select('.canvas1')
            .selectAll('.dot')
            .data(data)
            .enter()
            .append('circle')
            .attr('class', 'dot')
            .attr('cx', function(d) {
                return x1(d.x) + 260;
            })
            .attr('cy', function(d) {
                return y1(d.y) + 240;
            })
            .attr('r', 2)
            .attr("stroke", "#691A45")
            .attr("stroke-width", 0.1)
            .style("fill", function(d) {
                return map_[d.target];
            })
    }) 
})