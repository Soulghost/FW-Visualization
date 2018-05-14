var id = 'civilian-ratio-bar';
var data = {
  title: '各时期列女庶人数量及占比柱状图1',
  aspects: ['庶人', '非庶人'],
  xData: ['后汉书', '晋书', '北史', '元史', '明史', '清史稿'],
  yDataSeries: [
    {
      name: '庶人',
      data: [9, 9, 14, 145, 169, 567],
    },
    {
      name: '非庶人',
      data: [9, 31, 21, 43, 83, 117],
    }
  ]
}
render_category_bar(id, data);
