import { Card, CardContent, CardHeader } from "./card";

const FeatureCard = ({ number, title, description }: { number: string; title: string; description: string }) => {
    return (
        <Card className="h-full flex flex-col justify-between gap-4 rounded-lg">
            <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center border-b border-primary text-sm font-semibold text-primary">
                    {number}
                </div>
            </CardHeader>
            <CardContent>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
};

export default FeatureCard;