(function (window, document) {
    function resize() {
        console.log("done")

        var ww = window.innerWidth
        if (ww > window.screen.width) {
            window.requestAnimationFrame(resize)
        } else {
            if (ww > 750) {
                ww = 750
            }
            document.documentElement.style.fontSize = ww * 100 / 750 + 'px'
        }
        console.log(ww, window.screen.width)

    }

    resize()

    window.addEventListener('resize', resize)
})(window, document)