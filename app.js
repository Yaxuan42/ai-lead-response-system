const translations = {
  zh: {
    title: "AI 线索响应系统",
    htmlLang: "zh-CN",
    eyebrow: "AI 线索响应系统",
    headline: "60 秒内接住每条客户咨询。",
    "hero.copy": "我帮本地服务商把网站表单、邮件和私信接入自动回复、线索评级、老板提醒和跟进队列，减少漏单。",
    "hero.primaryCta": "预约 15 分钟诊断",
    "hero.secondaryCta": "查看现场演示",
    "hero.proof1": "7 天内上线首版",
    "hero.proof2": "先接线索，不重做官网",
    "hero.proof3": "适合高客单本地服务",
    "offer.kicker": "首单试点",
    "offer.price": "¥3,500 起搭建",
    "offer.body": "交付一个真实可用的线索响应流程，包含表单接入、自动回复、线索表和老板提醒。",
    "owner.readyTitle": "老板提醒待命",
    "owner.readyBody": "高价值线索会在这里生成回拨脚本。",
    "metric.response": "响应时间",
    "metric.value": "线索价值",
    "metric.risk": "漏单风险",
    "metric.action": "下一步动作",
    "value.1.kicker": "少漏单",
    "value.1.title": "新咨询先被接住",
    "value.1.body": "客户刚提交表单时最热，系统先回复，再提醒人跟进。",
    "value.2.kicker": "快判断",
    "value.2.title": "把高价值线索排到前面",
    "value.2.body": "紧急、安装、报价类请求会被标记，老板先打最值钱的电话。",
    "value.3.kicker": "可交付",
    "value.3.title": "不用先做复杂 SaaS",
    "value.3.body": "第一版用你现有工具搭起来，跑通后再决定是否产品化。",
    "form.title": "网站新线索",
    "form.sample": "换个样例",
    "form.name": "客户姓名",
    "form.contact": "联系方式",
    "form.service": "服务类型",
    "form.message": "客户留言",
    "form.submit": "处理线索",
    "workflow.title": "自动化执行",
    "workflow.parse.title": "解析",
    "workflow.parse.body": "提取姓名、需求、时间和联系方式。",
    "workflow.qualify.title": "评级",
    "workflow.qualify.body": "判断紧急程度和预估成交价值。",
    "workflow.reply.title": "回复",
    "workflow.reply.body": "在线索最热的时候发出第一条回复。",
    "workflow.log.title": "入库",
    "workflow.log.body": "写入可跟进的线索队列。",
    "result.reply": "AI 回复",
    "result.script": "老板回拨脚本",
    "queue.title": "实时线索队列",
    "table.time": "时间",
    "table.customer": "客户",
    "table.need": "需求",
    "table.priority": "优先级",
    "table.value": "价值",
    "table.status": "状态",
    "package.quick.kicker": "快速试点",
    "package.quick.title": "¥3,500 起",
    "package.quick.1": "1 个线索入口",
    "package.quick.2": "自动回复 + 线索评级",
    "package.quick.3": "Google Sheet / 飞书表格队列",
    "package.quick.4": "老板提醒和回拨脚本",
    "package.growth.kicker": "推荐",
    "package.growth.title": "¥8,000 起",
    "package.growth.1": "多入口线索汇总",
    "package.growth.2": "FAQ / 报价知识库",
    "package.growth.3": "跟进提醒和成交状态",
    "package.growth.4": "7 天数据复盘",
    "package.care.kicker": "持续维护",
    "package.care.title": "¥800 / 月起",
    "package.care.1": "回复文案更新",
    "package.care.2": "流程异常排查",
    "package.care.3": "每月线索报告",
    "package.care.4": "新增小改动支持",
    "contact.kicker": "下一步",
    "contact.title": "发一个现有线索入口，我给你判断能不能 7 天内上线。",
    "contact.body": "适合暖通、装修、家政、教育、诊所、法律咨询、房产经纪等高客单服务。先做能产生现金流的流程。",
    "contact.business": "业务类型",
    "contact.entry": "线索入口",
    "contact.goal": "希望解决的问题",
    "contact.submit": "生成预约邮件",
    "contact.note": "会打开你的邮件客户端，收件人是 hello@yaxuan.space。",
    "contact.sent": "已生成邮件。如果邮件客户端没有打开，需求内容也已复制。",
    "contact.subject": "线索响应系统诊断预约",
    contactDefaults: {
      businessType: "暖通 / 装修 / 家政",
      leadSource: "官网表单 / 邮箱 / 微信私信",
      businessGoal: "客户咨询回复慢，高价值线索没有优先跟进。",
    },
    contactEmailBody: (businessType, leadSource, businessGoal) =>
      `你好，我想预约线索响应系统诊断。\n\n业务类型：${businessType}\n线索入口：${leadSource}\n希望解决的问题：${businessGoal}\n\n请回复一个 15 分钟沟通时间。`,
    ready: "待运行",
    processing: "处理中",
    completed: "已完成",
    leadsCount: (count) => `${count} 条线索`,
    fallbackName: "新客户",
    fallbackContact: "未提供联系方式",
    service: {
      emergency: "紧急维修",
      install: "安装报价",
      maintenance: "保养计划",
      general: "普通咨询",
    },
    risk: {
      low: "低",
      medium: "中",
    },
    action: {
      callNow: "立即回电",
      quoteSlot: "安排报价",
      bookOnline: "发预约链接",
    },
    priority: {
      hot: "高优先级",
      warm: "可跟进",
      routine: "常规",
    },
    status: {
      ownerAlerted: "已提醒老板",
      replySent: "已自动回复",
      callbackQueued: "已排入回拨",
    },
    need: {
      emergency: "当天维修",
      install: "安装估价",
      maintenance: "保养计划",
      general: "普通咨询",
    },
    initialReply:
      "你好，李晓宁，我们可以今天处理紧急空调问题。调度会在 5 分钟内致电确认地址和上门时间。",
    initialScript:
      "优先联系李晓宁。确认空调是否完全停机，再给出今天可上门的紧急检修时段。",
    reply: {
      hot: (name) =>
        `你好，${name}，我们可以今天处理紧急暖通问题。调度会在 5 分钟内致电确认地址和上门时间。`,
      warm: (name) =>
        `你好，${name}，我们已收到安装报价需求。顾问会尽快联系你，确认设备情况和上门测量时间。`,
      routine: (name) =>
        `你好，${name}，我们已收到你的服务需求。稍后会发送可预约时段，并帮你确认最合适的方案。`,
    },
    script: {
      hot: (name) =>
        `优先联系${name}。确认设备是否完全停机、现场是否有老人小孩，再给出今天可上门的紧急检修时段。`,
      warm: (name) =>
        `今天联系${name}。询问设备年限、房屋面积、预算范围和是否需要分期方案。`,
      routine: (name) =>
        `给${name}发送预约链接，并提供本周前两个可选保养时段。`,
    },
    ownerAlert: (priority, name, value, action, contact) =>
      `${priority}线索：${name}`,
    ownerBody: (priority, name, value, action, contact) =>
      `预估价值 ${value}。${action}。联系方式：${contact}`,
  },
  en: {
    title: "AI Lead Response System",
    htmlLang: "en",
    eyebrow: "AI Lead Response System",
    headline: "Answer every new customer inquiry in under 60 seconds.",
    "hero.copy": "I help local service businesses connect website forms, email, and messages to automatic replies, lead scoring, owner alerts, and a follow-up queue.",
    "hero.primaryCta": "Book a 15-minute audit",
    "hero.secondaryCta": "See the live demo",
    "hero.proof1": "First version in 7 days",
    "hero.proof2": "Capture leads before rebuilding the site",
    "hero.proof3": "Built for high-ticket local services",
    "offer.kicker": "Pilot offer",
    "offer.price": "$500+ setup",
    "offer.body": "A working lead-response workflow with form intake, auto replies, a lead queue, and owner alerts.",
    "owner.readyTitle": "Owner alert ready",
    "owner.readyBody": "High-value jobs will be pushed here with a callback script.",
    "metric.response": "Response time",
    "metric.value": "Lead value",
    "metric.risk": "Missed-lead risk",
    "metric.action": "Next action",
    "value.1.kicker": "Fewer missed leads",
    "value.1.title": "New inquiries get a first response",
    "value.1.body": "The system replies while the lead is still warm, then routes the follow-up to a person.",
    "value.2.kicker": "Faster judgment",
    "value.2.title": "High-value jobs move to the front",
    "value.2.body": "Emergency, install, and quote requests are flagged so the owner calls the right lead first.",
    "value.3.kicker": "Shippable",
    "value.3.title": "No SaaS build required first",
    "value.3.body": "The first version runs on your current tools. Productize only after the workflow pays.",
    "form.title": "Incoming website lead",
    "form.sample": "Load sample",
    "form.name": "Customer name",
    "form.contact": "Contact",
    "form.service": "Service type",
    "form.message": "Lead message",
    "form.submit": "Process lead",
    "workflow.title": "Automation run",
    "workflow.parse.title": "Parse",
    "workflow.parse.body": "Extract name, need, timing, and contact.",
    "workflow.qualify.title": "Qualify",
    "workflow.qualify.body": "Rank urgency and estimated job value.",
    "workflow.reply.title": "Reply",
    "workflow.reply.body": "Send the first response while the lead is still warm.",
    "workflow.log.title": "Log",
    "workflow.log.body": "Write the lead to a spreadsheet-style queue.",
    "result.reply": "AI reply",
    "result.script": "Owner callback script",
    "queue.title": "Live lead queue",
    "table.time": "Time",
    "table.customer": "Customer",
    "table.need": "Need",
    "table.priority": "Priority",
    "table.value": "Value",
    "table.status": "Status",
    "package.quick.kicker": "Quick pilot",
    "package.quick.title": "$500+",
    "package.quick.1": "1 lead source",
    "package.quick.2": "Auto reply + lead scoring",
    "package.quick.3": "Google Sheet / Airtable queue",
    "package.quick.4": "Owner alert and callback script",
    "package.growth.kicker": "Recommended",
    "package.growth.title": "$1,200+",
    "package.growth.1": "Multiple lead sources",
    "package.growth.2": "FAQ / quote knowledge base",
    "package.growth.3": "Follow-up reminders and deal status",
    "package.growth.4": "7-day performance review",
    "package.care.kicker": "Care plan",
    "package.care.title": "$150 / mo+",
    "package.care.1": "Reply copy updates",
    "package.care.2": "Workflow troubleshooting",
    "package.care.3": "Monthly lead report",
    "package.care.4": "Small change support",
    "contact.kicker": "Next step",
    "contact.title": "Send one current lead source. I will tell you whether we can ship in 7 days.",
    "contact.body": "Best for HVAC, remodeling, home services, education, clinics, legal intake, and real estate. Start with the workflow that can create cash flow.",
    "contact.business": "Business type",
    "contact.entry": "Lead source",
    "contact.goal": "Problem to solve",
    "contact.submit": "Create booking email",
    "contact.note": "This opens your email client. Recipient: hello@yaxuan.space.",
    "contact.sent": "Email generated. If your email client did not open, the request was also copied.",
    "contact.subject": "Lead response system audit",
    contactDefaults: {
      businessType: "HVAC / remodeling / home services",
      leadSource: "Website form / email / social messages",
      businessGoal: "Slow replies and no priority follow-up for high-value leads.",
    },
    contactEmailBody: (businessType, leadSource, businessGoal) =>
      `Hi, I would like to book a lead-response system audit.\n\nBusiness type: ${businessType}\nLead source: ${leadSource}\nProblem to solve: ${businessGoal}\n\nPlease send a 15-minute time slot.`,
    ready: "Ready",
    processing: "Processing",
    completed: "Completed",
    leadsCount: (count) => `${count} leads`,
    fallbackName: "New customer",
    fallbackContact: "No contact provided",
    service: {
      emergency: "Emergency repair",
      install: "Install quote",
      maintenance: "Maintenance plan",
      general: "General question",
    },
    risk: {
      low: "Low",
      medium: "Medium",
    },
    action: {
      callNow: "Call now",
      quoteSlot: "Quote slot",
      bookOnline: "Book online",
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
      emergency: "Same-day repair",
      install: "Install estimate",
      maintenance: "Maintenance plan",
      general: "General request",
    },
    initialReply:
      "Hi Sarah, we can help with urgent HVAC issues today. A dispatcher will call in the next 5 minutes to confirm your address and arrival window.",
    initialScript:
      "Call Sarah first. Mention same-day availability, ask whether the system is fully off, then offer the emergency diagnostic slot.",
    reply: {
      hot: (name) =>
        `Hi ${name}, we can help with urgent HVAC issues today. A dispatcher will call in the next 5 minutes to confirm your address and arrival window.`,
      warm: (name) =>
        `Hi ${name}, thanks for reaching out. We can prepare an installation quote this week and will call shortly to confirm system details and timing.`,
      routine: (name) =>
        `Hi ${name}, thanks for contacting Northstar HVAC. We received your request and will send available appointment options shortly.`,
    },
    script: {
      hot: (name) =>
        `Call ${name} first. Confirm safety, ask whether the system is fully off, then offer the emergency diagnostic slot.`,
      warm: (name) =>
        `Call ${name} today. Ask about equipment age, home size, budget range, and whether the customer wants financing.`,
      routine: (name) =>
        `Send ${name} the booking link and offer the first two maintenance windows this week.`,
    },
    ownerAlert: (priority, name) => `${priority} lead: ${name}`,
    ownerBody: (priority, name, value, action, contact) =>
      `${value} estimated value. ${action}. Contact: ${contact}`,
  },
};

const sampleSets = {
  zh: [
    {
      name: "李晓宁",
      contact: "138-0000-0138",
      service: "emergency",
      message: "家里的空调突然不制冷，晚上有客人到。今天能安排师傅上门吗？",
    },
    {
      name: "陈明",
      contact: "chenming@example.com",
      service: "install",
      message: "想把用了 12 年的中央空调换掉，本周能上门测量并给报价吗？房子大概 160 平。",
    },
    {
      name: "周婷",
      contact: "139-0000-0194",
      service: "maintenance",
      message: "两套出租房想做夏季前保养，请发一下套餐和可预约时间。",
    },
  ],
  en: [
    {
      name: "Sarah Miller",
      contact: "(415) 555-0138",
      service: "emergency",
      message:
        "Our AC stopped working and the house is getting hot. We have guests arriving tonight. Can someone come today?",
    },
    {
      name: "Marcus Chen",
      contact: "marcus@example.com",
      service: "install",
      message:
        "We are replacing a 20 year old furnace and want a quote this week. The home is about 2,100 square feet.",
    },
    {
      name: "Tina Patel",
      contact: "(510) 555-0194",
      service: "maintenance",
      message:
        "I want annual maintenance for two rental properties before summer. Please send options and available times.",
    },
  ],
};

const initialLeadSets = {
  zh: [
    {
      time: "09:14",
      customer: "王凯",
      need: "emergency",
      priority: "hot",
      amount: 1800,
      status: "ownerAlerted",
    },
    {
      time: "09:22",
      customer: "刘一诺",
      need: "maintenance",
      priority: "routine",
      amount: 180,
      status: "replySent",
    },
    {
      time: "09:31",
      customer: "赵敏",
      need: "install",
      priority: "warm",
      amount: 4600,
      status: "callbackQueued",
    },
  ],
  en: [
    {
      time: "9:14 AM",
      customer: "Daniel Foster",
      need: "emergency",
      priority: "hot",
      amount: 1800,
      status: "ownerAlerted",
    },
    {
      time: "9:22 AM",
      customer: "Avery Johnson",
      need: "maintenance",
      priority: "routine",
      amount: 180,
      status: "replySent",
    },
    {
      time: "9:31 AM",
      customer: "Nora Walsh",
      need: "install",
      priority: "warm",
      amount: 4600,
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

function renderServiceOptions(selectedService = "emergency") {
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
  const urgentWords = [
    "emergency",
    "stopped",
    "today",
    "tonight",
    "urgent",
    "no heat",
    "not working",
    "紧急",
    "突然",
    "今天",
    "晚上",
    "不制冷",
    "不工作",
    "停机",
  ];
  const highValueWords = [
    "replace",
    "install",
    "quote",
    "furnace",
    "condenser",
    "rental",
    "安装",
    "报价",
    "更换",
    "中央空调",
    "出租房",
  ];
  const isUrgent = urgentWords.some((word) => text.includes(word));
  const isHighValue = highValueWords.some((word) => text.includes(word));

  if (isUrgent) {
    return {
      priority: "hot",
      amount: isHighValue ? 4200 : 2400,
      risk: "low",
      action: "callNow",
      status: "ownerAlerted",
      response: "0:42",
    };
  }

  if (isHighValue) {
    return {
      priority: "warm",
      amount: 4600,
      risk: "medium",
      action: "quoteSlot",
      status: "callbackQueued",
      response: "0:51",
    };
  }

  return {
    priority: "routine",
    amount: 240,
    risk: "low",
    action: "bookOnline",
    status: "replySent",
    response: "0:38",
  };
}

function leadNeed(data) {
  if (data.service === "emergency") return "emergency";
  if (data.service === "install") return "install";
  if (data.service === "maintenance") return "maintenance";
  return "general";
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
  metricValue.textContent = formatMoney(2400);
  metricRisk.textContent = translations[language].risk.low;
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
