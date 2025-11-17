import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface BrandCardProps {
  name: string;
  description: string;
  path: string;
  image: string;
  models: number;
}

export const BrandCard = ({ name, description, path, image, models }: BrandCardProps) => {
  return (
    <Link to={path}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
        <div className="relative h-48 overflow-hidden bg-gradient-subtle">
          <img 
            src={image} 
            alt={`TV ${name}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="text-sm opacity-90">{models} modelos analisados</p>
          </div>
        </div>
        <CardContent className="p-6">
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
            Ver análises completas
            <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
