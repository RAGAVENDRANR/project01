import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3Scale from 'd3';
import * as d3Shape from 'd3';

import { POPULATION } from '../shared/population';

@Component({
  selector: 'app-donutchart',
  templateUrl: './donutchart.component.html',
  styleUrls: ['./donutchart.component.css']
})
export class DonutchartComponent implements OnInit {

  private width: number;
  private height: number;
  private margin = {top: 50, right: 90, bottom: 50, left: 10};

  private svg: any;

  constructor () {
    // configure margins and width/height of the graph
    this.width = 400 - this.margin.left - this.margin.right;
    this.height =400 - this.margin.top - this.margin.bottom;
  }
 
 ngOnInit(){
    console.log("oninit console")
        this.initSvg();
        this.drawChart(POPULATION);
  }

  // donout chart
title = 'Donut Chart';

private radius!: number;

private arc: any;
private pie: any;
private color: any;

private g: any;
private initSvg() {
this.svg = d3.select('svg');

this.width = +this.svg.attr('width');
this.height = +this.svg.attr('height');
this.radius = Math.min(this.width, this.height) / 2;

this.color = d3Scale.scaleOrdinal()
  .range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']);

this.arc = d3Shape.arc()
  .outerRadius(this.radius - 10)
  .innerRadius(this.radius - 70);

this.pie = d3Shape.pie()
  .sort(null)
  .value((d: any) => d.population);

this.svg = d3.select('svg')
  .append('g')
  .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')');
}

private drawChart(data: any[]) {
let g = this.svg.selectAll('.arc')
  .data(this.pie(data))
  .enter().append('g')
  .attr('class', 'arc');

g.append('path')
  .attr('d', this.arc)
  .style('fill', (d: { data: { age: any; }; }) => this.color(d.data.age));

g.append('text')
  .attr('transform', (d: any) => 'translate(' + this.arc.centroid(d) + ')')
  .attr('dy', '.35em')
  .text((d: { data: { age: any; }; }) => d.data.age);
}

}
