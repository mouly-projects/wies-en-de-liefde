class Gig {
  /**
   * @classdesc - This module handles all the logic required for the Carousel component
   * @param {HTMLElement} element - The HTMLElement this module is constructed upon
   * @param {Object} options - The data attributes on the HTMLElement this module is constructed upon
   */
  constructor(element, options) {
    this._element = element
    this._options = options

    this._state = {
      isPlayingMusic: false
    }

    this._playPauseButton = null

    this._getElementsFromDom()
    this._addEventsListeners()
  }

  _getElementsFromDom() {
    this._playPauseButton = this._element.querySelector(
      `[data-element="${this._options.trigger}"]`
    )
  }

  _addEventsListeners() {
    this._playPauseButton.addEventListener('click', this._playPause)
  }

  _playPause = () => {
    this._state.isPlayingMusic = !this._state.isPlayingMusic
  }
}

export default Gig
