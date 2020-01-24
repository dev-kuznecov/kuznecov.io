export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Mutation = {
   __typename?: 'Mutation',
  setPageData?: Maybe<Scalars['String']>,
};


export type MutationSetPageDataArgs = {
  title?: Maybe<Scalars['String']>
};

export type PageData = {
   __typename?: 'PageData',
  title?: Maybe<Scalars['String']>,
};

export type Project = {
   __typename?: 'Project',
  id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  tag?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  skills?: Maybe<Array<Maybe<Skill>>>,
  timeline?: Maybe<Array<Maybe<Range>>>,
  projects?: Maybe<Array<Maybe<Project>>>,
  sections?: Maybe<Array<Maybe<Section>>>,
  pageData?: Maybe<PageData>,
};

export type Range = {
   __typename?: 'Range',
  title?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
};

export type Section = {
   __typename?: 'Section',
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  tags?: Maybe<Array<Maybe<Tag>>>,
};

export type Skill = {
   __typename?: 'Skill',
  title?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  progress?: Maybe<Scalars['Int']>,
  text?: Maybe<Scalars['String']>,
};

export type Tag = {
   __typename?: 'Tag',
  title?: Maybe<Scalars['String']>,
};

export type SetPageDataMutationVariables = {
  title: Scalars['String']
};


export type SetPageDataMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'setPageData'>
);

export type GetExperienceQueryVariables = {};


export type GetExperienceQuery = (
  { __typename?: 'Query' }
  & { timeline: Maybe<Array<Maybe<(
    { __typename?: 'Range' }
    & Pick<Range, 'title' | 'date' | 'status' | 'text'>
  )>>>, projects: Maybe<Array<Maybe<(
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'title' | 'tag' | 'url' | 'text'>
  )>>> }
);

export type PageDataQueryVariables = {};


export type PageDataQuery = (
  { __typename?: 'Query' }
  & { pageData: Maybe<(
    { __typename?: 'PageData' }
    & Pick<PageData, 'title'>
  )> }
);

export type GetSectionsQueryVariables = {};


export type GetSectionsQuery = (
  { __typename?: 'Query' }
  & { sections: Maybe<Array<Maybe<(
    { __typename?: 'Section' }
    & Pick<Section, 'name' | 'url' | 'title'>
    & { tags: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'title'>
    )>>> }
  )>>> }
);

export type GetSkillsQueryVariables = {};


export type GetSkillsQuery = (
  { __typename?: 'Query' }
  & { skills: Maybe<Array<Maybe<(
    { __typename?: 'Skill' }
    & Pick<Skill, 'title' | 'hash' | 'progress' | 'text'>
  )>>> }
);
