const eventRegister = require('./eventRegister');
const footerLinks = require('./data/footerLinks.json');
const roadmap = require('./data/roadmap.json');
const header = require('./data/header.json');
const about = require('./data/about.json');
const tokenomics = require('./data/tokenomics.json');
const democracy = require('./data/democracy.json');
const pageLink = require('./data/pageLink.json');

module.exports = {
    baseUrl: 'https://web3vietnam.github.io/',
    baseContext: 'hydradx-website',
    siteName: 'HydraDX',
    siteDescription: 'HydraDX is the multi-headed liquidity protocol built for the Polkadot ecosystem.',
    dateTimeFormat: 'ddd, MM/DD/YYYY - HH:mm',
    dateFormat: 'MM/DD/YYYY',
    postUrlStyle: 'POSTS_SLUG',
    locales: ['en', 'vi'],
    defaultLocale: 'en',
    eventRegister,
    footerLinks,
    roadmap,
    header,
    about,
    tokenomics,
    democracy,
    pageLink
};
