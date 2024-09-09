import Card from "@/Components/Card";
import SectionHeader from "@/Components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSS3Icon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import TechIcon from "@/Components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileEmoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/Components/CardHeader";
import ToolboxItems from "@/Components/ToolboxItems";

const toolboxItems = [
  { title: "JavaScript", iconType: JavaScriptIcon },
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CSS3Icon },
  { title: "Chrome", iconType: ChromeIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Github", iconType: GithubIcon },
];

const hobbies = [
  { title: "Painting", emoji: "🎨" },
  { title: "Photography", emoji: "📷" },
  { title: "Gaming", emoji: "🎮" },
  { title: "Hiking", emoji: "⛰️" },
  { title: "Music", emoji: "🎹" },
  { title: "Fitness", emoji: "🏋🏻" },
  { title: "Reading", emoji: "📚" },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A glimpse into my world!"
          description="Learn more about who i am, what i do, and what insipres me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives."
            />
            <div className="mx-auto mt-8 w-40">
              <Image src={bookImage} alt="book cover" />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
              title="My Toolbox"
              description="Experience the technologies and tools that I use to craft
                exceptional degital experiences."
              className="px-6 pt-6"
            />
            <ToolboxItems items={toolboxItems} className="mt-6" />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
          <Card>
            <CardHeader
              title="Beyond the Code"
              description="Explore the interests and hobbies beyond the digital realm."
            />
            <div>
              {hobbies.map((hobbby, index) => (
                <div key={index}>
                  <span>{hobbby.title}</span>
                  <span>{hobbby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <div>
              <Image src={mapImage} alt="map-image" />
              <Image src={smileEmoji} alt="smiling emoji" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
