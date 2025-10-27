import { FileText, Github, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-white">MultiDocChat</span>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              A student project showcasing AI-driven document question answering. Upload your documents and get instant, accurate answers using advanced RAG technology.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/ShubhamTheDataGuy"
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:shubhamnagpal789@gmail.com"
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="https://github.com/ShubhamTheDataGuy/multi_doc_project" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://github.com/ShubhamTheDataGuy/react-multi-doc-frontend" className="hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center text-gray-400">
          <p>&copy; 2025 MultiDocChat. A Student Project.</p>
        </div>
      </div>
    </footer>
  );
}
