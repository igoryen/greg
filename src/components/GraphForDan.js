import React from 'react';
import Highcharts from 'highcharts';

class Donut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                name: 'Percentage',
                data: [
                    {
                        name: 'Complete',
                        y: 75,
                        // color: '#3498db'
                    },
                    {
                        name: 'Incomplete',
                        y: 25,
                        // color: '#9b59b6'
                    },
                    // {
                    //     name: 'Oxygen',
                    //     y: 20.9,
                    //     color: '#2ecc71'
                    // },
                    // {
                    //     name: 'Trace Gases',
                    //     y: 0.1,
                    //     color: '#f1c40f'
                    // }
                ]
            }]
        }
    }

    highChartsRender() {
        Highcharts.chart({
            chart: {
                type: 'pie',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                renderTo: 'graph_for_dan'
            },
            title: {
                // verticalAlign: 'middle',
                // floating: true,
                text: '',
                // style: {
                //     fontSize: '10px',
                // }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: "pointer",
                    dataLabels: {
                        // format: '{point.name}: {point.percentage:.1f} %'
                        enabled: false
                    },
                    // showInLegend: true,
                    innerSize: '60%'

                }
            },
            series: this.state.series
        });
    }

    componentDidMount() {
        this.highChartsRender();
    }

    render() {
        return (
            <div id="graph_for_dan">
            </div>
        );
    }
}

export default Donut;
