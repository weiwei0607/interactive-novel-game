import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
            <div className="text-5xl mb-4">💥</div>
            <h2 className="text-xl font-bold mb-2">出錯了</h2>
            <p className="text-sm text-slate-400 mb-6">
              {this.state.error?.message || '發生未知錯誤'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-xl bg-amber-700 text-white text-sm font-medium hover:bg-amber-600 transition-colors"
            >
              重新整理
            </button>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
