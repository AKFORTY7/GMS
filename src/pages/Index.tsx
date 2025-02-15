import { Dashboard } from "@/components/Dashboard";
import { PageWrapper } from "@/components/PageWrapper";

const Index = () => {
  return (
    <PageWrapper
      title="Dashboard"
      description="Overview of your gauge management system"
    >
      <Dashboard />
    </PageWrapper>
  );
};

export default Index;