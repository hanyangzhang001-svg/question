// Copy this file to config.js (git-ignored) and fill in your secrets.
window.__SURVEY_CONFIG__ = {
  supabaseUrl: "https://your-project.supabase.co",
  // Use a server-only proxy where possible. If you must put a key in the browser, only use the anon key with strict RLS.
  supabaseKey: "YOUR_SUPABASE_ANON_KEY_WITH_RLS",
  adminPassword: "change-this-admin-password",
  defaultQrUrl: "https://example.com/survey"
};
