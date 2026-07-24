Jess Life & CEO Planner — Version 48 Corrected Historical Payment Months

The discrepancy:
- The visible row date was the recurring due/scheduled date.
- The hidden received date had been automatically set to the day the Record
  button was clicked.
- May and June backfills were therefore counted as July income.

One-time correction:
- Actual entries created from "Recorded from recurring cash flow" are reviewed.
- If their due date is in an earlier month than the auto-assigned actual date,
  the actual date returns to the due month.
- Same-month entries are not changed.
- Manual late payments are not changed.
- The previous date is retained internally as previousActualDate.

Examples:
- Due May 1 / auto-recorded July 23 -> counted in May.
- Due June 1 / auto-recorded July 23 -> counted in June.
- Due July 1 / received July 23 -> remains counted in July.

Future recurring records:
- Record received / Record paid opens the regular transaction form.
- The received/paid date is visible before saving.
- Historical recurring entries default to the scheduled date.
- Current-month entries default to today.
- You can change the date before saving.
- The recurring schedule advances only after saving.

Finance breakdowns:
- Rows now display both Due and Received/Paid dates.
- Marking an expected transaction received also opens the form so the date can
  be confirmed rather than silently using today.

Verification:
- JavaScript syntax passed.
- No duplicate static HTML IDs.
- May and June backfills moved out of July in testing.
- Same-month July entries remained in July.
- Manual late payments remained unchanged.

GitHub update:
1. Replace the repository index.html with this file.
2. Commit to main.
3. Wait approximately one minute.
4. Hard-refresh with Command + Shift + R.
5. The first load will report how many historical dates were corrected.
