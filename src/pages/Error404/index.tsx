import React from 'react';
import { ErrorContent } from './ErrorContent';
import { ErrorActions } from './ErrorActions';
import { ErrorAnimation } from './ErrorAnimation';

export const Error404 = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ErrorContent />
            <ErrorAnimation />
          </div>
          <ErrorActions />
        </div>
      </div>
    </div>
  );
};