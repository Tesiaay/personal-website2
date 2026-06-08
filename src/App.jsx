import mascotUrl from '../image/设计参考/IP-transparent.png'
import './App.css'

const projects = [
  {
    number: '01',
    date: '2026.04 - 2026.05 · 项目负责人',
    title: 'Tiva：个人 AI 助理 Agent 工作流',
    description:
      '基于 Dify 搭建个人 AI 助理 MVP，把任务拆解、知识整理、决策分析与复盘场景变成可运行的 Agent 工作流。',
    tags: ['Dify', 'Agent Workflow', 'Memory', 'Prompt 测试'],
    href: '#tiva',
    link: '查看 Tiva 详情',
  },
  {
    number: '02',
    date: '2026.05 · 项目负责人',
    title: 'AI Resume Website：AI 产品求职作品集网站',
    description:
      '把个人经历、AI 项目、能力结构、PDF 简历入口与联系方式整合为面向招聘场景的在线作品集。',
    tags: ['信息架构', 'Figma', 'Codex', 'React'],
    href: '#website',
    link: '查看网站项目',
  },
  {
    number: '03',
    date: '2026.06 · 项目负责人',
    title: 'TP 术语翻译助手：服装供应链 RAG 应用',
    description:
      '把服装跟单中重复、易错的 TP 术语翻译，做成基于 Dify 的 RAG 知识库翻译工具，输出标准化的中英对照与关键信息提示。',
    tags: ['Dify', 'RAG', '混合检索', 'Rerank'],
    href: '#tp',
    link: '查看 TP 项目',
  },
]

const abilities = [
  ['需', '用户需求理解', '从客户 TP、运营反馈和目标人群需求中识别真正要解决的问题。'],
  ['译', '信息整理和需求转译', '把分散、块状、跨部门的信息整理为可执行资料和页面结构。'],
  ['推', '跨部门沟通与项目推进', '在客户、设计、供应商、工厂、运营之间推进节点，处理异常问题。'],
  ['AI', '用 AI 工具完成真实作品', '已用 Dify、Prompt、Figma、Codex 完成 Tiva 和 AI Resume Website 两个项目。'],
]

const workflowNodes = [
  ['01', '意图识别', '判断输入属于任务、知识、决策还是复盘场景，减少用户反复解释成本。'],
  ['02', '任务分流', '将不同场景路由到对应模块，让输出格式和思考路径保持一致。'],
  ['03', 'Memory 判断', '识别哪些信息值得复用，并结合个人偏好生成更贴近用户的回答。'],
]

const modules = [
  ['TASK', '拆解目标、步骤、优先级和下一步行动。'],
  ['KNOWLEDGE', '整理知识、提炼重点、形成可检索结构。'],
  ['DECISION', '对选项、风险、约束和建议进行结构化分析。'],
  ['REFLECTION', '承接复盘和情绪信息，输出可执行的调整建议。'],
]

const processSteps = [
  ['1', 'Resume Source', '从 resume-source.md 提取基础信息、工作经历、项目经历和联系方式。'],
  ['2', 'PRD Structure', '整理成 resume-prd.md，明确 Hero、项目、经历、技能、背书和联系结构。'],
  ['3', 'UI Guide', '建立复古海报视觉语言、颜色字体、圆角阴影和 7 个板块 UI 规则。'],
  ['4', 'Codex Build', '通过 Codex 协作生成静态预览、PDF 下载入口和页面落地文件。'],
  ['5', 'Preview & Ship', '用 HTML 静态预览验证内容层级、响应式和招聘阅读路径。'],
]

const timeline = [
  [
    '2024.07 - 2026.04',
    '业务跟单 → 复杂协作推进',
    '把客户资料、面辅料信息、供应商报价、版房排期和工厂节点整合成可执行动作，训练需求转译、进度推动和异常处理。',
  ],
  [
    '2022.08 - 2023.08',
    '商品开发 → 用户反馈转化',
    '结合市场趋势、运营数据和用户反馈安排选款、打样、定价和生产，形成数据辅助判断和需求转化经验。',
  ],
  [
    '2026.04-至今',
    'AI 项目实践 → 产品作品落地',
    '用 Dify、Prompt、Codex、Figma 完成 Tiva 和 AI Resume Website，将迁移能力落实到 Agent workflow 与网页作品中。',
  ],
]

const skills = [
  ['需', '用户需求理解', '从客户和运营输入中识别目标、约束和真实问题。'],
  ['译', '信息翻译与需求转化', '把分散信息整理成结构、文案、流程和可执行任务。'],
  ['协', '跨部门沟通', '连接客户、设计、供应商、工厂、运营，减少误解和反复。'],
  ['推', '项目推进', '围绕时间节点、异常问题和交付结果持续推动。'],
  ['链', '供应链流程理解', '理解从需求、报价、样衣、物料、生产到出货的链路。'],
  ['AI', 'AI 工具实操', 'Dify、Coze、ChatGPT、Gemini、Codex、Figma。'],
  ['P', 'Prompt / Agent', 'Prompt Engineering、Agent Workflow、Memory 机制。'],
  ['C', 'Codex 协作开发', '从文档到静态预览，再到网页入口和 PDF 下载能力。'],
]

const testimonials = [
  ['和她合作很安心。她足够专业，也能在突发状况里快速找到解决办法。', '品牌方合作伙伴'],
  ['她做事很到位，沟通清楚，也知道怎么把事情推进下去。', '工厂方合作伙伴'],
  ['她很有责任心，交给她的事情会认真跟到底。', '前任老板'],
  ['她有感染力，也有执行力，能让事情真正动起来。', '前任领导'],
  ['她适应能力很强，面对新环境和新任务，上手很快。', '前任同事'],
  ['她沟通能力很强，学习东西有韧性，能很快抓住重点。', '朋友'],
]

function App() {
  const resumeUrl = `${import.meta.env.BASE_URL}resume-zhou-ziyi.pdf`

  return (
    <>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#hero">HOME</a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#tiva">Tiva</a>
          <a href="#tp">TP RAG</a>
          <a href="#website">Website</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section id="hero">
          <div className="section-inner hero-grid">
            <div>
              <p className="eyebrow">Hero Section</p>
              <h1 className="display-title">AI Product Manager</h1>
              <p className="lead">
                从业务执行、需求转化到 AI 产品实践，正在用 Tiva、TP 术语翻译助手与个人作品集项目完成 AI 产品经理转型。
              </p>
              <div className="hero-focus" aria-label="核心能力">
                <div className="focus-card"><span>01</span>用户需求理解</div>
                <div className="focus-card"><span>02</span>Agent 工作流</div>
                <div className="focus-card"><span>03</span>项目推进落地</div>
              </div>
              <div className="meta-row">
                <span className="meta-pill">南京 / 上海</span>
                <span className="meta-pill">tesiazzy@163.com</span>
              </div>
              <div className="cta-row">
                <a className="btn primary" href="#projects">查看项目</a>
                <a className="btn" href={resumeUrl} download>Download Resume / 下载简历</a>
                <a className="btn secondary" href="#contact">联系我</a>
              </div>
            </div>
            <figure className="mascot-card">
              <img src={mascotUrl} alt="蝴蝶 IP 形象" />
            </figure>
          </div>
        </section>

        <section id="projects">
          <div className="section-inner">
            <p className="eyebrow">Project Index</p>
            <h2>Three Core Projects</h2>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="card project-card" key={project.number}>
                  <div>
                    <span className="number">{project.number}</span>
                    <p className="kicker">{project.date}</p>
                    <h3>{project.title}</h3>
                    <p className="muted">{project.description}</p>
                    <div className="tag-row">
                      {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                    </div>
                  </div>
                  <a className="btn project-link" href={project.href}>{project.link}</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about">
          <div className="section-inner two-col">
            <div className="about-visual">
              <p className="eyebrow">Transfer Path</p>
              <h3>Fashion Ops → AI Product</h3>
              <p className="muted">从客户需求、供应链协作和项目节点推进，迁移到 AI 产品的信息结构与工作流设计。</p>
              <img src={mascotUrl} alt="" />
            </div>
            <div>
              <p className="eyebrow">About Me</p>
              <h2>About Me</h2>
              <p className="lead">
                我不是从零开始转向 AI 产品，而是把过去在服装行业训练出的“理解需求、整理信息、推进复杂协作”的能力，迁移到 AI 产品实践中。
              </p>
              <div className="about-stack">
                {abilities.map(([mark, title, text]) => (
                  <article className="ability-card" key={title}>
                    <span>{mark}</span>
                    <div>
                      <h3>{title}</h3>
                      <p className="muted">{text}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="tag-row">
                <span className="tag">Understand Needs</span>
                <span className="tag">Translate Information</span>
                <span className="tag">Build Workflows</span>
                <span className="tag">Move Projects Forward</span>
              </div>
            </div>
          </div>
        </section>

        <section id="tiva">
          <div className="section-inner">
            <p className="eyebrow">Tiva Project</p>
            <h2>Tiva Project</h2>
            <p className="lead">
              Tiva 是一个个人 AI assistant / Agent workflow 项目，重点不是“用了 Dify”，而是把真实生活、学习、工作输入转化为可分流、可复用、输出更稳定的 Agent 闭环。
            </p>
            <div className="feature-grid">
              {workflowNodes.map(([mark, title, text]) => (
                <article className="node-card" data-mark={mark} key={title}>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="workflow-rail">
              <p className="rail-title">Agent Workflow Modules</p>
              <div className="rail-flow">
                {modules.map(([title, text]) => (
                  <article className="module-card" key={title}>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="compare-grid">
              <article className="mini-panel">
                <strong>Prompt 优化前</strong>
                <p>回答容易泛化，重点不稳定，输出格式依赖单次提问质量。</p>
              </article>
              <article className="mini-panel after">
                <strong>Prompt 优化后</strong>
                <p>通过固定场景、字段和输出结构，提升重点、稳定性和可执行性。</p>
              </article>
            </div>
            <div className="tag-row">
              <span className="tag">Intent Recognition</span>
              <span className="tag">Routing</span>
              <span className="tag">Memory</span>
              <span className="tag">Prompt Iteration</span>
              <span className="tag">Workflow Testing</span>
              <span className="tag">Stable Output</span>
            </div>
          </div>
        </section>

        <section id="tp">
          <div className="section-inner">
            <p className="eyebrow">TP RAG Project</p>
            <h2>TP 术语翻译助手</h2>
            <p className="lead">
              这个项目来自我做服装跟单时最真实的痛点：TP 技术文件里的专业术语翻译重复、易错、依赖个人经验。我把它做成一个基于 Dify 的 RAG 知识库翻译工具，让术语翻译标准化、可复用。
            </p>
            <div className="feature-grid">
              <article className="node-card" data-mark="01">
                <strong>知识库构建</strong>
                <p>把服装专业术语整理为知识库，完成数据清洗与切分，作为检索翻译的标准来源。</p>
              </article>
              <article className="node-card" data-mark="02">
                <strong>检索调优</strong>
                <p>配置 text-embedding-v4 与 qwen3-rerank，用混合检索解决 BOM、DTM 等缩写召回不准的问题。</p>
              </article>
              <article className="node-card" data-mark="03">
                <strong>结构化输出</strong>
                <p>设计中文翻译 / 术语对照 / 关键信息提示三段式输出，约束货号与尺寸编码原样保留。</p>
              </article>
            </div>
            <div className="workflow-rail">
              <p className="rail-title">RAG Workflow</p>
              <div className="rail-flow">
                <article className="module-card">
                  <strong>用户输入</strong>
                  <p>接收一段需要翻译的 TP 技术文件文本。</p>
                </article>
                <article className="module-card">
                  <strong>知识检索</strong>
                  <p>从术语知识库中检索相关术语，经 Rerank 重排并过滤低相关结果。</p>
                </article>
                <article className="module-card">
                  <strong>LLM 翻译</strong>
                  <p>结合检索到的标准术语生成译文，避免乱翻与幻觉。</p>
                </article>
                <article className="module-card">
                  <strong>结构化输出</strong>
                  <p>输出中文翻译、术语对照与关键信息提示三段内容。</p>
                </article>
              </div>
            </div>
            <div className="compare-grid">
              <article className="mini-panel">
                <strong>调优前</strong>
                <p>专业缩写召回不准，术语对照里会混入原文没出现的近义术语。</p>
              </article>
              <article className="mini-panel after">
                <strong>调优后</strong>
                <p>通过混合检索与 Score 阈值过滤干扰项，术语对照准确、只保留原文实际出现的术语。</p>
              </article>
            </div>
            <div className="tag-row">
              <span className="tag">Pain Point</span>
              <span className="tag">Knowledge Base</span>
              <span className="tag">Hybrid Retrieval</span>
              <span className="tag">Rerank</span>
              <span className="tag">Prompt Iteration</span>
              <span className="tag">Structured Output</span>
            </div>
          </div>
        </section>

        <section id="website">
          <div className="section-inner">
            <p className="eyebrow">AI Resume Website Project</p>
            <h2>AI Resume Website Project</h2>
            <p className="lead">
              这个项目展示我如何用 AI 协作把原始简历内容变成可浏览、可下载、可展示项目能力的个人网页作品集。
            </p>
            <div className="process-grid">
              {processSteps.map(([mark, title, text]) => (
                <article className="step-card" data-mark={mark} key={title}>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="preview-frame">
              <div className="preview-bar">
                <span className="preview-dot preview-dot-orange"></span>
                <span className="preview-dot preview-dot-yellow"></span>
                <span className="preview-dot preview-dot-teal"></span>
              </div>
              <div className="preview-body">
                <div className="wire-block"></div>
                <div>
                  <h3>从简历内容到网页实现</h3>
                  <p className="muted">不是只写概念，而是把文案、视觉规范、页面结构和下载简历入口串成一个可打开的作品。</p>
                  <div className="tag-row">
                    <span className="tag">Markdown</span>
                    <span className="tag">PRD</span>
                    <span className="tag">UI Design</span>
                    <span className="tag">Codex</span>
                    <span className="tag">HTML Preview</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="section-inner">
            <p className="eyebrow">Experience & Skills</p>
            <h2>Experience & Skills</h2>
            <p className="lead">这里不展开成传统服装跟单简历，而是把过往经历提炼为 AI 产品岗位可迁移的能力证据。</p>
            <div className="timeline">
              {timeline.map(([date, title, text]) => (
                <article className="timeline-item" key={title}>
                  <div className="timeline-date">{date}</div>
                  <div>
                    <h3>{title}</h3>
                    <p className="muted">{text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="skill-matrix">
              {skills.map(([mark, title, text]) => (
                <article className="skill-card" data-mark={mark} key={title}>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="bar-chart" aria-label="能力图表">
              <div className="bar-row"><span>需求理解</span><span className="bar-track"><span className="bar-fill bar-88"></span></span></div>
              <div className="bar-row"><span>信息结构化</span><span className="bar-track"><span className="bar-fill teal bar-84"></span></span></div>
              <div className="bar-row"><span>项目推进</span><span className="bar-track"><span className="bar-fill olive bar-82"></span></span></div>
              <div className="bar-row"><span>AI 工具实践</span><span className="bar-track"><span className="bar-fill pink bar-76"></span></span></div>
            </div>
            <div className="tag-row">
              <span className="tag">Dify</span>
              <span className="tag">Coze</span>
              <span className="tag">ChatGPT</span>
              <span className="tag">Gemini</span>
              <span className="tag">Codex</span>
              <span className="tag">Figma</span>
              <span className="tag">Markdown</span>
              <span className="tag">GitHub</span>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="section-inner contact-layout reveal">
            <div className="contact-panel">
              <p className="eyebrow">Testimonials / Resume / Contact</p>
              <h2>Contact Me</h2>
              <p className="lead">
                如果你正在寻找一位具备业务理解、需求转化、项目推进和 AI 产品实践能力的候选人，欢迎通过下面的方式联系我。
              </p>
              <div className="contact-list" aria-label="联系方式">
                <div className="contact-item">
                  <span className="contact-icon">邮</span>
                  <div><strong>邮箱</strong><a href="mailto:tesiazzy@163.com">tesiazzy@163.com</a></div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">微</span>
                  <div><strong>电话 / 微信</strong><span>19825092820</span></div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">GH</span>
                  <div><strong>GitHub</strong><a href="https://github.com/Tesiaay">github.com/Tesiaay</a></div>
                </div>
              </div>
              <div className="resume-panel">
                <p className="eyebrow">Resume PDF</p>
                <h3>一页 A4 HR 简历</h3>
                <p className="muted">PDF 版本保留招聘场景最需要的信息：AI 产品定位、三个核心项目、可迁移能力和联系方式。</p>
                <a className="btn" href={resumeUrl} download>Download Resume / 下载简历</a>
              </div>
              <p className="footer-note">AI Product Manager Candidate · Agent Workflow Builder · Nanjing / Shanghai</p>
            </div>
            <div>
              <div className="testimonial-grid" aria-label="推荐语">
                {testimonials.map(([quote, cite]) => (
                  <article className="testimonial-card" key={cite}>
                    <span className="quote-mark">“</span>
                    <p>{quote}</p>
                    <cite>{cite}</cite>
                  </article>
                ))}
              </div>
              <figure className="contact-mascot" aria-hidden="true">
                <img src={mascotUrl} alt="" />
              </figure>
            </div>
          </div>
        </section>
      </main>
      <a className="back-to-top" href="#hero" aria-label="返回顶部">↑</a>
    </>
  )
}

export default App
