#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use sys_locale::get_locale;
use tauri::{WindowUrl, utils::config::AppUrl};
// use tauri::{WindowBuilder};

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

/*
#[tauri::command]
async fn create_window(app: tauri::AppHandle, url: &str) {
  let _window = tauri::WindowBuilder::new(&app, "label", tauri::WindowUrl::External(url.parse().unwrap()))
    .build()
    .unwrap();
}
 */

// https://github.com/tauri-apps/tauri/issues/1522 SharedArrayBuffer Issue

#[cfg(not(any(target_os = "windows", target_os = "macos")))]
fn main() {
    let port = portpicker::pick_unused_port().expect("failed to find unused port");

    let mut context = tauri::generate_context!();
    let url = format!("http://localhost:{}", port).parse().unwrap();
    let window_url = WindowUrl::External(url);
    // rewrite the config so the IPC is enabled on this URL
    context.config_mut().build.dist_dir = AppUrl::Url(window_url.clone());
    context.config_mut().build.dev_path = AppUrl::Url(window_url.clone());

    tauri::Builder::default()
        .plugin(tauri_plugin_localhost::Builder::new(port).build())
        .invoke_handler(tauri::generate_handler![greet, lang])
        .run(context)
        .expect("error while running tauri application");
}

#[cfg(any(target_os = "windows", target_os = "macos"))]
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, lang])
        /*
        .setup(move |app| {
            // #[cfg(debug_assertions)]
            // app.get_window("main").unwrap().open_devtools();

            // 只对 for Windows and Mac 有效
            // https://github.com/tauri-apps/tauri/issues/1522

            WindowBuilder::new(app, "online", WindowUrl::App("/online/index.htm".into()))
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
                    // println!("headers inserted");
                    }
                })

                .title("Minetest Education Try")
                .inner_size(1024., 768.)
                .build()?;
            Ok(())
        })
         */
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
