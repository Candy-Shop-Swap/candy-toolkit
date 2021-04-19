import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.candyswap.online",
      },
      {
        label: "Liquidity",
        href: "https://exchange.candyswap.online/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://candyswap.info",
      },
      {
        label: "Tokens",
        href: "https://candyswap.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://candyswap.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://candyswap.info/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.candyswap.online",
      },
      {
        label: "Github",
        href: "https://github.com/Candy-Shop-Swap",
      },
      {
        label: "Docs",
        href: "https://docs.candyswap.online",
      },
      {
        label: "Blog",
        href: "https://candyswap.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/candyswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/CandySwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/CandySwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/CandySwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/candyswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/candyswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/candyswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/CandySwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/CandyswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/candyswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/candyswapfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/CandySwapAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/CandySwapWhales",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/candyswap",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
