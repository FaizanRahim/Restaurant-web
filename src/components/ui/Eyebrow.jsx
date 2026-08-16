export default function Eyebrow({ children, color = "text-brandred" }) {
  return (
    <p className={`text-xs font-bold tracking-widest uppercase mb-3 font-body ${color}`}>
      {children}
    </p>
  );
}
