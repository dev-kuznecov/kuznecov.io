import { DocumentNode } from "graphql"
import { useQuery, useResult } from '@vue/apollo-composable'

export function useQueryResult<T>(query: DocumentNode, fields: string[], variables: T = {} as T) {
    const { result, error, loading, refetch, onError } = useQuery(query, variables)

    let data: any = {
        error,
        loading,
        refetch
    }

    onError((error: any) => {
        console.log(error.graphQLErrors)
        console.log(error.networkError)
    })

    for(const field of fields) {
        data[field] = useResult(result, null, data => data[field])
    }

    return data
}