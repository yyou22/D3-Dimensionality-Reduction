import './assets/scss/app.scss'

var $ = require('jquery')
var d3 = require('d3')

var map_ = {};
map_[0] = '#482DCE';
map_[1] = '#47CACC';
map_[2] = '#787FF6';
map_[3] = '#CDB3D4';
map_[4] = '#FF9190';
map_[5] = '#42E695';
map_[6] = '#F54EA2';
map_[7] = '#FFE25C';
map_[8] = '#00E0D8';
map_[9] = '#F4832F';

$(document).ready(function() {
    
    d3.select('#helloworld')
        .append('span')

    d3.select('.canvas1')
        .append('text')
        .attr('x', 20)
        .attr('y', 50)
        .text("PCA")
        .style("font-size", "34px")

    d3.select('.canvas2')
        .append('text')
        .attr('x', 20)
        .attr('y', 50)
        .text("MDS")
        .style("font-size", "34px")

    d3.select('.canvas3')
        .append('text')
        .attr('x', 20)
        .attr('y', 50)
        .text("t-SNE")
        .style("font-size", "34px")

    d3.csv('/data/pca.csv', function(d, i) {
        // convert to numerical values
        d.x = +d.x
        d.t = +d.y
        d.target = +d.target
        d.idx = i

        return d
    }).then(function(data) {

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
                .attr("idx", function (d) { return d.idx; })
                .attr("class", function(d,i) { return "pt" + i; })
                .style("fill", function(d) {
                    return map_[d.target];
                })
                .on("mouseover", function(d, i) {
                    d3.selectAll("circle.pt" + i).attr("r", 10).attr("stroke-width", 1.5)
                    d3.select('.canvas1')
                        .append('text')
                        .attr("id", "t" + i)
                        .attr('x', function() {
                            return x1(d.x) + 260 + 20;
                        })
                        .attr('y', function() {
                            return y1(d.y) + 240 + 20;
                        })
                        .text("Class: " + String(d.target))
                        .style("font-size", "34px")
                })
                .on("mouseout", function(d, i) {
                    d3.selectAll("circle.pt" + i).attr("r", 2).attr("stroke-width", 0.1)
                    d3.select("#t" + i).remove();
                })
    }) 

    d3.csv('/data/mds.csv', function(d, i) {
        // convert to numerical values
        d.x = +d.x
        d.t = +d.y
        d.target = +d.target
        d.idx = i

        return d
    }).then(function(data) {

        //console.log(data)

        var x2 = d3.scaleLinear()
                .range([0, 20])
        var y2 = d3.scaleLinear()
                .range([0, 20])

        d3.select('.canvas2')
            .selectAll('.dot')
            .data(data)
            .enter()
            .append('circle')
            .attr('class', 'dot')
            .attr('cx', function(d) {
                return x2(d.x) + 270;
            })
            .attr('cy', function(d) {
                return y2(d.y) + 250;
            })
            .attr('r', 2)
            .attr("stroke", "#691A45")
            .attr("stroke-width", 0.1)
            .attr("idx", function (d) { return d.idx; })
            .attr("class", function(d,i) { return "pt" + i; })
            .style("fill", function(d) {
                return map_[d.target];
            })
            .on("mouseover", function(d, i) {
                d3.selectAll("circle.pt" + i).attr("r", 10).attr("stroke-width", 1.5)
                d3.select('.canvas2')
                    .append('text')
                    .attr("id", "t" + i)
                    .attr('x', function() {
                        return x2(d.x) + 260 + 20;
                    })
                    .attr('y', function() {
                        return y2(d.y) + 240 + 20;
                    })
                    .text("Class: " + String(d.target))
                    .style("font-size", "34px")
            })
            .on("mouseout", function(d, i) {
                d3.selectAll("circle.pt" + i).attr("r", 2).attr("stroke-width", 0.1)
                d3.select("#t" + i).remove();
            })
    })

    d3.csv('/data/tsne.csv', function(d, i) {
        // convert to numerical values
        d.x = +d.x
        d.t = +d.y
        d.target = +d.target
        d.idx = i

        return d
    }).then(function(data) {

        //console.log(data)

        var x3 = d3.scaleLinear()
                .range([0, 3.25])
        var y3 = d3.scaleLinear()
                .range([0, 3.25])

        d3.select('.canvas3')
            .selectAll('.dot')
            .data(data)
            .enter()
            .append('circle')
            .attr('class', 'dot')
            .attr('cx', function(d) {
                return x3(d.x) + 270;
            })
            .attr('cy', function(d) {
                return y3(d.y) + 260;
            })
            .attr('r', 2)
            .attr("stroke", "#691A45")
            .attr("stroke-width", 0.1)
            .attr("idx", function (d) { return d.idx; })
            .attr("class", function(d,i) { return "pt" + i; })
            .style("fill", function(d) {
                return map_[d.target];
            })
            .on("mouseover", function(d, i) {
                d3.selectAll("circle.pt" + i).attr("r", 10).attr("stroke-width", 1.5)
                d3.select('.canvas3')
                    .append('text')
                    .attr("id", "t" + i)
                    .attr('x', function() {
                        return x3(d.x) + 260 + 20;
                    })
                    .attr('y', function() {
                        return y3(d.y) + 240 + 20;
                    })
                    .text("Class: " + String(d.target))
                    .style("font-size", "34px")
            })
            .on("mouseout", function(d, i) {
                d3.selectAll("circle.pt" + i).attr("r", 2).attr("stroke-width", 0.1)
                d3.select("#t" + i).remove();
            })
    }) 
})