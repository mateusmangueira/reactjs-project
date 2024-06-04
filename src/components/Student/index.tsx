interface StudentProps {
  name: string;
  age?: number;
  city?: string;
}

export default function Student({ name, age, city }: StudentProps) {
  return (
    <div>
      <h1>Aluno: {name}</h1>
      {age && <p>Idade: {age}</p>}
      {city && <p>Cidade: {city}</p>}
    </div>
  );
}
