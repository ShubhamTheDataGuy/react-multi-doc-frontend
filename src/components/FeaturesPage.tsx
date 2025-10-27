import {
  FileText,
  Zap,
  Shield,
  Globe,
  Code,
  BarChart,
  Download,
  Search,
  Brain,
} from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface FeaturesPageProps {
  onGetStarted: () => void;
}

export function FeaturesPage({ onGetStarted }: FeaturesPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-600 hover:bg-blue-100">
            Features
          </Badge>
          <h1 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Everything You Need for Document Intelligence
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help you extract maximum value from your documents
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl w-fit mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h2 className="mb-3">Advanced RAG Technology</h2>
              <p className="text-gray-600 mb-6">
                Our system uses state-of-the-art Retrieval-Augmented Generation (RAG) with Maximum Marginal Relevance (MMR) to ensure you get the most accurate and diverse answers from your documents.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-green-100 rounded-full mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                  </div>
                  <span className="text-gray-700">Semantic search with vector embeddings</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-green-100 rounded-full mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                  </div>
                  <span className="text-gray-700">Context-aware answer generation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-green-100 rounded-full mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                  </div>
                  <span className="text-gray-700">Multi-document cross-referencing</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl w-fit mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h2 className="mb-3">Multi-Format Support</h2>
              <p className="text-gray-600 mb-6">
                Upload and process documents in various formats. Our intelligent parser handles different file types seamlessly.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <FileText className="w-6 h-6 text-blue-600 mb-2" />
                  <p className="text-sm text-gray-900">PDF Documents</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <FileText className="w-6 h-6 text-purple-600 mb-2" />
                  <p className="text-sm text-gray-900">Word Files</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <FileText className="w-6 h-6 text-green-600 mb-2" />
                  <p className="text-sm text-gray-900">Text Files</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <FileText className="w-6 h-6 text-orange-600 mb-2" />
                  <p className="text-sm text-gray-900">Markdown</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Additional Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="mb-2">Lightning Fast</h3>
              <p className="text-gray-600 text-sm">
                FAISS-powered vector search delivers results in milliseconds, even with large document collections.
              </p>
            </Card>

            <Card className="p-6">
              <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="mb-2">Secure & Private</h3>
              <p className="text-gray-600 text-sm">
                Your documents are processed securely with isolated session management and encrypted storage.
              </p>
            </Card>

            <Card className="p-6">
              <div className="p-3 bg-purple-100 rounded-lg w-fit mb-4">
                <Search className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="mb-2">Smart Search</h3>
              <p className="text-gray-600 text-sm">
                MMR algorithm ensures diverse and relevant results, avoiding redundant information.
              </p>
            </Card>

            <Card className="p-6">
              <div className="p-3 bg-orange-100 rounded-lg w-fit mb-4">
                <Globe className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="mb-2">RESTful API</h3>
              <p className="text-gray-600 text-sm">
                Integrate with your applications using our well-documented FastAPI backend.
              </p>
            </Card>

            <Card className="p-6">
              <div className="p-3 bg-pink-100 rounded-lg w-fit mb-4">
                <BarChart className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="mb-2">Analytics</h3>
              <p className="text-gray-600 text-sm">
                Track usage, monitor performance, and gain insights into your document queries.
              </p>
            </Card>

            <Card className="p-6">
              <div className="p-3 bg-indigo-100 rounded-lg w-fit mb-4">
                <Download className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="mb-2">Export Chat</h3>
              <p className="text-gray-600 text-sm">
                Download your conversation history and insights in multiple formats.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
            <h2 className="mb-4 text-white">Ready to Experience These Features?</h2>
            <p className="mb-8 max-w-2xl mx-auto opacity-90">
              Upload your documents and start asking questions with our free, open-source RAG chatbot
            </p>
            <Button
              onClick={onGetStarted}
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Get Started Now
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
