<script lang="ts">
    import { createComponent } from '@vue/composition-api'

    export default createComponent({
        props: {
            view: {
                type: String
            }
        },
        setup() {
            function reload() {
                window.location.reload()
            }

            return {
                reload
            }
        }
    })
</script>

<template>
    <div class="v-button" @click="reload()" :class="[ { 'v-button--action': view === 'action' }, { 'v-button--small': view === 'small' } ]">
        <div class="v-button__title">
            Перезагрузить
        </div>
    </div>
</template>

<style lang="scss">
    .v-button {
        outline: none;
        user-select: none;
        text-decoration: none;
        font-weight: 600;
        font-size: 12px;
        letter-spacing: 1px;
        text-transform: uppercase;
        cursor: pointer;
        color: #fff;
        display: inline-flex;
        align-items: center;
        padding-left: $g;
        padding-right: $g;
        background-color: $c-bg-element;
        height: 48px;
        border-radius: 24px;
        transition: color $t, background-color $t;

        &:hover {
            background-color: $c-hover;
        }

        &:active {
            background-color: $c-active;
        }

        &--small {
            height: 32px;
        }

        &--action {
            box-shadow: 0 0 25px 0 rgba($c-hover, .5);
            background-color: $c-hover;

            &:hover {
                box-shadow: 0 0 25px 0 rgba($c-hover, 0);
                background-color: $c-active;
            }

            &:active {
                box-shadow: 0 0 25px 0 rgba($c-hover, 0);
                background-color: $c-active-2;
            }
        }
    }
</style>