import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@ashishraj1408",
    icon: Icons.gitHub,
    link: "https://github.com/ashishraj1408",
  },
  {
    name: "LinkedIn",
    username: "Ashish Raj",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/ashishraj1408",
  },
  {
    name: "Twitter",
    username: "@ashishraj1408",
    icon: Icons.twitter,
    link: "https://twitter.com/ashishraj1408",
  },
  {
    name: "Gmail",
    username: "rajjashish1500",
    icon: Icons.gmail,
    link: "mailto:rajjashish1500@gmail.com",
  },
];
