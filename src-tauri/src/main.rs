#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use sys_locale::get_locale;
use tauri::{WindowBuilder, WindowUrl};

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
    .setup(|app| {
            // #[cfg(debug_assertions)]
            // app.get_window("main").unwrap().open_devtools();

            // 只对 for Windows and Mac 有效
            // https://github.com/tauri-apps/tauri/issues/1522
            WindowBuilder::new(app, "second", WindowUrl::App("index.html".into()))
            .on_web_resource_request(|req, resp| {
                if req.uri().starts_with("tauri://") {
                resp.headers_mut().insert(
                    "Cross-Origin-Opener-Policy",
                    "same-origin".try_into().unwrap(),
                );
                resp.headers_mut().insert(
                    "Cross-Origin-Embedder-Policy",
                    "require-corp".try_into().unwrap(),
                );
                println!("headers inserted");
                }
            })
            .build()?;
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![greet, lang])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
