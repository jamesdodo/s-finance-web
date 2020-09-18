/**
 *  NOTE:
 */

export default {
  global: {
    sFinance: 'S.Finance',
    home: '首页',
    swap: '兑换',
    liquidity: '存取款',
    stats: '统计',
    operating: '操作',
    deposits: '资金',
    dailyVol: '日交易额',
    apr: '年化收益率',
    poolName: '名称',
    assests: '资产',
    addLiquidity: '提供流动性（存币行为）',
    advancedOptions: '高级选项',
    packUp: '收起',
    maxSlippage: '最大滑点',
    gasPrice: 'Gas 费用',
    customize: '自定义',
    standard: '标准',
    fast: '快速',
    instant: '极速',
    slow: '慢',
    low: '低',
    notAvailable: '无法使用',
    fee: '费用',
    norm: '指标',
    risks: '风险',
    dao: '挖矿'
  },
  beta: {
    slogan: '项目还在测试阶段，请注意风险，更多功能敬请期待~',
    followMe: '抢先关注'
  },
  statement: {
    slogan: '声明：S.finance 目前没有任何代币',
    cont: 'S.finance 代币遵循100%基于贡献分配，无私募，无预挖，无团队分配的方式，代币名称目前还在征集中。Trx 链上有关于S.finance的合约为诈骗信息，最新消息以官网为准！',
    more: '查看详情',
    ok: '知道了'
  },
  wallet: {
    notConnected: '你还没有连接钱包',
    connect: '连接钱包'
  },
  total: {
    deposits: '兑换池资金'
  },
  stablePools: {
    name: 'Stable 兑换池'
  },
  instantSwap: {
    name: '极速兑换',
    tip: '在全部 Stable Pools 中匹配最优兑换价格',
    from: '兑换',
    to: '兑换为',
    valuePlaceholder: '输入数值',
    sizePlaceholder: '输入兑换数量',
    gasPlaceholder: '输入 Gas 费用',
    max: '最多',
    exchangeRate: '兑换比例 (包括费用)',
    confirm: '确认兑换',
    txCost: '预计矿工费',
    routedThrough: '兑换池',
    warnLowGasPrice: 'Gas 价格太低。您的交易可能被取消。',
    noBalanceWarning: '{0} 余额不足，不可兑换。',
    selldisabled: '{0} 与 {1} 目前不可兑换。',
    exchangeEateLowWarning: '警告！汇率太低！',
    maxSynthBalance: '您可以使用的最大余额是 {0}',
    susdWaitingPeriod: '在等待时间 {1} 秒内无法转移 {0}',
    warningNoPool: '兑换不可用。请在池中选择 {0}。'
  },
  balancesInfo: {
    name: '兑换池概念',
    assetDistribution: '资产分布',
    swapFeeRate: '兑换费',
    depositFeeRate: '存款费',
    withdrawalFeeRate: '取款费',
    adminFeeRate: '管理员费',
    avgAssetPrice: '资产均价',
    amplificationCoefficient: '放大系数',
    fundingFeeRate: '资金费用率'
  },
  risk: {
    title: '使用 S.Finance 的风险',
    auditTitle: '审计',
    auditContHtml: 'S.finance 智能合约通过了Trail of Bits审计。<br/>然而，安全审计并不能完全消除风险。请在能力承受范围内投资，不要盲目投入全部资产，尤其是在提供流动性交易时。<br/>使用S.finance 做兑换交易时风险会相对降低，但这只是建议。',
    adminKeyTitle: '管理密钥',
    adminKeyContHtml: '管理密钥在紧急情况下允许暂停合约，但仅可在最初2个月使用。它还允许改变放大系数(S.Finance参数)，管理费用(不超过流动性凭证花费的一半)和费用。所有的变更将在提交额外申请之前的3天内进行。<br/>S.Finance将向去中心化的DAO过渡。',
    lossTitle: '资产损失',
    lossContHtml: 'S.finance 智能合约通过了Trail of Bits审计。然而，安全审计并不能完全消除风险。请在能力承受范围内投资，不要盲目投入全部资产，尤其是在提供流动性时。<br/>使用S.finance作兑换交易时风险会相对降低，但这只是建议。',
    stakingTitle: '抵押风险',
    stakingContHtml: '当使用抵押功能时，每一种智能合约都有他们相应的风险。',
  },
  dao: {
    title: '{0} 流动性矿池',
    describe: '抵押 {0} LP tokens 挖矿奖励 {1}',
    staking: '抵押',
    redemption: '赎回',
    miningReward: '挖矿奖励',
    assetInStaking: '已抵押',
    stakingAmountPlaceholder: '输入抵押数量',
    stakingBalance: '当前可抵押',
    infiniteApproval: '信任此合约使用最佳矿工费，后续将无需再次批准',
    stakingConfirmTip: '存款获得 LP tokens',
    stakingConfirm: '确认抵押',
    redemptionBalance: '可赎回数量',
    redemptionAmountPlaceholder: '输入赎回数量',
    redemptionConfirm: '确认赎回',
    miningPendingReward: '未提取奖励',
    miningPaidReward: '已提取奖励',
    miningTotalReward: '合计奖励',
    miningClaimConfirm: '领取奖励',
  }
}