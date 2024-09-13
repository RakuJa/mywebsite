// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ', ';
    }
  }
  return `This is an interactive website, in which you'll input commands with your keyboard to know more about myself.
Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'summary' to display a brief summary of my information.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name} aka RakuJa. I am various things, but mainly a Software developer & Cybersecurity major.
Welcome to my website!
For more information about me, enter one of the following commands (without quotes!):
'summary' - short summary.
'resume' or 'cv' - my latest resume.
'readme' - my github readme.
Otherwise, if you'd like to play around a bit, type 'help' to see the list of all available commands.
`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

export const cv = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `Thank you for your interest.
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.ko_fi}" target="_blank">ko-fi</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  return `I have various email addresses, each divided by topic:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="mailto:${config.email.work}@${config.email.domain}" target="_blank">Work</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="mailto:${config.email.education}@${config.email.domain}" target="_blank">University/Education</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="mailto:${config.email.personal}@${config.email.domain}" target="_blank">Personal</a></u>
  `;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);
  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
  return 'Opening linkedin...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `rewrite
your
code
using
Rust`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `Unfortunately, I cannot afford more directories.
if you want to help, you can type 'donate' (Also, I won't allow path traversal attacks).`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const projects = async (args: string[]): Promise<string> => {
  return ` These are the most important and completed projects I've worked on:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/rakuja/carbonio-preview-ce/" target="_blank">Multimedia to image conversion service built with Python for the Carbonio suite.</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/rakuja/BYBE/" target="_blank">Pathfinder 2E website, backend built with Rust.</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/Summanuss/Efesto-CV/" target="_blank">Image recognition software for low-end hardware without GPU. Written in Rust.</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/RakuJa/Tesi-triennale-cs-unipd/releases/" target="_blank">(Documentation only) - Webcrawler and scraper for darkweb built with Python, celery, s3, etc.</a></u>
`;
};

export const studies = async (args: string[]): Promise<string> => {
  return ` These are the most important and completed studies I've worked on:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/RakuJa/Tesi-triennale-cs-unipd/releases/" target="_blank">Bachelor thesis on the subject of webcrawling and scraping on the darkweb</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/RakuJa/Space_Communication_Notes/" target="_blank">Notes for the space communication systems of the Aerospace course.</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/RakuJa/Formula_SAE_Report/" target="_blank">A brief report of the work I've done in the Formula SAE team.</a></u>
`;
};

export const quote = async (args: string[]): Promise<string> => {
  const quotes = [
      "\"Victory belongs to the most persevering.\" - Napoleon Bonaparte",
      "\"Sharing knowledge is the most fundamental act of friendship. Because it is a way you can give something without loosing something.\" - Richard Stallman",
      "\"The average consumer does not know the difference between browser, Internet and search box.\" - Mitchell Baker",
      "\"Never confuse a single defeat with a final defeat\" -  F. Scott Fitzgerald",
      "\"I mean, if 10 years from now, when you are doing something quick and dirty, you suddenly visualize that I am looking over your shoulders and say to yourself \"Dijkstra would not have liked this\", well, that would be enough immortality for me.\" - Edsger W. Dijkstra",
      "\"The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.\" - Edsger W. Dijkstra",
      "\"The use of COBOL cripples the mind; its teaching should, therefore, be regarded as a criminal offense.\" - Edsger W. Dijkstra",
      "\"The most important property of a program is whether it accomplishes the intention of its user.\" - Graydon Hoare",
      "\"I think, fundamentally, open source does tend to be more stable software. It's the right way to do things.\" - Linus Torvalds",
      "\"Fully secure systems don't exist today and they won't exist in the future.\" - Adi Shamir",
      "\"Information is the resolution of uncertainty.\" - Claude Shannon",
      "\"Weak typing is a devil plaguing software correctness. It tempts you with ease of development, while secretly hiding undefined behaviour in the code.\" - Daniele Giachetto",
      "\"Only sneaky people and impostors can oppose the progress of sciences and can discredit them, because they are the only ones to whom the sciences do harm.\" - Friedrich der Große"
  ];
  var quote = quotes[quotes.length * Math.random() | 0];
  return quote;
};


export const sudo = async (args?: string[]): Promise<string> => {

  const rick_rolls = [
      "https://www.youtube.com/watch?v=aXOChLn5ZdQ",
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "https://www.youtube.com/watch?v=ZzI9JE0i6Lc",
      "https://www.youtube.com/watch?v=m4-HM_sCvtQ", // let's increase the prob of java
      "https://www.youtube.com/watch?v=m4-HM_sCvtQ",
      "https://www.youtube.com/watch?v=m4-HM_sCvtQ",
      "https://www.youtube.com/watch?v=HyWYpM_S-2c",
  ]
  var chosen_rick_roll = rick_rolls[rick_rolls.length * Math.random() | 0]
  window.open(chosen_rick_roll, '_blank'); // ...I'm sorry
  return `Permission denied: you may pwn me... but not THIS easily.`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
 ███████████             █████                      ███
░░███░░░░░███           ░░███                      ░░░
 ░███    ░███   ██████   ░███ █████ █████ ████     █████  ██████
 ░██████████   ░░░░░███  ░███░░███ ░░███ ░███     ░░███  ░░░░░███
 ░███░░░░░███   ███████  ░██████░   ░███ ░███      ░███   ███████
 ░███    ░███  ███░░███  ░███░░███  ░███ ░███      ░███  ███░░███
 █████   █████░░████████ ████ █████ ░░████████     ░███ ░░████████
░░░░░   ░░░░░  ░░░░░░░░ ░░░░ ░░░░░   ░░░░░░░░      ░███  ░░░░░░░░
                                               ███ ░███
                                              ░░██████
                                               ░░░░░░

I'm ${config.name} aka RakuJa, a Software developer & Cybersecurity major.
This is an interactive website, in which you'll input commands with your keyboard to know more about myself.
Type 'help' to see the list of available commands.
Type 'summary' to display a brief summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
Type 'cv' or 'resume' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.resume_url}" target="_blank">here</a></u> for the updated resume.
`;
};
