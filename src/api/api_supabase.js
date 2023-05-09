// Supabase
import { createClient } from "@supabase/supabase-js";

const authenUrl = "https://ptiszthlwjfikzopuykh.supabase.co/rest/v1/";
const authenKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0aXN6dGhsd2pmaWt6b3B1eWtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYzNzM5NTMsImV4cCI6MTk5MTk0OTk1M30.qNnNZautuF3T3kL7mcATCiDQgSKdYvy97In-nmr_-Uc";
const zerothUrl = "http://zeroth.trueddns.com:30264";
const zerothKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICAgInJvbGUiOiAiYW5vbiIsCiAgICAiaXNzIjogInN1cGFiYXNlIiwKICAgICJpYXQiOiAxNjc4MDM1NjAwLAogICAgImV4cCI6IDE4MzU4ODg0MDAKfQ.q2awueyU-6gYo6kMXx0VNXFDf-48uZ95SZ_YyWO_h5c";
  
const supabaseAuthen = createClient(authenUrl, authenKey);
const wsZeroth = createClient(zerothUrl, zerothKey);
const serviceZeroth = createClient(zerothUrl, zerothKey);

export { wsZeroth, serviceZeroth, supabaseAuthen };
