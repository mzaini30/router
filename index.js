new VConsole
new Router({
 el: ".tampil",
 routes: {
  '#': '.beranda',
  "#tulis": ".tulis"
 },
 script: ["tulis()"]
})