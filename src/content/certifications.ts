export type Certification = {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  status: "completed" | "in-progress";
  public: boolean;
};

// Add verified credentials here. Only public, completed entries are rendered.
export const certifications: Certification[] = [];
