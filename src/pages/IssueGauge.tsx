import { IssueGaugeForm } from "@/components/IssueGaugeForm";
import { PageWrapper } from "@/components/PageWrapper";

const IssueGauge = () => {
  return (
    <PageWrapper
      title="Issue Gauge"
      description="Issue a gauge to a user or department"
    >
      <IssueGaugeForm />
    </PageWrapper>
  );
};

export default IssueGauge;