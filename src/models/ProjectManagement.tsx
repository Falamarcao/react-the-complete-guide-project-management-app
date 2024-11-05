export interface Project {
  id: string;
  title: string;
  description: string;
  dueDate: string;
}

export interface ProjectManagement {
  selectedProjectId: string | undefined | null;
  projects: Project[];
}
