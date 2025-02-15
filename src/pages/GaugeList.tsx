import { GaugeTable } from "@/components/GaugeTable";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { PageWrapper } from "@/components/PageWrapper";

export default function GaugeList() {
  return (
    <PageWrapper title="Gauge List">
      <div className="flex justify-end mb-6">
        <Button asChild className="bg-secondary hover:bg-secondary/90">
          <Link to="/gauge/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Gauge
          </Link>
        </Button>
      </div>
      <GaugeTable />
    </PageWrapper>
  );
}