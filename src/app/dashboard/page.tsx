"use client"

import {
  CalendarDays,
  RadioTower,
  ListOrdered,
  Trophy,
  LogOut,
  UserCircle
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MatchSchedule from "@/components/dashboard/match-schedule";
import LiveScore from "@/components/dashboard/live-score";
import PointsTable from "@/components/dashboard/points-table";
import Leaderboards from "@/components/dashboard/leaderboards";
import { CricketIcon } from "@/components/icons/cricket-icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    // In a real app, clear session/token here
    router.push('/');
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
        <div className="flex items-center gap-2 font-semibold">
          <CricketIcon className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl">CricTracker Live</span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <UserCircle className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-500">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 p-4 sm:p-6">
        <Tabs defaultValue="schedule" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
            <TabsTrigger value="schedule" className="py-2">
              <CalendarDays className="mr-2 h-4 w-4" />
              Schedule
            </TabsTrigger>
            <TabsTrigger value="live" className="py-2">
              <RadioTower className="mr-2 h-4 w-4" />
              Live
            </TabsTrigger>
            <TabsTrigger value="points" className="py-2">
              <ListOrdered className="mr-2 h-4 w-4" />
              Points Table
            </TabsTrigger>
            <TabsTrigger value="leaders" className="py-2">
              <Trophy className="mr-2 h-4 w-4" />
              Leaderboards
            </TabsTrigger>
          </TabsList>
          <TabsContent value="schedule" className="mt-4">
            <MatchSchedule />
          </TabsContent>
          <TabsContent value="live" className="mt-4">
            <LiveScore />
          </TabsContent>
          <TabsContent value="points" className="mt-4">
            <PointsTable />
          </TabsContent>
          <TabsContent value="leaders" className="mt-4">
            <Leaderboards />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
