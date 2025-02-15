# SPEC-001: Performance Graphs Visualization App

## Background

Analyzing execution time performance across different scenarios is crucial for optimization. This application allows users to upload analyses consisting of multiple log files, extract performance metrics using custom parsing rules, and visualize results in configurable graphs. By supporting authentication via Firebase and storing user preferences, the app ensures a personalized and reusable experience.

## Requirements

The application must provide the following features:

### Must Have (M)

- User authentication via Firebase UI (Google & Email/Password login)
- File uploads via drag & drop and file picker
- Client-side parsing of log and JSON files
- Support for predefined log parsing format
- Custom regex-based parsing rule definition
- Users can create and manage multiple sets of regex rules
- Ability to copy and extend an existing regex set
- Graph customization (axes, colors, scales, baselines)
- Persist user settings and parsing rules in Firebase Firestore
- Save and load graph configurations per user
- Apply saved graph settings when opening the app
- Display execution time speedup comparisons

### Should Have (S)

- Real-time graph configuration preview
- Allow users to manage multiple parsing rules
- Interactive tooltips and legends in graphs

### Could Have (C)

- Support for additional authentication providers (GitHub, Facebook)
- Allow exporting graph data as CSV/JSON
- Dark mode support

### Won't Have (W)

- Server-side log parsing (Cloud Functions) in MVP
- Large-scale data handling for big logs (handled in future updates)

## Method

### System Architecture

The application will follow a **React + Firebase** architecture with client-side parsing. The main components include:

- **React Frontend**: Handles file uploads, authentication, graph rendering, and configuration UI.
- **Firebase Authentication**: Manages user login via Firebase UI.
- **Firebase Firestore**: Stores user-specific parsing rules and graph configurations.
- **Client-Side Log Parsing**: Uses regex to extract execution times from logs.
- **Recharts Library**: Generates performance graphs based on extracted data.

### Data Flow

1. User logs in via Firebase Authentication.
2. User uploads an analysis consisting of multiple log files (drag & drop or file picker).
3. The app applies a predefined or custom regex pattern set to extract execution times.
4. Users can create multiple regex sets, copy existing ones, and modify them.
5. Processed data is stored in memory and optionally saved to Firestore.
6. User customizes the graph (axes, colors, baselines) and saves the configuration.
7. The configured graph is displayed using Recharts.
8. Upon returning, saved configurations are loaded from Firestore.

### Firestore Data Structure

```json
{
  "users": {
    "userId123": {
      "parsingRules": {
        "set1": {
          "name": "Default Log Parser",
          "patterns": [
            { "pattern": "\\[.*\\] Execution time: (\\d+)ms", "fields": ["executionTime"] }
          ]
        },
        "set2": {
          "name": "Custom Analysis",
          "patterns": [
            { "pattern": "Time taken: (\\d+)ms", "fields": ["executionTime"] }
          ]
        }
      },
      "graphConfigs": {
        "graph1": {
          "title": "Execution Time Speedup",
          "xAxis": "Number of Threads",
          "yAxis": "Speedup",
          "color": "#ff0000",
          "baseline": "Optimal Speedup"
        }
      }
    }
  }
}
```

## Implementation

1. **Setup Firebase**

   - Create a Firebase project.
   - Enable Firestore and Authentication.
   - Configure Firebase UI for authentication.

2. **Build React Frontend**

   - Set up React project with Firebase SDK.
   - Implement authentication and session management.
   - Develop file upload and parsing components.

3. **Implement Parsing Logic**

   - Use regex to extract execution times.
   - Provide UI for defining and managing regex sets.
   - Store parsing rules in Firestore.

4. **Graph Rendering**

   - Integrate Recharts for visualization.
   - Implement configurable graph settings.
   - Enable users to save and apply configurations.

5. **Firestore Integration**

   - Save and retrieve user settings.
   - Sync parsing rules and graph configurations.

6. **Testing & Deployment**

   - Test regex parsing accuracy.
   - Ensure UI/UX consistency.
   - Deploy on Firebase Hosting.

## Milestones

The project should be completed within **36 hours** by a team of **4 engineers**. The milestones are:

1. **Hour 1-6**: Setup Firebase project, enable Firestore & Authentication, and configure Firebase UI.
2. **Hour 7-12**: Develop the React frontend, including authentication and session management.
3. **Hour 13-18**: Implement file upload (drag & drop + file picker) and client-side parsing logic.
4. **Hour 19-24**: Integrate Recharts and implement graph customization features.
5. **Hour 25-30**: Connect Firestore for storing user parsing rules and graph configurations.
6. **Hour 31-34**: Conduct testing (regex parsing, UI validation, Firestore sync).
7. **Hour 35-36**: Final deployment on Firebase Hosting and documentation.

## Gathering Results

To evaluate the success of the project, the following criteria will be used:

1. **Functionality Validation**

   - Ensure users can upload analyses with multiple log files.
   - Verify regex-based parsing rules work correctly.
   - Confirm users can customize and save graph configurations.

2. **Performance Testing**

   - Measure log parsing speed on typical datasets.
   - Ensure real-time responsiveness of graph updates.
   - Check Firestore read/write performance for user settings.

3. **User Experience Assessment**

   - Gather feedback from test users on UI usability.
   - Ensure seamless authentication and session persistence.
   - Validate ease of defining and managing regex rules.

4. **Stability & Reliability**

   - Test app behavior with different log file sizes.
   - Ensure Firebase authentication and Firestore sync are reliable.
   - Verify proper error handling for invalid regex patterns or corrupted logs.

