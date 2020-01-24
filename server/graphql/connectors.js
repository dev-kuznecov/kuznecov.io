import { skills, projects, sections, timeline } from './data'

export default {
    getSkills() {
        return skills
    },
    getProjects() {
        return projects
    },
    getSections() {
        return sections
    },
    getTimeline() {
        return timeline
    },
    getPageData() {
        return {
            title: 'Kuznecov.io'
        }
    }
};