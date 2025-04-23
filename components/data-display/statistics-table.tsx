import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { DataVisualizationProps } from "@/lib/types";

export function StatisticsTable({ statistics, title }: DataVisualizationProps) {
  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableCaption>{title}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Region</TableHead>
            <TableHead>Country</TableHead>
            <TableHead className="text-right">Cases</TableHead>
            <TableHead className="text-right">Deaths</TableHead>
            <TableHead className="text-right">Vaccinations</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {statistics.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                No data available
              </TableCell>
            </TableRow>
          ) : (
            statistics.map((stat) => (
              <TableRow key={`${stat.date}-${stat.region}-${stat.country}`}>
                <TableCell>{stat.date}</TableCell>
                <TableCell>{stat.region}</TableCell>
                <TableCell>{stat.country}</TableCell>
                <TableCell className="text-right">{stat.cases?.toLocaleString() ?? "N/A"}</TableCell>
                <TableCell className="text-right">{stat.deaths?.toLocaleString() ?? "N/A"}</TableCell>
                <TableCell className="text-right">{stat.vaccinations?.toLocaleString() ?? "N/A"}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
} 