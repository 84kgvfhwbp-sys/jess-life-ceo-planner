Jess Life & CEO Planner — Version 41 Overlapping Tasks and Agenda Notes

New overlap rules:
- Time-block type Task may overlap any other agenda block.
- Agenda note may overlap any other agenda block.
- Tasks and agenda notes may overlap one another.
- Appointments, meetings, on-site meetings, calls, office/admin, finance,
  personal, travel, breaks and Other remain fixed commitments.
- Two fixed commitments cannot occupy the same time.

Agenda display:
- Simultaneous blocks are assigned side-by-side lanes.
- Every overlapping block remains visible, clickable and editable.
- The primary fixed commitment is placed first when blocks begin together.
- Narrow overlapping blocks use a compact title/time layout.
- Agenda notes remain italic and do not have completion checkboxes.
- Tasks retain completion checkboxes.

Free-time behaviour:
- Tasks and notes no longer mark the underlying time as unavailable.
- The automatic suggested start time looks only at fixed commitments.

Templates:
- Template Tasks and Agenda notes may overlap existing blocks.
- Fixed template blocks are still skipped when they conflict with another
  fixed commitment.

Editor guidance:
- Task and Agenda note previews explain that overlap is allowed.
- Fixed event types explain that another fixed commitment cannot overlap.

Verification completed:
- Full planner JavaScript syntax passed.
- No duplicate static HTML IDs.
- Task and Agenda note overlap rules were tested.
- Fixed meeting versus appointment conflict was tested.
- Side-by-side lane assignment was tested for connected overlapping blocks.

GitHub update:
1. Replace the existing repository index.html with this file.
2. Commit directly to main.
3. Wait approximately one minute.
4. Hard-refresh with Command + Shift + R.
