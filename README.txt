Jess Life & CEO Planner — Version 38 Stacked Income and Expense

Cash-Flow Calendar day layout:
- Income and Expense are no longer displayed side by side.
- Income always appears first.
- Expense appears directly underneath.
- Each line places the label on the left and the amount on the right.
- Income has a quiet green accent.
- Expense has a quiet coral accent.
- Full amounts have substantially more horizontal room.

Applies to:
- Monthly view
- Weekly view
- Bi-weekly view

View-specific spacing:
- Monthly remains compact but gains enough height for both stacked lines.
- Weekly uses larger totals because the day columns are wider.
- Bi-weekly uses a slightly tighter stacked layout.
- Mobile uses full-width stacked lines.

Recorded cash flow:
- Recorded and expected transactions remain combined in the visible totals.
- Recorded source names remain visible below the totals.
- Past dates continue to show Recorded net.
- July 1 example tested:
  Income $3,507.50
  Expense $1,667.50
  Recorded net $1,840.00

Verification completed:
- Full planner JavaScript syntax passed.
- No duplicate static HTML IDs.
- Income appears before Expense in production day-cell markup.
- Income, Expense and recorded-net amounts were tested.
- Monthly, Weekly and Bi-weekly CSS layouts were verified.

GitHub update:
1. Upload this index.html to the repository.
2. Replace the existing index.html.
3. Commit directly to main.
4. Wait approximately one minute.
5. Hard-refresh with Command + Shift + R.
