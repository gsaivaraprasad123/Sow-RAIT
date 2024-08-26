import { SectionTitle } from "@/components/SectionTitle";
import { TeamCard } from "@/components/TeamCard";
import React from "react";
import userOneImg from "../../../public/img/user1.jpg";
import userTwoImg from "../../../public/img/user2.jpg";
import userThreeImg from "../../../public/img/user3.jpg";

const team = () => {
  const faculties = [
    {
      name: "Dr. Leena Ragha",
      role: "Faculty Co-ordinator, Social Wing RAIT",
      imgSrc: userOneImg.src,
      instagramLink: "https://instagram.com/leena.ragha",
      linkedinLink: "https://linkedin.com/in/leena-ragha",
    },
    {
      name: "Mr. Nitin Chavan",
      role: "Program Officer, NSS RAIT",
      imgSrc: userOneImg.src,
      instagramLink: "https://instagram.com/nitin.chavan",
      linkedinLink: "https://linkedin.com/in/nitin-chavan",
    },
    {
      name: "Ms. Manasi Jawale",
      role: "Program Officer, NSS RAIT",
      imgSrc: userOneImg.src,
      instagramLink: "https://instagram.com/manasi.jawale",
      linkedinLink: "https://linkedin.com/in/manasi-jawale",
    },
    {
      name: "Ms. Snehal Mumbaikar",
      role: "UBA Co-ordinator, UBA",
      imgSrc: userOneImg.src,
      instagramLink: "https://instagram.com/snehal.mumbaikar",
      linkedinLink: "https://linkedin.com/in/snehal-mumbaikar",
    },
  ];

  const core = [
    {
      name: "Shashank Avhad",
      role: "President",
      imgSrc: userTwoImg.src,
      instagramLink: "https://instagram.com/shashank.avhad",
      linkedinLink: "https://linkedin.com/in/shashank-avhad",
    },
    {
      name: "Arryan Singh",
      role: "Vice President",
      imgSrc: userTwoImg.src,
      instagramLink: "https://instagram.com/arryan.singh",
      linkedinLink: "https://linkedin.com/in/arryan-singh",
    },
    {
      name: "Apoorva Edla",
      role: "General Secretary",
      imgSrc: userTwoImg.src,
      instagramLink: "https://instagram.com/apoorva.edla",
      linkedinLink: "https://linkedin.com/in/apoorva-edla",
    },
    {
      name: "Swayam Bole",
      role: "Treasurer",
      imgSrc: userTwoImg.src,
      instagramLink: "https://instagram.com/swayam.bole",
      linkedinLink: "https://linkedin.com/in/swayam-bole",
    },
    {
      name: "Manmeet Kaur",
      role: "Administrator",
      imgSrc: userTwoImg.src,
      instagramLink: "https://instagram.com/manmeet.kaur",
      linkedinLink: "https://linkedin.com/in/manmeet-kaur",
    },
    {
      name: "Nishant Chauhan",
      role: "Chief NSS Executive",
      imgSrc: userTwoImg.src,
      instagramLink: "https://instagram.com/nishant.chauhan",
      linkedinLink: "https://linkedin.com/in/nishant-chauhan",
    },
  ];

  const jointCore = [
    {
      name: "Akhilesh Deshpande",
      role: "Event Co-ordinator",
      imgSrc: userThreeImg.src,
      instagramLink: "https://instagram.com/akhilesh.deshpande",
      linkedinLink: "https://linkedin.com/in/akhilesh-deshpande",
    },
    {
      name: "Ajith Nair",
      role: "Event Co-ordinator",
      imgSrc: userThreeImg.src,
      instagramLink: "https://instagram.com/ajith.nair",
      linkedinLink: "https://linkedin.com/in/ajith-nair",
    },
    {
      name: "Satwik Tripathi",
      role: "Marketing Head",
      imgSrc: userThreeImg.src,
      instagramLink: "https://instagram.com/satwik.tripathi",
      linkedinLink: "https://linkedin.com/in/satwik-tripathi",
    },
    {
      name: "Rajvardhan Kurlekar",
      role: "Marketing Head",
      imgSrc: userThreeImg.src,
      instagramLink: "https://instagram.com/rajvardhan.kurlekar",
      linkedinLink: "https://linkedin.com/in/rajvardhan-kurlekar",
    },
    {
      name: "Tejas Tabrej",
      role: "Marketing Head",
      imgSrc: userThreeImg.src,
      instagramLink: "https://instagram.com/tejas.tabrej",
      linkedinLink: "https://linkedin.com/in/tejas-tabrej",
    },
  ];

  return (
    <div>
      <SectionTitle preTitle="" title="FACULTIES" />
      <div className="flex flex-row gap-8 flex-wrap items-center justify-center">
        {faculties.map((faculty, index) => (
          <TeamCard
            key={index}
            imgSrc={faculty.imgSrc}
            role={faculty.role}
            name={faculty.name}
            instagramLink={faculty.instagramLink}
            linkedinLink={faculty.linkedinLink}
          />
        ))}
      </div>
      <SectionTitle preTitle="" title="CORE" />
      <div className="flex flex-row gap-12 flex-wrap items-center justify-center">
        {core.map((coreMember, index) => (
          <TeamCard
            key={index}
            imgSrc={coreMember.imgSrc}
            role={coreMember.role}
            name={coreMember.name}
            instagramLink={coreMember.instagramLink}
            linkedinLink={coreMember.linkedinLink}
          />
        ))}
      </div>
      <SectionTitle preTitle="" title="JOINT CORE" />
      <div className="flex flex-row gap-14 flex-wrap items-center justify-center">
        {jointCore.map((jointCoreMember, index) => (
          <TeamCard
            key={index}
            imgSrc={jointCoreMember.imgSrc}
            role={jointCoreMember.role}
            name={jointCoreMember.name}
            instagramLink={jointCoreMember.instagramLink}
            linkedinLink={jointCoreMember.linkedinLink}
          />
        ))}
      </div>
    </div>
  );
};

export default team;
