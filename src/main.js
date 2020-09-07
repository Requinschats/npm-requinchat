import cv from "./cv.vue";

function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component("v-cv", cv);
}

const plugin = {
    install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
    GlobalVue = global.vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

cv.install = install;

export default cv;
