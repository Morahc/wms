type DashViewProps = { title: string; description: string } & React.HTMLAttributes<HTMLDivElement>;

export default function DashViewLayout({ title, description, children }: DashViewProps) {
  return (
    <div className="space-y-6 overflow-auto">
      <div>
        <h2 className="text-xl md:text-3xl font-medium md:font-bold">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      {children}
    </div>
  );
}
