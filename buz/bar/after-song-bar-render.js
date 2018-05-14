var id = 'bar-after-song';
var data = {
  title: '元明清列女南北分布柱状图',
  aspects: ['北方', '南方'],
  xData: ['元史·列女传', '明史·列女传', '清史稿·列女传'],
  yDataSeries: [
    {
      name: '北方',
      data: [59, 52, 199]
    },
    {
      name: '南方',
      data: [87, 190, 443]
    }
  ]
}
render_category_bar(id, data);
