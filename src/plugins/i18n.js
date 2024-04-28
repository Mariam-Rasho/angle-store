import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        message: {
            hello: 'Welcome to Angel Store',
            home: 'Home',
            about: 'About',
            product: 'Product',
            detailProduct: 'Product Details'
        }
    },
    ar: {
        message: {
            hello: 'مرحبا من متجر الملاك',
            home: 'الرئيسية',
            about: 'من نحن',
            product: 'المنتجات',
            detailProduct: 'تفاصيل المنتجات'
        }
    }
}

const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'ar', // set fallback locale
    messages,
})

export default i18n