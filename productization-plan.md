# Sentinel Productization — Consolidated Plan

Synthesizes existing plans (`reviews/11_productization_plan.md`, `reviews/08_100day_plan.md`, `reviews/10_customer_acquisition_plan.md`, `docs/ROADMAP.md`) with decisions made during website build (May 2026).

---

## Product Definition

| Product | What it is | Status |
|---------|-----------|--------|
| **Sentinel** (the codec) | LeWM-VC learned video codec — Docker container, CLI, API | Research prototype; needs packaging |
| **Sentinel Edge Gateway** (the hardware) | Jetson Orin appliance pre-loaded with Sentinel codec | Build guide written; no unit built yet |

Both are the same software — the Gateway is just the Jetson form factor.

---

## Phase 1: Design Partner Ready (Right Now)

**Goal:** Someone can run Sentinel on their footage this week.

### What exists today
- [x] Working encoder/decoder with pretrained checkpoints (`lewmvc-stream/`)
- [x] Flask API server (`src/server.py`) + Python client
- [x] Dockerfile + docker-compose for x86 with CUDA
- [x] Build guide for Jetson Orin deployment
- [x] Website with clear product positioning
- [x] Design partner program page with contact flow

### What's missing to ship

| Priority | Item | Details |
|----------|------|---------|
| P0 | **Docker image published** | Build and push `mahamaia/sentinel:latest` to GHCR or Docker Hub with bundled checkpoint |
| P0 | **CLI tool** | `sentinel encode input.mp4 output.lewm` and `sentinel decode output.lewm frames/` — single entry point |
| P0 | **RTSP ingestion** | The Gateway needs to pull from RTSP cameras, not just process local files |
| P1 | **Multi-stream** | Handle 4+ camera feeds on a single Orin |
| P1 | **Systemd service** | Auto-start on boot, health checks, log rotation |
| P1 | **OTA updates** | Mechanism to push model updates to field devices |

---

## Phase 2: First Design Partner (Weeks 1-4)

### Outreach
- Target: 20 surveillance operators (offshore energy, pipeline, island ops)
- Channel: LinkedIn, industry contacts, warm intros
- Pitch: 8-week trial, pre-configured Gateway shipped to site, $0 upfront
- Goal: 5 conversations → 2-3 data shares → 1 signed LOI

### Onboarding Flow
1. Partner shares 2-3 clips (1 min each, typical scenes)
2. Run full comparison: Sentinel vs H.265 at multiple bitrates
3. 30-min results review call
4. If metrics look good: ship Gateway hardware, start pilot

### Success Criteria
- Partner can run Sentinel on their footage without our help
- Measurable bandwidth savings on real satellite/VSAT links
- Signed LOI with path to paid contract

---

## Phase 3: Production (Months 2-6)

### Product
- [ ] **Fleet dashboard** — web UI showing all deployed Gateways, per-stream stats, alerts
- [ ] **Multi-camera** — verified with 8+ cameras per Gateway
- [ ] **VMS integrations** — RTSP output for Milestone, Genetec compatibility
- [ ] **Pricing finalized** — per Gateway/month or per-Mbps-saved model
- [ ] **Billing + metering** — usage tracking, invoicing

### Business
- [ ] First paid customer (convert from design partner)
- [ ] Second design partner onboarded
- [ ] Pricing page live on website
- [ ] Case study published with partner (anonymized if needed)

### Engineering
- [ ] Train on expanded dataset (VIRAT + full PEViD-HD)
- [ ] Release v0.2 checkpoint with published benchmarks
- [ ] Edge optimization: TensorRT export, INT8 quantization
- [ ] CI/CD for Docker builds

---

## Key Decisions (from May 2026)

1. **Brand**: Sentinel = codec, Sentinel Edge Gateway = Jetson appliance. Same software, different form factor.
2. **Claims**: Normalized to ranges (50-65% reduction, 1-4 month payback, $15-40K+ monthly savings) — more defensible, avoid overclaim.
3. **Not "first"**: Tagline is "A machine-vision codec" not "The first machine-vision codec." Acknowledges prior art (MPEG VCM, 2019+).
4. **Legal language**: "Supports chain-of-custody... can help meet FRE 901 standards. Admissibility determined case-by-case." Not "legally admissible."
5. **Target**: Start with surveillance operators on satellite/VSAT before expanding to other verticals.

---

## Reference Documents

| File | Content |
|------|---------|
| `reviews/11_productization_plan.md` | 6-week sprint: training data, Docker, CLI, evaluation pipeline |
| `reviews/08_100day_plan.md` | Post-seed execution: customer, research, packaging, BD, team |
| `reviews/10_customer_acquisition_plan.md` | Target list, outreach process, LOI template, objection handling |
| `docs/ROADMAP.md` | Broader 3-6 month acquisition positioning roadmap |
| `gateway-build-guide.md` | Jetson Orin hardware BOM, Docker build, systemd service |
| `yc-sprint-plan.md` | 10-week YC batch sprint: pilots, benchmarks, Demo Day prep |
| `reviews/04_enhancement_plan.md` | Technical enhancements for the codec |
| `reviews/06_investor_memo.md` | Investor-facing memo |
| `reviews/07_investment_thesis.md` | Investment thesis document |
| `reviews/SentinelBusinessViabilityAnalysis.md` | Business viability analysis |
