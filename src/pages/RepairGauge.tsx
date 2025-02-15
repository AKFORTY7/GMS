import { GaugeRepairForm } from "@/components/GaugeRepairForm";
import { PageWrapper } from "@/components/PageWrapper";

const RepairGauge = () => {
  return (
    <PageWrapper
      title="Repair Gauge"
      description="Create a new repair record for a gauge"
    >
      <div className="max-w-4xl mx-auto">
        <GaugeRepairForm />
      </div>
    </PageWrapper>
  );
};

export default RepairGauge;