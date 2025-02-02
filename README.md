# 📌 FAQ Backend with Translation & Redis Caching

A **RESTful API** built using **Node.js, Express.js, MongoDB, and Redis** that allows users to manage **FAQs** with automatic **language translation** using **MyMemory API**.  

### 🚀 Features  --------------------------------------
✅ **CRUD Operations**: Add, Update, Delete FAQs  
✅ **Multi-Language Support**: Translates questions into Hindi & Bengali  
✅ **Redis Caching**: Improves performance by caching translated FAQs  
✅ **RESTful API**: Supports query-based language selection  

---

### 📦 Installation  ---------------------------------

## Clone the Repository ##  
```bash
git clone https://github.com/your-username/faq-backend.git
cd faq-backend

# (2) Install Dependencies **
npm install

# (3) Start MongoDB & Redis **
mongod --dbpath /data/db
redis-server

# (4) Create a .env File **
PORT=8000
MONGO_URI=mongodb://127.0.0.1:27017/faq-backend

# (5) Start the Server **
node server.js

## 📌 API Endpoints ## ----------------------------------

 # (1) Get All FAQs (With Language Support)
       GET /api/faqs?lang=hi

 ** Response (Hindi Translation):
  [
  {
    "_id": "679e28bdfa026f63227471cf",
    "question": "गूगल क्या है?",
    "answer": "Google is an MNC Company."
  }
]

# (2) Add a New FAQ
      POST /api/faqs

** Response :
{
  "question": "What is Express.js?",
  "answer": "Express.js is a web framework for Node.js."
}

# (3) DELETE /api/faqs/:id
      Delete Specific FAQs with the clickable Button which available on UI.

# (4) PUT /api/faqs/:id
      Update Specific FAQs with the Edit Button on UI.
   

🛠 ### Technologies Used  -----------------------

**Node.js & Express.js - Backend framework
**MongoDB & Mongoose - Database
**Redis - Caching layer
**MyMemory API - Free translation API
**EJS - View templating
**Method-Override - To enable PUT & DELETE in forms


