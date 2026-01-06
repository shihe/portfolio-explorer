
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  url: string;
  year: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
