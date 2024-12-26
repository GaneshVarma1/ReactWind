import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, HelpCircle } from 'lucide-react';
import { ErrorActionButton } from './ErrorActionButton';

export const ErrorActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      icon: <Home className="w-5 h-5" />,
      label: 'Go Home',
      onClick: () => navigate('/'),
      primary: true
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      label: 'Help',
      onClick: () => navigate('/docs'),
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8"
    >
      {actions.map((action) => (
        <ErrorActionButton key={action.label} {...action} />
      ))}
    </motion.div>
  );
};