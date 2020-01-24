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
    <div class="page__error">
        <div class="page__error-title">Что-то пошло не так, пожалуйста перезагрузите&nbsp;страницу!</div>
        <div class="page__error-controls">
            <v-button-reload view="action" />
        </div>
    </div>
</template>