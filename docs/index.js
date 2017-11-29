"use strict";

/**
 * Check installation of AdBlock Protector 2.
 * @function
 */
const checkInstallation = (() => {
    const $list = document.getElementById("list-test");
    const $ext = document.getElementById("extension-test");

    return () => {
        // TODO - Implement this

        try {
            if (true) {
                $list.classList.add("hidden");
            }
        } catch (err) { }

        try {
            if (true) {
                $ext.classList.add("hidden");
            }
        } catch (err) { }
    };
})();

{
    const token = setInterval(checkInstallation, 1000);

    checkInstallation();

    setTimeout(() => {
        clearInterval(token);
    }, 30000);
}
