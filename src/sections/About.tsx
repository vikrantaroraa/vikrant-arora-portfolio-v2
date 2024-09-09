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
  { title: "Painting", emoji: "🎨", left: "5%", top: "5%" },
  { title: "Photography", emoji: "📷", left: "50%", top: "5%" },
  { title: "Hiking", emoji: "⛰️", left: "35%", top: "40%" },
  { title: "Gaming", emoji: "🎮", left: "10%", top: "35%" },
  { title: "Music", emoji: "🎹", left: "70%", top: "45%" },
  { title: "Fitness", emoji: "🏋🏻", left: "5%", top: "65%" },
  { title: "Reading", emoji: "📚", left: "45%", top: "70%" },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A glimpse into my world!"
          description="Learn more about who i am, what i do, and what insipres me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="mx-auto mt-2 w-40 md:mt-0">
                <Image src={bookImage} alt="book cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft
                exceptional digital experiences."
                className=""
              />
              <ToolboxItems items={toolboxItems} className="" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="flex h-[320px] flex-col p-0 md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore the interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobbby, index) => (
                  <div
                    key={index}
                    className="absolute inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-1.5"
                    style={{ left: hobbby.left, top: hobbby.top }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobbby.title}
                    </span>
                    <span>{hobbby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="relative h-[320px] p-0 md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map-image"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:absolute after:inset-0 after:rounded-full after:outline after:outline-2 after:-outline-offset-2 after:outline-gray-950/30 after:content-['']">
                <Image
                  src={smileEmoji}
                  alt="smiling emoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
