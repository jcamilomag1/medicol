import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { PiggyBank, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
const valueProps = [{
  icon: PiggyBank,
  key: 'savings'
}, {
  icon: ShieldCheck,
  key: 'excellence'
}, {
  icon: HeartHandshake,
  key: 'experience'
}];
export const ValuePropositionSection = () => {
  const {
    t
  } = useTranslation();
  return;
};