Got it — here’s a **practical backend interview checklist for ByteDance (Dubai)**. Think of this as a **“must-be-done before interview day”** list. If you can confidently tick most of these, you’re in solid shape.

---

## ✅ 1. Core Coding & DSA (Non-negotiable)

You should be able to **code cleanly, fast, and explain clearly**.

**Must be solid at:**

* Arrays, Strings (two pointers, sliding window)
* HashMap / Set usage (frequency, dedup, caching)
* Linked List (reverse, detect cycle)
* Stack / Queue (monotonic stack is 🔥)
* Binary Tree & BST (DFS, BFS, recursion)
* Graph basics (BFS/DFS, topological sort)
* Heap / PriorityQueue
* Basic Dynamic Programming (1D, 2D, memoization)

**Before interview, ensure:**

* You can solve **LeetCode Medium in ≤30–35 min**
* You talk while coding (ByteDance cares about thought process)
* No syntax hesitation in your main language (Java / C++ / Go / Python)

---

## ✅ 2. Backend Fundamentals (They *will* probe this)

You must explain these **without Googling**:

### APIs & Services

* REST vs gRPC
* Idempotency
* Pagination (offset vs cursor)
* API versioning
* Rate limiting (token bucket / leaky bucket)

### Databases

* SQL vs NoSQL (when & why)
* Indexes (B-tree, hash — tradeoffs)
* Transactions & ACID
* Isolation levels (at least READ COMMITTED vs SERIALIZABLE)
* Sharding vs replication
* Hot partition problems

### Caching

* Redis use cases
* Cache-aside pattern
* TTL, eviction policies
* Cache consistency issues

---

## ✅ 3. System Design (Very important for ByteDance)

Even mid-level roles may get **design-lite questions**.

You must be able to design:

* A **high-QPS backend service**
* A **feed / timeline system** (TikTok-style concepts)
* A **notification system**
* A **URL shortener** (classic but tests fundamentals)

**You should confidently discuss:**

* Load balancing
* Horizontal scaling
* Stateless vs stateful services
* Database + cache interaction
* Read vs write heavy systems
* Handling spikes (viral traffic)

🚩 If you jump straight into DB schema without requirements → bad sign.

---

## ✅ 4. Concurrency & Performance (Often overlooked)

Be ready for:

* Race conditions
* Locks vs optimistic concurrency
* Thread safety
* Async processing (queues, workers)
* Backpressure
* Why something becomes slow under load

Example questions:

* “How would you prevent duplicate requests?”
* “How do you handle millions of concurrent users?”

---

## ✅ 5. Linux, Networking & Infra Basics

You don’t need DevOps-level depth, but:

Must know:

* HTTP lifecycle
* TCP vs UDP
* What happens when you hit an API endpoint
* Basic Linux commands (`top`, `ps`, `netstat`, logs)
* Docker basics (what problem it solves)
* CI/CD at high level

---

## ✅ 6. Resume & Project Deep Dive (This is critical)

ByteDance interviewers **dig deep**.

For each major project, prepare:

* Why was it built?
* Architecture diagram (mentally)
* Biggest bottleneck you faced
* Tradeoffs you made
* What you’d change if rebuilding today
* How it scaled (or why it didn’t)

🚨 If something is on your resume, assume **they will ask about it**.

---

## ✅ 7. Behavioral & Ownership Signals

They value **ownership + execution speed**.

Prepare stories for:

* Handling ambiguity
* Tight deadlines
* Disagreements with teammates
* Production incidents
* Learning something fast

Keep answers **concrete, technical, and impact-focused**.

---

## ✅ 8. Language-Specific Readiness

Depending on your language:

**Java**

* JVM basics
* Garbage Collection
* Concurrent collections

**Go**

* Goroutines & channels
* Race conditions
* Context usage

**Python**

* GIL (at high level)
* Async vs threading
* Performance tradeoffs

---

## ✅ 9. Mock Interview Readiness Check

You’re ready if:

* You can explain while coding
* You don’t panic on medium-hard problems
* You can design systems step-by-step
* You ask clarifying questions naturally
* You recover well if stuck

---

## ⚡ Final Reality Check

If you:

* ❌ Only practiced DSA → not enough
* ❌ Only did system design → not enough
* ✅ Balanced **DSA + backend fundamentals + system design** → strong candidate

---

If you want, tell me:

* **Your experience level** (years)
* **Tech stack**
* **Role** (Backend / Infra / Platform)

I’ll convert this into a **7-day or 14-day ByteDance-specific prep plan** 🎯
