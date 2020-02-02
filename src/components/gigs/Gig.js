class Gig {
  /**
   * @classdesc - This module handles all the logic required for the Carousel component
   * @param {HTMLElement} element - The HTMLElement this module is constructed upon
   * @param {Object} options - The data attributes on the HTMLElement this module is constructed upon
   */
  constructor(element, options) {
    this._element = element
    this._options = options

    this._init()
  }

  _init() {
    const currentDateTime = new Date().getTime()

    const parsedGigDate = this._options.date.split('-').reverse()
    const gigDateTime = new Date(parsedGigDate).getTime()

    this._calculateIsDateInPast(currentDateTime, gigDateTime)
  }

  _setIsDateInPast() {}

  /**
   *
   * @param {String} currentDateTime
   * @param {String} gigDateTime
   * @returns {Boolean}
   */
  _calculateIsDateInPast = (currentDateTime, gigDateTime) =>
    gigDateTime < currentDateTime
}

export default Gig
