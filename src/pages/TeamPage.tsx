import Layout from '@/components/Layout';
import TeamHeroSection from '@/components/team/TeamHeroSection';
import TeamSocialProof from '@/components/team/TeamSocialProof';
import TeamAdminSection from '@/components/team/TeamAdminSection';
import TeamTestimonialBanner from '@/components/team/TeamTestimonialBanner';
import TeamMedicalSection from '@/components/team/TeamMedicalSection';
import TeamProcessTimeline from '@/components/team/TeamProcessTimeline';
import TeamSupportNetwork from '@/components/team/TeamSupportNetwork';
import TeamCTASection from '@/components/team/TeamCTASection';

const TeamPage = () => {
  return (
    <Layout>
      <TeamHeroSection />
      <TeamSocialProof />
      <TeamAdminSection />
      <TeamTestimonialBanner />
      <TeamMedicalSection />
      <TeamProcessTimeline />
      <TeamSupportNetwork />
      <TeamCTASection />
    </Layout>
  );
};

export default TeamPage;
