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
    <div class="v-list-item">
        <slot></slot>
    </div>
</template>

<style lang="scss">
    .v-list-item {
        flex-basis: 50%;
        max-width: 50%;
        padding: 0 $g / 2;
        margin-bottom: $g;

        @include mb-down(xs){
            flex-basis: 100%;
            max-width: 100%;
        }
    }
</style>