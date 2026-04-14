#include "GMSteamworks.h"

#include <atomic>
#include <mutex>

static std::mutex g_err_mtx;
static std::string g_last_error;

std::atomic<bool> g_steam_initialized {false};

void steam_set_last_error(std::string_view msg)
{
    std::lock_guard<std::mutex> lock(g_err_mtx);
    g_last_error.assign(msg.data(), msg.size());
}

void steam_clear_last_error()
{
    std::lock_guard<std::mutex> lock(g_err_mtx);
    g_last_error.clear();
}

std::string steam_api_last_error()
{
    std::lock_guard<std::mutex> lock(g_err_mtx);
    return g_last_error;
}

void steam_set_initialized(bool v) { g_steam_initialized.store(v); }
