#!/usr/bin/env node

import boxen from 'boxen';
import chalk from 'chalk';

const BOXEN_CONFIG = {
  title: 'penrodlol',
  titleAlignment: 'center',
  borderColor: '#e3d19f',
  borderStyle: 'round',
  padding: 1,
  width: 54,
};

const WEBSITE = 'https://christianpenrod.com';
const GITHUB = 'https://github.com/penrodlol';
const TWITTER = 'https://twitter.com/penrodlol';

const HELLO = chalk.hex('#f2f2f2')("Hey, I'm Christian");
const JOB = chalk.hex('#b0b0b0')('Front-End Web Developer');
const GREETING = chalk.bold(`${HELLO}\n${JOB}`);

const LINKS = [
  { name: chalk.hex('#9be0b9')('Website'), url: `  ${WEBSITE}` },
  { name: chalk.hex('#a167db')('GitHub'), url: `   ${GITHUB}` },
  { name: chalk.hex('#1DA1F2')('Twitter'), url: `  ${TWITTER}` },
]
  .map((link) => `${link.name} ${link.url}`)
  .join('\n');

const MESSAGE = `${GREETING}\n\n${LINKS}`;

console.log(boxen(MESSAGE, BOXEN_CONFIG));
