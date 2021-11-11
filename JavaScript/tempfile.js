let isAnimating = true

function PauseClicked() {

    console.log("Pause event")
    isAnimating = false
    //cancelAnimationFrame(animate)
}

window.addEventListener('keydown', PauseClicked)
//TODO: delete before submitting
