class Carousel {
    constructor(element) {
        this.element = element
        this.initializeFigures()
        if (this.figures.length === 0) {
            this.element.remove()
            return
        }
        this.createNextButton()
        this.createPreviousButton()
        this.resetHeight()
        window.addEventListener("resize", (event) => this.resetHeight())
    }

    initializeFigures() {
        this.figures = this.element.getElementsByTagName("figure")
        for (const fig of this.figures) {
            fig.style.visibility = "hidden"
        }
        this.currentFigure = 0
        this.numberOfFigures = this.figures.length
        if (this.figures.length > 0) {
            this.figures[this.currentFigure].style.visibility = "visible"
        }
    }

    createNextButton() {
        this.nextButton = document.createElement("button")
        this.nextButton.innerHTML = ">"
        this.element.appendChild(this.nextButton)
        this.nextButton.addEventListener("click", () => this.goToNextFigure())
    }

    createPreviousButton() {
        this.previousButton = document.createElement("button")
        this.previousButton.innerHTML = "<"
        this.element.insertBefore(this.previousButton, this.element.firstChild)
        this.previousButton.addEventListener("click", () => this.goToPreviousFigure())
    }

    goToNextFigure() {
        this.figures[this.currentFigure].style.visibility = "hidden"
        this.currentFigure = (this.currentFigure + 1) % this.numberOfFigures
        this.figures[this.currentFigure].style.visibility = "visible"
    }

    goToPreviousFigure() {
        this.figures[this.currentFigure].style.visibility = "hidden"
        this.currentFigure = (this.numberOfFigures + this.currentFigure - 1) % this.numberOfFigures
        this.figures[this.currentFigure].style.visibility = "visible"
    }

    resetHeight() {
        let height = 0
        for (let i = 0; i < this.figures.length; ++i) {
            const images = this.figures[i].getElementsByTagName("img")
            if (images.length === 0) { continue }
            const image = this.figures[i].getElementsByTagName("img")[0]
            const captions = this.figures[i].getElementsByTagName("figcaption")
            const caption = this.figures[i].getElementsByTagName("figcaption")[0]
            const captionHeight = (captions.length > 0) ? captions[0].clientHeight : 0
            const rescaleFactor = this.figures[i].clientWidth / image.naturalWidth
            const newHeight = rescaleFactor * image.naturalHeight + caption.clientHeight
            if (newHeight > height) {
                height = newHeight
            }
        }
        this.element.style.height = height + "px"
        if (height === 0) {
            this.element.style = "hidden"
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".carousel").forEach(carouselElement => {
        new Carousel(carouselElement)
    })
})
