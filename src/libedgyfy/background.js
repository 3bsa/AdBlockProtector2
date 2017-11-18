"use strict";

if (/edge/i.test(navigator.userAgent)) {
    window._chrome = window.chrome;
    window.chrome = window.browser;
}
