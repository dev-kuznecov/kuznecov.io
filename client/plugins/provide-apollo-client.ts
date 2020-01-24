import { provide } from '@vue/composition-api'
import { DefaultApolloClient } from '@vue/apollo-composable'
import resolvers from '~/apollo/client/resolvers'

export default function (root: any) {
    const app = root.app
    app.setup = () => {
        const apolloClient = app.apolloProvider.defaultClient
        provide(DefaultApolloClient, apolloClient)

        apolloClient.addResolvers(resolvers)
    }
}
