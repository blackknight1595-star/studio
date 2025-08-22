'use server';

/**
 * @fileOverview Provides AI-powered match insights and predictions based on live data and historical performance.
 *
 * - getMatchInsights - A function that retrieves match insights.
 * - MatchInsightsInput - The input type for the getMatchInsights function.
 * - MatchInsightsOutput - The return type for the getMatchInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MatchInsightsInputSchema = z.object({
  team1: z.string().describe('The name of the first team.'),
  team2: z.string().describe('The name of the second team.'),
  matchDate: z.string().describe('The date of the match in ISO format (YYYY-MM-DD).'),
  matchTime: z.string().describe('The time of the match (e.g., 19:30 for 7:30 PM).'),
  venue: z.string().describe('The venue where the match is being held.'),
});
export type MatchInsightsInput = z.infer<typeof MatchInsightsInputSchema>;

const MatchInsightsOutputSchema = z.object({
  insight: z.string().describe('AI-generated insights and predictions for the match.'),
});
export type MatchInsightsOutput = z.infer<typeof MatchInsightsOutputSchema>;

export async function getMatchInsights(input: MatchInsightsInput): Promise<MatchInsightsOutput> {
  return matchInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'matchInsightsPrompt',
  input: {schema: MatchInsightsInputSchema},
  output: {schema: MatchInsightsOutputSchema},
  prompt: `You are an AI expert providing insights for IPL cricket matches.

  Provide a detailed match preview, considering team strengths, weaknesses,
  key players, historical performance, and any available live data. Based on the
  available information, generate predictions for the upcoming match.

  Team 1: {{{team1}}}
  Team 2: {{{team2}}}
  Match Date: {{{matchDate}}}
  Match Time: {{{matchTime}}}
  Venue: {{{venue}}}

  Insight:`, // No Handlebars logic
});

const matchInsightsFlow = ai.defineFlow(
  {
    name: 'matchInsightsFlow',
    inputSchema: MatchInsightsInputSchema,
    outputSchema: MatchInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
