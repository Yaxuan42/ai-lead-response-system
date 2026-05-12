const translations = {
  zh: {
    title: "AI 招商官网与线索响应系统",
    htmlLang: "zh-CN",
    eyebrow: "餐饮 / 茶饮招商加盟增长系统",
    headline: "先有能获客的招商官网，再接住每条加盟咨询。",
    "hero.copy": "我帮连锁餐饮和茶饮品牌搭建招商官网或落地页，并把官网表单、抖音私信和企微咨询接入自动回复、意向评级、招商顾问提醒和跟进队列。",
    "hero.primaryCta": "预约 15 分钟诊断",
    "hero.secondaryCta": "查看招商演示",
    "hero.proof1": "7 天内上线招商入口",
    "hero.proof2": "没有官网也能先跑",
    "hero.proof3": "SEO/GEO 作为增值包",
    "offer.kicker": "首单试点",
    "offer.price": "¥9,800 起搭建",
    "offer.body": "交付一个可发布的招商官网入口，并接入留资、意向评级、招商顾问提醒和跟进表。",
    "owner.readyTitle": "招商顾问提醒待命",
    "owner.readyBody": "高意向加盟咨询会在这里生成回拨脚本。",
    "metric.response": "响应时间",
    "metric.value": "加盟预算",
    "metric.risk": "跟进风险",
    "metric.action": "下一步动作",
    "value.1.kicker": "先有入口",
    "value.1.title": "没有官网也能开始招商承接",
    "value.1.body": "先上线轻量招商官网或落地页，放清楚品牌、门店、费用、支持政策和留资入口。",
    "value.2.kicker": "快筛选",
    "value.2.title": "高意向加盟商排到前面",
    "value.2.body": "预算、城市、铺位、经验和开店时间会被提取，顾问先跟进最可能成交的人。",
    "value.3.kicker": "可增长",
    "value.3.title": "SEO/GEO 内容服务可以后续叠加",
    "value.3.body": "围绕加盟费用、开店条件、区域政策和品牌问答，做搜索和 AI 答案可引用的内容资产。",
    "form.title": "招商新咨询",
    "form.sample": "换个样例",
    "form.name": "咨询人姓名",
    "form.contact": "联系方式",
    "form.service": "咨询类型",
    "form.message": "咨询内容",
    "form.submit": "评估加盟线索",
    "workflow.title": "自动化执行",
    "workflow.parse.title": "解析",
    "workflow.parse.body": "提取姓名、城市、预算、铺位和联系方式。",
    "workflow.qualify.title": "评级",
    "workflow.qualify.body": "判断预算、城市、铺位和开店时间。",
    "workflow.reply.title": "回复",
    "workflow.reply.body": "在候选人最热的时候发出第一条招商回复。",
    "workflow.log.title": "入库",
    "workflow.log.body": "写入招商顾问可跟进的线索队列。",
    "result.reply": "AI 回复",
    "result.script": "招商顾问回拨脚本",
    "queue.title": "实时招商线索队列",
    "table.time": "时间",
    "table.customer": "咨询人",
    "table.need": "意向",
    "table.priority": "优先级",
    "table.value": "预算",
    "table.status": "状态",
    "package.site.kicker": "招商官网启动",
    "package.site.title": "¥9,800 起",
    "package.site.1": "招商官网或落地页",
    "package.site.2": "品牌、门店、费用和支持政策结构",
    "package.site.3": "留资表单 / 企微 / 电话入口",
    "package.site.4": "基础 SEO 标题和结构化内容",
    "package.quick.kicker": "线索响应试点",
    "package.quick.title": "¥6,800 起",
    "package.quick.1": "1 个招商入口",
    "package.quick.2": "自动回复 + 意向评级",
    "package.quick.3": "飞书 / 企微 / 表格队列",
    "package.quick.4": "招商顾问提醒和回拨脚本",
    "package.growth.kicker": "推荐",
    "package.growth.title": "¥24,800 起",
    "package.growth.1": "招商官网 + 抖音 / 企微线索汇总",
    "package.growth.2": "加盟政策 FAQ 知识库",
    "package.growth.3": "顾问分配和跟进阶段",
    "package.growth.4": "SEO/GEO 内容基础包",
    "package.care.kicker": "持续优化",
    "package.care.title": "¥3,000 / 月起",
    "package.care.1": "招商页面和话术更新",
    "package.care.2": "线索分层规则调优",
    "package.care.3": "SEO/GEO 问答内容更新",
    "package.care.4": "每月招商漏斗报告",
    "contact.kicker": "下一步",
    "contact.title": "发品牌资料或现有招商入口，我判断先做官网还是先接线索。",
    "contact.body": "适合正在扩张但招商官网弱、搜索内容少、线索承接不稳定的连锁餐饮、茶饮、咖啡、烘焙和小吃品牌。",
    "contact.business": "品牌类型",
    "contact.entry": "现有入口或资料",
    "contact.goal": "希望解决的问题",
    "contact.submit": "生成预约邮件",
    "contact.note": "会打开你的邮件客户端，收件人是 hello@yaxuan.space。",
    "contact.sent": "已生成邮件。如果邮件客户端没有打开，需求内容也已复制。",
    "contact.subject": "餐饮茶饮招商加盟线索响应诊断",
    contactDefaults: {
      businessType: "茶饮 / 咖啡 / 小吃连锁",
      leadSource: "暂无官网 / 官网招商页 / 抖音私信 / 企微",
      businessGoal: "缺少专业招商官网，加盟咨询分散，高预算、有铺位的候选人没有被优先跟进。",
    },
    contactEmailBody: (businessType, leadSource, businessGoal) =>
      `你好，我想预约餐饮/茶饮招商加盟线索响应诊断。\n\n品牌类型：${businessType}\n招商入口：${leadSource}\n希望解决的问题：${businessGoal}\n\n请回复一个 15 分钟沟通时间。`,
    ready: "待运行",
    processing: "处理中",
    completed: "已完成",
    leadsCount: (count) => `${count} 条线索`,
    fallbackName: "新咨询人",
    fallbackContact: "未提供联系方式",
    service: {
      franchise: "加盟政策",
      site: "已有铺位",
      regional: "区域代理",
      support: "运营支持",
    },
    risk: {
      low: "低",
      medium: "中",
      high: "高",
    },
    action: {
      callNow: "顾问回拨",
      qualify: "补充资质",
      sendPack: "发送资料",
    },
    priority: {
      hot: "高意向",
      warm: "可培育",
      routine: "资料型",
    },
    status: {
      ownerAlerted: "已提醒顾问",
      replySent: "已自动回复",
      callbackQueued: "已排入回拨",
    },
    need: {
      franchise: "加盟咨询",
      site: "已有铺位",
      regional: "区域代理",
      support: "运营支持",
    },
    initialReply:
      "你好，陈女士，已收到你的加盟咨询。招商顾问会在 5 分钟内回电，确认预算、城市和铺位情况。",
    initialScript:
      "优先联系陈女士。确认杭州铺位位置、预算来源、开店时间和是否已有餐饮经营经验。",
    reply: {
      hot: (name) =>
        `你好，${name}，已收到你的加盟咨询。招商顾问会在 5 分钟内回电，确认预算、城市、铺位和开店时间。`,
      warm: (name) =>
        `你好，${name}，已收到你的加盟咨询。我们会先发送品牌资料和开店条件，再由招商顾问确认适配城市和预算。`,
      routine: (name) =>
        `你好，${name}，已收到你的咨询。稍后会发送加盟资料、费用区间和开店条件，方便你先做判断。`,
    },
    script: {
      hot: (name) =>
        `优先联系${name}。确认城市、铺位位置、预算来源、开店时间、是否有餐饮/茶饮经验，并邀请进入招商面谈。`,
      warm: (name) =>
        `今天联系${name}。先确认预算区间和目标城市，再判断是否需要发加盟手册或预约顾问沟通。`,
      routine: (name) =>
        `给${name}发送资料包，48 小时后跟进预算、城市和预计开店时间。`,
    },
    ownerAlert: (priority, name) => `${priority}加盟线索：${name}`,
    ownerBody: (priority, name, value, action, contact) =>
      `预算 ${value}。${action}。联系方式：${contact}`,
  },
  en: {
    title: "AI Franchise Website and Lead Response System",
    htmlLang: "en",
    eyebrow: "Restaurant / tea franchise growth system",
    headline: "Launch a franchise site first, then capture every inquiry.",
    "hero.copy": "I help restaurant and tea chains build franchise websites or landing pages, then connect forms, social messages, and WeCom inquiries to auto replies, intent scoring, consultant alerts, and a follow-up queue.",
    "hero.primaryCta": "Book a 15-minute audit",
    "hero.secondaryCta": "See the franchise demo",
    "hero.proof1": "Franchise intake live in 7 days",
    "hero.proof2": "Works even without a current site",
    "hero.proof3": "SEO/GEO as an add-on",
    "offer.kicker": "Pilot offer",
    "offer.price": "$1,350+ setup",
    "offer.body": "A publishable franchise intake site with forms, intent scoring, consultant alerts, and a follow-up table.",
    "owner.readyTitle": "Franchise consultant alert ready",
    "owner.readyBody": "High-intent franchise inquiries will appear here with a callback script.",
    "metric.response": "Response time",
    "metric.value": "Franchise budget",
    "metric.risk": "Follow-up risk",
    "metric.action": "Next action",
    "value.1.kicker": "Intake first",
    "value.1.title": "Start franchise recruitment even without a site",
    "value.1.body": "Launch a lean franchise site or landing page with brand proof, store proof, investment range, support policy, and inquiry capture.",
    "value.2.kicker": "Faster screening",
    "value.2.title": "High-intent candidates move first",
    "value.2.body": "Budget, city, site, experience, and timing are extracted so consultants call the best candidates first.",
    "value.3.kicker": "Growth",
    "value.3.title": "SEO/GEO content can be layered in after launch",
    "value.3.body": "Create answerable content around investment cost, store requirements, regional policy, and franchise FAQs for search and AI answers.",
    "form.title": "New franchise inquiry",
    "form.sample": "Load sample",
    "form.name": "Candidate name",
    "form.contact": "Contact",
    "form.service": "Inquiry type",
    "form.message": "Inquiry details",
    "form.submit": "Score franchise lead",
    "workflow.title": "Automation run",
    "workflow.parse.title": "Parse",
    "workflow.parse.body": "Extract name, city, budget, site, timing, and contact.",
    "workflow.qualify.title": "Score",
    "workflow.qualify.body": "Assess budget, city, site readiness, and opening timeline.",
    "workflow.reply.title": "Reply",
    "workflow.reply.body": "Send the first franchise response while intent is warm.",
    "workflow.log.title": "Log",
    "workflow.log.body": "Write the lead to a consultant follow-up queue.",
    "result.reply": "AI reply",
    "result.script": "Consultant callback script",
    "queue.title": "Live franchise lead queue",
    "table.time": "Time",
    "table.customer": "Candidate",
    "table.need": "Intent",
    "table.priority": "Priority",
    "table.value": "Budget",
    "table.status": "Status",
    "package.site.kicker": "Franchise site launch",
    "package.site.title": "$1,350+",
    "package.site.1": "Franchise website or landing page",
    "package.site.2": "Brand, store, cost, and support structure",
    "package.site.3": "Form / WeCom / phone intake",
    "package.site.4": "Basic SEO titles and structured content",
    "package.quick.kicker": "Lead-response pilot",
    "package.quick.title": "$950+",
    "package.quick.1": "1 franchise intake source",
    "package.quick.2": "Auto reply + intent scoring",
    "package.quick.3": "WeCom / spreadsheet queue",
    "package.quick.4": "Consultant alert and callback script",
    "package.growth.kicker": "Recommended",
    "package.growth.title": "$3,400+",
    "package.growth.1": "Franchise site + social / WeCom intake",
    "package.growth.2": "Franchise FAQ knowledge base",
    "package.growth.3": "Consultant routing and funnel stage",
    "package.growth.4": "SEO/GEO starter content package",
    "package.care.kicker": "Optimization",
    "package.care.title": "$420 / mo+",
    "package.care.1": "Franchise page and script updates",
    "package.care.2": "Lead scoring rule tuning",
    "package.care.3": "SEO/GEO FAQ content updates",
    "package.care.4": "Monthly franchise funnel report",
    "contact.kicker": "Next step",
    "contact.title": "Send brand materials or your current franchise intake. I will decide whether to build the site first or connect leads first.",
    "contact.body": "Best for growing restaurant, tea, coffee, bakery, and snack chains with weak franchise sites, thin search content, or unstable inquiry follow-up.",
    "contact.business": "Brand type",
    "contact.entry": "Current intake or materials",
    "contact.goal": "Problem to solve",
    "contact.submit": "Create booking email",
    "contact.note": "This opens your email client. Recipient: hello@yaxuan.space.",
    "contact.sent": "Email generated. If your email client did not open, the request was also copied.",
    "contact.subject": "Restaurant and tea franchise lead-response audit",
    contactDefaults: {
      businessType: "Tea / coffee / snack chain",
      leadSource: "No site yet / franchise page / social DMs / WeCom",
      businessGoal: "We need a stronger franchise site, and high-budget candidates with sites are not prioritized.",
    },
    contactEmailBody: (businessType, leadSource, businessGoal) =>
      `Hi, I would like to book a restaurant/tea franchise lead-response audit.\n\nBrand type: ${businessType}\nFranchise intake source: ${leadSource}\nProblem to solve: ${businessGoal}\n\nPlease send a 15-minute time slot.`,
    ready: "Ready",
    processing: "Processing",
    completed: "Completed",
    leadsCount: (count) => `${count} leads`,
    fallbackName: "New candidate",
    fallbackContact: "No contact provided",
    service: {
      franchise: "Franchise policy",
      site: "Site ready",
      regional: "Regional partnership",
      support: "Operations support",
    },
    risk: {
      low: "Low",
      medium: "Medium",
      high: "High",
    },
    action: {
      callNow: "Consultant callback",
      qualify: "Need qualification",
      sendPack: "Send info pack",
    },
    priority: {
      hot: "High intent",
      warm: "Nurture",
      routine: "Info request",
    },
    status: {
      ownerAlerted: "Consultant alerted",
      replySent: "Reply sent",
      callbackQueued: "Callback queued",
    },
    need: {
      franchise: "Franchise inquiry",
      site: "Site ready",
      regional: "Regional partnership",
      support: "Operations support",
    },
    initialReply:
      "Hi Emma, we received your franchise inquiry. A consultant will call within 5 minutes to confirm budget, city, site, and opening timeline.",
    initialScript:
      "Call Emma first. Confirm Hangzhou site location, funding source, opening timeline, and prior foodservice experience.",
    reply: {
      hot: (name) =>
        `Hi ${name}, we received your franchise inquiry. A consultant will call within 5 minutes to confirm budget, city, site, and opening timeline.`,
      warm: (name) =>
        `Hi ${name}, thanks for your franchise inquiry. We will send the brand deck and opening requirements, then confirm your city and budget fit.`,
      routine: (name) =>
        `Hi ${name}, thanks for reaching out. We will send franchise materials, investment range, and opening requirements for your first review.`,
    },
    script: {
      hot: (name) =>
        `Call ${name} first. Confirm city, site location, funding source, opening timeline, and prior restaurant or tea experience. Invite a franchise consultation if qualified.`,
      warm: (name) =>
        `Call ${name} today. Confirm budget range and target city, then decide whether to send the franchise deck or book a consultant call.`,
      routine: (name) =>
        `Send ${name} the information pack, then follow up in 48 hours for budget, city, and expected opening timeline.`,
    },
    ownerAlert: (priority, name) => `${priority} franchise lead: ${name}`,
    ownerBody: (priority, name, value, action, contact) =>
      `${value} budget. ${action}. Contact: ${contact}`,
  },
};

const sampleSets = {
  zh: [
    {
      name: "陈女士",
      contact: "138-0000-0138",
      service: "site",
      message: "想了解奶茶加盟政策，预算 45 万，杭州有一个 35 平临街铺位，本月可以面谈。",
    },
    {
      name: "张先生",
      contact: "zhang@example.com",
      service: "regional",
      message: "我们在江西有 6 家小吃店，想了解是否可以做区域代理，预算 200 万左右。",
    },
    {
      name: "刘先生",
      contact: "139-0000-0194",
      service: "franchise",
      message: "想先看一下加盟资料，预算还没确定，主要想了解加盟费和培训支持。",
    },
  ],
  en: [
    {
      name: "Emma Chen",
      contact: "(415) 555-0138",
      service: "site",
      message:
        "I want to learn about tea franchise policy. Budget is around $65k, and I have a 350 sq ft street-front site in Hangzhou.",
    },
    {
      name: "Marcus Zhang",
      contact: "marcus@example.com",
      service: "regional",
      message:
        "We operate 6 snack shops and want to discuss a regional partnership. Budget is around $280k.",
    },
    {
      name: "Leo Liu",
      contact: "(510) 555-0194",
      service: "franchise",
      message:
        "Please send franchise materials first. I have not decided the budget yet and want to understand fees and training support.",
    },
  ],
};

const initialLeadSets = {
  zh: [
    {
      time: "09:14",
      customer: "王凯",
      need: "site",
      priority: "hot",
      amount: 580000,
      status: "ownerAlerted",
    },
    {
      time: "09:22",
      customer: "刘一诺",
      need: "franchise",
      priority: "routine",
      amount: 180000,
      status: "replySent",
    },
    {
      time: "09:31",
      customer: "赵敏",
      need: "regional",
      priority: "warm",
      amount: 1200000,
      status: "callbackQueued",
    },
  ],
  en: [
    {
      time: "9:14 AM",
      customer: "Daniel Wang",
      need: "site",
      priority: "hot",
      amount: 80000,
      status: "ownerAlerted",
    },
    {
      time: "9:22 AM",
      customer: "Avery Liu",
      need: "franchise",
      priority: "routine",
      amount: 25000,
      status: "replySent",
    },
    {
      time: "9:31 AM",
      customer: "Nora Zhao",
      need: "regional",
      priority: "warm",
      amount: 170000,
      status: "callbackQueued",
    },
  ],
};

const languageButtons = [...document.querySelectorAll("[data-language]")];
const translatable = [...document.querySelectorAll("[data-i18n]")];
const CONTACT_EMAIL = "hello@yaxuan.space";
const form = document.querySelector("#leadForm");
const contactForm = document.querySelector("#contactForm");
const sampleButton = document.querySelector("#sampleButton");
const serviceType = document.querySelector("#serviceType");
const table = document.querySelector("#leadTable");
const pipelineItems = [...document.querySelectorAll("#pipeline li")];
const runStatus = document.querySelector("#runStatus");
const queueCount = document.querySelector("#queueCount");
const metricResponse = document.querySelector("#metricResponse");
const metricValue = document.querySelector("#metricValue");
const metricRisk = document.querySelector("#metricRisk");
const metricAction = document.querySelector("#metricAction");
const replyText = document.querySelector("#replyText");
const callScript = document.querySelector("#callScript");
const ownerAlertTitle = document.querySelector("#ownerAlertTitle");
const ownerAlertBody = document.querySelector("#ownerAlertBody");
const businessType = document.querySelector("#businessType");
const leadSource = document.querySelector("#leadSource");
const businessGoal = document.querySelector("#businessGoal");
const contactNote = document.querySelector("#contactNote");

let language = "zh";
let sampleIndex = 0;
let leads = initialLeadSets.zh.map((lead) => ({ ...lead }));

function t(key) {
  return translations[language][key];
}

function formatMoney(amount) {
  const formatted = amount.toLocaleString(language === "zh" ? "zh-CN" : "en-US");
  if (language === "zh") {
    return amount >= 10000 ? `¥${Math.round(amount / 10000)}万` : `¥${formatted}`;
  }
  return `$${formatted}`;
}

function renderStaticCopy() {
  document.documentElement.lang = t("htmlLang");
  document.title = t("title");

  translatable.forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderServiceOptions(selectedService = "site") {
  serviceType.innerHTML = Object.entries(translations[language].service)
    .map(
      ([value, label]) =>
        `<option value="${value}" ${value === selectedService ? "selected" : ""}>${label}</option>`,
    )
    .join("");
}

function renderTable() {
  const tableLabels = {
    time: t("table.time"),
    customer: t("table.customer"),
    need: t("table.need"),
    priority: t("table.priority"),
    value: t("table.value"),
    status: t("table.status"),
  };

  table.innerHTML = leads
    .map(
      (lead) => `
        <tr>
          <td data-label="${tableLabels.time}">${lead.time}</td>
          <td data-label="${tableLabels.customer}">${lead.customer}</td>
          <td data-label="${tableLabels.need}">${translations[language].need[lead.need]}</td>
          <td data-label="${tableLabels.priority}">
            <span class="badge ${lead.priority}">${translations[language].priority[lead.priority]}</span>
          </td>
          <td data-label="${tableLabels.value}">${formatMoney(lead.amount)}</td>
          <td data-label="${tableLabels.status}" class="status">${translations[language].status[lead.status]}</td>
        </tr>
      `,
    )
    .join("");

  queueCount.textContent = translations[language].leadsCount(leads.length);
}

function fillSample(index = sampleIndex) {
  const sample = sampleSets[language][index];
  document.querySelector("#customerName").value = sample.name;
  document.querySelector("#contact").value = sample.contact;
  renderServiceOptions(sample.service);
  document.querySelector("#message").value = sample.message;
}

function fillContactDefaults() {
  const defaults = translations[language].contactDefaults;
  businessType.value = defaults.businessType;
  leadSource.value = defaults.leadSource;
  businessGoal.value = defaults.businessGoal;
  contactNote.textContent = t("contact.note");
}

function classifyLead(data) {
  const text = `${data.service} ${data.message}`.toLowerCase();
  const hotWords = [
    "铺位",
    "商铺",
    "临街",
    "本月",
    "面谈",
    "区域代理",
    "多家",
    "6 家",
    "预算",
    "site",
    "regional",
    "street-front",
    "partnership",
  ];
  const routineWords = ["资料", "先看", "还没确定", "了解一下", "materials", "not decided"];
  const isHot = hotWords.some((word) => text.includes(word));
  const isRoutine = routineWords.some((word) => text.includes(word));

  if (data.service === "regional") {
    return {
      priority: "hot",
      amount: language === "zh" ? 2000000 : 280000,
      risk: "medium",
      action: "callNow",
      status: "ownerAlerted",
      response: "0:39",
    };
  }

  if (isHot && !isRoutine) {
    return {
      priority: "hot",
      amount: language === "zh" ? 450000 : 65000,
      risk: "medium",
      action: "callNow",
      status: "ownerAlerted",
      response: "0:42",
    };
  }

  if (isRoutine) {
    return {
      priority: "routine",
      amount: language === "zh" ? 180000 : 25000,
      risk: "low",
      action: "sendPack",
      status: "replySent",
      response: "0:51",
    };
  }

  return {
    priority: "warm",
    amount: language === "zh" ? 300000 : 42000,
    risk: "medium",
    action: "qualify",
    status: "callbackQueued",
    response: "0:48",
  };
}

function leadNeed(data) {
  if (data.service === "site") return "site";
  if (data.service === "regional") return "regional";
  if (data.service === "support") return "support";
  return "franchise";
}

function setPipelineState(activeIndex) {
  pipelineItems.forEach((item, index) => {
    item.classList.toggle("is-active", index === activeIndex);
    item.classList.toggle("is-done", index < activeIndex);
  });
}

function clearPipelineState() {
  pipelineItems.forEach((item) => {
    item.classList.remove("is-active", "is-done");
  });
}

function getFormData() {
  return {
    name: document.querySelector("#customerName").value.trim() || t("fallbackName"),
    contact: document.querySelector("#contact").value.trim() || t("fallbackContact"),
    service: serviceType.value,
    message: document.querySelector("#message").value.trim(),
  };
}

function updateResults(data, result) {
  const priority = translations[language].priority[result.priority];
  const action = translations[language].action[result.action];
  const value = formatMoney(result.amount);

  metricResponse.textContent = result.response;
  metricValue.textContent = value;
  metricRisk.textContent = translations[language].risk[result.risk];
  metricAction.textContent = action;
  replyText.textContent = translations[language].reply[result.priority](data.name);
  callScript.textContent = translations[language].script[result.priority](data.name);
  ownerAlertTitle.textContent = translations[language].ownerAlert(
    priority,
    data.name,
    value,
    action,
    data.contact,
  );
  ownerAlertBody.textContent = translations[language].ownerBody(
    priority,
    data.name,
    value,
    action,
    data.contact,
  );
}

async function runAutomation(data) {
  const result = classifyLead(data);
  runStatus.textContent = t("processing");

  for (let index = 0; index < pipelineItems.length; index += 1) {
    setPipelineState(index);
    await new Promise((resolve) => setTimeout(resolve, 260));
  }

  pipelineItems.forEach((item) => item.classList.add("is-done"));
  runStatus.textContent = t("completed");

  const now = new Date();
  leads.unshift({
    time: now.toLocaleTimeString(language === "zh" ? "zh-CN" : "en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: language === "en",
    }),
    customer: data.name,
    need: leadNeed(data),
    priority: result.priority,
    amount: result.amount,
    status: result.status,
  });

  updateResults(data, result);
  renderTable();

  setTimeout(clearPipelineState, 900);
}

function resetLanguage(nextLanguage) {
  language = nextLanguage;
  sampleIndex = 0;
  leads = initialLeadSets[language].map((lead) => ({ ...lead }));
  renderStaticCopy();
  fillSample(sampleIndex);
  fillContactDefaults();
  metricResponse.textContent = "0:42";
  metricValue.textContent = formatMoney(language === "zh" ? 450000 : 65000);
  metricRisk.textContent = translations[language].risk.medium;
  metricAction.textContent = translations[language].action.callNow;
  replyText.textContent = translations[language].initialReply;
  callScript.textContent = translations[language].initialScript;
  ownerAlertTitle.textContent = t("owner.readyTitle");
  ownerAlertBody.textContent = t("owner.readyBody");
  runStatus.textContent = t("ready");
  clearPipelineState();
  renderTable();
}

sampleButton.addEventListener("click", () => {
  sampleIndex = (sampleIndex + 1) % sampleSets[language].length;
  fillSample(sampleIndex);
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    resetLanguage(button.dataset.language);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  runAutomation(getFormData());
});

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const subject = t("contact.subject");
  const body = translations[language].contactEmailBody(
    businessType.value.trim(),
    leadSource.value.trim(),
    businessGoal.value.trim(),
  );

  try {
    await navigator.clipboard.writeText(body);
  } catch (error) {
    // Clipboard access can fail in older browsers; mailto still handles the request.
  }

  contactNote.textContent = t("contact.sent");
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

resetLanguage("zh");
