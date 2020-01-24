import { useMutation } from '@vue/apollo-composable'
import PageDataMutation from '~/apollo/mutations/page-data.graphql'

export function setPageTitle(title: string) {
    const options = {
        variables: {
            title: title
        }
    }

    useMutation(PageDataMutation, options).mutate()
}


export function usePageData() {
    // На случай добавления meta-тегов
    return {
        setPageTitle
    }
}