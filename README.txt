Jess Life & CEO Planner — Version 36 Recorded Cash Flow Visible

Problem corrected:
- Cash-Flow Calendar day cells previously calculated In and Out using only
  expected/planned transactions.
- Recorded transactions were acknowledged only as a recorded-item count.
- This caused a received payment to appear in the breakdown drawer while the
  monthly calendar still displayed a dash or $0.00.

New daily calculation:
- In = recorded income + expected income scheduled for that date.
- Out = recorded expenses + expected expenses scheduled for that date.
- The daily item preview can show both recorded and expected sources.
- Recorded sources appear slightly stronger than expected sources.
- Expected sources retain a quieter outlined marker.
- Recurring-source indicators continue to work.

Past dates:
- The bottom result now shows Recorded daily net.
- Recorded daily net = recorded income less recorded expenses.
- The planner does not invent a historical bank balance from today's current
  balance.

Today and future dates:
- The bottom result continues to show projected account balance.
- Projected balances remain based on the current bank balance plus outstanding
  expected cash flow.

Views corrected:
- Monthly Cash-Flow Calendar
- Weekly Cash-Flow Calendar
- Bi-weekly Cash-Flow Calendar
- Weekly Planner daily Cash Flow panels

Verification completed:
- Full planner JavaScript syntax passed.
- No duplicate static HTML IDs.
- The exact production functions were tested using a July 1 recorded income
  payment of $3,507.50 and an expected expense of $207.50.
- The test verified that the recorded income amount, source, expected expense,
  recorded-item styling and recorded daily net all appear in the day cell.

GitHub update:
1. Download a planner backup.
2. Upload this index.html to the jess-life-ceo-planner repository.
3. Replace the existing index.html.
4. Commit directly to main.
5. Wait approximately one minute.
6. Refresh with Command + Shift + R on Mac.
