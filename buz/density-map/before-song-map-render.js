var id = 'map-wrap-before-song';
var data = {
  title: '宋前《列女传》地域分布设色图',
  max: 32,
  data: [
    { name: '河南', value: 32 },
    { name: '河北', value: 19 },
    { name: '江西', value: 16 },
    { name: '陕西', value: 13 },
    { name: '山东', value: 11 },
    { name: '四川', value: 9 },
    { name: '甘肃', value: 9 },
    { name: '山西', value: 9 },
    { name: '江苏', value: 8 },
    { name: '安徽', value: 7 },
    { name: '福建', value: 6 },
    { name: '浙江', value: 6 },
    { name: '湖南', value: 4 },
    { name: '广东', value: 3 },
    { name: '黑龙江', value: 2 },
    { name: '湖北', value: 2 },
    { name: '北京', value: 1 },
    { name: '广西', value: 1 },
    { name: '辽宁', value: 1 },
    { name: '新疆', value: 1 }
  ]
};

render_density_map(id, data);
