<script lang="ts">
    import { createComponent } from '@vue/composition-api'
    import { setPageTitle } from '~/utils/usePageData'

    import { useQueryResult } from '~/utils/useQueryResult'
    import { GetExperienceQueryVariables } from '~/types/types'
    import ExperienceQuery from '~/apollo/queries/exp.graphql'

    import Timeline from '../components/Timeline.vue'

    export default createComponent({
        components: {
            Timeline
        },
        setup() {
            setPageTitle('Опыт')

            const { projects, timeline, error } = useQueryResult<GetExperienceQueryVariables>(ExperienceQuery, ['projects', 'timeline'])

            return {
                error,
                projects,
                timeline
            }
        }
    })
</script>

<template>
    <section class="page">
        <div class="page__container">
            <v-page-error v-if="error" />
            <div v-else class="page__content typography">
                <div class="page__row">
                    <div class="page__left">
                        <div class="page__sub-title page__sub-title--section">Где работал</div>
                        <timeline v-if="timeline" :items="timeline" />
                    </div>
                    <div class="page__right">
                        <div class="page__sub-title page__sub-title--section">Последние проекты</div>
                        <v-list v-if="projects">
                            <v-list-item v-for="project in projects" :key="project.id">
                                <v-preview v-bind="project" />
                            </v-list-item>
                        </v-list>
                    </div>
                </div>
                <div class="page__sub-title">Примеры кода</div>
                <div class="page__text">По понятным причинам, я не могу демонстрировать исходный код своих коммерческих проектов, специально для этого сделал этот сайт и запушил его на
                    <a href="https://github.com/kuznecov-dev/kuznecov.io">GitHub</a>, он служит как портфолио и как пример моего кода и моей сборки</div>
                <div class="page__sub-title">Стек этого проекта</div>
                <div class="page__text">
                    SCSS, TypeScript, Vue (Composition API), Nuxt-TS, Apollo (GraphQL), Express
                </div>
                <div class="page__sub-title">Что умею</div>
                <div class="page__text">
                    Более подробно о том, что я умею, вы можете прочитать на странице <nuxt-link to="/skills">Навыки</nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>