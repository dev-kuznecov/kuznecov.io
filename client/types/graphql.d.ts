
declare module '*/page-data.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const SetPageData: DocumentNode;
export const pageData: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/exp.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getExperience: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/sections.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getSections: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/skills.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getSkills: DocumentNode;

  export default defaultDocument;
}
    