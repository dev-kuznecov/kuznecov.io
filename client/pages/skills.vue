<script lang="ts">
    import { createComponent } from '@vue/composition-api'
    import { setPageTitle } from '~/utils/usePageData'

    import { useQueryResult } from '~/utils/useQueryResult'
    import { GetSkillsQueryVariables } from '~/types/types'
    import SkillsQuery from '~/apollo/queries/skills.graphql'

    import Skills from '../components/Skills.vue'

    export default createComponent({
        components: {
            Skills
        },
        setup() {
            setPageTitle('Навыки')

            const { skills, error } = useQueryResult<GetSkillsQueryVariables>(SkillsQuery, ['skills'])

            return {
                skills,
                error
            }
        }
    })
</script>

<template>
    <section class="page">
        <div class="page__container">
            <v-page-error v-if="error" />
            <div v-else class="page__content">
                <div class="page__sub-title">Список навыков</div>
                <div class="page__text">Ниже представлен список всех технологий, которые я использую и изучаю. <br> При клике на одну из них, вас переведет к полному описанию</div>
                <v-tags :items="skills" />
                <skills :skills="skills" />
            </div>
        </div>
    </section>
</template>
