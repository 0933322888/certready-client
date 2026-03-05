import { useState } from "react";
import { Link } from "react-router-dom";

import SEO from "../components/seo/SEO";
import Breadcrumb from "../components/layout/Breadcrumb";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import { getTradeGuidePageSEO, getBreadcrumbStructuredData } from "../utils/seo";
import { paths } from "../utils/routes";
import { getTradeBySlug } from "../data/tradeGuideContent";

/* ============================================================
   RED SEAL TRADE PAGE TEMPLATE
   Route: /trades/:slug-red-seal (e.g. /trades/construction-electrician-red-seal)
   Rendered by TradePageRoute when TRADE_DATA[slug] exists.
   Trade content lives in data/tradeGuideContent.js — add new trades there.
   ============================================================ */
function StarRating({ rating, max = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={`text-sm ${i < rating ? "text-accent" : "text-text-dim"}`}
          aria-hidden
        >
          {i < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

/* ----------------------------------------------------------
   MAIN PAGE COMPONENT
   ---------------------------------------------------------- */
export default function TradePage({ trade }) {
  if (!trade) return null;
  const [openMwa, setOpenMwa] = useState(null);
  const [answers, setAnswers] = useState({});
  const maxWeight = Math.max(...trade.mwas.map((m) => m.weight));
  const seo = getTradeGuidePageSEO(trade);
  const breadcrumbs = [
    { name: "Home", url: paths.home },
    { name: "Red Seal Trades", url: paths.trades },
    { name: `${trade.name} Red Seal`, url: paths.tradeGuide(trade.slug) },
  ];

  const pick = (qIdx, aIdx) => {
    if (answers[qIdx] !== undefined) return;
    setAnswers((p) => ({ ...p, [qIdx]: aIdx }));
  };

  return (
    <>
      <SEO
        {...seo}
        structuredData={[getBreadcrumbStructuredData(breadcrumbs)].filter(Boolean)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbs} />

        {/* 1. Hero */}
        <header className="mb-12 md:mb-16" aria-label="Page hero">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <Badge variant="accent" className="mb-4">
                Red Seal Exam Guide
              </Badge>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-3">
                {trade.name}
              </h1>
              <p className="text-lg text-text-muted max-w-2xl mb-6">
                {trade.overviewShort}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Link to={paths.learn(trade.courseSlug)}>
                  <Button size="lg">Start Practicing →</Button>
                </Link>
                <Link to={paths.practiceTest(trade.slug)}>
                  <Button variant="outline" size="lg">Free Sample Test</Button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-8 pt-6 border-t border-border">
                <div>
                  <div className="text-2xl font-display font-bold text-accent">{trade.examQuestions}</div>
                  <div className="text-xs font-medium uppercase tracking-wider text-text-muted mt-0.5">Questions</div>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-accent">{trade.passingScore}%</div>
                  <div className="text-xs font-medium uppercase tracking-wider text-text-muted mt-0.5">Passing Score</div>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-accent">{trade.examDuration}</div>
                  <div className="text-xs font-medium uppercase tracking-wider text-text-muted mt-0.5">Duration</div>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-accent">{(trade.apprenticeshipHours / 1000).toFixed(1)}k</div>
                  <div className="text-xs font-medium uppercase tracking-wider text-text-muted mt-0.5">Apprenticeship Hrs</div>
                </div>
              </div>
            </div>
            <Card className="lg:min-w-[200px] text-center shrink-0">
              <div className="text-xs font-medium uppercase tracking-wider text-text-muted mb-1">Trade Code</div>
              <div className="text-4xl font-display font-bold text-text-primary">{trade.tradeCode}</div>
              <div className="text-xs text-text-muted mt-1">Red Seal Program</div>
              <div className="mt-4 pt-4 border-t border-border text-sm text-text-muted">
                <span className="font-semibold text-accent">{trade.apprenticeshipHours.toLocaleString()}</span>
                <br />
                apprenticeship hours
              </div>
            </Card>
          </div>
        </header>

        {/* 2. Overview + 3. Exam Format */}
        <section id="overview" className="mb-16" aria-labelledby="h-overview">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">About the Exam</p>
          <h2 id="h-overview" className="text-3xl font-display font-bold text-text-primary mb-6">
            What Is the {trade.name} Red Seal Exam?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <p className="text-text-muted leading-relaxed">{trade.overview}</p>
              <p className="text-text-muted leading-relaxed">
                The exam is written and validated by the Canadian Council of Directors of Apprenticeship (CCDA) using the Red Seal Occupational Standard (RSOS) — a nationally agreed framework that defines exactly what a journeyperson in this trade must know and be able to do. Every question on the exam maps to a task within the RSOS.
              </p>
              <p className="text-text-muted leading-relaxed">
                The exam is closed-book. No code books, no formula sheets, no reference materials of any kind are permitted. Everything must be committed to memory before you walk in.
              </p>
            </div>
            <Card className="overflow-hidden p-0">
              <div className="bg-surface-2 px-5 py-3 border-b border-border">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">Exam at a Glance</span>
              </div>
              <div className="divide-y divide-border">
                {[
                  ["Format", "Multiple choice"],
                  ["Questions", String(trade.examQuestions)],
                  ["Duration", trade.examDuration],
                  ["Passing Score", `${trade.passingScore}% (${Math.ceil(trade.examQuestions * trade.passingScore / 100)} correct)`],
                  ["Delivery", "Computer-based"],
                  ["References", "None permitted"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-center px-5 py-3 gap-4">
                    <span className="text-sm text-text-muted">{k}</span>
                    <span className={`text-sm font-semibold text-right ${k === "Passing Score" ? "text-accent" : "text-text-primary"}`}>
                      {v}
                    </span>
                  </div>
                ))}
              </div>
              <div className="bg-accent/10 border-t border-accent/30 px-5 py-3">
                <p className="text-xs text-text-muted">
                  ⚠ Exam fees and scheduling vary by province. Contact your provincial apprenticeship authority to register.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* 4. Major Work Activities */}
        <section className="py-12 bg-surface-2 rounded-xl px-4 sm:px-6 lg:px-8 mb-16" aria-labelledby="h-mwa">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Occupational Standard</p>
            <h2 id="h-mwa" className="text-3xl font-display font-bold text-text-primary mb-2">
              Major Work Activities
            </h2>
            <p className="text-text-muted max-w-2xl mb-8">
              The Red Seal exam is organized into {trade.mwas.length} Major Work Activities (MWAs). Each MWA represents a percentage of the {trade.examQuestions}-question exam — use these weights to prioritize your study time. Click any row to expand its task areas.
            </p>
            <div className="space-y-2">
              {trade.mwas.map((mwa, i) => {
                const isOpen = openMwa === i;
                return (
                  <Card key={mwa.id} className={`overflow-hidden transition-colors ${isOpen ? "border-accent/40" : ""}`}>
                    <button
                      type="button"
                      className="w-full flex items-center gap-4 text-left p-4"
                      onClick={() => setOpenMwa(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`mwa-detail-${i}`}
                    >
                      <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center font-display font-bold text-accent shrink-0">
                        {mwa.id}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-display font-semibold text-text-primary">{mwa.title}</div>
                        <div className="text-xs text-text-muted mt-0.5">
                          {mwa.items.length} task areas · {Math.round(trade.examQuestions * mwa.weight / 100)} questions
                        </div>
                      </div>
                      <div className="text-xl font-display font-bold text-accent shrink-0">{mwa.weight}%</div>
                      <span className={`shrink-0 text-text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}>▼</span>
                    </button>
                    <div className="px-4 pb-2">
                      <div className="h-1 bg-surface rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent rounded-full transition-all duration-500"
                          style={{ width: `${(mwa.weight / maxWeight) * 100}%` }}
                        />
                      </div>
                    </div>
                    {isOpen && (
                      <div id={`mwa-detail-${i}`} className="px-4 pb-4 flex flex-wrap gap-2">
                        {mwa.items.map((item) => (
                          <span
                            key={item}
                            className="text-xs text-text-primary bg-surface border border-border rounded-full px-3 py-1"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Difficulty */}
        <section className="mb-16" aria-labelledby="h-diff">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Exam Difficulty</p>
          <h2 id="h-diff" className="text-3xl font-display font-bold text-text-primary mb-2">
            Why This Exam Is Challenging
          </h2>
          <div className="flex items-center gap-3 mb-6">
            <StarRating rating={trade.difficultyRating} />
            <span className="text-sm text-text-muted">{trade.difficultyRating} / 5 difficulty</span>
          </div>
          <p className="text-text-muted max-w-2xl mb-8 leading-relaxed">{trade.difficultyNote}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trade.challengePoints.map((c, i) => (
              <Card key={i} className="border-l-4 border-l-accent">
                <div className="text-2xl mb-2">{c.icon}</div>
                <h3 className="font-display font-semibold text-text-primary text-base mb-1">{c.heading}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{c.body}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* 6. Sample Questions */}
        <section className="py-12 bg-surface-2 rounded-xl px-4 sm:px-6 lg:px-8 mb-16" aria-labelledby="h-questions">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Sample Questions</p>
            <h2 id="h-questions" className="text-3xl font-display font-bold text-text-primary mb-2">
              Test Your Knowledge
            </h2>
            <p className="text-text-muted max-w-xl mb-8">
              These questions are styled to match the Red Seal exam. Select an answer to reveal the explanation — no peeking first!
            </p>
            <div className="space-y-4 mb-8">
              {trade.sampleQuestions.map((q, qi) => {
                const answered = answers[qi] !== undefined;
                return (
                  <Card key={qi} className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-accent">
                        Question {qi + 1} of {trade.sampleQuestions.length}
                      </span>
                      <Badge variant="accent" className="text-xs">MWA {q.mwa}</Badge>
                    </div>
                    <p className="text-text-primary font-medium mb-4 leading-relaxed">{q.question}</p>
                    <div className="space-y-2">
                      {q.options.map((opt, ai) => {
                        const isSelected = answers[qi] === ai;
                        const isCorrect = q.correct === ai;
                        const showCorrect = answered && isCorrect;
                        const showWrong = answered && isSelected && !isCorrect;
                        return (
                          <button
                            key={ai}
                            type="button"
                            onClick={() => pick(qi, ai)}
                            disabled={answered}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left text-sm transition-colors disabled:cursor-default ${
                              showCorrect
                                ? "border-success bg-success/10 text-text-primary"
                                : showWrong
                                ? "border-danger bg-danger/10 text-text-muted"
                                : "border-border bg-surface hover:border-accent/50 hover:bg-surface-2 text-text-muted hover:text-text-primary"
                            }`}
                          >
                            <span
                              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                                showCorrect ? "bg-success text-white" : showWrong ? "bg-danger text-white" : "bg-surface-2 text-text-muted"
                              }`}
                            >
                              {["A", "B", "C", "D"][ai]}
                            </span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    {answered && (
                      <div className="mt-4 p-4 rounded-r-xl border-l-4 border-success bg-success/10 text-sm text-text-muted leading-relaxed">
                        <strong className="text-success">Explanation: </strong>
                        {q.explanation}
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
            <div className="text-center">
              <Link to={paths.learn(trade.courseSlug)}>
                <Button size="lg">Access Full Question Bank →</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 7. Study Strategy */}
        <section className="mb-16" aria-labelledby="h-strategy">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Study Strategy</p>
          <h2 id="h-strategy" className="text-3xl font-display font-bold text-text-primary mb-2">
            How to Prepare for the {trade.name} Red Seal
          </h2>
          <p className="text-text-muted max-w-xl mb-8">
            Experienced trades instructors and Red Seal holders recommend these preparation approaches for first-attempt success.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trade.studyTips.map((t, i) => (
              <Card key={i}>
                <div className="text-2xl mb-2">{t.icon}</div>
                <h3 className="font-display font-semibold text-text-primary text-base mb-1">{t.tip}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{t.body}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* 8. CTA Section */}
        <section className="py-12 bg-surface-2 rounded-xl px-4 sm:px-6 lg:px-8 mb-16" aria-labelledby="h-cta">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Get Certified</p>
              <h2 id="h-cta" className="text-3xl font-display font-bold text-text-primary mb-3">
                Ready to Pass the {trade.name} Red Seal?
              </h2>
              <p className="text-text-muted max-w-xl mb-4">
                Our complete study guide is built directly from the official RSOS — every chapter maps to an MWA, every question reflects real exam style. Don't just study hard. Study smart.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-text-muted">
                {[
                  "Chapter-by-chapter study guide",
                  "200+ practice questions",
                  "Full timed mock exam",
                  "Formula & glossary reference",
                  "Exam strategy guide",
                  "Lifetime access",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-1.5">
                    <span className="text-success">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link to={paths.learn(trade.courseSlug)}>
                <Button size="lg" className="w-full sm:w-auto">Get Full Study Guide</Button>
              </Link>
              <Link to={paths.practiceTest(trade.slug)}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">Try Free Practice Test</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}