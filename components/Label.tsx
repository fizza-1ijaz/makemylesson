type LabelProps = {
  children: React.ReactNode;
};

export function Label({ children }: LabelProps) {
  return <span className="hero-eyebrow">{children}</span>;
}
