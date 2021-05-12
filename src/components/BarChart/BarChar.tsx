import React from 'react';
import { DataValue, Parameters } from 'models';
import { Bar } from 'react-chartjs-2';

interface Props {
  parameters: Parameters;
  width: number;
  height: number;
  dataSet: DataValue[];
}

const BarChart: React.FC<Props> = ({ parameters, width, height, dataSet }) => {
  const data = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d');

    const barGradient = ctx?.createLinearGradient(1, 0, 1, 700);
    barGradient?.addColorStop(0, 'green');
    barGradient?.addColorStop(0.25, 'orange');
    barGradient?.addColorStop(0.5, 'red');
    barGradient?.addColorStop(1, 'black');

    const barChart = {
      label: 'OEE',
      backgroundColor: barGradient,
      data: dataSet.map(d => d.value),
      type: 'bar',
      order: 3
    };

    const lineChartAvailability = {
      label: 'Availability',
      data: dataSet.map(d => d.availability),
      backgroundColor: ['rgba(255, 205, 86, 0.3)'],
      borderColor: ['rgba(255, 205, 86, 1)'],
      tension: 0.3,
      type: 'line',
      order: 0
    };

    const lineChartPerformance = {
      label: 'Performance',
      data: dataSet.map(d => d.performance),
      backgroundColor: ['rgba(94, 181, 239, 0.3)'],
      borderColor: ['rgba(94, 181, 239, 1)'],
      tension: 0.3,
      type: 'line',
      order: 1
    };

    const lineChartQuality = {
      label: 'Quality',
      data: dataSet.map(d => d.quality),
      backgroundColor: ['rgba(194, 187, 180, 0.3)'],
      borderColor: ['rgba(194, 187, 180, 1)'],
      tension: 0.3,
      type: 'line',
      order: 2
    };

    const dataSets: any = [barChart];

    if (parameters?.calculationType === 1) {
      dataSets.push(lineChartAvailability);
      dataSets.push(lineChartPerformance);
      dataSets.push(lineChartQuality);
    }

    return {
      labels: dataSet.map(d => d.text),
      datasets: dataSets,
    };
  };

  return (
    <div>
      <Bar data={data} type="bar" width={width} height={height} />
    </div>
  );
};

export default BarChart;
