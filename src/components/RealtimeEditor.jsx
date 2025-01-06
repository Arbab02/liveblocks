import { useStorage, useMyPresence, useOthers } from "@/lib/liveblocks";

const RealtimeEditor = () => {
  const [text, setText] = useStorage((root) => root?.text || ""); // Safely access text
  const [presence, updatePresence] = useMyPresence();
  const others = useOthers();

  const handleCursorMove = (e) => {
    updatePresence({ cursor: { x: e.clientX, y: e.clientY } });
  };

  return (
    <div onMouseMove={handleCursorMove} className="relative p-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-[300px] p-4 border rounded-md shadow"
        placeholder="Start typing..."
      />
      {others.map(({ connectionId, presence }) =>
        presence?.cursor ? (
          <div
            key={connectionId}
            className="absolute w-3 h-3 bg-blue-500 rounded-full"
            style={{
              left: presence.cursor.x,
              top: presence.cursor.y,
            }}
          />
        ) : null
      )}
    </div>
  );
};

export default RealtimeEditor;
