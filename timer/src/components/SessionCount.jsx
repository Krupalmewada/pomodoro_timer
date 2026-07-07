export default function SessionCount({ sessions }) {
  return (
    <p className="text-center text-xs text-gray-500 font-mono mt-2">
      {sessions} session{sessions !== 1 ? "s" : ""} completed
    </p>
  );
}
