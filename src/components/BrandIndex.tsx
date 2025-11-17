import { Link } from "react-router-dom";
import { ChevronRight, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface BrandModel {
  name: string;
  path: string;
  badge?: string;
}

interface BrandQuestion {
  question: string;
}

interface BrandIndexProps {
  name: string;
  logo?: string;
  models: BrandModel[];
  questions: BrandQuestion[];
  path: string;
  rating: number;
  image: string;
}

export const BrandIndex = ({ name, models, questions, path, rating, image }: BrandIndexProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={name} className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm">
        <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
          <div className="flex items-center gap-4 w-full">
            <img 
              src={image} 
              alt={`TV ${name}`}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1 text-left">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                📺 {name.toUpperCase()}
                <span className="text-sm font-normal text-muted-foreground">
                  - Análises Completas
                </span>
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {models.length} modelos analisados
                </span>
              </div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-6">
          <div className="space-y-6">
            {/* Modelos mais buscados */}
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-primary">▸</span> Modelos mais buscados:
              </h4>
              <div className="space-y-2 pl-4">
                {models.map((model) => (
                  <Link
                    key={model.path}
                    to={model.path}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    <span>{model.name}</span>
                    {model.badge && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                        {model.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Principais dúvidas */}
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-accent">▸</span> Principais dúvidas:
              </h4>
              <div className="space-y-2 pl-4">
                {questions.map((q, index) => (
                  <div key={index} className="flex items-start gap-2 text-muted-foreground">
                    <ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">"{q.question}"</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Link para página da marca */}
            <Link
              to={path}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-accent text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Ver todos os modelos {name} →
            </Link>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
