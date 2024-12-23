export interface Project {
    id: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    status: 'not started' | 'in progress' | 'completed'; // You can customize the status options as needed
    technologies: string[]; // Array of technologies used in the project
    teamMembers: string[]; // List of team members (could be employee IDs or names)
    client?: string; // Optional client name
  }