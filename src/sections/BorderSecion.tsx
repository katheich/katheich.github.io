import './BorderSection.css';

interface BorderSectionProps {
  left: boolean;
}

export function BorderSection({ left }: BorderSectionProps) {
  if (left) {
    return (
      <div className="borderWrap">
        <div className="borderLeft" />
      </div>
    );
  }
  return (
    <div className="borderWrap">
      <div className="border" />
    </div>
  );
}
