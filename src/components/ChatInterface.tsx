
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/components/ui/use-toast';
import { 
  MessageType, 
  BotMessageType, 
  UserMessageType, 
  bots, 
  getCurrentBot, 
  getInitialBot 
} from '@/utils/botData';
import { generateReport, ReportData, triggerReportWorkflow } from '@/utils/generateReport';

interface ChatInterfaceProps {
  className?: string;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ className }) => {
  const [currentBotId, setCurrentBotId] = useState('technical-need');
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [inputText, setInputText] = useState('');
  const [waitingForInput, setWaitingForInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [webhookUrl, setWebhookUrl] = useState('');
  const [userData, setUserData] = useState<ReportData>({
    technicalNeed: {},
    funding: {},
    procurement: {},
    acquisition: {},
    execution: {},
  });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // Initialize the chat with the first bot
  useEffect(() => {
    const initialBot = getInitialBot();
    const initialMessage = initialBot.messages[initialBot.startMessageId];
    
    if (initialMessage) {
      // Add a slight delay for UI effect
      setTimeout(() => {
        setMessages([initialMessage]);
      }, 500);
    }
  }, []);
  
  // Handle automatic scrolling when new messages are added
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Handle bot transitions
  useEffect(() => {
    if (currentBotId && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      
      if (lastMessage.type === 'bot' && lastMessage.content.includes('transitioning you to')) {
        // Find the next bot based on the current bot ID
        const currentIndex = bots.findIndex(bot => bot.id === currentBotId);
        if (currentIndex !== -1 && currentIndex < bots.length - 1) {
          const nextBot = bots[currentIndex + 1];
          
          // Transition to the next bot with a delay
          setTimeout(() => {
            setCurrentBotId(nextBot.id);
            const initialMessage = nextBot.messages[nextBot.startMessageId];
            if (initialMessage) {
              setMessages(prev => [...prev, initialMessage]);
            }
          }, 2000);
        }
      }
    }
  }, [currentBotId, messages]);
  
  // Handle bot messages with nextId or delay
  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      
      if (lastMessage.type === 'bot') {
        const botMessage = lastMessage as BotMessageType;
        
        // If the message has a nextId, send the next message after a delay
        if (botMessage.nextId && !botMessage.options) {
          const currentBot = getCurrentBot(currentBotId);
          if (currentBot && currentBot.messages[botMessage.nextId]) {
            const delay = botMessage.delay || 1000;
            setTimeout(() => {
              setMessages(prev => [...prev, currentBot.messages[botMessage.nextId as string]]);
            }, delay);
          }
        }
        
        // If the message is asking for an email, enable email input
        if (botMessage.id === 'email-prompt') {
          setWaitingForInput(true);
        }
      }
    }
  }, [messages, currentBotId]);
  
  // Final step: handle report generation
  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      
      if (lastMessage.type === 'bot' && lastMessage.id === 'thank-you') {
        handleGenerateReport();
      }
    }
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleOptionSelect = (option: { text: string; value: string; nextId?: string }) => {
    // Add user message
    const userMessage: UserMessageType = {
      id: `user-${Date.now()}`,
      type: 'user',
      content: option.text,
    };
    setMessages(prev => [...prev, userMessage]);
    
    // Store user data
    updateUserData(option.value);
    
    // Handle navigation to next message if nextId exists
    if (option.nextId) {
      const currentBot = getCurrentBot(currentBotId);
      if (currentBot && currentBot.messages[option.nextId]) {
        setTimeout(() => {
          setMessages(prev => [...prev, currentBot.messages[option.nextId as string]]);
        }, 500);
      }
    }
  };
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputText.trim()) return;
    
    // Special handling for email input
    if (waitingForInput) {
      const userMessage: UserMessageType = {
        id: `user-${Date.now()}`,
        type: 'user',
        content: inputText,
      };
      setMessages(prev => [...prev, userMessage]);
      setUserEmail(inputText);
      setUserData(prev => ({
        ...prev,
        email: inputText,
      }));
      setInputText('');
      setWaitingForInput(false);
      
      // Find and send the thank you message
      const currentBot = getCurrentBot(currentBotId);
      if (currentBot && currentBot.messages['thank-you']) {
        setTimeout(() => {
          setMessages(prev => [...prev, currentBot.messages['thank-you']]);
        }, 500);
      }
      return;
    }
    
    // Normal message handling
    const userMessage: UserMessageType = {
      id: `user-${Date.now()}`,
      type: 'user',
      content: inputText,
    };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
  };
  
  const updateUserData = (value: string) => {
    // Store the user's choices in the appropriate category
    setUserData(prev => {
      const updatedData = { ...prev };
      
      switch (currentBotId) {
        case 'technical-need':
          updatedData.technicalNeed = { ...updatedData.technicalNeed, [Date.now().toString()]: value };
          break;
        case 'funding':
          updatedData.funding = { ...updatedData.funding, [Date.now().toString()]: value };
          break;
        case 'procurement':
          updatedData.procurement = { ...updatedData.procurement, [Date.now().toString()]: value };
          break;
        case 'acquisition':
          updatedData.acquisition = { ...updatedData.acquisition, [Date.now().toString()]: value };
          break;
        case 'execution':
          updatedData.execution = { ...updatedData.execution, [Date.now().toString()]: value };
          break;
      }
      
      return updatedData;
    });
  };
  
  const handleGenerateReport = async () => {
    setIsLoading(true);
    
    try {
      // Generate and send the report
      const success = await generateReport(userData);
      
      if (success) {
        // If a webhook URL is provided, trigger the workflow
        if (webhookUrl) {
          await triggerReportWorkflow(userData, webhookUrl);
        }
        
        toast({
          title: "Report Generated",
          description: "Your federal sales strategy report has been created successfully!",
        });
      }
    } catch (error) {
      console.error("Error in report generation:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem generating your report. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSetWebhookUrl = (url: string) => {
    setWebhookUrl(url);
    if (url) {
      toast({
        title: "Webhook Set",
        description: "Your Zapier/Make.com webhook has been configured.",
      });
    }
  };
  
  const renderBotMessage = (message: BotMessageType) => (
    <div key={message.id} className="bot-message animate-slide-up">
      <p>{message.content}</p>
      {message.options && (
        <div className="flex flex-wrap gap-2 mt-3">
          {message.options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="bg-white/70 text-primary border-primary/20 hover:bg-primary/10"
              onClick={() => handleOptionSelect(option)}
            >
              {option.text}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
  
  const renderUserMessage = (message: UserMessageType) => (
    <div key={message.id} className="user-message animate-slide-up">
      <p>{message.content}</p>
    </div>
  );

  return (
    <div className={className}>
      <Tabs defaultValue="chat" className="w-full">
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="chat">Interactive Chatbot</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="chat" className="space-y-4">
          <div className="chat-container glass-card">
            <ScrollArea className="chat-messages">
              {messages.map((message) => (
                message.type === 'bot' 
                  ? renderBotMessage(message as BotMessageType)
                  : renderUserMessage(message as UserMessageType)
              ))}
              <div ref={messagesEndRef} />
            </ScrollArea>
            
            <form onSubmit={handleSendMessage} className="chat-input">
              <div className="flex space-x-2">
                <Input
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={waitingForInput ? "Enter your email address..." : "Type a message..."}
                  className="bg-transparent"
                />
                <Button 
                  type="submit" 
                  className="btn-premium"
                  disabled={!inputText.trim()}
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </TabsContent>
        
        <TabsContent value="settings" className="space-y-6">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-lg font-medium mb-4">Automation Settings</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Zapier/Make.com Webhook URL</label>
                <Input
                  value={webhookUrl}
                  onChange={(e) => handleSetWebhookUrl(e.target.value)}
                  placeholder="https://hooks.zapier.com/hooks/catch/..."
                  className="bg-white/50"
                />
                <p className="text-xs text-muted-foreground">
                  Enter your webhook URL to integrate with Zapier or Make.com automation workflows.
                </p>
              </div>
              
              <div className="pt-2">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    toast({
                      title: "Settings Saved",
                      description: "Your automation settings have been saved.",
                    });
                  }}
                >
                  Save Settings
                </Button>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-lg font-medium mb-4">Bot Configuration</h3>
            <p className="text-sm text-muted-foreground mb-4">
              This demo shows the interconnected bot system that will be implemented in Landbot.io.
              In the final implementation, these settings will be configured in Landbot's interface.
            </p>
            
            <div className="grid grid-cols-5 gap-2">
              {bots.map((bot, index) => (
                <div 
                  key={bot.id}
                  className={`p-3 rounded-lg text-center cursor-pointer transition-all ${
                    currentBotId === bot.id 
                      ? 'bg-primary text-white' 
                      : 'bg-secondary hover:bg-secondary/70'
                  }`}
                  onClick={() => {}}
                >
                  <div className="font-medium text-sm">{`Bot ${index + 1}`}</div>
                  <div className="text-xs mt-1 opacity-80">{bot.name}</div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ChatInterface;
