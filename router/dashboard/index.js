export default [
  {
    path: '/dashboard',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/Index.vue') },
      {
        path: '',
        meta: {
          auth: true,
        },
        component: () => import('src/pages/Dashboard/Dashboard.vue'),
        name: 'dashboard',
      },
      {
        path: 'activities',
        meta: {
          auth: true,
        },
        component: () => import('src/pages/Activities/Index.vue'),
        children: [
          {
            path: '',
            component: () => import('src/pages/Activities/Activities.vue'),
          },
          {
            path: 'customers',
            name: 'customers',
            component: () => import('src/pages/Activities/Customers.vue'),
          },
          {
            path: 'customer',
            name: 'customer',
            component: () => import('src/pages/Activities/Customer.vue'),
          },
        ],
      },
      { path: 'analytics', component: () => import('src/pages/Analytics/Analytics.vue') },
      { path: 'settings', component: () => import('src/pages/Settings/Settings.vue') },
      {
        path: 'rewards',
        component: () => import('src/pages/Rewards/Index.vue'),
        children: [
          {
            path: '',
            name: 'rewards-dashboard',
            component: () => import('src/pages/Rewards/Rewards.vue'),
          },
          {
            path: 'earning-rules',
            component: () => import('src/pages/Rewards/OptionIndex.vue'),
            children: [
              {
                path: '',
                name: 'earning-rules',
                component: () => import('src/pages/Rewards/EarningRules/EarningRules.vue'),
              },
              {
                path: 'referral-campaign',
                name: 'referral-campaign',
                component: () => import('src/pages/Rewards/EarningRules/ReferralCampaign.vue'),
              },
              {
                path: 'social-media-drive',
                name: 'social-media-drive',
                component: () => import('src/pages/Rewards/EarningRules/SocialMediaDrive.vue'),
              },
              {
                path: 'media-option/:id',
                name: 'media-option',
                props: true,
                component: () => import('src/pages/Rewards/EarningRules/MediaDriveOption.vue'),
              },
            ],
          },
          {
            path: 'spending-rules',

            component: () => import('src/pages/Rewards/OptionIndex.vue'),
            children: [
              {
                path: '',
                name: 'spending-rules',
                component: () => import('src/pages/Rewards/SpendingRules/SpendingRules.vue'),
              },
              {
                path: 'airtime',
                name: 'airtime-rules',
                component: () => import('src/pages/Rewards/SpendingRules/AirtimeRules.vue'),
              },
              {
                path: 'cash',
                name: 'cash-rules',
                component: () => import('src/pages/Rewards/SpendingRules/CashRules.vue'),
              },
              {
                path: 'discount-voucher',
                name: 'discount-voucher',
                component: () => import('src/pages/Rewards/SpendingRules/DiscountVoucher.vue'),
              },
            ],
          },
        ],
      },
      {
        path: 'channels',
        component: () => import('src/layouts/BaseLayout.vue'),
        children: [
          {
            path: 'customize',
            component: () => import('src/pages/Channels/Customize.vue'),
          },
        ],
      },
      {
        path: 'trivia',
        component: () => import('src/pages/Trivia/Trivia.vue'),
      },
    ],
  },
];
