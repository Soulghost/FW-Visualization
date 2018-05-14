var id = 'bar-before-song';
var data = {
  title: '宋前《列女传》南北分布柱状图',
  aspects: ['北方', '南方'],
  xData: ['后汉书', '晋书', '北史', '新旧唐书', '宋辽金'],
  yDataSeries: [
    {
      name: '北方',
      data: [10.0, 23.0, 14.0, 22.0, 20.0]
    },
    {
      name: '南方',
      data: [8.0, 7.0, 6.0, 10.0, 40.0]
    }
  ]
};
render_category_bar(id, data);
