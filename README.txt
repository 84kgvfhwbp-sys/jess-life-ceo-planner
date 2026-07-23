Jess Life & CEO Planner — Version 44 Fixed Custom Agenda Times

Exact problem corrected:
- Version 43's timeInputValue helper expected text such as 10:30.
- The time change handlers and quick-duration buttons passed minute totals
  such as 630.
- The helper interpreted 630 as 630 hours and attempted to place 630:00 in an
  HTML time input.
- Chrome rejected that invalid value and cleared the time field.

What now works:
- Manually entered Start and End times remain in the fields.
- 10-minute duration button.
- 15-minute duration button.
- 30-minute duration button.
- 45-minute duration button.
- 1-hour duration button.
- The selected duration button highlights correctly.
- Duration preview updates while the time is being selected.
- Blank time fields use the first available agenda time instead of failing.
- Exact minute values such as 10:32, 10:42 and 11:17 remain valid.

Regression tests completed:
- Numeric minute totals correctly convert to HTML time values.
- Text time values correctly normalize to HH:MM.
- 10-, 15-, 30-, 45- and 60-minute presets were tested from a 10:32 AM start.
- Full planner JavaScript syntax passed.
- No duplicate static HTML IDs.

GitHub update:
1. Replace the repository index.html with this Version 44 file.
2. Commit directly to main.
3. Wait approximately one minute.
4. Hard-refresh using Command + Shift + R.
