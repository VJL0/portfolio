export interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export interface GitHubProject {
  id: number;
  name: string;
  description: string;
  html_url: string;
}
