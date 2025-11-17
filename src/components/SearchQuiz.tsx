import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface SearchQuizProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SearchQuiz = ({ open, onOpenChange }: SearchQuizProps) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    budget: "",
    size: "",
    usage: "",
  });

  const handleAnswer = (field: keyof typeof answers, value: string) => {
    setAnswers({ ...answers, [field]: value });
    if (step < 3) {
      setStep(step + 1);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Encontre Sua TV Ideal</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Qual seu orçamento?</h3>
              <div className="grid grid-cols-1 gap-3">
                {["Até R$ 1.000", "R$ 1.000 - R$ 2.000", "R$ 2.000 - R$ 3.500", "Acima de R$ 3.500"].map((option) => (
                  <Button
                    key={option}
                    variant="outline"
                    onClick={() => handleAnswer("budget", option)}
                    className="justify-start h-auto py-4 hover:bg-primary hover:text-primary-foreground"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Qual tamanho prefere?</h3>
              <div className="grid grid-cols-1 gap-3">
                {["32 polegadas", "40-43 polegadas", "50-55 polegadas", "58 polegadas ou mais"].map((option) => (
                  <Button
                    key={option}
                    variant="outline"
                    onClick={() => handleAnswer("size", option)}
                    className="justify-start h-auto py-4 hover:bg-primary hover:text-primary-foreground"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Principal uso?</h3>
              <div className="grid grid-cols-1 gap-3">
                {["Filmes e Séries", "Games", "TV Aberta", "Streaming (Netflix, Prime)"].map((option) => (
                  <Button
                    key={option}
                    variant="outline"
                    onClick={() => {
                      handleAnswer("usage", option);
                      // Aqui você pode adicionar lógica para mostrar recomendações
                      setTimeout(() => {
                        onOpenChange(false);
                        setStep(1);
                        setAnswers({ budget: "", size: "", usage: "" });
                      }, 500);
                    }}
                    className="justify-start h-auto py-4 hover:bg-primary hover:text-primary-foreground"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-center gap-2 pt-4">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 w-2 rounded-full transition-colors ${
                  s === step ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
