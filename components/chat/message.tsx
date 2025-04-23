import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Message as MessageType } from "@/lib/types";

interface MessageProps {
  message: MessageType;
}

export function Message({ message }: MessageProps) {
  const isUser = message.role === "user";
  
  return (
    <div className={cn(
      "flex w-full gap-2 p-2",
      isUser ? "justify-end" : "justify-start"
    )}>
      {!isUser && (
        <Avatar className="h-8 w-8">
          <AvatarImage src="/assistant-avatar.png" alt="Assistant" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
      )}
      
      <Card className={cn(
        "max-w-[80%] overflow-hidden",
        isUser ? "bg-primary text-primary-foreground" : "bg-card"
      )}>
        <CardContent className="p-3">
          <p className="text-sm">{message.content}</p>
        </CardContent>
      </Card>
      
      {isUser && (
        <Avatar className="h-8 w-8">
          <AvatarImage src="/user-avatar.png" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
} 