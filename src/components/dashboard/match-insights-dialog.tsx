"use client";

import { useState } from 'react';
import { Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { getMatchInsights } from '@/ai/flows/match-insights';
import type { Match } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertTitle, AlertDescription } from '../ui/alert';

interface MatchInsightsDialogProps {
  match: Match;
}

export function MatchInsightsDialog({ match }: MatchInsightsDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [insight, setInsight] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleGetInsights = async () => {
    setIsLoading(true);
    setError(null);
    setInsight(null);

    try {
      const result = await getMatchInsights({
        team1: match.team1.name,
        team2: match.team2.name,
        matchDate: match.date,
        matchTime: match.time,
        venue: match.venue,
      });
      setInsight(result.insight);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(errorMessage);
      toast({
        variant: "destructive",
        title: "Error fetching insights",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Reset state on close
      setInsight(null);
      setError(null);
      setIsLoading(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className="w-full" variant="outline">
          <Wand2 className="mr-2 h-4 w-4" />
          Get AI Insights
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline">AI Match Insights</DialogTitle>
          <DialogDescription>
            {match.team1.name} vs {match.team2.name}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {!insight && !isLoading && !error && (
            <div className='text-center space-y-4'>
                <p>Get AI-powered predictions and insights for this match.</p>
                <Button onClick={handleGetInsights}>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Generate Insights
                </Button>
            </div>
          )}
          {isLoading && (
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          )}
          {error && (
             <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {insight && <p className="text-sm whitespace-pre-wrap">{insight}</p>}
        </div>
        <DialogFooter>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
