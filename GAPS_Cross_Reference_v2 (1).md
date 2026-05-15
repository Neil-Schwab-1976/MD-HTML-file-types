# G.A.P.S. FRAMEWORK CROSS-REFERENCE

**Mapping the Current Ontario Pathway, MI, CENAPS, PAWS, and the G.A.P.S./GSRT Architecture**

**Including: Stressor-to-Document Relationships and the MI–G.A.P.S. Alignment**

Neil J. Schwab | Framework Architect | HALO
April 2026 | Working Document v2

---

## PART 1: THE MI–G.A.P.S. ALIGNMENT

Motivational Interviewing is the primary conversational modality taught to Ontario addiction workers. Its guiding spirit has four elements: Partnership, Acceptance, Compassion, and Empowerment. G.A.P.S. has four capacities: Gratitude, Acceptance, Presence, and Surrender.

These are not just compatible. They are the same philosophy expressed in two different registers — MI speaks to how the worker shows up; G.A.P.S. speaks to what the worker and client practise together.

### The Direct Mapping

| MI Spirit | What It Means for the Worker | G.A.P.S. Capacity | What It Means for the Client | How They Connect |
|-----------|-----------------------------|--------------------|-----------------------------|--------------------|
| **Partnership** — "We are collaborators. We use our knowledge to guide." | The worker is not the expert. The client's own expertise drives the process. | **Gratitude** — Cortisol interruption. Redirecting attention from threat-scanning to resource-noticing. | The client learns to see what IS working, not just what's broken. Gratitude breaks the scarcity loop. | Partnership requires the worker to see the client's strengths. Gratitude is how the client sees their own strengths. Both shift from deficit to resource. |
| **Acceptance** — "Working without judgement. Seeking to understand." | The worker meets the client where they are without requiring them to be somewhere else. | **Acceptance** — Fish Bowl Method. Observing what's swimming without judging it. | The client learns to see their thoughts, urges, and patterns without being dragged by them or shaming themselves for having them. | MI Acceptance says "I see you without judgement." G.A.P.S. Acceptance says "I see myself without judgement." Same stance, turned inward. |
| **Compassion** — "Working in the client's best interest, not our own." | The worker serves the client's recovery, not the institution's agenda or their own need to fix. | **Presence** — Sacred Pause. Being here, now, in the body, before acting. | The client learns to pause between stimulus and response — the gap where choice lives. | Compassion requires presence. You cannot serve someone's best interest if you're running on autopilot. Presence is the mechanism that makes compassion possible. |
| **Empowerment** — "Recognizing protective factors. Focus on individuals finding their worth." | The worker fosters the client's own capacity rather than creating dependence. | **Surrender** — Releasing the need to control the outcome. "I don't have to know the answer right now." | The client releases the grip on how recovery "should" look and trusts the process. Identity acts from values, not roles. | Empowerment IS surrender — the worker surrenders the expert role, the client surrenders the shame story. Both step into trust. |

### What This Means for the App

MI says: "You don't provide or install motivation any more than a midwife supplies the baby. It's already in there; you just bring it out."

The app is the midwife's toolkit. MI evokes — the app gives the client something to be evoked about. MI supports autonomy — the app lets the client configure their own pathway. MI avoids the Expert Trap — the app turns the screen around and lets the client drive. MI avoids the Fixing Reflex — the app doesn't tell the client what to do, it shows them what's coming and lets them choose how to meet it.

MI's four tasks map directly to the app flow:

| MI Task | App Function |
|---------|-------------|
| **Engaging** — Build trust | LLJ onboarding: co-regulate, name courage, establish safety. "You reached out. That's brave." |
| **Focusing** — Establish direction | PFD/RAFT assessment + PAWS positioning: here's what's happening, here's what's coming |
| **Evoking** — Tip balance toward change | Client configures their pathway: "Which of these hurdles feels true? Which strategies do you want to try?" |
| **Planning** — Discuss how to change | 72-hour micro-plan + strategy selection + ongoing self-monitoring: in their words, on their terms |

---

## PART 2: THE FULL JOURNEY — CURRENT SYSTEM vs. G.A.P.S./GSRT

### Stage 1: First Contact — Intake

**Current Ontario (IAInt Day 1)**
Intake determines eligibility for service. Each agency uses its own forms. No legislated screening tools required. Barriers acknowledged: literacy, ESL, stigma, culture, identity. Intake interviews preferred — "a conversation rather than a questionnaire." MI skills used to recognize change talk. Documentation format determined by agency policy.

**The Gap**
No standard pathway. No stabilization before documentation. No structured client-facing output. Purpose defined as determining eligibility — not helping the person.

**G.A.P.S./GSRT Response: DEEDSPROOF (Book 1)**
The LLJ 90-minute stabilization protocol: Co-regulate and orient (Minutes 0–10). PFD Assessment — Position, Fundamentals, Danger, Direction (Minutes 10–25). Service navigation with calls by the 30-minute mark (Minutes 25–50). HALT baseline + substance profile (Minutes 50–70). 72-hour micro-plan in the client's words (Minutes 70–80). Anchor and close with Client Handbook delivery (Minutes 80–90).

DEED Protocol activates by client choice: Dignity Recognition → Entry Stabilization (CEP micro-hooks) → Evaluation (skill inventory + shadow assessment via Hue/Shade/Tint) → Direction (first palette, first aligned task).

**Key document:** GSRT DEEDSPROOF Book 1 — Triage & Intake

---

### Stage 2: Screening

**Current Ontario (IAInt Day 1)**
CAGE-AID (4 questions), AUDIT/TWEAK (alcohol-specific), Drug Abuse Questionnaire. Determines use level and dependence. No legislated standard — each agency chooses.

**The Gap**
Screening tells the agency about the client. It tells the client nothing about themselves. No PAWS positioning. No hurdle identification. No matched strategies. No client-facing output.

**G.A.P.S. Response: PAWS Positioning Engine**
Substance profile generates timeline placement (Days 0–14 through Day 366+). Seven PAWS hurdles weighted by substance, duration, and prior attempts. Client sees their top 3 active hurdles with plain-language explanation and matched G.A.P.S. tools. Client selects which hurdles resonate and chooses strategies — car sales model, screen turned around.

**Key documents:** PAWS in the G.A.P.S. Interruption Book, G.A.P.S.–GSRT Decision Logic Specification (input variables and weighting rules)

---

### Stage 3: Assessment

**Current Ontario (IAInt Day 1)**
Biopsychosocial, person-centred. Explores history, psychiatric status, legal, social support, housing, trauma, strengths, coping. Risk and Safety: "Withdrawal complications, PAWS, Relapse prevention, Suicide, Self Harm." MI principles throughout. Assessment is ongoing and may involve other professionals.

**The Gap**
PAWS is one bullet point with no tool. CENAPS is not taught by name. The three-stage relapse model is not taught. No warning sign architecture. No interruption mapping. Assessment captures a snapshot — it does not track an arc between sessions.

**G.A.P.S. Response: 12 Blocks + Continuous Monitoring**

CENAPS three-stage model operationalized through 12 Blocks:

Blocks 1–4 (Emotional Relapse — CENAPS Stage 1): The Drift, The Mask, The Build, The Wall. Mapped to Gratitude, Acceptance, Presence, Surrender interruptions respectively.

Blocks 5–8 (Mental Relapse — CENAPS Stage 2): The Fog, The Bargain, The Plan, The Secret. Escalation: worker gets pattern notice if 2+ flagged in 7 days.

Blocks 9–11 (Behavioural/Physical Relapse — CENAPS Stage 3): The Tunnel, The Permission, The Edge. Escalation: immediate Tending the Gaps alert.

Block 12 (The Fall — Use occurs): Return protocol. Relapse reframe. "What did the setback teach me?" No shame anywhere.

Both worker and client flag Blocks. Mismatch between their observations = the unconscious communication becoming visible.

**Key documents:** PAWS in the G.A.P.S. Interruption Book (12 Blocks), Stressor-to-Guide Relationship Map (full CENAPS cross-reference), G.A.P.S. Knowledge Base v1 (three-panel clinical reference)

---

### Stage 4: Therapeutic Modality — MI

**Current Ontario (IAInt Day 2)**
MI's four tasks: Engaging, Focusing, Evoking, Planning. Spirit: Partnership, Acceptance, Compassion, Empowerment. Traps: Expert, Persuasion, Time. Core principle: evoke, don't install. Client is the expert. Rolling with resistance. "Avoid the Fixing Reflex."

**The Gap**
MI is a conversational method that requires the client to talk. Most early-recovery clients barely talk. MI provides conditions for change but gives the client nothing concrete to change with. MI has no tool for what happens between sessions. MI says "the client is the expert" but gives the client no information about what's happening in their own brain.

**G.A.P.S. Response: MI Enhanced by Client Self-Configuration**
G.A.P.S. capacities align directly to MI spirit (see Part 1 mapping above). The app gives MI something to work with between sessions. Non-verbal communication through HALT, somatic, Block flags solves the silence problem. Client-configured pathway IS MI's empowerment principle in digital form. Worker arc view gives MI conversations a starting point deeper than "how have you been?"

**Key documents:** G.A.P.S. Tools Group Reference (practical application to SRPP client), LLJ Client Handbook (plain-language toolkit), Architecture of Unconscious Communication (why clients go silent — the unconscious perceptual system)

---

### Stage 5: Discharge and Beyond

**Current Ontario (IAInt Day 1)**
Structured discharge planning. CAMH IRDT provides four weeks post-discharge support. Elements: assessment coordination, comprehensive planning, housing, transition supports, documentation, collaboration.

**The Gap**
Four weeks of support. PAWS lasts up to two years. Nothing systematic exists for the 6–24 month window where most relapses occur. No PAWS-aware discharge. No client-facing tools for ongoing self-monitoring. No communication channel back to a worker.

**G.A.P.S./GSRT Response: The Four-Book Pathway**

The GSRT onboarding doesn't end at discharge — it replaces the concept of discharge with a developmental continuum:

| Book | Timeframe | Function | What the Person Gets |
|------|-----------|----------|---------------------|
| **DEEDSPROOF** (Book 1) | Day 1 | Triage + Intake | Stabilization, PFD assessment, first palette, 72-hour plan, Client Handbook |
| **SLOW SOAK** (Book 2) | Year 1 (12 months) | Stabilization | Three tiers of deepening practice. Fish Bowl → Schema → Leadership. Weekly rhythm. CEP daily hooks. Keeper's Manual v1. |
| **FISHING HOLE** (Book 3) | Year 2 (6 weeks) | Deep Immersive | Residential. Nature immersion. Three 2-week blocks. Schema work. Talisman ceremony. Keeper's Manual v2. Paid. |
| **HMA 3-DAY** (Book 4) | Year 3+ (annual) | Sovereignty Calibration | Algonquin Park. Under the ancient oak. Blueprint → Observer → Integration. ProQOL/PSS/BAT/SAF/OCI tracked year over year. Forever. |

The Prodigal Son Protocol applies throughout: pause, leave, or return at any stage without penalty, guilt, or paperwork. "A system that won't let you leave is a trap. A system that welcomes you back is a home."

For clients in the addiction services context specifically, the app covers the PAWS window (up to 24 months) with ongoing 12 Blocks monitoring, client self-report tools, and the worker communication bridge. The G.A.P.S. at Home kit (Anchor Journal) serves the person who can't maintain contact with any service.

**Key documents:** All four HMA books, G.A.P.S.–GSRT Integration MOU (how the frameworks connect at every scale)

---

## PART 3: STRESSOR-TO-DOCUMENT RELATIONSHIP MAP

Every document in the suite exists because it addresses a specific set of stressors. This map shows which stressors are covered by which documents — and where the gaps are.

### Psychological and Emotional Stressors

| Stressor | Primary Document | Supporting Documents |
|----------|-----------------|---------------------|
| Shame as relapse accelerant | PAWS Interruption Book (across all Blocks) | Gifts From The G.A.P.S. (relapse reframe), Knowledge Base (Stage 1 emotional relapse) |
| PAWS cognitive fog | PAWS Interruption Book (Hurdle 1) | Decision Logic Spec (weighting by substance), Knowledge Base (PAWS-H1 panel) |
| PAWS emotional lability | PAWS Interruption Book (Hurdle 2) | Stressor Map (emotional reactivity mapping), Knowledge Base (PAWS-H2 panel) |
| PAWS sleep disruption | PAWS Interruption Book (Hurdle 3) | Decision Logic Spec (elevated weight for alcohol/benzos) |
| PAWS stress sensitivity | PAWS Interruption Book (Hurdle 4) | Stressor Map (HALT integration), Client Handbook (One-Breath Reset) |
| PAWS cravings | PAWS Interruption Book (Hurdle 5) | Stressor Map (craving confusion concept), Tools Group Ref (Sacred Pause application) |
| PAWS anhedonia | PAWS Interruption Book (Hurdle 6) | Decision Logic Spec (elevated for stimulants/opioids), Weekend Pass Edition (Friday night crash) |
| PAWS identity confusion | PAWS Interruption Book (Hurdle 7) | Knowledge Base (Surrender capacity), Architecture of Unconscious Communication (ego identification) |
| Environmental cue reactivity | Stressor Map (Stressor #1) | Weekend Pass Edition (Moment 1 — arrival protocol), Knowledge Base (conditioned pathways) |
| Isolation and social withdrawal | Stressor Map (CENAPS Stage 1) | Client Handbook (Connection Text), SLOW SOAK (peer co-regulation structure) |

### Relapse Process Stressors (CENAPS)

| Stressor | Primary Document | Supporting Documents |
|----------|-----------------|---------------------|
| Emotional relapse — Stage 1 | Knowledge Base (CENAPS-S1 panel) | PAWS Interruption Book (Blocks 1–4), Stressor Map (emotional stressor cross-ref) |
| Mental relapse — Stage 2 | Knowledge Base (CENAPS-S2 panel) | PAWS Interruption Book (Blocks 5–8), Stressor Map (cognitive stressor cross-ref) |
| Physical relapse — Stage 3 | Knowledge Base (CENAPS-S3 panel) | PAWS Interruption Book (Blocks 9–12), Gifts From The G.A.P.S. (return protocol) |
| Warning sign: changes in attitude | Stressor Map (CENAPS 11 categories) | PAWS Interruption Book (Block 1 — The Drift) |
| Warning sign: social breakdown | Stressor Map (CENAPS 11 categories) | Client Handbook (Connection Text), Decision Logic Spec (meeting attendance variable) |
| Warning sign: structure breakdown | Stressor Map (CENAPS 11 categories) | PAWS Interruption Book (Block 1 — The Drift, Block 4 — The Wall) |
| Warning sign: loss of judgement | Stressor Map (CENAPS 11 categories) | PAWS Interruption Book (Block 6 — The Bargain, Block 10 — The Permission) |
| Warning sign: option reduction | Stressor Map (CENAPS 11 categories) | PAWS Interruption Book (Block 9 — The Tunnel) |

### Situational Stressors (Marlatt & Donovan)

| Stressor | Primary Document | Supporting Documents |
|----------|-----------------|---------------------|
| Negative emotional states (~35% of relapses) | Stressor Map (Marlatt taxonomy) | PAWS Interruption Book (Hurdle 2 + Hurdle 4), Client Handbook (HALT check) |
| Interpersonal conflict | Stressor Map (Marlatt taxonomy) | Weekend Pass Edition (Moment 5 — departure), SLOW SOAK Month 6 (Conscious Communication) |
| Social pressure (direct and indirect) | Stressor Map (Marlatt taxonomy) | Decision Logic Spec (social pressure variables), Weekend Pass Edition (Saturday meeting) |

### Internal Vulnerability Stressors (HALT)

| Stressor | Primary Document | Supporting Documents |
|----------|-----------------|---------------------|
| Hungry / Hurt | Client Handbook (HALT check) | Decision Logic Spec (pain management variable), PAWS Interruption Book (fatigue-pain overlap) |
| Angry | Client Handbook (HALT check) | Architecture of Unconscious Communication (projection), Stressor Map (shame-anger link) |
| Lonely | Client Handbook (HALT check + Connection Text) | Decision Logic Spec (sponsor availability variable), SLOW SOAK (peer co-regulation) |
| Tired | Client Handbook (HALT check) | PAWS Interruption Book (Hurdle 3 — sleep disruption, Hurdle 5 overlap) |

### Worker Stressors

| Stressor | Primary Document | Supporting Documents |
|----------|-----------------|---------------------|
| Compassion fatigue / burnout | LRP Stressor Relationship Document | SLOW SOAK (Tier 1–3 worker resilience), FISHING HOLE (schema work) |
| Schema activation in sessions | Exploring Our G.A.P.S. (6-Week Immersive) | Early Schema Development document, SLOW SOAK Month 5 (Trauma Patterns) |
| Identification with client material | SLOW SOAK Month 1 (Fish Bowl Basics) | FISHING HOLE Week 1 (Unhooking Protocol simulations), HMA 3-Day (annual recalibration) |
| Boundary erosion | SLOW SOAK Month 3 (Boundaries as Shoreline) | LRP Suite Architecture, FISHING HOLE Week 3 (advanced boundary work) |
| Identity: rescuer vs. lighthouse | B2LR 3-Day Retreat | SLOW SOAK Month 4 (Service Ethics), HMA 3-Day Day 3 (Integration) |

### Unconscious Communication Stressors

| Stressor | Primary Document | Supporting Documents |
|----------|-----------------|---------------------|
| Scarcity orientation (fear-based nervous system) | Architecture of Unconscious Communication | Decision Logic Spec (orientation check variables), Unconscious Rivers thesis |
| Projection in relationships | Architecture of Unconscious Communication (Part 2.1) | Early Schema Development (projection-blame dynamic) |
| Silence as autonomic shutdown | Architecture of Unconscious Communication (Part 2.2) | PAWS Interruption Book (Block 2 — The Mask), app design (non-verbal communication tools) |
| Self-sabotage patterns | Architecture of Unconscious Communication (Part 3.3) | Ego and Disidentifying thesis, SLOW SOAK Month 7 (Alchemy) |
| Addiction as relational scream | Architecture of Unconscious Communication (Part 2.3) | Filling In The G.A.P.S. (therapeutic review), D.O.S.E. architecture |

---

## PART 4: TOOL-TO-STRESSOR QUICK REFERENCE

When a specific stressor activates, which G.A.P.S. tool addresses it?

| Tool | G.A.P.S. Capacity | MI Spirit Alignment | Primary Stressors Addressed |
|------|-------------------|--------------------|-----------------------------|
| **HALT Check** | Presence | Acceptance (seeking to understand current state) | All four HALT vulnerabilities. Baseline for every other intervention. |
| **Sacred Pause** | Presence | Compassion (creating space to serve the client's interest) | Craving onset, stress sensitivity, anger escalation, impulse-to-action gap |
| **Fish Bowl Method** | Acceptance | Acceptance (observing without judgement) | Intrusive thoughts, shame spirals, identity confusion, self-sabotage patterns |
| **Snap Practice** | Presence | Partnership (collaborating with the client's own nervous system) | Acute craving, trauma trigger, anxiety spiral, anger flash |
| **Connection Text** | Gratitude | Empowerment (recognizing the strength in reaching out) | Isolation, loneliness, social withdrawal, The Mask (Block 2) |
| **Micro-Win** | Gratitude | Empowerment (finding worth through completable action) | Anhedonia, learned helplessness, dopamine depletion, The Tunnel (Block 9) |
| **Relapse Reframe** | Surrender | Partnership (collaborating on what the setback means) | The Fall (Block 12), shame acceleration, "I failed" narrative |
| **Somatic Check-In** | Presence | Acceptance (noticing the body without judgement) | Pre-cognitive warning signals, chronic tension, dissociation, body-mind disconnect |
| **One-Breath Reset** | Presence | Compassion (regulating before responding) | Acute activation, nervous system flooding, panic onset |
| **5-4-3-2-1 Ground** | Presence | Acceptance (returning to present-moment reality) | Dissociation, flashback, panic, environmental overwhelm |
| **Name It to Tame It** | Acceptance | Acceptance (labelling emotions reduces intensity by ~50%) | Emotional lability, undifferentiated distress, "I feel terrible" without specificity |
| **Craving Analysis** | Acceptance + Surrender | Empowerment (client discovers what the craving is actually for) | Craving confusion (Hurdle 5), substance-as-solution pattern |
| **72-Hour Micro-Plan** | Gratitude + Surrender | Planning (how the person will bring about desired change) | Post-intake uncertainty, overwhelm, "what do I do now?" |

---

## PART 5: IDENTIFIED REMAINING GAPS

These are stressors or conditions not yet fully addressed by the current document suite, as flagged by the multi-agent insight review:

| Gap | Status | Recommended Action |
|-----|--------|--------------------|
| **Dedicated shame Block** | Shame is embedded across Blocks but has no standalone interruption protocol | Create a Shame Block (Block 0 or parallel track) with CENAPS, PAWS, and G.A.P.S. readouts |
| **Crisis handoff protocol** | Marie Hodge Intercept handles pre-crisis; actual crisis-to-emergency-services transition not specified | Dedicated crisis handoff block with explicit language for worker and client |
| **Co-occurring disorders** | PTSD addressed in Knowledge Base; depression, anxiety, ADHD, BPD not covered | Version 2.0 co-occurring disorder blocks for the four most common presentations |
| **Worker regulation state check-in** | Worker burnout tracked in LRP but not integrated into app decision logic | Worker-facing check-in before client sessions — brief, optional, flags when worker's own state needs attention |
| **Plain language audit** | Layperson review flagged clinical language in PAWS panels ("limbic dysregulation," "autonomic hyperreactivity") | Hard rule: Grade 8 readability for all client-facing content |
| **Pocket card versions** | Weekend Pass pocket card identified as most useful client element | Create pocket card format for every PAWS hurdle and every CENAPS stage |
| **Craving analysis protocol** | Craving confusion concept identified as original contribution but underdeveloped | Structured 3-question self-assessment in Hurdle 5: What does the substance do that I need? What would meet that need another way? What's the smallest step? |
| **Saint Christopher crisis exception** | Consent-first architecture needs explicit crisis override clause | Disclosed at onboarding: crisis button activates regardless of consent settings |

---

## PART 6: THE COMPLETE DOCUMENT INVENTORY

### Onboarding & Pathway (GSRT Scale)

| Document | Purpose | Book |
|----------|---------|------|
| GSRT DEEDSPROOF — Triage & Intake | 90-minute front door. LLJ + DEED protocol. | Book 1 |
| GSRT SLOW SOAK — 12-Month Stabilization | Year 1. Three tiers. Weekly rhythm. Nervous system change. | Book 2 |
| GSRT FISHING HOLE — 6-Week Immersive | Year 2. Residential. Nature. Schema. Talisman. Paid. | Book 3 |
| GSRT HMA 3-DAY GET-A-WAY — Annual Retreat | Year 3+. Algonquin. Recalibration. Forever. | Book 4 |
| GSRT HMA Integrated Master v1.0 | Complete participant architecture overview | Master |

### Clinical Architecture (G.A.P.S.)

| Document | Purpose |
|----------|---------|
| G.A.P.S.–GSRT Integration MOU | How the two frameworks connect at every scale |
| G.A.P.S.–GSRT Decision Logic Specification | Input variables, weighting rules, decision trees, output pathways |
| Stressor-to-Guide Relationship Map | Every CENAPS/PAWS stressor mapped against the three client guides |
| G.A.P.S. Knowledge Base v1 | Three-panel clinical reference (CENAPS + PAWS + G.A.P.S.) for every condition |
| PAWS in the G.A.P.S. Interruption Book | PAWS psychoeducation, 12 Blocks, interruption architecture, follow-up system |
| G.A.P.S. Tools Group Reference | Compact field version showing three lanes applied to SRPP client case |

### Client-Facing Materials

| Document | Purpose |
|----------|---------|
| LLJ Client Handbook | Given to person at end of every 90-minute session. Tools, plan, contacts. |
| G.A.P.S. at Home (Weekend Pass Edition) | Five high-risk moments with specific protocols. Pocket card. |
| G.A.P.S. at Home (Anchor Journal) | Self-directed home kit. Seven modules. No worker required. |
| Gifts From The G.A.P.S. Workbook | Relapse reframe. Somatic check-in. Reflection. Gift extraction. |

### Worker Development

| Document | Purpose |
|----------|---------|
| Exploring Our G.A.P.S. — 6-Week Immersive | Residential worker training. Schema, Fish Bowl mastery, Lighthouse stance. |
| B2LR 3-Day Retreat | Rescue Boats to Lighthouse Resilience. Annual worker recalibration. |
| Lighthouse Resilience Program (12-month) | Slow Soak for workers. Same three-tier structure. |
| LRP Stressor Relationship Document | Worker-facing diagnostic layer. Burnout tracking. |

### Theoretical Foundation

| Document | Purpose |
|----------|---------|
| Architecture of Unconscious Communication | Why people use substances. Scarcity/abundance. Schema-filtered perception. |
| Unconscious Rivers into G.A.P.S. | Full consciousness evolution thesis. Triune brain. The gap where freedom lives. |
| Ego and Disidentifying | Observer-thought distinction. Fish Bowl origin. Snap Practice origin. |
| Early Schema Development | Five foundational environments. How patterns reproduce in adult relationships. |
| Filling In The G.A.P.S. (Therapeutic Review) | AI review of the framework's clinical validity and application to addiction. |

### Governance & Business

| Document | Purpose |
|----------|---------|
| GSRT Firmware Manual v3 | Conscience layer. D.O.S.E. architecture. Saint Christopher Handshake. VVV Gate. |
| Multi-Agent Insight Review | Five-perspective expert audit with v2.0 recommendations. |
| G.A.P.S. by HALO System Architecture | Four lanes. Naming conventions. Delivery formats. Measurement instruments. |
| Viability Confirmation Memo | Financial and operational viability assessment. |
| TSB Onboarding Document | Total Societal Burden mathematics. ROI at three scales. |

---

## THE ARGUMENT — UPDATED

Ontario addiction workers are trained to use Motivational Interviewing — a conversational method built on Partnership, Acceptance, Compassion, and Empowerment. G.A.P.S. maps directly to these four principles through Gratitude, Acceptance, Presence, and Surrender — the same philosophy made operational with portable, client-facing tools.

But MI alone has no tool for what happens between sessions, no framework for the unconscious neurological traps that follow detox, and no system for giving the client ownership over their own recovery pathway. CENAPS — the validated relapse prevention model — is not taught. PAWS — the neurological condition driving most relapses — is a single bullet point with no tool attached. There is no standardized intake. There is no client-facing psychoeducation. There is no structured pathway beyond a four-week discharge window for a condition lasting up to two years.

The G.A.P.S. framework and the GSRT four-book participant architecture fill every one of these gaps — using CENAPS as the diagnostic backbone, PAWS research as the medical foundation, MI as the conversational method it was always meant to enhance (not replace), and the G.A.P.S. toolkit as the portable, client-driven, consent-governed intervention layer that makes all of it operational.

The worker uses MI to have the conversation. The app gives them both something worth talking about.

---

Neil J. Schwab | neil.schwab@live.ca | +1 (905) 868-6985

**Mind Your G.A.P.S.**
*Forgive Yesterday · Heal Today · Flourish Tomorrow · Together*
