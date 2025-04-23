export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error?: string;
}

export interface CovidStatistic {
  date: string;
  cases?: number;
  deaths?: number;
  vaccinations?: number;
  region: string;
  country: string;
}

export interface DataVisualizationProps {
  statistics: CovidStatistic[];
  title: string;
} 