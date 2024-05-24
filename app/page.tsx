"use client";

import { useChat } from "ai/react";
import { Send } from "lucide-react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "api/genai",
  });
  return (
    <main className="flex min-h-screen flex-col items-center  p-12">
      {/* form element */}
      {RenderForm()}
      {RenderMessages()}
      {/* rendering messges */}
    </main>
  );
}

function RenderForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(event, {
          data: {
            propmt: input,
          },
        });
      }}
      className="w-full flex flex-row gap-2 items-center h-full"
    >
      <input
        type="text"
        placeholder="ask something..."
        value={input}
        onChange={handleInputChange}
        className="border-b border-dashed outline-none w-full px-4 py-2 text-[#0842a0] placeholder:text-[#0842a099] text-right focus:placeholder-transparent"
      />
      <button type="submit" className="rounded-full shadow-md border flex flex-row">
        <Send className="p-3 h-10 w-10 stroke-stone-500" />
      </button>
      {/* input */}
      {/* send button */}
    </form>
  );
}

function RenderMessages() {}
