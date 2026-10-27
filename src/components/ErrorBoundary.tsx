import { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Home, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

// Matches chunk-load failures across browsers/bundlers.
function isChunkLoadError(err?: Error): boolean {
  if (!err) return false;
  const msg = `${err.name || ''} ${err.message || ''}`;
  return /Failed to fetch dynamically imported module|Importing a module script failed|error loading dynamically imported module|ChunkLoadError|Loading chunk [\w-]+ failed|Unable to preload CSS/i.test(msg);
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      // PR-252: when the failure is a code-split chunk that didn't load
      // (Googlebot's renderer routinely skips some JS fetches; flaky mobile
      // networks do too), show the prerendered page content main.tsx saved
      // before React mounted — NOT the error screen. The error screen was
      // being indexed by Google as a Soft 404 on real pages (/about-us,
      // /reviews, job stories, blogs: 35 URLs as of Oct 25, 2026).
      const prerendered =
        typeof window !== 'undefined' ? (window as any).__PRERENDERED_HTML__ : '';
      if (prerendered && isChunkLoadError(this.state.error)) {
        return <div id="seo-static-fallback" dangerouslySetInnerHTML={{ __html: prerendered }} />;
      }
      return (
        <div className="min-h-screen bg-[#09090b] flex items-center justify-center px-4">
          <div className="max-w-2xl w-full text-center">
            <div className="bg-gradient-to-br from-red-600/10 to-red-500/5 border border-red-600/20 rounded-2xl p-8 sm:p-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-full mb-6">
                <RefreshCw className="w-8 h-8 text-red-500" />
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Something Went Wrong
              </h1>

              <p className="text-zinc-400 text-lg mb-8">
                We encountered an unexpected error while loading this page. Please try refreshing or return to the homepage.
              </p>

              {this.state.error && (
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mb-8 text-left overflow-auto max-h-64">
                  <p className="text-red-400 text-sm font-mono mb-2 font-bold">
                    Error: {this.state.error.message}
                  </p>
                  {this.state.error.stack && (
                    <pre className="text-zinc-400 text-xs font-mono whitespace-pre-wrap">
                      {this.state.error.stack}
                    </pre>
                  )}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300"
                >
                  <RefreshCw className="w-5 h-5" />
                  Refresh Page
                </button>

                <Link
                  to="/"
                  onClick={this.handleReset}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 text-white font-semibold rounded-lg hover:bg-zinc-700 transition-all duration-300 border border-zinc-700"
                >
                  <Home className="w-5 h-5" />
                  Go to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
