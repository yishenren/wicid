//初始化controller
var controller = new ScrollMagic.Controller()

//确定第一个滚动位置
var scene = new ScrollMagic.Scene({
    triggerElement: '#neirong1'
}).setTween('#bg img', {

    opacity: 1,
}).addTo(controller)


//确定第二个滚动位置
var scene = new ScrollMagic.Scene({
    triggerElement: '#neirong2'
}).setTween('#bg2 img', {

    opacity: 1,
}).addTo(controller)

//确定第三个滚动位置
var scene = new ScrollMagic.Scene({
    triggerElement: '#neirong3',

}).setTween('#bg3 img', {

    opacity: 1,
}).addTo(controller)

//确定第四个滚动位置
var scene = new ScrollMagic.Scene({
    triggerElement: '#neirong4',

}).setTween('#bg4 img', {

    opacity: 1,
}).addTo(controller)

//确定第五个滚动位置
var scene = new ScrollMagic.Scene({
    triggerElement: '#neirong5',
}).setTween('#bg4 img', {
    opacity: 0,
}).addTo(controller)

var scene = new ScrollMagic.Scene({
    triggerElement: '#neirong5',
}).setTween('#bg3 img', {
    opacity: 0,
}).addTo(controller)

var scene = new ScrollMagic.Scene({
    triggerElement: '#neirong5',
}).setTween('#bg2 img', {
    opacity: 0,
}).addTo(controller)

var scene = new ScrollMagic.Scene({
    triggerElement: '#neirong5',
}).setTween('#bg img', {
    opacity: 0,
}).addTo(controller)

var scene = new ScrollMagic.Scene({
    triggerElement: '#neirong0',
}).setTween('#bg4 img', {
    opacity: 0,
}).addTo(controller)

var scene = new ScrollMagic.Scene({
    triggerElement: '#neirong0',
}).setTween('#bg3 img', {
    opacity: 0,
}).addTo(controller)

var scene = new ScrollMagic.Scene({
    triggerElement: '#neirong0',
}).setTween('#bg2 img', {
    opacity: 0,
}).addTo(controller)

var scene = new ScrollMagic.Scene({
    triggerElement: '#neirong0',
}).setTween('#bg img', {
    opacity: 0,
}).addTo(controller)

//var scene = new ScrollMagic.Scene({
triggerElement: '#neirong5'
//}).setTween('#bg img', {
//    maxWidth: '1200px',
//    top: '0%',
//   left: '40%',
//    opacity: 0.6
//}).addTo(controller)