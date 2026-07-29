LIFE & CEO OS — PROJECT DATABASE WORKSPACE UPDATE
==================================================

THIS BUILD STARTS FROM THE LAST VERIFIED WORKING PLANNER.
The broken Project Breakdown build was not used as its foundation.

PROJECTS MAIN PAGE
------------------
- Searchable project database
- Status filtering
- Active, waiting, due-soon and completed totals
- Project, client, owner, dates, progress, task counts and next action
- Open button for each project
- Existing projects remain compatible

CENTRED PROJECT WORKSPACE
-------------------------
Opening a project launches a large centred Project Breakdown window containing:
- Title, client, owner and status
- Start date, due date and completion date
- Objective
- Top priorities
- Time, budget and scope constraints
- Resources required
- Next action
- Project files
- Linked task database
- Task completion controls
- Task editing and deletion
- Project editing

CONNECTED DATABASE
------------------
Tasks created from a project are stored in the same Tasks collection used by the
rest of the planner. Completing a task inside the project updates it everywhere.
Project progress is calculated from linked tasks when tasks exist.

HOME RESTORATION
----------------
Home was tested independently and renders from the last stable source. The
missing startOfWeek function from the broken build is preserved correctly.

GITHUB UPLOAD
-------------
1. Use Backup data in the current planner.
2. Replace the root-level index.html in GitHub with the file in this folder.
3. Commit the replacement.
4. Open the planner and press Command + Shift + R once.
