"use client";

import { liveScoreData } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const getEventVariant = (event: string) => {
    switch(event.toUpperCase()) {
        case 'SIX':
        case 'FOUR':
            return 'destructive';
        case 'W':
            return 'secondary';
        default:
            return 'outline';
    }
}

export default function LiveCommentary() {
    return (
        <Card className="mt-4">
            <CardHeader>
                <CardTitle className="font-headline text-xl">Ball-by-Ball Commentary</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {liveScoreData.commentary.map((comment, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="flex flex-col items-center">
                                <span className="text-xs text-muted-foreground">{comment.ball}</span>
                                <Badge variant={getEventVariant(comment.event)} className="mt-1 w-10 justify-center">{comment.event}</Badge>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm">{comment.description}</p>
                                {index < liveScoreData.commentary.length - 1 && <Separator className="mt-4" />}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
