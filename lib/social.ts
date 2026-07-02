import { Mail } from "lucide-react";
import {
  GithubIcon,
  LinkedInIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  LeetCodeIcon,
  FacebookIcon,
} from "@/components/ui/icons/BrandIcons";

export const SOCIAL_LINKS = [
  {
    label: "Gmail",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=rajnathprasad.cs@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/rajnathprasad",
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/rajnathprasad",
    icon: GithubIcon,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/RajnathPrasad5",
    icon: TwitterIcon,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/rajnathprasad",
    icon: LeetCodeIcon,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/rajnathprasad",
    icon: YoutubeIcon,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/rajnath_22",
    icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100093255740262",
    icon: FacebookIcon,
  },
] as const;