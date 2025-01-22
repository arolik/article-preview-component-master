
class ScreenState {
    constructor(){
        this.width = window.innerWidth,
        this.mobileWidth = 375,
        this.desktopWidth = 1440
    }

    get isMobile () {
        return this.width <= this.mobileWidth
    }

    get isDesktop () {
        return this.width >= this.desktopWidth
    }

    updateWidth () {
        this.width = window.innerWidth;
    }
};

const screenState = new ScreenState();
window.addEventListener('resize', () => screenState.updateWidth());

const btnShare = document.querySelector('#btn__share');
const mobileTooltip = document.querySelector('#mobileTooltip');
const desktopTooltip = document.querySelector('#desktopTooltip');

btnShare.addEventListener('click', showTooltip);

function showTooltip () {
    if(screenState.isMobile){
        mobileTooltip.classList.toggle('mobile__tooltip__show');
    }
    if(screenState.isDesktop){
        desktopTooltip.classList.toggle('desktop__tooltip__show')
    }
}
