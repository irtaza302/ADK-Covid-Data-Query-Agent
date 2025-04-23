import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'About - COVID-19 Data Assistant',
  description: 'Information about the COVID-19 Data Assistant application',
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">About COVID-19 Data Assistant</h1>
        
        <div className="max-w-3xl mx-auto">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>About this Application</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The COVID-19 Data Assistant is an interactive tool designed to help users query and visualize
                COVID-19 statistics from around the world. Using natural language, you can ask questions
                about cases, deaths, vaccinations, and other COVID-19 related metrics.
              </p>
              <p>
                This application uses advanced AI to understand your questions and retrieve relevant data
                from reliable sources, presenting the information in both textual and visual formats.
              </p>
            </CardContent>
          </Card>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Data Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The data presented in this application is sourced from the following trusted providers:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>World Health Organization (WHO)</li>
                <li>Johns Hopkins University Center for Systems Science and Engineering (JHU CSSE)</li>
                <li>The COVID Tracking Project</li>
                <li>Our World in Data</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>How to Use</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                You can interact with the COVID-19 Data Assistant in several ways:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Ask questions in natural language in the chat interface.</li>
                <li>View the retrieved data in table or chart format.</li>
                <li>Refine your queries to focus on specific regions, timeframes, or metrics.</li>
              </ol>
              <p className="mt-4">
                Example questions:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>How many COVID-19 cases were reported in the US last month?</li>
                <li>What was the vaccination rate in Europe during 2021?</li>
                <li>Compare COVID-19 death rates between Italy and Spain in 2020.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </main>
  );
} 