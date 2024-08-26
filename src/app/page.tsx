import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Button } from "@/components/ui/button";
import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";
import IlusImg from "../../public/img/Illustration2.png";

import { benefitOne, benefitTwo } from "@/components/data";
import GalleryCarousel from "@/components/GalleryCarousel";
import { TeamCard } from "@/components/TeamCard";
import SimpleCard from "@/components/SimpleCard";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  const teamMembers = [
    { imgSrc: userOneImg.src, name: "Alice Johnson", role: "Project Manager" },
    { imgSrc: userOneImg.src, name: "Bob Smith", role: "Lead Developer" },
    { imgSrc: userOneImg.src, name: "Carol White", role: "UX Designer" },
  ];

  return (
    <Container>
      <Hero />
      <WhoWeAre />

      <SectionTitle preTitle="" title="What we do">
        Throughout the academic year, the committee conducts various activities
        like Tree Plantation Drive, Cleanliness Drive, Wall Painting, Street
        Plays, Blood Donation Drive and so on. Major festivals like Diwali and
        Holi are celebrated by the committee members at orphanages and old-age
        homes to spread smiles, bring warmth and joy into the lives of the
        people living there. Wing also organizes Udaan – one of Navi Mumbai’s
        leading marathons and a notable fundraiser event.
      </SectionTitle>

      <div className="flex flex-row flex-wrap justify-center gap-8">
        <SimpleCard title="My Title" content="This is the content." />
        <SimpleCard title="My Title" content="This is the content." />
        <SimpleCard title="My Title" content="This is the content." />
        <SimpleCard title="My Title" content="This is the content." />
      </div>

      {/* <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} /> */}

      <SectionTitle preTitle="" title="Gallery"></SectionTitle>
      <GalleryCarousel />
      <div className="flex justify-center py-10">
        <Button
          variant="outline"
          className="rounded-2xl max-sm:text-xl hover:bg-[#4f46e5] hover:text-white"
        >
          Know More
        </Button>
      </div>

      <SectionTitle preTitle="" title="Our Team"></SectionTitle>
      <div className="flex flex-row flex-wrap gap-8 justify-center">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            imgSrc={member.imgSrc}
            name={member.name}
            role={member.role}
          />
        ))}
      </div>

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
