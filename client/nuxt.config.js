export default {
    head: {
        htmlAttrs: {
            lang: 'ru',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, minimal-ui' },
            { hid: 'description', name: 'description', content: 'Портфолио Frontend-Разработчика' }
        ],
        link: [
            { rel: 'favicon', href: '/favicon.ico' }
        ]
    },
    buildModules: [
        '@nuxt/typescript-build'
    ],
    modules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/apollo'
    ],
    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: 'http://localhost:4000/graphql',
            }
        }
    },
    svgSprite: {

    },
    styleResources: {
        scss: [
            '@/assets/styles/index.scss'
        ]
    },
    plugins: [
        '~/plugins/composition-api',
        '~/plugins/provide-apollo-client',
    ],
    build: {
        extractCSS: true,
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.(css|vue)$/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        }
    }
}