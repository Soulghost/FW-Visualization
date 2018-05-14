function render_panel(id, height = 700, hideline = false) {
  // add element
  if (!hideline) {
    $('body').append('<div style="border: 1px solid #eee"></div>');
  }
  $('body').append('<div id="' + id + '" style="height: ' + height + 'px"></div>');
}