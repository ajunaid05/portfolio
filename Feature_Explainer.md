# Dynamic Feature Explainer: Direct Gmail Compose Action

**Author:** Ahmad Junaid  
**Role:** Software Engineering Student & Backend / AI Engineer  
**Assignment:** FlyRank Internship — "Make It Do Something"  
**Live URL:** [https://ahmadjunaid.netlify.app](https://ahmadjunaid.netlify.app)  

---

## 1. Feature Overview

For the dynamic portfolio feature, I implemented an **End-to-End Direct Gmail Compose Action**. 

Rather than relying on silent third-party form processors that often fail or drop submissions, this feature provides a direct, zero-friction communication bridge. When a recruiter or visitor clicks **Send Email (via Gmail)** on the live portfolio, it dynamically triggers Google's Gmail web compose interface with my recipient email address (`ahmadjunaid007.07@gmail.com`) prefilled in the `To:` field.

---

## 2. Plain-Words Explanation of Backend & Data Flow

### What a Backend / Dynamic Feature Is:
A static website only displays fixed information (text and images). A dynamic feature connects user actions (like clicking a contact button) to real-world infrastructure (like an email provider or database) so a real action or submission takes place.

### How the Data Flows (Step-by-Step):

```
[ User Clicks "Send Email" ] 
         │
         ▼
[ Encoded URI Generator ] ──> https://mail.google.com/mail/?view=cm&fs=1&to=ahmadjunaid007.07@gmail.com
         │
         ▼
[ Browser / Protocol Handler ]
         │
         ▼
[ Gmail Web / Mobile App Launch ] (Pre-fills Recipient: ahmadjunaid007.07@gmail.com)
         │
         ▼
[ User Types Message & Clicks Send ]
         │
         ▼
[ Real Email Delivered to Inbox ]
```

1. **User Action:** The user clicks the **Send Email (via Gmail)** button in the contact section of `https://ahmadjunaid.netlify.app`.
2. **URL Parameter Encoding:** The React component dynamically generates an explicit Google Mail compose URI:  
   `https://mail.google.com/mail/?view=cm&fs=1&to=ahmadjunaid007.07@gmail.com`
3. **Browser Protocol Handshake:** The browser intercepts the command and launches the user's active Gmail session (or native email app).
4. **Context Injection:** The recipient parameter (`to=ahmadjunaid007.07@gmail.com`) is injected into the composer's "To" field.
5. **Real Delivery:** The user types their message and sends it. A real email is immediately delivered directly to my personal inbox.

---

## 3. Verification & Live Evidence

- **Tested Live:** Yes, tested in private/incognito windows and mobile browsers.
- **Evidence:** Clicking the button successfully launches Gmail with `ahmadjunaid007.07@gmail.com` prefilled, allowing any visitor or recruiter to send a real message that arrives directly in my inbox.
