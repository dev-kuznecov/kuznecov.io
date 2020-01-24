import { makeExecutableSchema } from 'graphql-tools';

import connectors from './connectors';
import { PubSub, withFilter } from 'graphql-subscriptions';

const typeDefs = [`
  type Skill {
    title: String,
    hash: String,
    progress: Int,
    text: String,
  }
  
  type Range {
    title: String,
    date: String,
    status: String,
    text: String,
  }
  
  type Project {
    id: Int,
    title: String,
    tag: String,
    url: String,
    text: String,
  }
  
  type Tag {
    title: String
  }
  
  type Section {
    name: String,
    url: String,
    title: String,
    tags: [Tag]
  } 
  
  type PageData {
    title: String
  }
     
  type Mutation {
    setPageData(title: String): String
  }

  type Query {
    skills: [Skill],
    timeline: [Range],
    projects: [Project],
    sections: [Section], 
    pageData: PageData
  }
`];

export const resolvers = {
    Mutation: {
        setPageData: () => {
            return {
                title: '123'
            }
        }
    },
    Query: {
        skills: () => connectors.getSkills(),
        timeline: () => connectors.getTimeline(),
        sections: () => connectors.getSections(),
        projects: () => connectors.getProjects(),
        pageData: () => connectors.getPageData()
    }
}

const jsSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

export default jsSchema;