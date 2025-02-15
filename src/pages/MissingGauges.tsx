import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MissingGaugesList } from "@/components/missing-gauges/MissingGaugesList";
import { ReportMissingForm } from "@/components/missing-gauges/ReportMissingForm";
import { UpdateFoundForm } from "@/components/missing-gauges/UpdateFoundForm";
import { PageWrapper } from "@/components/PageWrapper";

export default function MissingGauges() {
  const [activeTab, setActiveTab] = useState("list");

  return (
    <PageWrapper title="Missing/Found Gauges">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="bg-primary/10">
          <TabsTrigger value="list" className="data-[state=active]:bg-primary data-[state=active]:text-white">
            Missing Gauges List
          </TabsTrigger>
          <TabsTrigger value="report" className="data-[state=active]:bg-primary data-[state=active]:text-white">
            Report Missing
          </TabsTrigger>
          <TabsTrigger value="found" className="data-[state=active]:bg-primary data-[state=active]:text-white">
            Update Found
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="list" className="space-y-4">
          <MissingGaugesList />
        </TabsContent>
        
        <TabsContent value="report">
          <ReportMissingForm />
        </TabsContent>
        
        <TabsContent value="found">
          <UpdateFoundForm />
        </TabsContent>
      </Tabs>
    </PageWrapper>
  );
}