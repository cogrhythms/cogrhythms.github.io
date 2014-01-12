/**
 * Created by nbenes on 11/16/13.
 */

var $window = $(window)
var $body   = $(document.body)

var navHeight = $('.navbar').outerHeight(true) + 10

$body.scrollspy({
    target: '.crc-sidebar',
    offset: navHeight
})

$window.on('load', function () {
    $body.scrollspy('refresh')
})

$('.crc-container [href=#]').click(function (e) {
    e.preventDefault()
})

// back to top
setTimeout(function () {
    var $sideBar = $('.crc-sidebar')

    $sideBar.affix({
        offset: {
            top: function () {
                var offsetTop      = $sideBar.offset().top
                var sideBarMargin  = parseInt($sideBar.children(0).css('margin-top'), 10)
                var navOuterHeight = $('.crc-nav').height()

                return (this.top = offsetTop - navOuterHeight - sideBarMargin)
            }
            , bottom: function () {
                return (this.bottom = $('.crc-footer').outerHeight(true))
            }
        }
    })
}, 100)

setTimeout(function () {
    $('.crc-top').affix()
}, 100)