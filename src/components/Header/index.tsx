import "./styles.css";

interface headerProps {
  title: string;
}

export default function Header({ title }: headerProps) {
  return (
    <header className="header">
      <h1 className="title">{title}</h1>
      <hr />
    </header>
  );
}
