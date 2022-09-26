// swiper js
var swiper = new Swiper(".swiper-second-menu", {
    // 斷點設定
    breakpoints: {
        // 螢幕寬度大於等於 375px 時切換為 2 欄(即swiper-slide 2個)
        375: {
            slidesPerView: 2
        },
        569: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        },
        // 螢幕寬度大於等於 992px 時切換為 5 欄(即swiper-slide 5個)
        992: {
            slidesPerView: 5
        }
    },
    spaceBetween: 10,
    // 每次滑入的swiper-slide欄數
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// bs5導覽頁籤換頁js
// 桌遊文章、致勝秘訣
var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', function (event) {
        event.preventDefault()
        tabTrigger.show()
    })
})

// 後台管理：我的收藏清單、已發佈的內容
var triggerTabList = [].slice.call(document.querySelectorAll('#myTab2 a'))
triggerTabList.forEach(function (triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', function (event) {
        event.preventDefault()
        tabTrigger.show()
    })
})


// aos js
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// 用jQuery讓右下角icon點擊後回頂端
$(function () {
    $('#backtop').click(function () {
        // 在333毫秒內平滑滾動到頁面頂部
        $('body').animate({ scrollTop: 0 }, 333);
    });
});

// 引入CKEditor 5文字編輯器
ClassicEditor
    .create(document.querySelector('#editor'), {
        placeholder: '請輸入內容…'
    })
    .then(editor => {
        console.log(editor);
    })

