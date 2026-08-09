import React from 'react';

/**
 * ErrorBoundary — catches render errors from children (including React.use() rejections)
 * and shows a friendly fallback instead of a blank page.
 */
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, info) {
        console.error('[ErrorBoundary]', error, info);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className="flex flex-col items-center justify-center py-24 text-center px-4">
                    <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Something went wrong</h2>
                    <p className="text-gray-500 text-sm mb-5 max-w-xs">
                        We couldn't load this section. Please refresh the page or try again later.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        title="Refresh the page"
                        className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                        Refresh Page
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
