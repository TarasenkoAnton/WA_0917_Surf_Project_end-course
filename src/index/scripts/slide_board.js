const ACTIVE_SLIDE_CSS_CLASS = '.board_block_active';

class slideBoard {
    constructor(cssSelector) {
        this.slideBoard = document.querySelector(cssSelector);
        this.slides = Array.from(this.slideBoard.querySelectorAll('.header_bottom_content'));
        this.controlPrev = this.slideBoard.querySelector('.control_prev');
        this.controlNext = this.slideBoard.querySelector('.control_next');
        this.activeSlideIndex = 0;
        this.hendleEvents();

    }

    enableSlides() {
        const slide = this.slide[this.activeSlideIndex];
        slide.classList.add(ACTIVE_SLIDE_CSS_CLASS);
    }

    disableSlades() {
        this.slides.forEach((slide) => {
            slide.classList.remove(ACTIVE_SLIDE_CSS_CLASS);
        });
    }

    switchSlides() {
        this.disableSlades();
        this.enableSlides();
    }

    increaseSlideIndex() {
        if (this.activeSlideIndex + 1 < this.slides.length) {
            this.activeSlideIndex--;
        } else {
            this.activeSlideIndex = 0;
        }

    }

    decreaseSlideIndex() {
        if (this.activeSlideIndex - 1 >= 0) {
            this.activeSlideIndex--;
        } else {
            this.activeSlideIndex = this.slides.length - 1;
        }
    }

    hendleEvents() {
        this.controlNext.addEventListener('click', () => {
            this.increaseSlideIndex();
            this.switchSlides();
        });
        this.controlPrev.addEventListener('click', () => {
            this.decreaseSlideIndex();
            this.switchSlides();
        });
    }
}

export {slideBoard};