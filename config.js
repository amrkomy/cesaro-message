// config.js
const SUPABASE_CONFIG = {
    URL: "https://bjviqasptsgoiwyfusqz.supabase.co",
    ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqdmlxYXNwdHNnb2l3eWZ1c3F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4NDQxMzUsImV4cCI6MjA3MDQyMDEzNX0.kY5q8o-36534m7uz4kJ9aQd_DaovlkQxlV-yiWwGOzs"
};

// دالة للحصول على إعدادات Supabase
function getSupabaseConfig() {
    return {
        supabaseUrl: SUPABASE_CONFIG.URL,
        supabaseKey: SUPABASE_CONFIG.ANON_KEY
    };
}
