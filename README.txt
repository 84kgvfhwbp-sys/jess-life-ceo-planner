Jess Life & CEO Planner — Version 39 Fixed Today Task Layout

Problem corrected:
- The Today task row used three grid columns:
  checkbox, task information and all move/edit/delete controls.
- Inside the narrow Today card, the controls consumed nearly all available
  width and forced the task title to break one word per line.

New task layout:
- Row 1: checkbox, task title, badges, notes and date information.
- Row 2: Tomorrow, date selector, Move, Edit and delete controls.
- The controls can wrap without reducing the task-title column.
- Date selectors expand or contract within the available card width.
- Task text uses normal word wrapping and will no longer stack vertically.

Responsive behaviour:
- The Today task card uses its own container width rather than the overall
  browser width.
- Narrow card: the Move unfinished button moves below the heading.
- Narrow task row: Tomorrow appears first, with date and Move below it.
- Very narrow task row: each move control becomes full width.
- Edit and delete remain grouped neatly at the end.

Preserved functionality:
- Complete and reopen tasks.
- Move directly to tomorrow.
- Move to a selected date.
- Edit Task Inbox tasks.
- Remove or delete tasks.
- Progress percentage and carryover review.
- Cash-Flow Calendar Version 38 stacked Income and Expense layout.

Verification completed:
- Full JavaScript syntax passed.
- No duplicate static HTML IDs.
- Today task controls render in separate wrappers below the task content.
- Responsive container rules were verified.

GitHub update:
1. Upload this index.html to the repository.
2. Replace the existing index.html.
3. Commit directly to main.
4. Wait approximately one minute.
5. Hard-refresh using Command + Shift + R.
