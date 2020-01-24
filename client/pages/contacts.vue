<script lang="ts">
    import { createComponent } from '@vue/composition-api'
    import { setPageTitle } from '~/utils/usePageData'

    export default createComponent({
        setup() {
            setPageTitle('Контакты')

            return {

            }
        }
    })
</script>

<template>
    <section class="page">
        <div class="page__container">
            <div class="page__content typography">
                <div class="page__row">
                    <div class="page__left">
                        <div class="page__sub-title"></div>
                        <div class="page__contacts">
                            <div class="page__sub-title">Email <span><i class="mdi mdi-star"></i> Предпочтительно</span></div>
                            <div class="page__text"><a class="contact" href="mailto:paul.smith.developer@gmail.com">paul.smith.front@gmail.com</a></div>
                            <div class="page__sub-title">Телефон</div>
                            <div class="page__text"><a class="contact" href="tel:+79951310777">+7 (995) 131 - 0777</a></div>
                            <div class="page__sub-title">Telegram</div>
                            <div class="page__text"><a class="contact" href="http://t.me/kuznecovdev">@kuznecovdev</a></div>
                            <div class="page__sub-title">VK</div>
                            <div class="page__text"><a class="contact" href="https://vk.com/paul_smiths">Павел Кузнецов</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
