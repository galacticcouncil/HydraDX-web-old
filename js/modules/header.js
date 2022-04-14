const $ = require('jquery');
const env = require('./env');

const $body = $('body');
const $mobilePopup = $('header.header-desktop');
const $mobileHeader = $('header.header-mobile');
const $menuBtn = $mobileHeader.find('.header-mobile__hamberger');
const $languageSelectorBtn = $mobilePopup.find('.about-selector');
const $languageMenu = $mobilePopup.find('.about-menu');

const $bkMobileMenu = $mobilePopup.find('ul.header__menu').clone();
const $bkMenuLanguage = $languageMenu.clone();

const isMobileMenuOpen = () => {
    return $mobileHeader.hasClass('open');
}

const toggleMobileMenu = () => {
    if (isMobileMenuOpen()) {
        $mobileHeader.css('position', 'fixed');
    }

    $mobileHeader.toggleClass('open');
    $mobilePopup.fadeToggle(300, () => {
        if (isMobileMenuOpen()) {
            $mobileHeader.css('position', 'fixed');
        }
    });
    $body.toggleClass('no-scrolling');
    setTimeout(() => {
        $body.toggleClass('position-fixed');
    }, 250)

}

const toggleDesktopLanguageMenu = () => {
    const {top, left} = $languageSelectorBtn.position();
    const height = $languageSelectorBtn.outerHeight(true);

    $languageMenu.fadeToggle(100);
    $languageMenu.css('cssText', 'display: flex !important')
    $languageMenu.css('flex-direction', 'column')
    //
    // $languageMenu.css({top: top + height, left: left - 47});
}

const isMobileLanguageMenuOpened = () => {
    return $mobilePopup.find('ul.header__menu.about-language').length > 0;
}

const getLanguageMenu = () => {
    return $bkMenuLanguage.clone()
        .removeClass('about-menu')
        .addClass('header__menu about-language')
        .css('display', 'flex')
        .on('click', '.back', toggleMobileLanguageMenu);
}

const toggleMobileLanguageMenu = () => {
    const opened = isMobileLanguageMenuOpened();

    $mobilePopup
        .find('ul.header__menu')
        .fadeOut(100)
        .remove();

    const $newMenu = opened
        ? $bkMobileMenu
        : getLanguageMenu();

    $newMenu
        .css({display: 'block', position: 'static', border: 'none', "box-shadow": 'none', "padding-top": "60px", "background-color": "transparent"})
        .fadeIn(300);

    $mobilePopup
        .find('.header__logo')
        .after($newMenu);
}

const toggleLanguageMenu = () => {
    if (env.isDesktop()) {
        toggleDesktopLanguageMenu();
    } else {
        toggleMobileLanguageMenu();
    }
}

const hideDesktopLanguageMenu = () => {
    if (env.isMobile()) {
        return;
    }

    $languageMenu.fadeOut(100);
}

const checkToHideDesktopLanguageMenu = function (e) {
    if (env.isMobile()) {
        return;
    }

    const languageSelectorBtnClicked =
        $(e.target).closest($languageSelectorBtn).length > 0;

    if (!languageSelectorBtnClicked) {
        hideDesktopLanguageMenu();
    }
}

const registerEvents = () => {
    $menuBtn.on('click', toggleMobileMenu);
    $languageSelectorBtn.on('click', toggleLanguageMenu);
    $(document).on('click', checkToHideDesktopLanguageMenu);
    $(window).on('resize scroll', hideDesktopLanguageMenu);
}

module.exports = () => {
    registerEvents();
}
