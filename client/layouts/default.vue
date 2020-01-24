<script lang="ts">
    import Vue from 'vue'
    import { createComponent, ref, onMounted } from '@vue/composition-api'
    import VueScroll from 'vuescroll'
    import { provideScrollBar } from '~/utils/useScrollBar'

    const NameLayout: string = 'V'
    const requireComponent = require.context(
        './components',
        false,
        /\.(vue|js)$/
    )

    requireComponent.keys().forEach((fileName: string) => {
        const componentConfig = requireComponent(fileName)
        const componentName = NameLayout + fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
        Vue.component(
            componentName,
            componentConfig.default || componentConfig
        )
    })

    import Navigation from '~/components/Navigation.vue'

    export default createComponent({
        components: {
            VueScroll,
            Navigation
        },
        setup() {
            const scrollBar: any = ref(null)
            const scrollOptions = {
                scrollPanel: {
                    initialScrollX: false
                },
                bar: {
                    background: '#e83953',
                        keepShow: true
                }
            }

            onMounted(() => {
                if(window.location.hash) {
                    const hash = window.location.hash
                    scrollBar.value.scrollIntoView(hash, 0)
                }
            })

            provideScrollBar(scrollBar)

            return {
                scrollBar,
                scrollOptions
            }
        }
    })
</script>

<template>
    <div class="wrapper">
        <vue-scroll ref="scrollBar" :ops="scrollOptions" class="wrapper__container">
            <Nuxt />
            <div class="github">
                <a href="https://github.com/kuznecov-dev/kuznecov.io" class="github__button">GitHub проекта</a>
            </div>
        </vue-scroll>
        <navigation />
    </div>
</template>

<style lang="scss">
    .wrapper {
        height: calc(100vh - 70px);
        overflow: hidden;
    }

    .github {
        padding: $g * 2 $g;
        display: flex;
        justify-content: center;

        &__button {
            user-select: none;
            outline: none;
            padding: $g / 2 $g;
            text-decoration: none;
            background-color: $c-bg-block;
            color: $c-text;
            border-radius: $b-radius;
            font-size: 12px;
            letter-spacing: 1px;
            text-transform: uppercase;
            font-weight: 800;

            @include h-b;
        }
    }

    .v-title {
        color: $c-title;
        font-size: 48px;
        font-weight: 400;
    }

    .page {
        padding-top: 40px;

        &--promo {
            padding-top: 0;
        }

        &__title {
            color: $c-title;
            font-family: $f-title;
            text-align: center;
            font-size: 40px;
            margin-bottom: 80px;
            line-height: 1;
            letter-spacing: 2px;
            position: relative;
            font-weight: 300;
            z-index: 2;
        }

        &__error {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            &-title {
                font-size: 14px;
                color: $c-hover;
                font-weight: 800;
                margin-bottom: 40px;
            }
        }

        &__container {
            @include make-container();
        }

        &__header {
            position: relative;
            height: 110px;
            display: flex;
            align-items: center;
            border-bottom: 2px solid $c-hover;
            margin-bottom: 40px;

            @include mb-down(sm) {
                height: auto;
                padding: 24px 0;
            }
        }
        &__title {
            font-size: 48px;
            font-weight: 700;
            text-transform: uppercase;
            color: $c-hover;



            @include mb-down(sm) {
                font-size: 32px;
            }
        }

        &__contacts {

        }
        
        &__sub-title {
            color: $c-hover;
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 8px;
            line-height: 1.4;

            &--section {
                margin-bottom: 24px;
            }

            span {
                color: $c-text;
                font-size: 12px;
                vertical-align: middle;
            }
        }

        &__text {
            font-size: 16px;
            color: $c-text;
            margin-bottom: 32px;
            line-height: 1.8;

            a {
                color: #fff;
                font-weight: 600;
                text-decoration: none;
                transition: $t;
                &:hover {
                    color: $c-hover;
                }
                &:active {
                    color: $c-active;
                }
            }

            .contact {
                font-weight: 400;
                @include mb-down(sm) {
                    display: block;
                    margin-top: -8px;
                    font-size: 14px;
                }
            }
        }



        &__row {
            display: flex;
            margin-bottom: 32px;
            flex-wrap: wrap;


        }

        &__left {
            flex-basis: 40%;
            max-width: 40%;

            @media screen and (max-width: 880px) {
                margin-bottom: 24px;
                flex-basis: 100%;
                max-width: 100%;
            }
        }

        &__right {
            flex-basis: 60%;
            max-width: 60%;

            @media screen and (max-width: 880px) {
                flex-basis: 100%;
                max-width: 100%;
            }
        }
    }

    body {
        padding-top: 70px;
        &.loading {
            .__rail-is-vertical {
                opacity: 0!important;
            }
        }
    }

    .wrapper {
        overflow: hidden;

        .__bar-is-vertical {
            width: 6px!important;
        }

        .__rail-is-vertical {
            transition: opacity $t;
            width: 4px!important;
            z-index: 15!important;
        }

        .__rail-is-vertical {
            right: 0!important;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .15s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>