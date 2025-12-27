import PreferenceForm from "@/features/preference/components/preference-form";

export default function PreferencePage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl md:text-3xl font-medium md:font-bold">User Preference</h2>
        <p className="text-muted-foreground">
          Customize the appearance of the app. Automatically switch between day and night themes.
        </p>
      </div>
      <PreferenceForm />
    </div>
  );
}
