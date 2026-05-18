# ClearPack — PackIQ Copilot (Backend)

AI-powered RAG backend for ClearPack packaging-line technicians. PackIQ Copilot answers troubleshooting, maintenance, changeover, operations, and production analytics questions using retrieval-augmented generation, vector search, and LLM-orchestrated flows.

## Highlights

- **RAG V3 pipeline** with LangChain + LangGraph-style routing and streaming SSE responses
- **Combined intent router** — classifies queries into troubleshooting, maintenance, changeover, features, enquiry, operations, spare parts, casual chat, and **analytics**
- **Production trend analytics** — hourly productivity from EdgeCloud trend/history API; best/worst hour, idle periods, fault-heavy hours, time-series visuals
- **Alert analytics** — open faults, KB coverage, alert summaries and charts
- **State ranking analytics** — top/bottom faults, downtime, and state duration rankings
- **Knowledge base ingestion** — PDF/manual chunking, hybrid dense + sparse embeddings, Qdrant vector store
- **Operational & troubleshoot retrieval** — semantic search over ingested manuals and tribal knowledge
- **Voice pipeline** — Deepgram transcription and TTS integration
- **Multi-language replies** — Hinglish and forced reply-language support

## Tech Stack

- TypeScript, Express
- LangChain, LangGraph
- OpenAI, Anthropic Claude
- Qdrant, MongoDB, Redis, MinIO
- Zod validation, SSE streaming

## API Surface (examples)

- `POST /api/copilot/v3/chat` — main copilot with analytics and RAG flows
- `GET /api/edgecloud/oee` — EdgeCloud OEE proxy
- `GET /api/edgecloud/shift-history` — shift/fault history proxy
- `POST /api/kb/*` — knowledge base upload and search
- `GET /health` — health check

## Getting Started

```bash
cd clearpack-backend
npm install
npm run init:all   # Mongo + Qdrant setup
npm run dev
```

Requires environment variables for LLM keys, Qdrant, MongoDB, and optional Redis/MinIO.
