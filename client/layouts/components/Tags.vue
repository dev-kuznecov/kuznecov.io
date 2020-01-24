<script lang="ts">
    import { createComponent } from '@vue/composition-api'
    import { useScrollBar } from '~/utils/useScrollBar'

    export default createComponent({
        props: {
            items: {
                type: Array
            }
        },
        setup() {
            const scrollbar: any = useScrollBar()

            function goTo(hash: string): void {
                scrollbar.value.scrollIntoView('#' + hash, 0)
            }

            return {
                goTo
            }
        }
    })
</script>

<template>
    <div class="v-tags">
        <div class="v-tags__list">
            <div v-for="item in items" class="v-tags__item" @click="goTo(item.hash)">
                <div class="v-tags__title">{{ item.title }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .v-tags {
        margin-bottom: 24px;

        &__list {
            display: flex;
            flex-wrap: wrap;
        }

        &__item {
            text-decoration: none;
            margin-bottom: 8px;
            margin-right: 8px;
            border-radius: 4px;
            padding: 5px $g / 2;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            color: $c-text;
            background-color: $c-bg-element;
            transition: $t;
            &:hover {
                color: #fff;
                background-color: $c-hover;
            }

            &:active {
                color: #fff;
                background-color: $c-active;
            }

            @include mb-down(sm) {
                text-align: center;
            }

            @include mb-down(xs) {
                flex-basis: calc(50% - 8px);
            }
        }
    }
</style>