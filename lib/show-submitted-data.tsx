import { toast } from "sonner";

export function showSubmittedData(
  data: unknown,
  title: string = "You submitted the following values:"
) {
  toast.custom((t) => (
    <div className="bg-muted p-4 rounded-lg border max-w-[440px] w-full">
      <h3 className="font-medium text-sm">{title}</h3>
      <pre className="mt-2 w-full overflow-auto h-full max-h-[250px] rounded-md bg-slate-950 p-4">
        <code className="text-white w-full text-xs">{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  ));
}
