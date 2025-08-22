"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LiveScorecard() {
    return (
        <Card className="mt-4">
            <CardHeader>
                <CardTitle className="font-headline text-xl">Scorecard</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Scorecard will be displayed here.</p>
            </CardContent>
        </Card>
    );
}