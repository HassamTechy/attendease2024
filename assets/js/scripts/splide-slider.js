import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

(function ($) {
    $(document).ready(function () {
        $('.splide-slider').each(function () {
            let splide = $(this).find('.splide');

            if (typeof splide[0] !== "undefined") {
                new Splide("#" + $(this).attr('id') + ' .splide', {
                    rewind: true,
                    perPage: 1,
                    perMove: 1,
                    gap: 50
                }).mount();
            }
        });
    });
})(jQuery)