# G.A.P.S. RECOVERY PLATFORM — INTEGRATED APP ARCHITECTURE v3.0

**The Complete Buildable Specification**

*Bringing together the Interruption Book, the Onboarding Protocol, the Personal Stabilisation Framework, G.A.P.S. at Home, and the MI/CENAPS/PAWS integration into a single working application.*

Neil J. Schwab | Framework Architect | HALO
April 2026 | Working Draft v3.0

---

## 1. What This Document Is

This is the architectural specification for the G.A.P.S. Recovery Platform — a mobile-first application that digitises everything the G.A.P.S. framework has on paper and turns it into a working system where workers and clients can communicate in real time through a consent-governed, PAWS-aware, CENAPS-backed recovery pathway.

This document answers four questions:
1. What does each user see?
2. What's happening underneath?
3. How does the data flow?
4. How would a developer actually build it?

It is written in plain language so that a worker, an agency director, a funder, and a developer can all read it and arrive at the same understanding.

---

## 2. The Core Insight — Why This App Is Different

Every other addiction treatment app on the market falls into one of three categories:
- **A self-help app** — meditation, sobriety counters, journaling (no worker relationship)
- **A clinical documentation tool** — for the worker to record notes (client has no access)
- **A messaging app** — secure chat between worker and client (no clinical intelligence)

This app is none of those. This is a **shared recovery workspace** where:
- The worker has a clinical dashboard
- The client has a recovery companion
- Both views are populated from the same data model
- The client controls what crosses between them
- The system provides decision support to both, informed by validated frameworks
- Everything logged feeds back into improving the pathway over time

The closest parallel in other industries: a car-buying interface where the customer configures their own vehicle while the sales person facilitates. The system knows what fits, what doesn't, what it costs, and what the customer is choosing. Nobody is dictating. Nobody is passive.

---

## 3. The Two Views

### 3.1 The Worker View

The worker opens the app before an encounter. They see:

**Dashboard home:**
- Today's appointments
- Active alerts (Tending the Gaps, pattern notices, crisis flags)
- Clients flagged for outreach (7+ days inactivity)
- Supervisor messages / system updates

**Client arc view** (when they open a specific client's profile):
- PAWS timeline position with visual indicator of current stage
- Top 3 active hurdles with current weights
- 12 Blocks history — timeline showing client self-reports and worker flags
- HALT trend — line chart of the 4 dimensions over the past 30 days
- Somatic patterns — body map showing recurring locations flagged
- Recent shared entries (Fish Bowl entries the client consented to share, journal notes, etc.)
- 72-hour plan status — current plan and whether milestones were met
- Encounter history — timestamped notes from previous sessions

**Encounter prompt** — the system's decision support:
> *"This client is at Day 47 (PAWS Emergence). Highest active hurdles: Sleep Disruption, Emotional Lability. Block 2 (The Mask) was self-reported twice this week but no entries were shared — possible concealment pattern. HALT shows Lonely trending up over 10 days. Suggested focus: normalise PAWS cycling, explore what's not being said, check peer support engagement."*

This is decision support, not a directive. The worker uses clinical judgement. The system surfaces patterns the worker might miss in the moment.

**Worker actions during encounter:**
- Flag which Block they observe
- Record encounter notes (worker-only, not shared)
- Assign or unlock a specific tool for the client
- Update PAWS hurdle weights if their assessment differs from system-generated
- Schedule next check-in

**Worker actions between encounters:**
- Respond to client messages (if client has sent one through the bridge)
- Acknowledge alerts
- Initiate outreach to a flagged client
- Review arc trends to prepare for next session

### 3.2 The Client View

The client opens the app. They see:

**Home screen:**
- "Where you are today" — PAWS stage position in plain language
- Today's active hurdles (top 3, with matched tools visible)
- Quick-access toolkit row (HALT, Breath, Ground, Connection, Micro-Win, Fish Bowl, Snap, Sacred Pause — scaled to their stage)
- 72-hour plan card — the one thing for tomorrow, their person to call, their next appointment
- Message thread with their worker (if any)

**PAWS learning area:**
- Your Timeline — where you are on the arc, what's normal at this stage
- Your Hurdles — each active hurdle with plain-language explanation and matched tools
- The 12 Blocks — what's coming, what each one looks like, how to interrupt it
- The wave pattern — why good days follow bad days and vice versa

**Journal / self-report:**
- HALT check (daily prompt or on-demand)
- Somatic check-in (body map)
- Fish Bowl entry (free text — private by default)
- Block report (which Block feels closest today — or "none of these")
- Free-form journal (private by default — "what did today teach me?")

**Tools menu:**
- Available tools based on recovery stage
- Worker-assigned tools highlighted
- Locked tools visible but not usable ("This tool becomes available on Day 43 — or ask your worker")

**Settings:**
- Consent toggles per data type (HALT shared, Fish Bowl private, etc.)
- Emergency contact management
- Worker contact information
- Crisis button — always visible, always available
- Data export (client can export their full record anytime)
- Account deletion (client can delete everything anytime)

---

## 4. The Four Engines Underneath

### 4.1 Engine 1 — The Onboarding Engine

**Function:** Digitises the LLJ 90-minute protocol into a guided worker-led intake.

**Flow:**
1. Worker launches "New Client Onboarding"
2. App prompts the Stance (not scripted — reminder only)
3. Screen 1: Crisis screening — "Is this person safe to continue? If no, stop and address immediate safety before proceeding."
4. Screen 2: PFD Assessment (Position, Fundamentals, Danger, Direction — free-text fields for Direction captured in client's exact words)
5. Screen 3: Service Pathway — worker checks services connected during session
6. Screen 4: Substance & History Profile (structured fields)
7. Screen 5: HALT Baseline (4 sliders)
8. Screen 6: PAWS Positioning preview — system generates timeline and hurdles, worker reviews with client
9. Screen 7: Client Configuration — worker turns the screen/device to client. Client selects which hurdles resonate, which they want to learn about first, which strategies to try
10. Screen 8: 72-Hour Micro-Plan (4 fields in client's own words)
11. Screen 9: Close — app generates Client Handbook, schedules first check-in, confirms consent settings

**Output:** Completed onboarding record. Client profile activated. PAWS layer active. Communication bridge opened. Monitoring begins.

**Timing:** Entire flow designed to fit in 90 minutes, with the first 10 minutes not requiring the app at all (co-regulation is human, not digital).

### 4.2 Engine 2 — The PAWS Positioning Engine

**Function:** Takes the substance profile from onboarding and generates the client's current PAWS timeline position and active hurdle weights.

**Logic (rule-based, transparent):**

Timeline placement = function of (days since last use)
- 0–14 → Acute Resolution
- 15–42 → PAWS Emergence
- 43–84 → Symptom Cycling
- 85–180 → Gradual Improvement
- 181–365 → Stabilisation
- 366+ → Integration

Hurdle weighting = base_weight (by primary substance) + modifier (by duration of use) + modifier (by prior attempts) − reduction (by days since last use)

Example:
- Primary substance = alcohol → Hurdle 1 base = 0.9, Hurdle 3 base = 0.9, Hurdle 2 base = 0.8
- Duration of use = 15 years → +0.1 to Hurdle 3, +0.1 to Hurdle 6
- Prior attempts = 3 → +0.2 to Hurdle 7
- Days since last use = 47 → −0.1 to all hurdles (progressive reduction)
- Final active hurdles (top 3): Hurdle 3 (0.9), Hurdle 1 (0.8), Hurdle 2 (0.7)

**These numbers are starting points.** The pilot protocol includes threshold calibration as a primary research question — the initial values are clinically reasonable but require empirical validation with a real cohort.

**Worker override:** The worker can adjust any weight based on clinical judgement. The system records both the algorithmic recommendation and the worker's adjustment, creating a dataset for ongoing refinement.

**Output:** Timeline stage label, top 3 active hurdles, matched strategy suggestions from the Interruption Book.

### 4.3 Engine 3 — The 12 Blocks Monitoring Engine

**Function:** Tracks client self-reports and worker observations of which Block is active, runs escalation logic, surfaces patterns.

**Client input:** Daily or on-demand Block check-in. "Which of these feels closest to where you are today?" (Or "none of these.")

**Worker input:** Flag a Block observed during or after an encounter.

**Escalation logic:**

| Trigger | Response |
|---------|----------|
| Blocks 1–4 flagged (Emotional Relapse) | Matched interruption tool surfaced to client. Logged. No alert to worker. |
| 2+ Blocks 5–8 flagged in 7 days (Mental Relapse pattern) | Pattern notice sent to worker. "Pattern notice: mental relapse indicators active." |
| Block 9–11 flagged (Behavioural/Physical Relapse) | Immediate Tending the Gaps alert to worker with suggested outreach script. |
| Block 12 flagged (Use occurred) | Return Protocol activated. Relapse reframe tools surfaced to client. Worker notified. No shame messaging anywhere. |
| 7+ days of client inactivity | Inactivity flag to worker. "This client has gone quiet. Consider outreach." |
| Worker and client flag different Blocks on overlapping days | Mismatch indicator shown in arc view. "Worker observed Block 2. Client self-reported Block 9. Consider exploring the gap." |

**Output:** Timestamped Block history. Pattern alerts. Arc visualisation for next encounter.

### 4.4 Engine 4 — The Communication Bridge

**Function:** Governs all data flow between client and worker according to the Saint Christopher Handshake.

**Consent architecture:**

| Data Type | Default Visibility | Client Can Change |
|-----------|-------------------|-------------------|
| HALT checks | Shared | Can make private |
| Somatic check-ins | Shared | Can make private |
| Fish Bowl entries | Private | Can share per-entry |
| Block self-reports | Shared | Can make private |
| Journal / free notes | Private | Can share per-entry |
| 72-hour plan | Shared | Cannot be made private (safety) |
| Snap/Pause/tool usage logs | Metadata only (frequency) | Client can share full content |
| Messages to worker | Shared (that's the point) | N/A |

**Client controls:**
- Per-data-type toggle (change applies to all future entries of that type)
- Per-entry share/unshare (can change specific entries retroactively)
- Master privacy mode ("share nothing for 24 hours" — respects the hard day)

**Crisis exception (disclosed at onboarding):**
- If client uses the in-app crisis button, the event is logged and the worker is notified regardless of consent settings
- This is the only override
- Client sees this clearly at onboarding: "If you ever hit the crisis button, I'll know. That's the one thing I'll always see. Everything else is your choice."

**Worker visibility indicator:** Worker sees a general indicator — "This client has private entries this period" — but not the content or exact count. Respects privacy while letting worker know something is happening they're not seeing.

**Output:** A consent-governed, real-time, asynchronous communication channel that doesn't require scheduled appointments to function.

---

## 5. Tool Delivery Logic — How the Toolkit Scales

Tools unlock based on recovery stage, with worker override available at any time.

### 5.1 The Scaling Rules

| Recovery Stage | Days | Tools Available | Why |
|---------------|------|-----------------|-----|
| **SCAFFOLD** | 0–42 | HALT Check, One-Breath Reset, 5-4-3-2-1 Ground, Connection Text, Micro-Win, 72-Hour Plan, Crisis Button | Prefrontal cortex barely online. Structure, not insight. Low cognitive demand. |
| **OBSERVE** | 43–84 | + Fish Bowl Method, Snap Practice, Somatic Check-In, 12 Blocks self-monitoring, Name It to Tame It | Cognitive capacity returning. Observer stance can begin. Pattern recognition unlocks. |
| **REGULATE** | 85–180 | + Conscious Dialogue Replacement, D.O.S.E. Activity Planning, Sacred Pause (full), Craving Analysis | Emotional range expanding. Habit-building possible. Real-time situational tools. |
| **REBUILD** | 181–365 | + Relapse Reframe (full Gifts From The G.A.P.S.), Trauma-to-Wisdom journaling prompts, Values Identification, Peer Contribution prompts | Identity work becomes available. Setbacks at this stage require deeper tools. |
| **INTEGRATE** | 366+ | Full toolkit | All tools available. Focus shifts to periodic review and giving back. |

### 5.2 Worker Override

The worker can unlock any tool at any stage if clinically indicated. Example: a client who walks in at Day 5 but who has done extensive prior work with the Fish Bowl elsewhere — the worker unlocks Fish Bowl early. The override is logged so pilot data can track when overrides improve outcomes.

### 5.3 Why the Lock Isn't Punitive

Tools aren't locked to gatekeep — they're locked because using a deep observer tool during acute withdrawal can be counterproductive. Asking someone to "watch their thoughts without judgement" when their prefrontal cortex isn't functioning is like asking someone with a broken leg to run. The lock respects where the brain actually is. The client sees "This tool becomes available on Day 43 — or ask your worker" — it's transparent, not hidden.

---

## 6. Data Model — Core Entities

### 6.1 Client Profile
```
client_id (unique)
name, contact info
primary_substances (array)
duration_of_use_years (integer)
abstinence_start_date (date)
prior_recovery_attempts (integer)
prior_overdose_events (integer)
current_medications (array)
paws_stage (computed from abstinence_start_date)
active_hurdles (computed from substance profile + modifiers + worker overrides)
assigned_worker_id
consent_settings (JSON object per data type)
created_at, updated_at
```

### 6.2 Onboarding Record
```
onboarding_id
client_id
worker_id
timestamp
pfd_snapshot {
  position (text)
  fundamentals (text)
  danger (text)
  direction (text — client's exact words)
}
substance_profile (all intake fields)
halt_baseline (4 integers)
paws_positioning_snapshot (stage + hurdles + weights at time of onboarding)
client_selected_priorities (array of hurdles client chose to focus on)
seventy_two_hour_plan (4 text fields — client's exact words)
service_pathways_connected (array)
```

### 6.3 Client Entry (unified for all self-report types)
```
entry_id
client_id
entry_type (halt_check | somatic | fish_bowl | block_report | snap_log | pause_log | micro_win | connection_text | journal_note)
content (JSON — structure varies by type)
visibility (private | shared)
created_at
client_can_modify_visibility (boolean — true for all except crisis events)
```

### 6.4 Worker Observation
```
observation_id
worker_id
client_id
observation_type (block_flag | encounter_note | tool_assignment | weight_override | outreach_log)
content (JSON)
visible_to_client (boolean — true only for tool assignments and scheduled check-ins)
created_at
```

### 6.5 Alert Log
```
alert_id
client_id
worker_id
alert_type (pattern_notice | tending_gaps | crisis | stage_transition | inactivity | mismatch)
triggered_by (entry_id or computed rule)
suggested_action (text — script for worker outreach, etc.)
acknowledged_at (nullable)
resolution_notes (nullable)
created_at
```

### 6.6 Encounter Session
```
session_id
client_id
worker_id
session_type (onboarding | check_in | scheduled | outreach | crisis_response)
duration_minutes
encounter_prompt_content (system-generated prompt shown to worker)
worker_notes (not shared with client)
blocks_flagged (array)
tools_assigned (array)
next_checkin_scheduled (date)
created_at
```

---

## 7. The System Prompt Architecture

The system generates plain-language prompts for both the worker and the client. These prompts are rule-based — they pull from a library of templates and fill in the specific client's current data. They are not AI-generated in the sense of being unpredictable — they are deterministic outputs of transparent logic.

### 7.1 Worker Encounter Prompt Template

```
"{client_first_name} is at Day {days_since_last_use} ({paws_stage_label}).
 Highest active hurdles: {top_3_hurdles}.
 {block_pattern_summary if any}.
 {halt_trend_summary if notable}.
 {shared_entry_summary if any}.
 Suggested focus: {pulled from framework based on above inputs}."
```

### 7.2 Client Check-In Prompts

Daily prompts vary by stage and engagement. Examples:

- SCAFFOLD stage: "Good morning. One thing you'll do today?" → fills 72-hour plan field
- OBSERVE stage: "How's the bowl today? Anything swimming you want to name?" → fills Fish Bowl entry
- REGULATE stage: "How's your D.O.S.E. today? Any of the four missing?"
- REBUILD stage: "Anything you're ready to look at today that you haven't been?"

### 7.3 Alert-Driven Prompts

When an alert fires, the system generates a suggested outreach script for the worker:

```
Tending the Gaps Alert triggered for {client_first_name}.
Reason: Block 9 (The Tunnel) flagged.
HALT shows Lonely 5, Tired 4 for past 3 days.

Suggested outreach:
"Hey {client_first_name}, just checking in. I noticed things feel heavy right now.
Don't need to get into it on a text — just wanted you to know I see it. Do you
have 10 minutes this afternoon? Even a phone call. Just to connect."

[Send] [Customise] [Dismiss]
```

The worker can send the suggested message as-is, customise it, or dismiss the alert and handle it their own way. Every action is logged to feed the pilot data.

---

## 8. Technical Requirements

### 8.1 Platform
- **Progressive Web App (PWA) for MVP** — deploys as a web app that works on any device, installable to phone home screens
- **Native apps as Phase 2** — iOS and Android builds once PWA validates
- **Offline capable** — entries cache locally when offline, sync when connectivity returns (critical: recovery doesn't wait for Wi-Fi)

### 8.2 Security
- **Encryption** — AES-256 at rest, TLS 1.3 in transit
- **Data residency** — Canadian servers for PIPEDA compliance
- **Authentication** — Multi-factor for workers. Biometric + PIN for clients.
- **Audit logging** — All data access logged. Workers cannot see logs, but logs exist for agency compliance review.

### 8.3 Integrations (Phase 2)
- Calendar sync (appointment reminders)
- SMS integration (Connection Text, alert notifications)
- ConnexOntario service directory (if API available)
- Agency EHR export (anonymised encounter summaries)

### 8.4 Accessibility
- Grade 6 reading level target throughout client-facing content
- High contrast mode
- Screen reader compatible
- Large touch targets (clients in early recovery often have tremor, reduced fine motor)
- Minimal required text input — taps, sliders, selections wherever possible
- Printable output for clients without reliable phone access (onboarding summary, pocket card, tool references)

### 8.5 Scalability Architecture
- Multi-tenant from day one (each agency is a tenant with its own client base)
- Client-worker assignment is scoped to the agency
- Anonymised aggregate reporting at the agency level (Phase 2)
- Cross-agency anonymised research data only with explicit opt-in

---

## 9. The Build Sequence

### 9.1 Phase 1 — MVP (Months 1–6)

**Goal:** One agency, 5 workers, 20 clients, 90-day pilot.

Build:
- Worker web app (dashboard, arc view, onboarding engine)
- Client PWA (home, toolkit, journal, messaging)
- PAWS Positioning Engine (rule-based)
- 12 Blocks Monitoring Engine
- Communication Bridge with consent architecture
- Client Handbook auto-generation (digital + printable)
- Basic analytics for pilot data collection

**Not in MVP:**
- Native mobile apps
- Third-party integrations
- Agency-level aggregate reporting
- Research data pipeline

### 9.2 Phase 2 — Pilot Validation (Months 7–9)

90-day pilot with one agency. Collect:
- Onboarding completion rates
- Client engagement metrics
- Worker response times to alerts
- Block escalation patterns
- Threshold validation data (do the weightings predict outcomes?)
- Satisfaction surveys (client and worker)

### 9.3 Phase 3 — Refinement & Expansion (Months 10–12)

Based on pilot:
- Adjust threshold values
- Refine encounter prompts based on worker feedback
- Add co-occurring disorder blocks (depression, anxiety, ADHD at minimum)
- Build dedicated Shame Block
- Build formal crisis handoff protocol
- Build worker regulation check-in
- Plain language audit based on real client feedback

### 9.4 Phase 4 — Scale (Year 2+)

- Native iOS and Android apps
- Multi-agency deployment
- Integrations (calendar, SMS, EHR)
- Agency aggregate analytics
- Cross-agency research opt-in
- International adaptation

---

## 10. The Pilot Protocol

### 10.1 Cohort
- 1 treatment agency
- 5 addiction workers trained on the G.A.P.S. framework
- 20 clients entering post-detox
- 90 days

### 10.2 Success Thresholds
- 70%+ onboarding completion rate
- 50%+ of clients making at least one self-report entry per week
- Workers acknowledging 80%+ of Tending the Gaps alerts within 48 hours
- Qualitative: workers report that the arc view changes the encounter conversation
- Qualitative: clients report that understanding PAWS reduced shame

### 10.3 What Pilot Data Proves

- The standardised intake captures clinically useful data
- Clients will self-report between sessions when given accessible tools
- Workers will use decision support when it doesn't add cognitive load
- The consent architecture doesn't prevent clinical utility
- PAWS psychoeducation changes the conversation about relapse
- The framework improves with use

### 10.4 What the Pilot Can NOT Prove

- Clinical efficacy (requires RCT with comparison group — future study)
- Long-term retention (requires 2+ year longitudinal data)
- Cost-effectiveness (requires economic analysis — separate research)

Naming what the pilot can't prove is part of the honesty of the proposal.

---

## 11. Cost and Team Estimates

### 11.1 MVP Build (Phase 1 — 6 months)

**Team:**
- 1 technical lead / full-stack developer
- 1 front-end developer (React/PWA experience)
- 1 UX designer with health/clinical experience
- 1 clinical informatics consultant (part-time)
- Framework architect (Neil, as product owner)

**Estimate:** CAD $150K–$250K depending on developer rates and tooling choices. Lower end if working with a single senior contractor; higher end if using an agency.

### 11.2 Pilot Costs (Phase 2 — 3 months)

**Team:**
- MVP team retained for bug fixes and iteration
- 1 pilot coordinator (liaising with agency)
- Data analysis support

**Estimate:** CAD $50K–$80K

### 11.3 Total to Validated Pilot

**CAD $200K–$330K**

**What that buys:**
- A working app deployed in one agency
- A standardised pathway 5 workers are actually using
- 90 days of real data from 20 clients
- A validated framework argument to take to ConnexOntario, CAMH, or provincial ministries

**The alternative cost — what the current system pays:**
- The Limbic Prison (chronic D.O.S.E. deficit leading to recurring crisis utilisation) costs approximately CAD $120,000 per person per year across health, justice, social services, and emergency response (GSRT TSB calculation). Twenty clients diverted from that trajectory for one year = $2.4M in avoided costs.

**The math:** Full pilot cost is roughly 12% of one year of Limbic Prison costs for 20 people.

---

## 12. Intellectual Property and Governance

The following are the intellectual property of Neil J. Schwab / HALO:
- G.A.P.S. framework (Gratitude, Acceptance, Presence, Surrender)
- Fish Bowl Method
- Snap Practice (A-S-S-S-T Protocol)
- Sacred Pause
- 12 Blocks interruption architecture
- Lighthouse Model
- Saint Christopher Handshake
- D.O.S.E. delivery architecture
- Observer Capacity Index (OCI)
- Schema Activation Frequency (SAF)

Established frameworks cited with attribution:
- CENAPS (Gorski, 2013)
- PAWS research (Gorski, 2013; Witkiewitz & Marlatt, 2004)
- HALT framework (general recovery community)
- Marlatt & Donovan high-risk taxonomy (2005)
- Motivational Interviewing (Miller & Rollnick, 2013)
- Polyvagal theory (Porges, 2011)

**Legal prerequisites before MVP build:**
1. HALO sole proprietorship registration (Ontario Business Registry) — ~$60
2. CIPO trademark filing for G.A.P.S. acronym and halo device mark — ~$350
3. Letter of Intent with pilot agency partner

---

## 13. What This App IS

- A standardised onboarding pathway for addiction services
- A PAWS identification and interruption tool
- A worker-client communication bridge
- A decision support system for workers
- A recovery companion for clients
- A continuously improving framework that gets better with use

## 14. What This App Is NOT

- Not a replacement for clinical judgement
- Not therapy
- Not a surveillance tool
- Not an AI black box
- Not a crisis intervention service (routes to crisis when needed)
- Not locked to G.A.P.S. — the architecture can host other evidence-based frameworks over time; G.A.P.S. is the first implementation

---

## 15. The Argument in One Page

Ontario addiction workers are trained in Motivational Interviewing, biopsychosocial assessment, and whatever intake form their agency invented. CENAPS — the validated relapse prevention model — is not taught. PAWS — the neurological condition driving most relapses — is a single bullet point with no tool attached. There is no standardised intake across the province. There is no client-facing psychoeducation about what's coming after detox. There is no structured communication pathway between sessions. There is no operational framework for the 6–24 month PAWS window where most relapses actually occur.

The G.A.P.S. Recovery Platform fills every one of these gaps. It digitises the LLJ 90-minute onboarding protocol into a standardised pathway. It positions every client on the PAWS timeline with plain-language psychoeducation about the seven neurological hurdles they're likely to face. It turns the 12 Blocks — the unconscious traps that precede relapse — into a real-time monitoring system where both the worker and client can flag what they're seeing. It gives the client a toolkit that scales with their recovery stage, from basic structure in early recovery to deep observer work later. It gives the worker a decision support dashboard that surfaces patterns between sessions. And it does all of this through a consent-governed architecture where the client owns their data — turning MI's empowerment principle into a living system.

The worker uses MI to have the conversation. The app gives them both something worth talking about.

MVP build cost: roughly CAD $200K. Time to pilot: 6 months. What it replaces: nothing, because nothing currently exists. What it proves: that a standardised Ontario pathway integrating CENAPS, PAWS, and MI can be built, deployed, and refined with actual workers and actual clients — and that the results are worth scaling.

---

Neil J. Schwab | neil.schwab@live.ca | +1 (905) 868-6985 | Newmarket, Ontario

**Mind Your G.A.P.S.™**
*Forgive Yesterday · Heal Today · Flourish Tomorrow · Together*
