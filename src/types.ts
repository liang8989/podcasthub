export interface Podcast {
  id: number;
  title: string;
  podcastName: string;
  category: string;
  duration: string;
  coverImage: string;
  preview: string;
  transcript: Array<{
    timestamp: string;
    text: string;
  }>;
  summary: {
    text: string;
    keyPoints: string[];
  };
  mindmap: string;
}