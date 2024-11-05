export interface Project {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
}

export interface ProjectManagement {
  selectedProjectId: string | undefined | null;
  projects: Project[];
}
