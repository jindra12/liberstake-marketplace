import { ReactComponent as WalletIcon } from '../assets/icons/wallet.svg';
import { ReactComponent as DocumentsIcon } from '../assets/icons/documents.svg';
import { ReactComponent as CompaniesIcon } from '../assets/icons/companies.svg';
import { ReactComponent as StakingIcon } from '../assets/icons/staking.svg';
import { ReactComponent as LinkedIn } from '../assets/icons/linkedin.svg';
import { ReactComponent as Meta } from '../assets/icons/meta.svg';
import { ReactComponent as X } from '../assets/icons/x.svg';
import { ReactComponent as YouTube } from '../assets/icons/youtube.svg';
import { ReactComponent as Telegram } from '../assets/icons/telegram.svg';
import router from '../router';

export const navigationList = [
  {
    route: router.home.wallet,
    title: 'Finances',
    icon: WalletIcon,
    isDiscouraged: process.env.REACT_APP_IS_WALLET_DISCOURAGED === 'true',
    subLinks: {
      Finances: router.wallet.overView,
      Exchange: router.wallet.exchange,
      // 'Stock exchange': router.wallet.stockExchange,
      Assets: router.wallet.assets,
      Stocks: router.wallet.stocks,
      Bridge: router.wallet.bridge,
    },
  },
  {
    route: router.home.contracts,
    title: 'Contracts',
    icon: DocumentsIcon,
    isDiscouraged: process.env.REACT_APP_IS_CONTRACTS_DISCOURAGED === 'true',
    subLinks: {
      Overview: router.contracts.overview,
      'My contracts': router.contracts.myContracts,
    },
  },
  {
    route: router.home.companies,
    title: 'Companies',
    icon: CompaniesIcon,
    isDiscouraged: process.env.REACT_APP_IS_COMPANIES_DISCOURAGED === 'true',
    subLinks: {
      'All companies': router.companies.allCompanies,
      'My companies': router.companies.myCompanies,
    },
    extra: {
      [router.companies.myCompanies]: {
        link: router.companies.create,
        title: 'Register a new company',
      },
      [router.companies.allCompanies]: {
        link: router.companies.create,
        title: 'Register a new company',
      },
    },
  },
  {
    route: router.home.staking,
    title: 'Staking',
    icon: StakingIcon,
    isDiscouraged: process.env.REACT_APP_IS_STAKING_DISCOURAGED === 'true',
    subLinks: {
      Overview: router.staking.overview,
      'ETH LP Staking': router.staking.ethlpstaking,
      'SOL LP Staking': router.staking.sollpstaking,
    },
  },
];

export const socials = [
  {
    icon: LinkedIn,
    label: 'LinkedIn link',
    href: 'https://www.linkedin.com/company/liberland/',
  },
  {
    icon: Meta,
    label: 'Meta link',
    href: 'https://www.facebook.com/liberland/',
  },
  {
    icon: X,
    label: 'X/Twitter link',
    href: 'https://twitter.com/liberland_org',
  },
  {
    icon: YouTube,
    label: 'Youtube link',
    href: 'https://www.youtube.com/c/LiberlandOfficial',
  },
  {
    icon: Telegram,
    label: 'Telegram link',
    href: 'https://t.me/liberlanders',
  },
];

export const footerLinks = {
  About: {
    About: `${process.env.REACT_APP_MAIN_LIBERLAND_WEBSITE}about`,
    FAQ: `${process.env.REACT_APP_MAIN_LIBERLAND_WEBSITE}faq`,
    Blockchain: `${process.env.REACT_APP_MAIN_LIBERLAND_WEBSITE}blockchain`,
    Contributions: `${process.env.REACT_APP_MAIN_LIBERLAND_WEBSITE}contribution`,
    Contacts: `${process.env.REACT_APP_MAIN_LIBERLAND_WEBSITE}contact`,
  },
  Legal: {
    Constitution: `${process.env.REACT_APP_MAIN_LIBERLAND_WEBSITE}constitution`,
    Laws: `${process.env.REACT_APP_MAIN_LIBERLAND_WEBSITE}laws`,
    'Terms & conditions': `${process.env.REACT_APP_MAIN_LIBERLAND_WEBSITE}terms-and-conditions`,
    'Company terms & conditions': `${process.env.REACT_APP_MAIN_LIBERLAND_WEBSITE}company-terms-and-conditions`,
    'Gift agreement (CZ)': `${process.env.REACT_APP_MAIN_LIBERLAND_WEBSITE}gift-agreement?country=cz`,
    'Gift agreement (SC)': `${process.env.REACT_APP_MAIN_LIBERLAND_WEBSITE}gift-agreement?country=sc`,
    'Privacy policy': `${process.env.REACT_APP_MAIN_LIBERLAND_WEBSITE}privacy-policy`,
  },
  Government: {
    Cabinet: `${process.env.REACT_APP_MAIN_LIBERLAND_WEBSITE}government#president`,
    Congress: `${process.env.REACT_APP_MAIN_LIBERLAND_WEBSITE}government#congress`,
    Elections: `${process.env.REACT_APP_MAIN_LIBERLAND_WEBSITE}elections`,
    'Overseas Missions': `${process.env.REACT_APP_MAIN_LIBERLAND_WEBSITE}government#overseas-missions`,
    'Liberland Gazette': `${process.env.REACT_APP_MAIN_LIBERLAND_WEBSITE}gazette`,
  },
  Media: {
    News: `${process.env.REACT_APP_MAIN_LIBERLAND_WEBSITE}news`,
    Podcast: 'https://www.facebook.com/LiberlandShow/',
    YouTube: 'https://www.youtube.com/@LiberlandOfficial',
    'X/Twitter': 'https://twitter.com/liberland_org',
    'Liberland Press': 'https://liberlandpress.com',
  },
  Culture: {
    'Visit Liberland': 'https://visit.ll.land',
    Anniversary: 'https://anniversary.ll.land',
    'Floating Man Festival': 'https://floatingman.ll.land',
    'Diaspora villages': `${process.env.REACT_APP_MAIN_LIBERLAND_WEBSITE}diaspora-villages`,
  },
};
