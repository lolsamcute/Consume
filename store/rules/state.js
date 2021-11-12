export default () => ({
  socialOptions: [
    {
      id: 1, icon: 'static/instgram-follow.svg', label: 'Follow on Instagram', channel: 'instagram', action: 'follow',
    },
    {
      id: 2, icon: 'static/twitter-follow.svg', label: 'Follow on Twitter', channel: 'twitter', action: 'follow',
    },
    {
      id: 3, icon: 'static/twitter-share.svg', label: 'Share on Twitter', channel: 'twitter', action: 'share',
    },
    {
      id: 4, icon: 'static/facebook-share.svg', label: 'Share on Facebook', channel: 'facebook', action: 'share',
    },
    {
      id: 5, icon: 'static/facebook-like.svg', label: 'Like on Facebook', channel: 'facebook', action: 'like',
    },
  ],
  spendingRules: [
    {
      icon: 'static/airtime.svg',
      color: 'accent',
      value: 'Airtime',
      label: 'Set up number of points needed to redeem airtime',
      to: 'airtime-rules',
    },
    {
      textIcon: '₦', color: 'green-1', value: 'Cash', label: 'Set up number of points needed to redeem cash', to: 'cash-rules',
    },
    {
      icon: 'static/voucher.svg', color: 'deep-purple-3', value: 'Discount Voucher', label: 'Set up number of points needed to redeem discount vouchers', to: 'discount-voucher',
    },
  ],
});
