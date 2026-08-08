import React from 'react';

/**
 * SkeletonCard — shimmer placeholder shown while content loads.
 * Props:
 *   - lines: number of text lines to render (default 3)
 *   - showImage: whether to show an image placeholder (default true)
 */
const SkeletonCard = ({ lines = 3, showImage = true }) => {
    return (
        <div
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            aria-hidden="true"
            aria-label="Loading..."
        >
            {showImage && (
                <div className="shimmer w-full h-44" />
            )}
            <div className="p-5 space-y-3">
                <div className="shimmer h-5 w-2/3 rounded-full" />
                {Array.from({ length: lines }).map((_, i) => (
                    <div
                        key={i}
                        className="shimmer rounded-full"
                        style={{
                            height: '14px',
                            width: `${90 - i * 15}%`,
                        }}
                    />
                ))}
                <div className="pt-2 flex items-center justify-between">
                    <div className="shimmer h-8 w-24 rounded-full" />
                    <div className="shimmer h-8 w-20 rounded-full" />
                </div>
            </div>
        </div>
    );
};

/**
 * SkeletonGrid — renders N SkeletonCards in a responsive grid.
 */
export const SkeletonGrid = ({ count = 6 }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: count }).map((_, i) => (
            <SkeletonCard key={i} />
        ))}
    </div>
);

export default SkeletonCard;
