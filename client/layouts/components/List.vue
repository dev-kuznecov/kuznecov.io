<script lang="ts">
    import { createComponent } from '@vue/composition-api'

    export default createComponent({
        setup() {
            return {

            }
        }
    })
</script>

<template>
    <div class="v-list">
        <slot></slot>
    </div>
</template>

<style lang="scss">
    .v-list {
        display: flex;
        flex-wrap: wrap;
        margin-left: -$g / 2;
        margin-right: -$g / 2;
    }
</style>