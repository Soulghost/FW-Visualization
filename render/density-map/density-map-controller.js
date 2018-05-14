function __generate_density_options(data) {
  var option = {
    title: {
      text: data.title
    },
    geo: {
      map: 'china'
    },
    visualMap: {
      min: 0,
      max: data.max,
      text: ['High', 'Low'],
      realtime: false,
      calculable: true,
      inRange: {
        color: ['lightskyblue', 'yellow', 'orangered']
      },
      x: '10%',
      y: '60%'
    },
    series: {
      type: 'map',
      mapType: 'china',
      label: {
        normal: {
          show: true
        }
      },
      data: data.data
    }
  }
  return option;
}

function render_density_map(id, data, first = false) {
  render_panel(id, 700, first);
  var mapChart = echarts.init(document.getElementById(id));
  option = __generate_density_options(data);
  mapChart.setOption(option);
}