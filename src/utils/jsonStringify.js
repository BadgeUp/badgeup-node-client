'use strict';

/**
 * Formats a date in ISO 8601 format with the correct time zone offset
 * @param {undefined|Date} date
 * @returns {string}
 */
function formatDate(date) {
    const dateStr = (date || new Date()).toISOString();
    return dateStr.replace('Z', formatTZ(date));
}

/**
 * Returns the time zone offset as a string
 * adapted from https://github.com/sindresorhus/time-zone
 * @param {undefined|Date} date
 * @returns {string}
 */
function formatTZ(date) {
    const offset = (date || new Date()).getTimezoneOffset();
    const absOffset = Math.abs(offset);

    if (absOffset === 0) {
        return 'Z';
    }

    const hours = Math.floor(absOffset / 60);
    const hoursOut = absOffset > 0 ? ('0' + hours).slice(-2) : '';
    const minutes = absOffset % 60;
    const minutesOut = minutes > 0 ? ':' + ('0' + minutes).slice(-2) : '';

    return (offset < 0 ? '+' : '-') + hoursOut + minutesOut;
}

/**
 * Replacer function for JSON.stringify()
 * @param {*} name object key name
 * @param {*} val value
 */
function replacer(name, val) {
    if (this[name] instanceof Date) {
        return formatDate(this[name]);
    }
    return val;
}

/**
 * Stringify function wrapping JSON.stringify()
 * @param {*} value
 */
function stringify(value) {
    return JSON.stringify(value, replacer);
}

module.exports = stringify;
