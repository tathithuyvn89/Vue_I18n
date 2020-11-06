import Vue from 'vue';
import VueI18n from 'vue-i18n';
import enLang from './en'
import viLang from './vi'
Vue.use(VueI18n);

const messages = {
    en: {
        ...enLang
    },
    vi: {
        ...viLang
    }

};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages

});


export default i18n;