# 🌱 AgriNode AI

### AI-Powered Precision Farming Assistant — "Node by Node"

AgriNode AI is a smart farming assistant designed to help farmers make
data-driven decisions at the **node level of their agricultural land**.

The system combines field sensors, mobile computing, cloud data storage,
and AI/ML analysis to provide localized insights about soil health,
crop suitability, plant diseases, pests, irrigation, and farm conditions.

---

## 🎥 Demo

A complete screen-recorded demonstration of the AgriNode AI mobile
application is available in the `video/` directory.

**Demo Video:**  
[AgriNode AI App Demo](./video/AgriNode-AI-Demo.mp4)

> Screenshots will be added to the `screenshots/` directory as the
> application reaches its final version.

---

## 🎯 Problem Statement

Traditional agricultural decisions are often made using limited
soil samples or field-level averages. This can hide significant
variation within the same field.

Different parts of a farm may have different:

- Soil nutrient levels
- Moisture conditions
- Temperature and humidity
- Crop health
- Pest activity
- Disease occurrence

AgriNode AI addresses this problem by dividing a field into smaller
manageable **nodes** and analyzing agricultural conditions at the
node level.

---

## 💡 Our Solution

AgriNode AI follows a **Node-by-Node Precision Farming** approach.

The farmer first calibrates their land and divides it into multiple
nodes. Sensor and field data can then be collected for individual
nodes and analyzed using AI/ML models.

The application provides:

1. Land calibration
2. Node-based field management
3. Soil and environmental data collection
4. Crop analysis
5. Plant disease detection
6. Pest detection
7. Node-wise analysis
8. Historical land analysis
9. AI-based agricultural recommendations

---

# ✨ Key Features

## 🗺️ Land Calibration

Farmers can create and calibrate their land by:

- Defining the land boundary
- Specifying the land area
- Collecting random calibration samples
- Processing calibration data
- Determining an optimal number of nodes
- Dividing the land into nodes
- Collecting node-level samples

---

## 🌱 My Lands

Farmers can manage multiple agricultural lands and view:

- Land information
- Number of nodes
- Soil health
- Node-level information
- Previous analyses

---

## 🌾 Crop Analysis

The application analyzes a selected crop using land and node-level
agricultural information.

The system can provide:

- Crop suitability/probability
- Fertilizer recommendations
- Node-wise analysis
- Historical crop analysis

---

## 🦠 Plant Disease Detection

The disease detection workflow allows the farmer to:

1. Select a land
2. Select a node
3. Capture multiple views of the crop
4. Process the collected images
5. Analyze the images using ML
6. Generate a disease prediction
7. View node-wise disease results

---

## 🐛 Pest Detection

The pest detection workflow follows a similar node-based approach:

1. Select a land
2. Select a node
3. Capture multiple crop views
4. Process the collected images
5. Perform ML-based analysis
6. Identify potential pests
7. Generate confidence and risk information
8. View node-wise pest analysis

---

## 📊 Land Profile & History

AgriNode AI maintains historical analysis information for individual
lands, allowing previous crop analyses and results to be reviewed.

---

# 🏗️ System Architecture

```text
                 🌱 AGRICULTURAL FIELD
                         │
                         ▼
              ┌─────────────────────┐
              │      ESP32-S3       │
              │  Sensors / Devices  │
              └──────────┬──────────┘
                         │
                  Wi-Fi + HTTP
                         │
                         ▼
              ┌─────────────────────┐
              │   React Native App  │
              │   + TypeScript      │
              └──────────┬──────────┘
                         │
                     REST API
                         │
                         ▼
              ┌─────────────────────┐
              │      Supabase       │
              │     Data API        │
              └──────────┬──────────┘
                         │
                         ▼
              ┌─────────────────────┐
              │     PostgreSQL      │
              │      Database       │
              └──────────┬──────────┘
                         │
                         ▼
              ┌─────────────────────┐
              │     AI / ML Layer   │
              │ Crop / Disease /    │
              │ Pest / Irrigation   │
              └─────────────────────┘

---
🔌 Hardware-to-Mobile Communication

The field device uses an ESP32-S3 to collect sensor data.

The ESP32 communicates directly with the farmer's mobile device over
a local Wi-Fi connection using the HTTP protocol.

The ESP32 exposes sensor information through HTTP endpoints, and the
React Native application retrieves the data using HTTP requests.

Sensor data can be transferred in JSON format.

Example:

{
  "nodeId": "N5",
  "nitrogen": 42,
  "phosphorus": 28,
  "potassium": 55,
  "ph": 6.4,
  "ec": 1.2,
  "moisture": 42,
  "temperature": 28.5,
  "humidity": 71
}

This local hardware-to-mobile communication does not require an
internet connection.
---

---
🗄️ Backend & Database

AgriNode AI uses Supabase as the backend platform with
PostgreSQL as the underlying relational database.

Supabase's Data API provides RESTful access to the database.

The backend is intended to store information such as:

Users
Lands
Nodes
Sensor readings
Crop analyses
Disease results
Pest results
Historical analysis

Images can also be stored and associated with the corresponding
node-level analysis.
---

---
🧠 AI / ML

The project uses AI/ML for agricultural analysis, including:

Crop analysis
Plant disease detection
Pest detection
Irrigation recommendations
Node-level agricultural insights

The planned AI/ML stack includes:

Python
NumPy
Pandas
Scikit-learn
TensorFlow
Keras
TensorFlow Lite
TensorFlow Lite Micro

Model optimization techniques such as quantization can be used
for edge/on-device inference.
---

---
💻 Technology Stack

| Category                | Technology                      |
| ----------------------- | ------------------------------- |
| Mobile Application      | React Native                    |
| Language                | TypeScript                      |
| Development Framework   | Expo                            |
| Navigation              | Expo Router                     |
| UI Icons                | Ionicons                        |
| Hardware                | ESP32-S3                        |
| Communication           | Wi-Fi + HTTP                    |
| Data Format             | JSON                            |
| Backend                 | Supabase                        |
| Database                | PostgreSQL                      |
| Database API            | Supabase Data API / REST        |
| Machine Learning        | Python                          |
| ML Libraries            | Scikit-learn, TensorFlow, Keras |
| Edge AI                 | TensorFlow Lite / TFLite Micro  |
| Version Control         | Git + GitHub                    |
| Development Environment | VS Code                         |
---

---
📱 Application Structure

The application is organized around four main sections:

Home

Provides access to the major farming features.

My Lands

Manages calibrated agricultural lands and their nodes.

Analyze

Provides agricultural analysis workflows.

Profile

Contains farmer information, farm overview, connected system
information, and application support options.
---

---
🔄 Core Workflow

Create Land
     ↓
Define Land Boundary
     ↓
Calibration
     ↓
Collect Random Samples
     ↓
Process Calibration Data
     ↓
Determine Node Count
     ↓
Divide Land into Nodes
     ↓
Collect Node-Level Data
     ↓
AI / ML Analysis
     ↓
Agricultural Recommendations
---

