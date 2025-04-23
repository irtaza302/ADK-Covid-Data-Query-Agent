import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Data Sources - COVID-19 Data Assistant',
  description: 'Information about the data sources used in the COVID-19 Data Assistant application',
};

export default function DataSourcesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">COVID-19 Data Sources</h1>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>World Health Organization (WHO)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The World Health Organization provides global data on COVID-19 cases, deaths, and vaccinations.
                Their data is collected from member countries and undergoes validation before being published.
              </p>
              <p>
                <a 
                  href="https://covid19.who.int/data" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Visit WHO COVID-19 Dashboard →
                </a>
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Johns Hopkins University (JHU CSSE)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The JHU Center for Systems Science and Engineering maintains a comprehensive global dataset
                of COVID-19 cases, with detailed regional breakdowns and frequent updates.
              </p>
              <p>
                <a 
                  href="https://coronavirus.jhu.edu/map.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Visit JHU Coronavirus Resource Center →
                </a>
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Our World in Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Our World in Data compiles COVID-19 statistics from official sources and presents them in a
                standardized format, making it easier to compare data across countries and regions.
              </p>
              <p>
                <a 
                  href="https://ourworldindata.org/coronavirus" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Visit Our World in Data COVID-19 Dataset →
                </a>
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>The COVID Tracking Project</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The COVID Tracking Project collected and published data on COVID-19 testing, cases, and patient
                outcomes with a particular focus on the United States. While they stopped collecting new data in
                March 2021, their historical dataset remains valuable for analysis.
              </p>
              <p>
                <a 
                  href="https://covidtracking.com/data" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Visit The COVID Tracking Project →
                </a>
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Data Update Frequency</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The data presented in this application is updated according to the following schedule:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Global data: Updated daily</li>
                <li>Regional data: Updated daily</li>
                <li>Vaccination data: Updated weekly</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </main>
  );
} 