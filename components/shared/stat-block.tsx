import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type StatItem = {
  label: string;
  value: string | number;
  description?: string;
  Icon: React.ElementType;
};

export function StatBlock({
  data,
  children,
  ...props
}: { data: StatItem[] } & React.ComponentProps<"div">) {
  return (
    <div {...props} className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-4", props.className)}>
      {data.map(({ label, description, value, Icon }) => (
        <Card key={label}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{label}</CardTitle>
            <Icon className="size-4 text-muted-foreground" />
          </CardHeader>

          <CardContent>
            <h3 className="font-bold text-2xl">{value}</h3>
            {description && (
              <p className="text-xs font-medium tracking-wide text-muted-foreground">
                {description}
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
