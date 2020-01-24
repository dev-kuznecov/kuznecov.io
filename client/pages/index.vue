<script lang="ts">
    import { createComponent } from '@vue/composition-api'
    import { setPageTitle } from '~/utils/usePageData'

    export default createComponent({
        setup() {
            setPageTitle('Kuznecov')

            return {

            }
        }
    })
</script>

<template>
    <div class="page">
        <!-- На главной менюшка всегда включена -->
    </div>
</template>