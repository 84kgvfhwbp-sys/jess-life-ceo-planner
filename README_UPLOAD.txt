LIFE & CEO OS — WEATHER RESTORED UPDATE
===========================================

HOME
- Live current temperature and condition
- Feels-like temperature, high, low, precipitation chance and wind
- Five-day forecast
- Refresh and Change Location controls

PLAN
- Weather directly above Day / Week / Month / Routines
- Uses the selected planning date
- Shows condition, high, low and precipitation chance
- Today also shows live temperature, feels-like temperature and wind

LOCATION
- Defaults to Greater Moncton, New Brunswick
- Search Canadian cities or postal codes
- Optional Use My Current Location
- Saved location remains in planner settings

STORAGE
Forecast responses are cached in sessionStorage, not in the main planner record,
so weather does not add meaningful pressure to localStorage.

SOURCE
Forecast and location data are supplied by Open-Meteo. No API key is required.

GITHUB UPLOAD
1. Use Backup data in the current planner.
2. Replace the root-level index.html in the GitHub repository.
3. Commit the replacement.
4. Open GitHub Pages and press Command + Shift + R once.

Existing records continue using life-ceo-os-stable-v1.
