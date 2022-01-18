import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import * as d3 from 'd3';
import * as d3Scale from 'd3';
import * as d3Shape from 'd3';
import * as d3Array from 'd3';
import * as d3Axis from 'd3';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {    
    public title = 'Line Chart';
    data: any[] = [
    {date: new Date('2010-01-01'), value: 40},
    {date: new Date('2010-01-04'), value: 93},
    {date: new Date('2010-01-05'), value: 95},
    {date: new Date('2010-01-06'), value: 130},
    {date: new Date('2010-01-07'), value: 110},
    {date: new Date('2010-01-08'), value: 120},
    {date: new Date('2010-01-09'), value: 129},
    {date: new Date('2010-01-10'), value: 107},
    {date: new Date('2010-01-11'), value: 140},
  ];

  title1 = 'Bar Chart';

  private width: number;
  private height: number;
  private margin = {top: 20, right: 20, bottom: 30, left: 40};

  private x: any;
  private y: any;
  private svg: any;
  private line!: d3Shape.Line<[number, number]>; // this is line defination
 // this is line defination

  constructor (private cdr: ChangeDetectorRef) {
    // configure margins and width/height of the graph
    this.width = 300 - this.margin.left - this.margin.right;
    this.height =300 - this.margin.top - this.margin.bottom;
  }
 ngOnInit():void {
    console.log("oninit console")
    this.buildSvg();
    this.addXandYAxis();
    this.drawLineAndPath();
    
  }

  private buildSvg() {
    console.log("svg bulid")
    this.svg = d3.select('svg')
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
      this.cdr.detectChanges();
  }
  private addXandYAxis() {
    // range of data configuring
    console.log("data drom x & y axis")
    this.x = d3Scale.scaleTime().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);
    this.x.domain(d3Array.extent(this.data, (d) => d.date ));
    this.y.domain(d3Array.extent(this.data, (d) => d.value ));
    // Configure the X Axis
    this.svg.append('g')
        .attr('transform', 'translate(0,' + this.height + ')')
        .call(d3Axis.axisBottom(this.x));
    // Configure the Y Axis
    this.svg.append('g')
        .attr('class', 'axis axis--y')
        .call(d3Axis.axisLeft(this.y));
        this.cdr.detectChanges();
  }

  private drawLineAndPath() {
    console.log("drawing the line")
    this.line = d3Shape.line()
        .x( (d: any) => this.x(d.date) )
        .y( (d: any) => this.y(d.value) );
    // Configuring line path
    this.svg.append('path')
        .datum(this.data)
        .attr('class', 'line')
        .attr('d', this.line);
        this.cdr.detectChanges();
  }
  
}

