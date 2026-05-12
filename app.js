const translations = {
  zh: {
    title: "AI 成交响应台",
    htmlLang: "zh-CN",
    eyebrow: "不限行业的成交响应台",
    headline: "把高价值咨询在 60 秒内变成可跟进机会。",
    "hero.copy": "我帮任何有线索入口的业务，把表单、邮件、私信和客服消息接入自动回复、资格判断、负责人提醒和跟进队列。行业先不限制，只筛选能快速产生现金流的机会。",
    "hero.primaryCta": "预约 15 分钟诊断",
    "hero.secondaryCta": "查看现场演示",
    "hero.proof1": "7 天内上线首版",
    "hero.proof2": "按客单价和跟进缺口筛选",
    "hero.proof3": "适合并行测试多个赛道",
    "offer.kicker": "首单试点",
    "offer.price": "¥8,800 起搭建",
    "offer.body": "交付一个真实可用的成交响应流程，包含入口接入、资格判断、负责人提醒和跟进表。",
    "owner.readyTitle": "负责人提醒待命",
    "owner.readyBody": "高价值机会会在这里生成下一步脚本。",
    "metric.response": "响应时间",
    "metric.value": "机会价值",
    "metric.risk": "跟进风险",
    "metric.action": "下一步动作",
    "value.1.kicker": "先抓钱",
    "value.1.title": "不按行业猜，按机会价值筛",
    "value.1.body": "只要单笔成交能覆盖试点费，就进入测试池；低客单、无入口、没人跟进的先跳过。",
    "value.2.kicker": "快判断",
    "value.2.title": "预算、时机和决策人先被问清",
    "value.2.body": "系统先问关键问题，再把高意向机会推给负责人，减少无效沟通。",
    "value.3.kicker": "可复制",
    "value.3.title": "同一套响应台测试多个赛道",
    "value.3.body": "每个行业只换资格问题、话术和跟进规则，底层流程保持一致。",
    "form.title": "新商机咨询",
    "form.sample": "换个样例",
    "form.name": "咨询人姓名",
    "form.contact": "联系方式",
    "form.service": "咨询类型",
    "form.message": "咨询内容",
    "form.submit": "评估商机",
    "workflow.title": "自动化执行",
    "workflow.parse.title": "解析",
    "workflow.parse.body": "提取需求、预算、时机、角色和联系方式。",
    "workflow.qualify.title": "评级",
    "workflow.qualify.body": "判断预算、上线时机、决策角色和成交概率。",
    "workflow.reply.title": "回复",
    "workflow.reply.body": "在线索最热的时候发出第一条回复。",
    "workflow.log.title": "入库",
    "workflow.log.body": "写入销售可跟进的商机队列。",
    "result.reply": "AI 回复",
    "result.script": "负责人下一步脚本",
    "queue.title": "实时商机队列",
    "table.time": "时间",
    "table.customer": "咨询人",
    "table.need": "需求",
    "table.priority": "优先级",
    "table.value": "价值",
    "table.status": "状态",
    "package.quick.kicker": "机会捕获试点",
    "package.quick.title": "¥8,800 起",
    "package.quick.1": "1 个高价值咨询入口",
    "package.quick.2": "自动回复 + 资格判断",
    "package.quick.3": "飞书 / Airtable / HubSpot 队列",
    "package.quick.4": "负责人提醒和下一步脚本",
    "package.growth.kicker": "推荐",
    "package.growth.title": "¥28,000 起",
    "package.growth.1": "多入口商机汇总",
    "package.growth.2": "资格问题和报价知识库",
    "package.growth.3": "销售分配和阶段跟进",
    "package.growth.4": "14 天成交漏斗复盘",
    "package.care.kicker": "持续增长",
    "package.care.title": "¥3,000 / 月起",
    "package.care.1": "话术和资格规则调优",
    "package.care.2": "新增赛道测试支持",
    "package.care.3": "每周商机转化报告",
    "package.care.4": "新增小改动支持",
    "contact.kicker": "下一步",
    "contact.title": "发一个正在产生咨询的入口，我判断能不能 7 天内跑通。",
    "contact.body": "不限定行业。只看四件事：单笔成交价值、当前咨询量、首次响应速度、是否有人能接手跟进。",
    "contact.business": "业务类型",
    "contact.entry": "线索入口",
    "contact.goal": "希望解决的问题",
    "contact.submit": "生成预约邮件",
    "contact.note": "会打开你的邮件客户端，收件人是 hello@yaxuan.space。",
    "contact.sent": "已生成邮件。如果邮件客户端没有打开，需求内容也已复制。",
    "contact.subject": "AI 成交响应台诊断预约",
    contactDefaults: {
      businessType: "B2B 服务 / 高客单咨询 / 交易型业务",
      leadSource: "官网表单 / 邮箱 / 私信 / 客服消息",
      businessGoal: "高价值咨询回复慢，预算和决策时机没有被优先识别。",
    },
    contactEmailBody: (businessType, leadSource, businessGoal) =>
      `你好，我想预约 AI 成交响应台诊断。\n\n业务类型：${businessType}\n线索入口：${leadSource}\n希望解决的问题：${businessGoal}\n\n请回复一个 15 分钟沟通时间。`,
    ready: "待运行",
    processing: "处理中",
    completed: "已完成",
    leadsCount: (count) => `${count} 条机会`,
    fallbackName: "新咨询人",
    fallbackContact: "未提供联系方式",
    service: {
      demo: "产品演示",
      quote: "采购报价",
      partnership: "渠道合作",
      question: "普通咨询",
    },
    risk: {
      low: "低",
      medium: "中",
      high: "高",
    },
    action: {
      callNow: "销售回拨",
      qualify: "补充资格",
      nurture: "发送下一步",
    },
    priority: {
      hot: "高意向",
      warm: "可推进",
      routine: "待培育",
    },
    status: {
      ownerAlerted: "已提醒负责人",
      replySent: "已自动回复",
      callbackQueued: "已排入回拨",
    },
    need: {
      demo: "产品演示",
      quote: "采购报价",
      partnership: "渠道合作",
      question: "普通咨询",
    },
    initialReply:
      "你好，林总，已收到你的评估需求。销售负责人会在 5 分钟内联系你，确认预算、上线时间和本周演示窗口。",
    initialScript:
      "优先联系林总。确认预算范围、决策流程、上线时间和本周演示窗口。",
    reply: {
      hot: (name) =>
        `你好，${name}，已收到你的咨询。负责人会在 5 分钟内联系你，确认预算、时机和下一步演示安排。`,
      warm: (name) =>
        `你好，${name}，已收到你的需求。我们会先补充确认预算、目标时间和决策角色，再安排合适的下一步。`,
      routine: (name) =>
        `你好，${name}，已收到你的咨询。稍后会发送资料和可选沟通时间，方便你先做判断。`,
    },
    script: {
      hot: (name) =>
        `优先联系${name}。确认预算来源、决策流程、上线时间、当前替代方案，并争取本周演示或方案会。`,
      warm: (name) =>
        `今天联系${name}。补充预算区间、使用场景、参与决策的人，以及是否需要报价或资料包。`,
      routine: (name) =>
        `给${name}发送资料包和两个可选沟通时间，48 小时后跟进预算、时机和决策角色。`,
    },
    ownerAlert: (priority, name, value, action, contact) =>
      `${priority}机会：${name}`,
    ownerBody: (priority, name, value, action, contact) =>
      `机会价值 ${value}。${action}。联系方式：${contact}`,
  },
  en: {
    title: "AI Revenue Response Desk",
    htmlLang: "en",
    eyebrow: "Cross-market revenue desk",
    headline: "Turn high-value inquiries into follow-up opportunities in under 60 seconds.",
    "hero.copy": "I help any business with lead sources connect forms, email, DMs, and support messages to auto replies, qualification, owner alerts, and a follow-up queue. No fixed industry, only opportunities that can create cash quickly.",
    "hero.primaryCta": "Book a 15-minute audit",
    "hero.secondaryCta": "See the live demo",
    "hero.proof1": "First version in 7 days",
    "hero.proof2": "Filter by deal value and follow-up gap",
    "hero.proof3": "Built to test multiple markets in parallel",
    "offer.kicker": "Pilot offer",
    "offer.price": "$1,250+ setup",
    "offer.body": "A working revenue-response workflow with intake, qualification, owner alerts, and a follow-up table.",
    "owner.readyTitle": "Owner alert ready",
    "owner.readyBody": "High-value opportunities will appear here with a next-step script.",
    "metric.response": "Response time",
    "metric.value": "Opportunity value",
    "metric.risk": "Follow-up risk",
    "metric.action": "Next action",
    "value.1.kicker": "Cash first",
    "value.1.title": "Do not guess by industry. Filter by opportunity value.",
    "value.1.body": "If one closed deal can cover the pilot, it enters the test pool. Low-ticket, no-source, no-owner leads wait.",
    "value.2.kicker": "Faster judgment",
    "value.2.title": "Budget, timing, and decision role get clarified first",
    "value.2.body": "The system asks the key questions, then pushes high-intent opportunities to the owner.",
    "value.3.kicker": "Repeatable",
    "value.3.title": "One response desk can test multiple markets",
    "value.3.body": "Each market changes qualification questions, copy, and routing rules. The core workflow stays the same.",
    "form.title": "New opportunity",
    "form.sample": "Load sample",
    "form.name": "Contact name",
    "form.contact": "Contact",
    "form.service": "Inquiry type",
    "form.message": "Inquiry details",
    "form.submit": "Score opportunity",
    "workflow.title": "Automation run",
    "workflow.parse.title": "Parse",
    "workflow.parse.body": "Extract need, budget, timing, role, and contact.",
    "workflow.qualify.title": "Qualify",
    "workflow.qualify.body": "Assess budget, timing, decision role, and conversion odds.",
    "workflow.reply.title": "Reply",
    "workflow.reply.body": "Send the first response while the lead is still warm.",
    "workflow.log.title": "Log",
    "workflow.log.body": "Write the opportunity to a sales follow-up queue.",
    "result.reply": "AI reply",
    "result.script": "Owner next-step script",
    "queue.title": "Live opportunity queue",
    "table.time": "Time",
    "table.customer": "Customer",
    "table.need": "Need",
    "table.priority": "Priority",
    "table.value": "Value",
    "table.status": "Status",
    "package.quick.kicker": "Opportunity capture pilot",
    "package.quick.title": "$1,250+",
    "package.quick.1": "1 high-value inquiry source",
    "package.quick.2": "Auto reply + qualification",
    "package.quick.3": "Airtable / HubSpot / spreadsheet queue",
    "package.quick.4": "Owner alert and next-step script",
    "package.growth.kicker": "Recommended",
    "package.growth.title": "$4,000+",
    "package.growth.1": "Multiple opportunity sources",
    "package.growth.2": "Qualification and quote knowledge base",
    "package.growth.3": "Sales routing and stage follow-up",
    "package.growth.4": "14-day funnel review",
    "package.care.kicker": "Growth support",
    "package.care.title": "$450 / mo+",
    "package.care.1": "Copy and scoring rule tuning",
    "package.care.2": "New market test support",
    "package.care.3": "Weekly opportunity report",
    "package.care.4": "Small intake-source updates",
    "contact.kicker": "Next step",
    "contact.title": "Send one inquiry source that already gets demand. I will tell you whether a 7-day pilot is realistic.",
    "contact.body": "No fixed industry. I only check four things: deal value, current inquiry volume, first-response speed, and whether someone can take over follow-up.",
    "contact.business": "Business type",
    "contact.entry": "Lead source",
    "contact.goal": "Problem to solve",
    "contact.submit": "Create booking email",
    "contact.note": "This opens your email client. Recipient: hello@yaxuan.space.",
    "contact.sent": "Email generated. If your email client did not open, the request was also copied.",
    "contact.subject": "AI revenue response desk audit",
    contactDefaults: {
      businessType: "B2B service / high-ticket consulting / transaction business",
      leadSource: "Website form / email / DMs / support messages",
      businessGoal: "High-value inquiries get slow replies, and budget or timing is not prioritized.",
    },
    contactEmailBody: (businessType, leadSource, businessGoal) =>
      `Hi, I would like to book an AI revenue response desk audit.\n\nBusiness type: ${businessType}\nLead source: ${leadSource}\nProblem to solve: ${businessGoal}\n\nPlease send a 15-minute time slot.`,
    ready: "Ready",
    processing: "Processing",
    completed: "Completed",
    leadsCount: (count) => `${count} leads`,
    fallbackName: "New contact",
    fallbackContact: "No contact provided",
    service: {
      demo: "Product demo",
      quote: "Purchase quote",
      partnership: "Partnership",
      question: "General question",
    },
    risk: {
      low: "Low",
      medium: "Medium",
      high: "High",
    },
    action: {
      callNow: "Sales callback",
      qualify: "Qualify budget",
      nurture: "Send next step",
    },
    priority: {
      hot: "Hot",
      warm: "Warm",
      routine: "Routine",
    },
    status: {
      ownerAlerted: "Owner alerted",
      replySent: "Reply sent",
      callbackQueued: "Callback queued",
    },
    need: {
      demo: "Product demo",
      quote: "Purchase quote",
      partnership: "Partnership",
      question: "General question",
    },
    initialReply:
      "Hi Dana, we received your evaluation request. A sales owner will call within 5 minutes to confirm budget, timeline, and demo availability this week.",
    initialScript:
      "Call Dana first. Confirm budget range, decision process, launch timing, and this week's demo window.",
    reply: {
      hot: (name) =>
        `Hi ${name}, we received your request. A sales owner will call within 5 minutes to confirm budget, timing, and the next demo step.`,
      warm: (name) =>
        `Hi ${name}, thanks for reaching out. We will confirm budget, timing, and decision role before recommending the next step.`,
      routine: (name) =>
        `Hi ${name}, thanks for reaching out. We will send the relevant materials and available times so you can review first.`,
    },
    script: {
      hot: (name) =>
        `Call ${name} first. Confirm budget source, decision process, launch timing, current alternative, and push for a demo or solution call this week.`,
      warm: (name) =>
        `Call ${name} today. Ask about budget range, use case, decision participants, and whether a quote or deck is needed.`,
      routine: (name) =>
        `Send ${name} the material pack and two meeting options, then follow up in 48 hours for budget, timing, and decision role.`,
    },
    ownerAlert: (priority, name) => `${priority} opportunity: ${name}`,
    ownerBody: (priority, name, value, action, contact) =>
      `${value} estimated value. ${action}. Contact: ${contact}`,
  },
};

const sampleSets = {
  zh: [
    {
      name: "林总",
      contact: "138-0000-0138",
      service: "demo",
      message: "我们团队想评估 AI 客服和线索分配，预算 12 万，本周想看演示，6 月前要上线。",
    },
    {
      name: "陈明",
      contact: "chenming@example.com",
      service: "quote",
      message: "我们有一个新项目需要采购数据清洗服务，预算 8-10 万，月底前要定供应商，请发报价。",
    },
    {
      name: "周婷",
      contact: "139-0000-0194",
      service: "partnership",
      message: "我们有渠道资源，想聊联合获客合作。现在每月大概能带来 40 条企业咨询。",
    },
  ],
  en: [
    {
      name: "Dana Lewis",
      contact: "(415) 555-0138",
      service: "demo",
      message:
        "Our team is evaluating AI support and lead routing. Budget is about $18k, we want a demo this week, and need to launch before June.",
    },
    {
      name: "Marcus Chen",
      contact: "marcus@example.com",
      service: "quote",
      message:
        "We need a quote for a data cleanup project. Budget is $12k to $15k and we want to choose a vendor by the end of the month.",
    },
    {
      name: "Tina Patel",
      contact: "(510) 555-0194",
      service: "partnership",
      message:
        "We have a partner channel and want to discuss co-selling. We can bring around 40 qualified business inquiries per month.",
    },
  ],
};

const initialLeadSets = {
  zh: [
    {
      time: "09:14",
      customer: "王凯",
      need: "demo",
      priority: "hot",
      amount: 120000,
      status: "ownerAlerted",
    },
    {
      time: "09:22",
      customer: "刘一诺",
      need: "question",
      priority: "routine",
      amount: 8000,
      status: "replySent",
    },
    {
      time: "09:31",
      customer: "赵敏",
      need: "quote",
      priority: "warm",
      amount: 60000,
      status: "callbackQueued",
    },
  ],
  en: [
    {
      time: "9:14 AM",
      customer: "Daniel Foster",
      need: "demo",
      priority: "hot",
      amount: 18000,
      status: "ownerAlerted",
    },
    {
      time: "9:22 AM",
      customer: "Avery Johnson",
      need: "question",
      priority: "routine",
      amount: 1200,
      status: "replySent",
    },
    {
      time: "9:31 AM",
      customer: "Nora Walsh",
      need: "quote",
      priority: "warm",
      amount: 9000,
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
  return language === "zh" ? `¥${formatted}` : `$${formatted}`;
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

function renderServiceOptions(selectedService = "demo") {
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
  const decisionWords = [
    "budget",
    "demo",
    "launch",
    "vendor",
    "this week",
    "by the end",
    "预算",
    "演示",
    "上线",
    "供应商",
    "本周",
    "月底",
    "6 月",
  ];
  const valueWords = [
    "quote",
    "purchase",
    "enterprise",
    "qualified",
    "$",
    "报价",
    "采购",
    "企业",
    "项目",
    "万",
  ];
  const partnershipWords = [
    "partner",
    "channel",
    "co-selling",
    "partnership",
    "合作",
    "渠道",
    "联合获客",
  ];
  const isDecisionReady = decisionWords.some((word) => text.includes(word));
  const isHighValue = valueWords.some((word) => text.includes(word));
  const isPartnership = partnershipWords.some((word) => text.includes(word));

  if (isDecisionReady && isHighValue) {
    return {
      priority: "hot",
      amount: language === "zh" ? 120000 : 18000,
      risk: "medium",
      action: "callNow",
      status: "ownerAlerted",
      response: "0:42",
    };
  }

  if (isHighValue || isPartnership) {
    return {
      priority: "warm",
      amount: language === "zh" ? 60000 : 9000,
      risk: "medium",
      action: "qualify",
      status: "callbackQueued",
      response: "0:51",
    };
  }

  return {
    priority: "routine",
    amount: language === "zh" ? 8000 : 1200,
    risk: "high",
    action: "nurture",
    status: "replySent",
    response: "0:38",
  };
}

function leadNeed(data) {
  if (data.service === "demo") return "demo";
  if (data.service === "quote") return "quote";
  if (data.service === "partnership") return "partnership";
  return "question";
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
  metricValue.textContent = formatMoney(language === "zh" ? 120000 : 18000);
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
