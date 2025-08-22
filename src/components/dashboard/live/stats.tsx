"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LiveStats() {
    return (
        <Card className="mt-4">
            <CardHeader>
                <CardTitle className="font-headline text-xl">Stats</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Match stats will be displayed here.</p>
            </CardContent>
        </Card>
    );
}