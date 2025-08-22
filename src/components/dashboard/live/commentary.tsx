"use client";

import { liveScoreData } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function LiveCommentary() {
    return (
        <Card className="mt-4">
            <CardHeader>
                <CardTitle className="font-headline text-xl">Ball-by-Ball Commentary</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    {liveScoreData.commentary.map((comment, index) => (
                        <div key={index}>
                            <p className="text-sm">{comment}</p>
                            {index < liveScoreData.commentary.length - 1 && <Separator className="mt-3" />}
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}