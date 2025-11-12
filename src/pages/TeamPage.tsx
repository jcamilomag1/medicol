import Layout from '@/components/Layout';
import TeamHeroSection from '@/components/team/TeamHeroSection';
import TeamSocialProof from '@/components/team/TeamSocialProof';
import TeamAdminSection from '@/components/team/TeamAdminSection';
import TeamTestimonialBanner from '@/components/team/TeamTestimonialBanner';
import TeamProcessTimeline from '@/components/team/TeamProcessTimeline';
import TeamCTASection from '@/components/team/TeamCTASection';
import { TeamPreview } from '@/components/sections/TeamPreview';

const TeamPage = () => {
  return (
    <Layout>
      <TeamHeroSection />
      <TeamSocialProof />
      <TeamAdminSection />
      <TeamTestimonialBanner />
      <TeamPreview />
      <TeamProcessTimeline />
      <TeamCTASection />
    </Layout>
  );
};

export default TeamPage;
