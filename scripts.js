$(function () {
  // init feather icons
  feather.replace();
});

const { createClient } = supabase;
const myDatabase = "https://ogavfhyhpvhbcbeajubi.supabase.co";
const publicKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nYXZmaHlocHZoYmNiZWFqdWJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4NTc0NzIsImV4cCI6MjA2MjQzMzQ3Mn0.prin94eLHTEtwzwmGUvA4jZR2vZ3-My8PZymj5ejGvM";

const _supabase = createClient(myDatabase, publicKey);

const logInteraction = async () => {
  const now = moment().format();

  const { error } = await _supabase.from("interaction").insert({
    created_at: now,
  });
};

logInteraction();
