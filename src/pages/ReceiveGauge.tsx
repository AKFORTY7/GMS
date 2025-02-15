import { ReceiveGaugeForm } from "@/components/ReceiveGaugeForm";
import { PageWrapper } from "@/components/PageWrapper";

const ReceiveGauge = () => {
  return (
    <PageWrapper
      title="Receive Gauge"
      description="Record the return of a previously issued gauge"
    >
      <ReceiveGaugeForm />
    </PageWrapper>
  );
};

export default ReceiveGauge;