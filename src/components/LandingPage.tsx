import {
  Upload,
  Brain,
  Zap,
  Shield,
  FileSearch,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Play,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600">
                Powered by Advanced AI & RAG Technology
              </span>
            </div>
            <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transform Your Documents Into Conversations
            </h1>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Upload any document and get instant, accurate answers to your questions. 
              Our AI-powered system uses Retrieval-Augmented Generation to understand 
              your documents and provide contextual responses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={onGetStarted}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 gap-2"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => {
                  const demoSection = document.getElementById('demo-section');
                  demoSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Play className="w-4 h-4" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div>
                <div className="text-blue-600 mb-1">Fast</div>
                <div className="text-sm text-gray-600">Instant Results</div>
              </div>
              <div>
                <div className="text-purple-600 mb-1">Smart</div>
                <div className="text-sm text-gray-600">AI-Powered RAG</div>
              </div>
              <div>
                <div className="text-blue-600 mb-1">Free</div>
                <div className="text-sm text-gray-600">Open Source</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Powerful Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to extract knowledge from your documents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <Upload className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="mb-2">Multi-Document Upload</h3>
              <p className="text-gray-600">
                Upload multiple documents at once. Supports PDF, DOCX, TXT and more formats.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-purple-100 rounded-lg w-fit mb-4">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="mb-2">AI-Powered Search</h3>
              <p className="text-gray-600">
                Advanced RAG technology with MMR for accurate and diverse answers.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Get instant answers with our optimized vector search and retrieval system.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-orange-100 rounded-lg w-fit mb-4">
                <MessageSquare className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="mb-2">Conversational UI</h3>
              <p className="text-gray-600">
                Natural conversation flow with context awareness across messages.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-pink-100 rounded-lg w-fit mb-4">
                <FileSearch className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="mb-2">Smart Indexing</h3>
              <p className="text-gray-600">
                FAISS-powered vector storage for efficient semantic search.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-indigo-100 rounded-lg w-fit mb-4">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="mb-2">Secure Sessions</h3>
              <p className="text-gray-600">
                Each session is isolated and secure with unique session management.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo-section" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">See It In Action</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch how MultiDocChat transforms document Q&A with AI-powered intelligence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
              <video 
                className="w-full h-full object-cover"
                controls
              >
                <source src="/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                1
              </div>
              <h3 className="mb-2">Upload Documents</h3>
              <p className="text-gray-600">
                Drag and drop your documents or browse to upload. Multiple files supported.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                2
              </div>
              <h3 className="mb-2">AI Processes</h3>
              <p className="text-gray-600">
                Our AI indexes your documents and creates a searchable knowledge base.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                3
              </div>
              <h3 className="mb-2">Ask Questions</h3>
              <p className="text-gray-600">
                Start chatting and get accurate answers based on your document content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-white">Ready to Get Started?</h2>
          <p className="mb-8 max-w-2xl mx-auto opacity-90">
            Start transforming your documents into intelligent conversations today.
          </p>
          <Button
            onClick={onGetStarted}
            className="bg-white text-blue-600 hover:bg-gray-100 gap-2"
          >
            Start Now
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
