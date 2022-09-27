#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use sys_locale::get_locale;

// const invoke = window.__TAURI__.invoke
// const currentLang = await invoke("lang")
#[tauri::command]
fn lang() -> String {
    // format!("Hello, {}! You've been greeted from Rust!", name)
    let locale = get_locale().unwrap_or_else(|| String::from("en-US"));
    locale.into()
}

// const hi = await invoke("greet", {name: "Mike"})
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, lang])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
