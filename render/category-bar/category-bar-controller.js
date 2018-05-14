function __generate_category_bar_options(data) {
  var series = [];
  for (var i = 0; i < data.yDataSeries.length; i++) {
    yData = data.yDataSeries[i];
    yData.type = 'bar';
    yData.label = {
      normal: {
        show: true,
        position: 'top'
      }
    };
    series.push(yData);
  }
  var option = {
    title: {
      text: data.title
    },
    legend: {
      data: data.aspects,
    },
    xAxis: [
      {
        type: 'category',
        data: data.xData
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    tooltip: {
      trigger: 'axis'
    },
    series: series
  };
  return option;
}

function render_category_bar(id, data, first = false) {
  render_panel(id, 500, first);
  var bar = echarts.init(document.getElementById(id));
  option = __generate_category_bar_options(data);
  bar.setOption(option);
}
