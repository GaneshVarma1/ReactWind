import React from 'react';
import { FooterMinimal } from './FooterMinimal';
import { FooterApp } from './FooterApp';
import { FooterNewsletter } from './FooterNewsletter';

export const Footer = () => {
  const isComponentsPage = window.location.pathname === '/components';

  if (isComponentsPage) {
    return (
      <div className="space-y-16 bg-white dark:bg-gray-900">
        <FooterMinimal />
        <FooterApp />
        <FooterNewsletter />
      </div>
    );
  }

  return <FooterMinimal />;
};