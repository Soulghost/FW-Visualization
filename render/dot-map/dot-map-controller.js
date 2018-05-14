function __generate_scatter_options(data) {
  var option = {
    geo: {
      map: 'china',
      label: {
        normal: {
          show: true,
          textStyle: {
            color: 'rgba(0,0,0,0.4)'
          }
        }
      },
      itemStyle: {
        normal: {
          borderColor: 'rgba(0, 0, 0, 0.2)'
        }
      }
    },
    roam: true,
    series: [
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        data: data,
        symbolSize: 8,
        symbolRotate: 0,
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: true,
            textStyle: {
              fontSize: 12
            }
          },
        },
        itemStyle: {
          normal: {
            color: '#F06C00'
          }
        }
      },
    ]
  };
  return option;
}

function render_dot_map(id, title, data) {
  // add element
  $('body').append('<div style="border: 1px solid #eee"></div>');
  $('body').append('<div id="' + id + '" style="height: 700px;"></div>');

  var mapChart = echarts.init(document.getElementById(id));
  option = __generate_scatter_options(data);
  option.title = {
    text: title
  }
  mapChart.setOption(option);

  function call(option) {
    // add btn
    btn_id = id + '_btn';
    $('#' + id).prepend(
      '<button id="' + btn_id + '" class="btn btn-primary"' +
      'style="position: relative; top: 72px; margin-left: 6px; z-index: 1;">隐藏地名</button>'
    )
    $btn = $('#' + btn_id);
    $btn.click(function () {
      console.log(option);
      isShow = option.series[0].label.normal.show;
      isShow = !isShow;
      option.series[0].label.normal.show = isShow;
      mapChart.setOption(option);
      $(this).text(isShow ? '隐藏地名' : '显示地名');
    });
  }
  call(option)
}


