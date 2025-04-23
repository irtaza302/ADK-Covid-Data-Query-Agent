'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface MessageInputProps {
  onSendMessage: (content: string) => void;
  isLoading: boolean;
}

export function MessageInput({ onSendMessage, isLoading }: MessageInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <Textarea
        placeholder="Ask about COVID-19 statistics..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="min-h-[80px] resize-none"
        disabled={isLoading}
      />
      <Button 
        type="submit" 
        className="self-end"
        disabled={isLoading || !message.trim()}
      >
        {isLoading ? "Processing..." : "Send"}
      </Button>
    </form>
  );
} 