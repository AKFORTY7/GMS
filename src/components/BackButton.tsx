import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      onClick={() => navigate(-1)}
      className="mb-4 text-primary hover:text-primary/80"
    >
      <ChevronLeft className="mr-1 h-4 w-4" />
      Back
    </Button>
  );
}