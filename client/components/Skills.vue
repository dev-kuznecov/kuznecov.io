<script lang="ts">
    import { createComponent } from '@vue/composition-api'

    export default createComponent({
        props: {
            skills: {
                type: Array,
                default: []
            }
        },
        setup() {
            const progress: string[] = ['Low', 'Medium', 'High', 'Expert']

            return {
                progress
            }
        }
    })
</script>

<template>
    <div class="skills">
        <div v-if="skills" class="skills__list">
            <div v-for="(item, index) in skills" class="skills__item" :id="item.hash ? item.hash : 'skill-' + index">
                <nuxt-link :to="'#' + item.hash" target="_blank" class="skills__title">{{ item.title }}</nuxt-link>
                <div v-if="item.progress" class="skills__progress" :class="['skills__progress--' + item.progress]">
                    <div v-for="level in progress" class="skills__section">
                        <div class="skills__section-wrapper">
                            <div class="skills__section-title">{{ level }}</div>
                        </div>
                    </div>
                </div>
                <div class="skills__text" v-html="item.text"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .skills {
        $b: '.skills';

        &__item {
            padding: 24px 0;
        }

        &__title {
            display: inline-block;
            color: $c-text;
            text-decoration: none;
            font-weight:600;
            font-size: 20px;
            margin-bottom: 32px;
            transition: color $t;
            &:before {
                content: '#';
                display: inline;
            }
            
            &:hover {
                color: #fff;
            }
        }

        &__text {
            color: $c-text;
            line-height: 1.6;
            font-size: 16px;
            margin-bottom: 24px;

            a {
                color: #fff;
                font-weight: 600;
                text-decoration: none;
                transition: $t;
                &:hover {
                    color: $c-active;
                }
                &:active {
                    color: $c-active-2;
                }
            }
        }

        &__progress {
            display: flex;
            margin-left: -4px;
            margin-right: -4px;
            max-width: 50%;
            margin-bottom: 24px;

            @for $i from 1 through 4 {
                &--#{$i} {
                    #{$b}__section {
                        @for $j from 1 through $i {
                            &:nth-child(#{$j}) {
                                #{$b}__section-wrapper {
                                    background-color: $c-active;
                                }
                            }
                        }

                        &:nth-child(#{$i}) {
                            #{$b}__section-title {
                                display: flex;
                            }
                        }
                    }
                }
            }

            @include mb-down(sm) {
                max-width: 100%;
            }
        }

        &__section {
            position: relative;
            height: 6px;
            flex-basis: 25%;
            max-width: 25%;
            padding: 0 4px;
        }

        &__section-wrapper {
            width: 100%;
            height: 100%;
            border-radius: 4px;
            background-color: $c-bg-block;
        }

        &__section-title {
            position: absolute;
            top: 0;
            left: 50%;
            font-weight:800;
            color: $c-hover;
            letter-spacing: 1px;
            font-size: 12px;
            border-radius: 4px;
            align-items: center;
            padding-bottom: 8px;
            transform: translate(-50%, -100%);
            display: none;
        }

        &__section--active &__section-title {
            display: flex;
        }
    }
</style>