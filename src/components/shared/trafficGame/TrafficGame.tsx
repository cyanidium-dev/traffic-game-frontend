interface TrafficGameProps {
  className?: string;
}

export default function TrafficGame({ className = "" }: TrafficGameProps) {
  return (
    <p
      className={`font-guano-apes font-normal leading-[120%] uppercase bg-clip-text text-transparent ${className}`}
    >
      Traffic game
    </p>
  );
}
