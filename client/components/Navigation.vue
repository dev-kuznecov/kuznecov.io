<script lang="ts">
    import { createComponent, reactive } from '@vue/composition-api'

    import { useQueryResult } from '~/utils/useQueryResult'

    import SectionsQuery from '~/apollo/queries/sections.graphql'
    import PageTitleQuery from '~/apollo/queries/page-data.graphql'

    import { GetSectionsQueryVariables, PageDataQueryVariables } from '~/types/types'

    enum StateStatus {
        Visible = 'visible',
        StartLoad = 'start-load',
        Load = 'load',
        EndLoad = 'end-load',
        Hidden = 'hidden',
    }

    export default createComponent({
        head() {
            return {
                title: this.pageData.title
            }
        },
        setup(props, {
            root
        }) {
            const { pageData } = useQueryResult<PageDataQueryVariables>(PageTitleQuery, ['pageData']),
                { sections } = useQueryResult<GetSectionsQueryVariables>(SectionsQuery, ['sections'])

            const state = reactive({
                status: root.$route.path === '/' ? StateStatus.Visible : StateStatus.Hidden,
            })

            root.$router.beforeEach((to, from, next) => {
                if(state.status === StateStatus.Visible) {
                    state.status = StateStatus.StartLoad

                    setTimeout(() => {
                        state.status = StateStatus.Load
                        next()
                    }, 1000)
                } else {
                    state.status = StateStatus.EndLoad

                    setTimeout(() => {
                        state.status = StateStatus.Load
                        next()
                    }, 700)
                }
            })

            root.$router.afterEach((to, from) => {
                if(to.path === '/') {
                    state.status = StateStatus.EndLoad
                    setTimeout(() => {
                        state.status = StateStatus.Visible
                    }, 1300)
                } else {
                    state.status = StateStatus.EndLoad
                    setTimeout(() => {
                        state.status = StateStatus.Hidden
                    }, 1300)
                }
            })

            function openNavigation(): void {
                if(state.status !== StateStatus.Hidden) return

                state.status = StateStatus.EndLoad

                setTimeout(() => {
                    state.status = StateStatus.Visible
                }, 1300)
            }

            function selectSection(url: string): void {
                if(state.status !== StateStatus.Visible) return

                if('/' + url === root.$route.path) {
                    state.status = StateStatus.EndLoad
                    setTimeout(() => {
                        state.status = StateStatus.Hidden
                    }, 1300)
                } else {
                    root.$router.push({
                        path: url
                    })
                }
            }

            return {
                state,
                sections,
                pageData,
                selectSection,
                openNavigation,
            }
        }
    })
</script>

<template>
    <nav class="v-navigation" :class="[ 'v-navigation--' + state.status ]">
        <div class="v-navigation__wrapper">
            <div class="v-navigation__header">
                <div class="v-navigation__page-title">{{ pageData.title }}</div>
                <div class="v-navigation__status" @click="openNavigation()">
                    <div class="v-navigation__status-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="v-navigation__status-dot"></div>
                </div>
            </div>
            <ul v-if="sections" class="v-navigation__list">
                <li v-for="(section, index) in sections" @click="selectSection(section.url)" class="v-navigation__item">
                    <div class="v-navigation__content">
                        <div class="v-navigation__title">
                            <div class="v-navigation__title-text">{{ section.title }}</div>
                            <div class="v-navigation__title-text">Смотреть</div>
                        </div>
                        <div class="v-navigation__tags">
                            <div v-for="tag in section.tags" class="v-navigation__tag">{{ tag.title }}</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss">
    .v-navigation {
        $b: '.v-navigation';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 20;
        transition: all .7s;
        background-color: $c-bg-block;
        box-shadow: 0 10px 15px 0 rgba($c-bg, .5);

        &__wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            backface-visibility: hidden;
        }

        &__header {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 40px;
            height: 40px;
            max-width: 968px;
            transform: translate(-50%, -50%);
            z-index: 1;
            transition: all .3s ease-out;

            @include mb-down(md) {
                max-width: 768px;
            }
        }

        &__page-title {
            font-size: 24px;
            position: absolute;
            top: 50%;
            left: 0;
            z-index: 15;
            transform: translateY(-50%);
            transition: all .3s ease-out;
            padding: 0 $g;
            text-transform: uppercase;
            color: $c-text;
            font-weight: bold;
            opacity: 0;
            white-space: nowrap;
            pointer-events: none;
        }

        &__status {
            position: absolute;
            top: 50%;
            right: 50%;
            width: 40px;
            height: 40px;
            transform: translate(50%, -50%);
            transform-origin: center center;
            transform-box: fill-box;
            border-radius: 50%;
            background-color: $c-bg-block;
            z-index: 1;
            transition: all .3s ease-out;
            display: flex;
            align-items: center;
            justify-content: center;

            &-menu {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 2;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                transition: all $t;
                opacity: 0;

                span {
                    width: 20px;
                    height: 2px;
                    border-radius: 4px;
                    background-color: #fff;
                    margin-bottom: 2px;
                    margin-top: 2px;
                }
            }

            @keyframes dot-rotate {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }


            &-dot {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                box-shadow: inset 0 0 0 4px $c-action;
                transform-origin: center center;
                transform-box: fill-box;
                transition: all .3s ease-out;
                -webkit-backface-visibility: hidden;
                &:before {
                    content: '';
                    position: absolute;
                    top: -4px;
                    bottom: -4px;
                    left: 50%;
                    width: 8px;
                    transform: translateX(-50%);
                    background-color: $c-bg-block;
                    transition: all $t;
                    opacity: 0;
                }

                &:after {
                    content: '';
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 50%;
                    height: 8px;
                    transform: translateY(-50%);
                    background-color: $c-bg-block;
                    transition: all $t;
                    opacity: 0;
                }
            }
        }

        &__list {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 280vh;
            height: 280vh;
            transform-origin: top left;
            transform: rotate(45deg) translate(-50%, -50%);
            padding: 0;
            margin: 0;
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            transition: all .5s ease-out;
        }

        &__item {
            user-select: none;
            position: relative;
            flex-basis: 140vh;
            max-width: 140vh;
            min-width: 140vh;
            height: 140vh;
            box-shadow: inset 0 0 0 2px $c-bg-block;
            background-color: $c-bg-element;
            transition: background-color $t, box-shadow $t;
            cursor: default;

            &:hover {
                background-color: $c-hover;

                #{$b}__title {
                    &-text {
                        &:nth-child(1) {
                            display: none;
                        }
                        &:nth-child(2) {
                            display: block;
                        }
                    }
                }
            }

            &:nth-child(1) {
                #{$b}__content {
                    justify-content: flex-end;
                    align-items: flex-end;

                    #{$b}__title {
                        order: 2;
                    }

                    #{$b}__tags {
                        order: 1;
                    }
                }
            }

            &:nth-child(2) {
                #{$b}__content {
                    transform: rotate(-90deg);
                }

                #{$b}__tags {
                    align-items: flex-start;
                    flex-direction: column;
                }

                #{$b}__tag {
                    transform: translateX(100%);
                }
            }

            &:nth-child(3) {
                #{$b}__content {
                    transform: rotate(-90deg);
                    justify-content: flex-end;
                    align-items: flex-end;

                    #{$b}__title {
                        order: 2;
                    }

                    #{$b}__tags {
                        order: 1;
                    }
                }
            }

            &:nth-child(4) {
                #{$b}__tags {
                    align-items: flex-start;
                    flex-direction: column;
                }

                #{$b}__tag {
                    transform: translateX(100%);
                }
            }

            &:hover {
                #{$b}__tag {
                    transform: translateX(0%);
                    opacity: 1;

                    @for $i from 1 through 30 {
                        &:nth-child(#{$i}) {
                            transition-delay: #{30 * $i}ms;
                        }
                    }
                }
            }
        }
        
        &__item:hover &__title {
            color: #fff;
        }
        
        &__link {
            color: #fff;
            text-decoration: none;
        }

        &__content {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            padding: $g + 4;
        }

        @keyframes show-label {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }

        &__title {
            transition: color $t, opacity $t;
            color: $c-text;
            font-size: 24px;
            text-transform: uppercase;
            font-weight: 800;
            letter-spacing: 1px;
            line-height: 1;

            &-text {
                transform-origin: left center;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;

                animation: show-label .15s linear;

                &:nth-child(2) {
                    display: none;
                }
            }
        }

        &__tags {
            display: flex;
            flex-direction: column-reverse;
            align-items: flex-end;
            padding: 12px 0;
            transition: opacity $t;
        }

        &__tag {
            color: #fff;
            font-size: 12px;
            text-transform: uppercase;
            font-weight: 600;
            padding: 12px 0;
            transition: all $t;
            transform: translateX(-100%);
            opacity: 0;
        }

        &--visible {
            #{$b}__item {
                cursor: pointer;
            }
        }

        &--start-load {
            #{$b}__title {
                opacity: 0;
            }

            #{$b}__tags {
                opacity: 0;
            }

            #{$b}__item {
                background-color: $c-bg-element!important;
            }

            #{$b}__status {
                transition-delay: .5s;
                width: 150px;
                height: 150px;

                &-dot {
                    width: 60px;
                    height: 60px;
                    transition-delay: .7s;
                    animation: dot-rotate 1.5s linear infinite;
                    &:after, &:before {
                        transition-delay: 1s;
                        opacity: 1;
                    }
                }
            }
        }

        &--load {
            #{$b}__title {
                opacity: 0;
            }

            #{$b}__tags {
                opacity: 0;
            }

            #{$b}__item {
                background-color: $c-bg-element!important;
            }

            #{$b}__status {
                width: 150px;
                height: 150px;

                &-dot {
                    width: 60px;
                    height: 60px;
                    animation: dot-rotate 1.5s linear infinite;
                    &:after, &:before {
                        opacity: 1;
                    }
                }
            }
        }

        &--end-load {
            #{$b}__title {
                opacity: 0;
            }

            #{$b}__tags {
                opacity: 0;
            }

            #{$b}__item {
                background-color: $c-bg-block!important;
                transition: all .5s ease-in;
                transition-delay: .7s;
                box-shadow: inset 0 0 0 70vh $c-bg-block;
            }

            #{$b}__list {
                transform: rotate(135deg) translate(-50%, -50%);
            }

            #{$b}__status {
                width: 150px;
                height: 150px;

                &-dot {
                    width: 60px;
                    height: 60px;
                    animation: dot-rotate 1.5s linear infinite;
                    &:after, &:before {
                        opacity: 1;
                    }
                }
            }
        }

        &--hidden {
            height: 70px;

            #{$b}__page-title {
                display: block;
                opacity: 1;
            }

            #{$b}__header {
                width: 100%;
                height: 70px;
            }

            #{$b}__title {
                opacity: 0;
            }

            #{$b}__tags {
                opacity: 0;
            }

            #{$b}__item {
                background-color: $c-bg-element!important;
                transition: all .5s ease-in;
                transition-delay: .7s;
                box-shadow: inset 0 0 0 70vh $c-bg-block;
            }

            #{$b}__list {
                transform: rotate(135deg) translate(-50%, -50%);
            }

            #{$b}__status {
                width: 48px;
                height: 48px;
                cursor: pointer;
                right: 0%;
                transform: translate(50%, -50%);
                margin-right: 48px;



                &:hover #{$b}__status-dot {
                    background-color: $c-bg-element-hover;
                    box-shadow: inset 0 0 0 4px $c-bg-element-hover;
                }

                &-dot {
                    width: 48px;
                    height: 48px;
                    background-color: $c-bg-element;
                    box-shadow: inset 0 0 0 4px $c-bg-element;
                }

                &-menu {
                    opacity: 1;
                }
            }
        }


    }
</style>