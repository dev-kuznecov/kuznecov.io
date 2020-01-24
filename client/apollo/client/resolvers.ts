export default {
    Mutation: {
        setPageData: (_root: any, variables: any, { cache, getCacheKey }: any) => {
            const data = {
                pageData: {
                    __typename: 'PageData',
                    title: variables.title
                }
            };
            cache.writeData({ data });
            return data;
        },
    }
}