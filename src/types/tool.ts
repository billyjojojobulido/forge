export interface ToolOption {
  flag: string;
  description: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  command: string;
  options?: ToolOption[];
  examples?: string[];
  notes?: string[];
  source?: string;
}
