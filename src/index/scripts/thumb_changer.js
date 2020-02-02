class thumbChanger {
    constructor(cssSelector) {
        this.thumbChanger = document.querySelector(cssSelector);
        this.displayImg = this.thumbChanger.querySelector('.header_bottom_content_leftblock_item');
        this.itemFirst = this.thumbChanger.querySelector('.thumb_item_first');
        this.itemSecond = this.thumbChanger.querySelector('.thumb_item_second');
        this.itemThird = this.thumbChanger.querySelector('.thumb_item_third');
        this.itemFourth = this.thumbChanger.querySelector('.thumb_item_fourth');



        function onThumbFirst() {
            const allClasses = displayImg.classList;
            allClasses.toggle('.thumb_item_first');

        };
        function onThumbSecond() {
            const allClasses = displayImg.classList;
            allClasses.toggle('.thumb_item_second');

        };
        function onThumbThird() {
            const allClasses = displayImg.classList;
            allClasses.toggle('.thumb_item_third');

        };
        function onThumbFourth() {
            const allClasses = displayImg.classList;
            allClasses.toggle('.thumb_item_fourth');

        };

        itemFirst.addEventListener("click", onThumbFirst);
        itemSecond.addEventListener("click", onThumbSecond);
        itemSecond.addEventListener("click", onThumbThird);
        itemSecond.addEventListener("click", onThumbFourth);

    };

}

export {thumbChanger};