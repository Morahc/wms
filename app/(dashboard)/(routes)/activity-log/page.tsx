import ActivityWrapper from "@/features/activity/components/activity-wrapper";

export default function Activity() {
  return (
    <div className="space-y-3 md:space-y-6">
      <div>
        <h2 className="text-xl md:text-3xl font-medium md:font-bold">Activity Log</h2>
        <p className="text-sm md:text-base text-muted-foreground">
          Track system events, changes and audit trails across your organization.
        </p>
      </div>
      <ActivityWrapper />
    </div>
  );
}
