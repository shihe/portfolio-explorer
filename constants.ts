
import { Project } from './types';

export const PROJECTS: Project[] = [ 
  {
    id: '1',
    title: 'Sleeper Draft Retrospective',
    description: 'Enter a sleeper draft ID to get a retrospective of the draft.',
    image: 'https://picsum.photos/id/2/1200/800',
    tags: ['React', 'Sleeper API', 'Typescript', 'Tailwind'],
    url: 'https://sleeper-draft-retrospective.vercel.app/',
    year: '2025'
  },
  {
    id: '2',
    title: 'Fantasy Rankings Visualizer',
    description: 'Website that takes a ranked list of players and generates rankings separated by position. Support for favoriting players and setting teams to visualize over the season.',
    image: 'https://picsum.photos/id/1/1200/800',
    tags: ['React', 'Typescript', 'Tailwind'],
    url: 'https://fantasy-rankings-visualizer.vercel.app',
    year: '2025'
  },
  {
    id: '3',
    title: 'Fantasy Snake Draft Simulator',
    description: 'Website that takes a ranked list of players and generates an interactive snake draft board.',
    image: 'https://picsum.photos/id/3/1200/800',
    tags: ['React', 'Typescript', 'Tailwind'],
    url: 'https://fantasy-snake-draft-simulator.vercel.app/',
    year: '2025'
  },
  {
    id: '4',
    title: 'Sleeper League Keepers',
    description: 'See final rosters for a sleeper league and rounds they were drafted for determining keeper value quickly',
    image: 'https://picsum.photos/id/4/1200/800',
    tags: ['React', 'Sleeper API', 'Typescript', 'Tailwind'],
    url: 'https://sleeper-league-keepers.vercel.app/',
    year: '2025'
  },
  {
    id: '5',
    title: 'Sleeper Draft Grades',
    description: 'First proof of concept for sleeper draft grades with basic front-end',
    image: 'https://picsum.photos/id/5/1200/800',
    tags: ['Javascript', 'Bootstrap', 'GH Pages', 'Sleeper API'],
    url: 'https://shihe.github.io/sleeper-draft-grades/',
    year: '2024'
  },
  {
    id: '6',
    title: 'Food Recommender',
    description: 'Collaborative code editor with real-time pair programming.',
    image: 'https://picsum.photos/id/6/1200/800',
    tags: ['Javascript', 'Yelp API', 'Bootstrap', 'GH Pages'],
    url: 'https://shihe.github.io/food',
    year: '2024'
  },
];
