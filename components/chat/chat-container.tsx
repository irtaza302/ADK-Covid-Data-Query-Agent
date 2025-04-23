'use client';

import { useState } from 'react';
import { MessageList } from './message-list';
import { MessageInput } from './message-input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Message, ChatState } from '@/lib/types';

export function ChatContainer() {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    isLoading: false,
  });

  const handleSendMessage = async (content: string) => {
    // Create a new user message
    const userMessage: Message = {
      id: crypto.randomUUID(),
      content,
      role: 'user',
      timestamp: new Date(),
    };

    // Update state with user message and loading indicator
    setChatState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
    }));

    try {
      // In a real app, this would be an API call to your backend
      // For now, we'll simulate a response after a short delay
      setTimeout(() => {
        const assistantMessage: Message = {
          id: crypto.randomUUID(),
          content: `This is a simulated response to: "${content}".\nIn a real app, this would come from your COVID-19 data query backend.`,
          role: 'assistant',
          timestamp: new Date(),
        };

        setChatState((prev) => ({
          ...prev,
          messages: [...prev.messages, assistantMessage],
          isLoading: false,
        }));
      }, 1000);
    } catch (error) {
      console.error('Error sending message:', error);
      setChatState((prev) => ({
        ...prev,
        isLoading: false,
        error: 'Failed to get a response. Please try again.',
      }));
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>COVID-19 Data Assistant</CardTitle>
      </CardHeader>
      <CardContent>
        <MessageList messages={chatState.messages} />
      </CardContent>
      <CardFooter>
        <MessageInput 
          onSendMessage={handleSendMessage} 
          isLoading={chatState.isLoading} 
        />
      </CardFooter>
    </Card>
  );
} 