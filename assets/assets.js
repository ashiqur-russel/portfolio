import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import angular from './angular.png';
import nest from './nest.png';
import docker from './docker.png';
import postman from './postman.png';
import research from './research.png';
import onBook from './onBook.png';

import designApproach from './design-approach.png';
import startup from './startup.png';

import right_arrow_white from './right-arrow-white.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import profile_photo from './profile.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';

import webstorm from './webstorm.svg';

import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    webstorm,
    onBook,
    startup,
    designApproach,
    research,
    angular,
    docker,
    postman,
    nest,
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    mail_icon,
    mail_icon_dark,
    profile_img,
    profile_photo,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData1 = [
    {
        title: 'Full Stack Project',
        description: 'OnBook',
        bgImage: '/onBook.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const workData = [
    {
        title: 'OnBook',
        summary: 'A full-stack e-commerce book store...',
        description: 'This is a full-featured book store with admin and user roles, shopping cart, payments, etc.',
        bgImage: '/work-1.png',
        images: ['/work-1.png', '/work-1.png'],
        techStack: ['Typescript', 'React', 'ExpressJS', 'MongoDB', 'Tailwind', 'Stripe'],
        github: 'https://github.com/ashiqur-russel/On.Book-Client',
        liveDemo: 'https://book-on-client.vercel.app/',
        icon: assets.git
    },

    {
        title: 'Link Tutor',
        description: 'A Online learning platform for students and tutors',
        bgImage: '/work-2.png',
        techStack: ['Typescript', 'NextJs', 'ExpressJs', 'MongoDB', 'Tailwind', 'Stripe', 'JWT',],
        github: 'https://github.com/ashiqur-russel/LinkTutor',
        liveDemo: 'https://linktutor.vercel.app/',
        icon: assets.git
    },
    {
        title: 'Taskify',
        description: 'A project management app allows teams to efficiently manage tasks, and collaborate in real-time.',
        bgImage: '/work-3.png',
        techStack: ['Typescript', 'Next.js', 'Tailwind', 'Prisma', 'PostgresSQL', 'ExpressJs'],
        github: 'https://github.com/ashiqur-russel/Taskify',
        liveDemo: 'https://taskify-client-two.vercel.app/projects/1',
        icon: assets.git

    }
];


export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Typescript, Angular, React, NextJs, NodeJs, ExpressJs, NestJs' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Masters Automotive Software Engineering' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 pet projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git, assets.postman, assets.docker, assets.webstorm
];