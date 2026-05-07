export default function SectionTitle({ children, id }) {
  return (
    <div className="section-title">
      <h2 id={id}>{children}</h2>
    </div>
  );
}
