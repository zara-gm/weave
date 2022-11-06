# WeaveFlow

A tool for getting analytics insights into DAO voting whilst preserving data privacy

### Long Description

- On-chain voting is a crucial part of decentralized governance.
- Leveraging the encryption and confidential computing capabilities of Weavechain, we have built an analytics tool for anonymous DAO voting with confidential context.
- Admins can easily create analytics dashboards to analyze members’ voting behaviors without the need to code or compromise individual members' data privacy.
- Dashboard fully customizable and refreshed in real-time as new votes come in.

### Get Started

- npm
  ```sh
  npm install npm@latest -g
  ```

* Open Terminal
* (If you are on a linux based terminal) Simply run `npm run install:clean`
* (If not) Run in terminal `npm install`
* (If not) Run in terminal `npm run build:tailwind` (each time you add a new class, a class that does not exist in `src/assets/styles/tailwind.css`, you will need to run this command)
* (If not) Run in terminal `npm start`
* Navigate to https://localhost:3000
* Check more about [Tailwind CSS](https://tailwindcss.com/?ref=creativetim)

### Pages

If you want to get inspiration or just show something directly to your clients...
Here are all the page from the project:

- [Presentation]()
- [Survey Pages]()
- [Dashboard]()

## Table of Contents

- [WeaveFlow](#weaveflow)
    - [Long Description](#long-description)
    - [Get Started](#get-started)
    - [Pages](#pages)
  - [Table of Contents](#table-of-contents)
  - [Documentation](#documentation)
  - [Files and Folder](#files-and-folder)
  - [Reporting Issues](#reporting-issues)
  - [Licensing](#licensing)
    - [Social Media](#social-media)

## Documentation

The documentation for the WeaveFlow is hosted at our <a href="" target="_blank">website</a>.

## Files and Folder

This is the project structure that you will get upon the download:

```
weaveFlow-react
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── gulpfile.js
├── jsconfig.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── assets
│   │   ├── img
│   │   │   ├── github.svg
│   │   │   └── google.svg
│   │   └── styles
│   │       ├── index.css
│   │       └── tailwind.css
│   ├── components
│   │   ├── Cards
│   │   │   ├── CardBarChart.js
│   │   │   ├── CardLineChart.js
│   │   │   ├── CardPageVisits.js
│   │   │   ├── CardProfile.js
│   │   │   ├── CardSettings.js
│   │   │   ├── CardSocialTraffic.js
│   │   │   ├── CardStats.js
│   │   │   └── CardTable.js
│   │   ├── Dropdowns
│   │   │   ├── IndexDropdown.js
│   │   │   ├── NotificationDropdown.js
│   │   │   ├── PagesDropdown.js
│   │   │   ├── TableDropdown.js
│   │   │   └── UserDropdown.js
│   │   ├── Footers
│   │   │   ├── Footer.js
│   │   │   ├── FooterAdmin.js
│   │   │   └── FooterSmall.js
│   │   ├── Headers
│   │   │   └── HeaderStats.js
│   │   ├── Maps
│   │   │   └── MapExample.js
│   │   ├── Navbars
│   │   │   ├── AdminNavbar.js
│   │   │   ├── AuthNavbar.js
│   │   │   └── IndexNavbar.js
│   │   └── Sidebar
│   │       └── Sidebar.js
│   ├── index.js
│   ├── layouts
│   │   ├── Admin.js
│   │   └── Auth.js
│   └── views
│       ├── Index.js
│       ├── Landing.js
│       ├── Profile.js
│       ├── admin
│       │   ├── Dashboard.js
│       │   ├── Maps.js
│       │   ├── Settings.js
│       │   └── Tables.js
│       └── auth
│           ├── Login.js
│           └── Register.js
└── tailwind.config.js
```

## Reporting Issues

We use GitHub Issues as the official bug tracker for the WeaveFlow Dapp. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the WeaveFlow Dapp. Check the CHANGELOG from your dashboard on our <a href="https://www.weavechain.com/" target="_blank">website</a>.
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Licensing

- Copyright 2022 <a href="https://www.weavechain.com/" target="_blank">Weavechain</a>

### Social Media

Twitter: <a href="https://twitter.com/WeavechainWeb3" target="_blank">https://twitter.com/WeavechainWeb3</a>

LinkedIn: <a href="https://www.linkedin.com/company/weavechain/3" target="_blank">https://www.linkedin.com/company/weavechain/</a>

Discord: <a href="https://discord.com/invite/VjuPrwe4ub" target="_blank">https://discord.com/invite/VjuPrwe4ub</a>
