import { HomeHero } from '../components/home/HomeHero';
import { CourseInfo } from '../components/CourseInfo';
import { RegistrationForm } from '../components/RegistrationForm';
import { ParticipantList } from '../components/ParticipantList';

export function Home() {
  return (
    <div>
      <HomeHero />
      <CourseInfo />
      <RegistrationForm />
      <ParticipantList />
    </div>
  );
}