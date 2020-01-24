<script lang="ts">
    import { createComponent } from '@vue/composition-api'

    export default createComponent({
        props: {
            title: {
                type: String
            },
            url: {
                type: String
            },
            text: {
                type: String
            },
            tag: {
                type: String
            }
        },
        setup() {
            return {

            }
        }
    })
</script>

<template>
    <div class="v-preview">
        <a :href="url" target="_blank" class="v-preview__wrapper">
            <div class="v-preview__title">{{ title }}</div>
            <div class="v-preview__text">{{ text }}</div>
            <div class="v-preview__tag">{{ tag }}</div>
        </a>
    </div>
</template>

<style lang="scss">
    .v-preview {
        $b: '.v-preview';
        cursor: pointer;

        &__wrapper {
            display: block;
            padding: $g;
            background-color: $c-bg-block;
            border-radius: 4px;
            text-decoration: none;
            color: #fff;
            overflow: hidden;
            height: 160px;
            position: relative;
            transition: $t;

            &:hover {
                background-color: $c-hover;
                #{$b}__title, #{$b}__text {
                    color: #fff;
                }

                #{$b}__tag {
                    background-color: $c-active;
                    color: #fff;
                }
            }

            &:active {
                background-color: $c-active;
                #{$b}__title, #{$b}__text {
                    color: #fff;
                }

                #{$b}__tag {
                    background-color: $c-active-2;
                    color: #fff;
                }
            }
        }

        &__image {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-position: center center;
            background-size: cover;
            background-blend-mode: multiply;
            border-radius: 4px;
            display: none;
        }

        &__title {
            position: absolute;
            top: 16px;
            left: 16px;
            right: 16px;
            color: $c-text;
            font-size: 16px;
            z-index: 3;
            font-weight: 600;
            letter-spacing: 1px;
            transition: $t;
        }

        &__text {
            position: absolute;
            left: 16px;
            right: 16px;
            z-index: 3;
            font-size: 14px;
            color: $c-text;
            top: 40px;
            line-height: 1.5;
            transition: $t;
        }

        &__tag {
            background-color: $c-bg;
            position: absolute;
            bottom: 8px;
            right: 8px;
            border-radius: 4px;
            font-size: 12px;
            z-index: 3;
            font-weight: 600;
            color: $c-bg-element;
            padding: 4px 8px;
            transition: $t;
        }

    }
</style>