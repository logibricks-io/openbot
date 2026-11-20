export const WEB_APPEARANCE_STORAGE_KEY = "openbot.web.appearance";

/**
 * An inline script for the head of `/app`. It shows the saved theme before the first paint: without
 * it, the loading screen can paint the wrong color until its code runs. No saved theme follows the OS.
 * The loading screen's code then takes over, and removes the attribute when the user leaves `/app`.
 */
export const WEB_APPEARANCE_BOOT_SCRIPT = `try{var a;try{a=localStorage.getItem(${JSON.stringify(WEB_APPEARANCE_STORAGE_KEY)})}catch(e){}if(a!=="dark"&&a!=="light")a=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.dataset.openbotColorScheme=a}catch(e){}`;
