<script lang="ts">
    import { createComponent } from '@vue/composition-api'
    import { setPageTitle } from '~/utils/usePageData'

    export default createComponent({
        setup() {
            setPageTitle('Обо мне')

            return {

            }
        }
    })
</script>

<template>
    <section class="page">
        <div class="page__container">
            <div class="page__content typography">
                <div class="page__sub-title">Как зовут?</div>
                <div class="page__text">Меня зовут Павел Кузнецов, мне 23 года и я проживаю в Самаре</div>
                <div class="page__sub-title">Чем занимаешься?</div>
                <div class="page__text">
                    Занимаюсь web-разработкой 4 года, это было моим любимым хобби, а потом стало работой.
                    <br>
                    Начал свою программистскую деятельность с разработки карт для WarCraft 3, потом делал моды для SAMP, а позже пошел учиться на системного программиста, где освоил C++/C# и получил базовые знания
                </div>

                <div class="page__sub-title">Как пришел в WEB?</div>
                <div class="page__text">
                    Захотел создать свой сайт, начал изучать html/css/js по гайдам из гугла и вскоре сверстал пару сайтов, мне нравилось то, что я делал, поэтому продолжил изучать это направление и до сих пор его изучаю, каждый день
                </div>

                <div class="page__sub-title">Увлечения</div>
                <div class="page__text">В свободное время я делаю свои наработки/проекты или продолжаю обучаться, но когда на душе тоска, я запускаю дотку и зову друзей</div>
            </div>
        </div>
    </section>
</template>
