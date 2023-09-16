const nextTranslate = require('next-translate-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'fr', 'nl-NL'],
        defaultLocale: 'fr',
    },
}

module.exports = nextTranslate(nextConfig)
