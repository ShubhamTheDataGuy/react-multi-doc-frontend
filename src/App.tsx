import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { LandingPage } from "./components/LandingPage";
import { FeaturesPage } from "./components/FeaturesPage";
import { FileUpload } from "./components/FileUpload";
import { ChatInterface } from "./components/ChatInterface";

type View = "landing" | "features" | "upload" | "chat";

export default function App() {
  const [currentView, setCurrentView] = useState<View>("landing");
  const [sessionId, setSessionId] = useState<string | null>(null);

  const handleNavigate = (view: View) => {
    setCurrentView(view);
  };

  const handleUploadSuccess = (newSessionId: string) => {
    setSessionId(newSessionId);
    setCurrentView("chat");
  };

  const handleNewSession = () => {
    setSessionId(null);
    setCurrentView("upload");
  };

  const renderContent = () => {
    switch (currentView) {
      case "landing":
        return <LandingPage onGetStarted={() => setCurrentView("upload")} />;
      case "features":
        return <FeaturesPage onGetStarted={() => setCurrentView("upload")} />;
      case "upload":
        return <FileUpload onUploadSuccess={handleUploadSuccess} />;
      case "chat":
        return sessionId ? (
          <ChatInterface sessionId={sessionId} onNewSession={handleNewSession} />
        ) : (
          <FileUpload onUploadSuccess={handleUploadSuccess} />
        );
      default:
        return <LandingPage onGetStarted={() => setCurrentView("upload")} />;
    }
  };

  const showHeaderFooter = currentView !== "chat";

  return (
    <div className="min-h-screen flex flex-col">
      {showHeaderFooter && <Header currentView={currentView} onNavigate={handleNavigate} />}
      <main className="flex-1">
        {renderContent()}
      </main>
      {showHeaderFooter && <Footer />}
    </div>
  );
}
