export function ToolTags({ items }: { items: string[] }) {
  return (
    <ul className="tool-tags" aria-label="Tools and topics">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
