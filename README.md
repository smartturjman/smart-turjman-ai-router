# 🧭 Smart Turjman AI Router × USDC  
### Trusted Payments for Trusted Partners  

**Built for:** Arc + USDC Hackathon  
**Author:** Jonie Culaste (Turjman Group of Companies)  
**Live Demo:** _coming soon via Vercel_  
**Tagline:** “One Platform. Real Support. Endless Possibilities.”

---

## 🌍 Overview  
**Smart Turjman** is an AI-powered Service Router that connects expats, citizens, and verified partners such as law firms, translators, embassies, and NGOs.  
It ensures that every service request — from legal translation to court representation — is routed securely and transparently.  

By integrating **USDC (USD Coin)** as a payment layer, Smart Turjman enables **on-chain trust**, removing the risk of fraud and fake intermediaries.

---

## 💡 Problem  
Thousands of residents and expats in the UAE face barriers accessing legitimate services.  
Many fall victim to unverified agents or scams while attempting to pay for legal or translation support.  

A real inquiry recently came from a public group asking for the verified contact of  
**Dr. Al Sabhan Legal Group & Associates**, one of our trusted legal partners — showing how urgently people need **verified channels and trusted payments.**

---

## 🔑 Solution  
Smart Turjman AI Router + USDC provides:  
- 🔒 **Transparency:** Each payment recorded on-chain.  
- ⚖️ **Verification:** Only licensed partners receive funds.  
- ⚡ **Speed:** Instant confirmation and routing.  
- 🌐 **Inclusivity:** Users can pay digitally, even without local banking access.

---

## 🧩 Demo Flow  
1. User submits request → e.g., *“Need help with rental dispute.”*  
2. AI Router matches verified partner → *Dr. Al Sabhan Legal Group & Associates*  
3. Smart Invoice generated in **USDC**  
4. Payment confirmed → transaction hash displayed  
5. Partner receives verified notification → service starts  

---

## 🧠 Architecture  

| Layer | Description |
|-------|--------------|
| **Frontend (Vercel + Framer)** | Displays router flow and payment confirmation |
| **Logic (Mock JSON)** | Simulates routing request → partner → USDC payment |
| **Blockchain Layer** | Logs payment hash and verification |
| **AI Router API** | Mock endpoint demonstrating ethical AI decision routing |

---

### Example `router_flow.json`
```json
{
  "request_id": "RDC-2025-001",
  "service_type": "Legal Translation",
  "partner": "Dr. Al Sabhan Legal Group & Associates",
  "status": "Matched",
  "payment": {
    "currency": "USDC",
    "amount": 100,
    "transaction_hash": "0xabc123def456",
    "status": "Confirmed"
  }
}

