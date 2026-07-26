export default function SectionLabel({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="dim-line mb-10">
      <span className="shrink-0 text-accent-ink">SECTION {index}</span>
      <span className="shrink-0">{title}</span>
    </div>
  );
}
