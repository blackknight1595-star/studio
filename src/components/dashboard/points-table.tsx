import Image from 'next/image';
import { pointsTable } from '@/lib/mock-data';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PointsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">IPL Points Table</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">Pos</TableHead>
                <TableHead>Team</TableHead>
                <TableHead className="text-center">Pld</TableHead>
                <TableHead className="text-center">Won</TableHead>
                <TableHead className="text-center">Lost</TableHead>
                <TableHead className="text-center">N/R</TableHead>
                <TableHead className="text-center">Pts</TableHead>
                <TableHead className="text-right">NRR</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pointsTable.map((entry) => (
                <TableRow key={entry.team.id}>
                  <TableCell className="font-medium">{entry.position}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Image
                        src={entry.team.logo}
                        alt={entry.team.name}
                        width={24}
                        height={24}
                        className="rounded-full"
                        data-ai-hint={`${entry.team.name} logo`}
                      />
                      <span className="font-medium hidden sm:inline">{entry.team.name}</span>
                      <span className="font-medium sm:hidden">{entry.team.shortName}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">{entry.played}</TableCell>
                  <TableCell className="text-center">{entry.won}</TableCell>
                  <TableCell className="text-center">{entry.lost}</TableCell>
                  <TableCell className="text-center">{entry.nr}</TableCell>
                  <TableCell className="text-center font-bold">{entry.points}</TableCell>
                  <TableCell className="text-right">{entry.nrr}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
