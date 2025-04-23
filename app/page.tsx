import { ChatContainer } from '@/components/chat/chat-container';
import { StatisticsTable } from '@/components/data-display/statistics-table';
import { StatisticsChart } from '@/components/data-display/statistics-chart';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data for initial demo
const mockStatistics = [
  {
    date: '2023-01-01',
    cases: 1200,
    deaths: 30,
    vaccinations: 5000,
    region: 'North America',
    country: 'USA'
  },
  {
    date: '2023-01-02',
    cases: 1350,
    deaths: 32,
    vaccinations: 5200,
    region: 'North America',
    country: 'USA'
  },
  {
    date: '2023-01-03',
    cases: 1100,
    deaths: 28,
    vaccinations: 5500,
    region: 'North America',
    country: 'USA'
  },
  {
    date: '2023-01-04',
    cases: 950,
    deaths: 25,
    vaccinations: 5800,
    region: 'North America',
    country: 'USA'
  },
  {
    date: '2023-01-05',
    cases: 1050,
    deaths: 27,
    vaccinations: 6000,
    region: 'North America',
    country: 'USA'
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">COVID-19 Statistics Assistant</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <ChatContainer />
          </div>
          
          <div>
            <Tabs defaultValue="chart">
              <TabsList className="mb-4 w-full">
                <TabsTrigger value="chart" className="flex-1">Chart</TabsTrigger>
                <TabsTrigger value="table" className="flex-1">Table</TabsTrigger>
              </TabsList>
              <TabsContent value="chart">
                <StatisticsChart 
                  statistics={mockStatistics} 
                  title="COVID-19 Statistics (Last 5 Days)" 
                />
              </TabsContent>
              <TabsContent value="table">
                <StatisticsTable 
                  statistics={mockStatistics} 
                  title="COVID-19 Statistics (Last 5 Days)" 
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
